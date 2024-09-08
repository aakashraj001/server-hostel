import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { IRoom } from 'app/entities/hostelMgmt/room/room.model';
import { RoomService } from 'app/entities/hostelMgmt/room/service/room.service';
import { UserType } from 'app/entities/enumerations/user-type.model';
import { Status } from 'app/entities/enumerations/status.model';
import { ChampService } from '../service/champ.service';
import { IChamp } from '../champ.model';
import { ChampFormService, ChampFormGroup } from './champ-form.service';

@Component({
  standalone: true,
  selector: 'jhi-champ-update',
  templateUrl: './champ-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class ChampUpdateComponent implements OnInit {
  isSaving = false;
  champ: IChamp | null = null;
  userTypeValues = Object.keys(UserType);
  statusValues = Object.keys(Status);

  roomsCollection: IRoom[] = [];
  champsSharedCollection: IChamp[] = [];

  protected dataUtils = inject(DataUtils);
  protected eventManager = inject(EventManager);
  protected champService = inject(ChampService);
  protected champFormService = inject(ChampFormService);
  protected roomService = inject(RoomService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: ChampFormGroup = this.champFormService.createChampFormGroup();

  compareRoom = (o1: IRoom | null, o2: IRoom | null): boolean => this.roomService.compareRoom(o1, o2);

  compareChamp = (o1: IChamp | null, o2: IChamp | null): boolean => this.champService.compareChamp(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ champ }) => {
      this.champ = champ;
      if (champ) {
        this.updateForm(champ);
      }

      this.loadRelationshipsOptions();
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
    const champ = this.champFormService.getChamp(this.editForm);
    if (champ.id !== null) {
      this.subscribeToSaveResponse(this.champService.update(champ));
    } else {
      this.subscribeToSaveResponse(this.champService.create(champ));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IChamp>>): void {
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

  protected updateForm(champ: IChamp): void {
    this.champ = champ;
    this.champFormService.resetForm(this.editForm, champ);

    this.roomsCollection = this.roomService.addRoomToCollectionIfMissing<IRoom>(this.roomsCollection, champ.room);
    this.champsSharedCollection = this.champService.addChampToCollectionIfMissing<IChamp>(this.champsSharedCollection, champ.parent);
  }

  protected loadRelationshipsOptions(): void {
    this.roomService
      .query({ filter: 'champ-is-null' })
      .pipe(map((res: HttpResponse<IRoom[]>) => res.body ?? []))
      .pipe(map((rooms: IRoom[]) => this.roomService.addRoomToCollectionIfMissing<IRoom>(rooms, this.champ?.room)))
      .subscribe((rooms: IRoom[]) => (this.roomsCollection = rooms));

    this.champService
      .query()
      .pipe(map((res: HttpResponse<IChamp[]>) => res.body ?? []))
      .pipe(map((champs: IChamp[]) => this.champService.addChampToCollectionIfMissing<IChamp>(champs, this.champ?.parent)))
      .subscribe((champs: IChamp[]) => (this.champsSharedCollection = champs));
  }
}
