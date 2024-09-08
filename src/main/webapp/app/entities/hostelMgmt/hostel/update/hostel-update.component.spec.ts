import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { HostelService } from '../service/hostel.service';
import { IHostel } from '../hostel.model';
import { HostelFormService } from './hostel-form.service';

import { HostelUpdateComponent } from './hostel-update.component';

describe('Hostel Management Update Component', () => {
  let comp: HostelUpdateComponent;
  let fixture: ComponentFixture<HostelUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let hostelFormService: HostelFormService;
  let hostelService: HostelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HostelUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(HostelUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(HostelUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    hostelFormService = TestBed.inject(HostelFormService);
    hostelService = TestBed.inject(HostelService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const hostel: IHostel = { id: 456 };

      activatedRoute.data = of({ hostel });
      comp.ngOnInit();

      expect(comp.hostel).toEqual(hostel);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IHostel>>();
      const hostel = { id: 123 };
      jest.spyOn(hostelFormService, 'getHostel').mockReturnValue(hostel);
      jest.spyOn(hostelService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ hostel });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: hostel }));
      saveSubject.complete();

      // THEN
      expect(hostelFormService.getHostel).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(hostelService.update).toHaveBeenCalledWith(expect.objectContaining(hostel));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IHostel>>();
      const hostel = { id: 123 };
      jest.spyOn(hostelFormService, 'getHostel').mockReturnValue({ id: null });
      jest.spyOn(hostelService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ hostel: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: hostel }));
      saveSubject.complete();

      // THEN
      expect(hostelFormService.getHostel).toHaveBeenCalled();
      expect(hostelService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IHostel>>();
      const hostel = { id: 123 };
      jest.spyOn(hostelService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ hostel });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(hostelService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
