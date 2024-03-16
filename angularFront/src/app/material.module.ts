import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatChipsModule,
    MatStepperModule,
    MatSnackBarModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatGridListModule,
    ClipboardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
    
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
