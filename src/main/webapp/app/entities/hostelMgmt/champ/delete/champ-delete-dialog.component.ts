import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IChamp } from '../champ.model';
import { ChampService } from '../service/champ.service';

@Component({
  standalone: true,
  templateUrl: './champ-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class ChampDeleteDialogComponent {
  champ?: IChamp;

  protected champService = inject(ChampService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.champService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
