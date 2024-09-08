import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IHostel } from '../hostel.model';
import { HostelService } from '../service/hostel.service';

@Component({
  standalone: true,
  templateUrl: './hostel-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class HostelDeleteDialogComponent {
  hostel?: IHostel;

  protected hostelService = inject(HostelService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.hostelService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
