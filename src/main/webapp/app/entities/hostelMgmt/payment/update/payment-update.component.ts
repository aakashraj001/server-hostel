import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IChamp } from 'app/entities/hostelMgmt/champ/champ.model';
import { ChampService } from 'app/entities/hostelMgmt/champ/service/champ.service';
import { PaymentMode } from 'app/entities/enumerations/payment-mode.model';
import { Status } from 'app/entities/enumerations/status.model';
import { PaymentService } from '../service/payment.service';
import { IPayment } from '../payment.model';
import { PaymentFormService, PaymentFormGroup } from './payment-form.service';

@Component({
  standalone: true,
  selector: 'jhi-payment-update',
  templateUrl: './payment-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class PaymentUpdateComponent implements OnInit {
  isSaving = false;
  payment: IPayment | null = null;
  paymentModeValues = Object.keys(PaymentMode);
  statusValues = Object.keys(Status);

  champsSharedCollection: IChamp[] = [];

  protected paymentService = inject(PaymentService);
  protected paymentFormService = inject(PaymentFormService);
  protected champService = inject(ChampService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: PaymentFormGroup = this.paymentFormService.createPaymentFormGroup();

  compareChamp = (o1: IChamp | null, o2: IChamp | null): boolean => this.champService.compareChamp(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ payment }) => {
      this.payment = payment;
      if (payment) {
        this.updateForm(payment);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const payment = this.paymentFormService.getPayment(this.editForm);
    if (payment.id !== null) {
      this.subscribeToSaveResponse(this.paymentService.update(payment));
    } else {
      this.subscribeToSaveResponse(this.paymentService.create(payment));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPayment>>): void {
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

  protected updateForm(payment: IPayment): void {
    this.payment = payment;
    this.paymentFormService.resetForm(this.editForm, payment);

    this.champsSharedCollection = this.champService.addChampToCollectionIfMissing<IChamp>(this.champsSharedCollection, payment.champ);
  }

  protected loadRelationshipsOptions(): void {
    this.champService
      .query()
      .pipe(map((res: HttpResponse<IChamp[]>) => res.body ?? []))
      .pipe(map((champs: IChamp[]) => this.champService.addChampToCollectionIfMissing<IChamp>(champs, this.payment?.champ)))
      .subscribe((champs: IChamp[]) => (this.champsSharedCollection = champs));
  }
}
