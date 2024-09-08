import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { HostelService } from '../service/hostel.service';
import { IHostel } from '../hostel.model';
import { HostelFormService, HostelFormGroup } from './hostel-form.service';

@Component({
  standalone: true,
  selector: 'jhi-hostel-update',
  templateUrl: './hostel-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class HostelUpdateComponent implements OnInit {
  isSaving = false;
  hostel: IHostel | null = null;

  protected dataUtils = inject(DataUtils);
  protected eventManager = inject(EventManager);
  protected hostelService = inject(HostelService);
  protected hostelFormService = inject(HostelFormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: HostelFormGroup = this.hostelFormService.createHostelFormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ hostel }) => {
      this.hostel = hostel;
      if (hostel) {
        this.updateForm(hostel);
      }
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast(new EventWithContent<AlertError>('hostelMgmtApp.error', { ...err, key: 'error.file.' + err.key })),
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const hostel = this.hostelFormService.getHostel(this.editForm);
    if (hostel.id !== null) {
      this.subscribeToSaveResponse(this.hostelService.update(hostel));
    } else {
      this.subscribeToSaveResponse(this.hostelService.create(hostel));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IHostel>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(hostel: IHostel): void {
    this.hostel = hostel;
    this.hostelFormService.resetForm(this.editForm, hostel);
  }
}
