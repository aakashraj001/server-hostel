import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { IRoom } from 'app/entities/hostelMgmt/room/room.model';
import { RoomService } from 'app/entities/hostelMgmt/room/service/room.service';
import { ChampService } from '../service/champ.service';
import { IChamp } from '../champ.model';
import { ChampFormService } from './champ-form.service';

import { ChampUpdateComponent } from './champ-update.component';

describe('Champ Management Update Component', () => {
  let comp: ChampUpdateComponent;
  let fixture: ComponentFixture<ChampUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let champFormService: ChampFormService;
  let champService: ChampService;
  let roomService: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ChampUpdateComponent],
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
      .overrideTemplate(ChampUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(ChampUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    champFormService = TestBed.inject(ChampFormService);
    champService = TestBed.inject(ChampService);
    roomService = TestBed.inject(RoomService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call room query and add missing value', () => {
      const champ: IChamp = { id: 456 };
      const room: IRoom = { id: 16210 };
      champ.room = room;

      const roomCollection: IRoom[] = [{ id: 29228 }];
      jest.spyOn(roomService, 'query').mockReturnValue(of(new HttpResponse({ body: roomCollection })));
      const expectedCollection: IRoom[] = [room, ...roomCollection];
      jest.spyOn(roomService, 'addRoomToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ champ });
      comp.ngOnInit();

      expect(roomService.query).toHaveBeenCalled();
      expect(roomService.addRoomToCollectionIfMissing).toHaveBeenCalledWith(roomCollection, room);
      expect(comp.roomsCollection).toEqual(expectedCollection);
    });

    it('Should call Champ query and add missing value', () => {
      const champ: IChamp = { id: 456 };
      const parent: IChamp = { id: 12463 };
      champ.parent = parent;

      const champCollection: IChamp[] = [{ id: 5957 }];
      jest.spyOn(champService, 'query').mockReturnValue(of(new HttpResponse({ body: champCollection })));
      const additionalChamps = [parent];
      const expectedCollection: IChamp[] = [...additionalChamps, ...champCollection];
      jest.spyOn(champService, 'addChampToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ champ });
      comp.ngOnInit();

      expect(champService.query).toHaveBeenCalled();
      expect(champService.addChampToCollectionIfMissing).toHaveBeenCalledWith(
        champCollection,
        ...additionalChamps.map(expect.objectContaining),
      );
      expect(comp.champsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const champ: IChamp = { id: 456 };
      const room: IRoom = { id: 7057 };
      champ.room = room;
      const parent: IChamp = { id: 12275 };
      champ.parent = parent;

      activatedRoute.data = of({ champ });
      comp.ngOnInit();

      expect(comp.roomsCollection).toContain(room);
      expect(comp.champsSharedCollection).toContain(parent);
      expect(comp.champ).toEqual(champ);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IChamp>>();
      const champ = { id: 123 };
      jest.spyOn(champFormService, 'getChamp').mockReturnValue(champ);
      jest.spyOn(champService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ champ });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: champ }));
      saveSubject.complete();

      // THEN
      expect(champFormService.getChamp).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(champService.update).toHaveBeenCalledWith(expect.objectContaining(champ));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IChamp>>();
      const champ = { id: 123 };
      jest.spyOn(champFormService, 'getChamp').mockReturnValue({ id: null });
      jest.spyOn(champService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ champ: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: champ }));
      saveSubject.complete();

      // THEN
      expect(champFormService.getChamp).toHaveBeenCalled();
      expect(champService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IChamp>>();
      const champ = { id: 123 };
      jest.spyOn(champService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ champ });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(champService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareRoom', () => {
      it('Should forward to roomService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(roomService, 'compareRoom');
        comp.compareRoom(entity, entity2);
        expect(roomService.compareRoom).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareChamp', () => {
      it('Should forward to champService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(champService, 'compareChamp');
        comp.compareChamp(entity, entity2);
        expect(champService.compareChamp).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
