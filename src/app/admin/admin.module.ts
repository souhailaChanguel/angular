import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { FakeSessionItemService } from './fake-sessionitem.service';
import {CommonModule  } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminComponent, SessionItemComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent],
  providers: [FakeSessionItemService],
  imports: [ 
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
