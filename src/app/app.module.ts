import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { EntitiesComponent } from './entities/entities.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityMessagesComponent } from './entity-messages/entity-messages.component';
import { EntityMessageComponent } from './entity-message/entity-message.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskHeadingComponent } from './task-heading/task-heading.component';
import { StepComponent } from './step/step.component';
import { RecordsComponent } from './records/records.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputDateDuoComponent } from './input-date-duo/input-date-duo.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextDuoComponent } from './input-text-duo/input-text-duo.component';
import { InputSelectDuoComponent } from './input-select-duo/input-select-duo.component';
import { EntitiesContainerComponent } from './entities-container/entities-container.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component'

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    EntityDetailsComponent,
    EntityMessagesComponent,
    EntityMessageComponent,
    TasksComponent,
    TaskDetailsComponent,
    TaskHeadingComponent,
    StepComponent,
    RecordsComponent,
    RecordDetailsComponent,
    InputSelectComponent,
    InputDateComponent,
    InputDateDuoComponent,
    InputTextComponent,
    InputTextDuoComponent,
    InputSelectDuoComponent,
    EntitiesContainerComponent,
    InputTextareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
