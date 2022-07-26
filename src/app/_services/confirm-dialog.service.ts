import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ConfirmDialogComponent } from '../modules/client/component/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string) {
    return this.dialog.open(ConfirmDialogComponent,{
       width: '390px',
       disableClose: true,
       data: {
         message: msg
       }
     })
   }
}
