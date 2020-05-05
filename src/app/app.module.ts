import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { EntitiesComponent } from './panels/entities/entities.component';
import { EntityDetailsComponent } from './panels/entity-details/entity-details.component';
import { EntityMessagesComponent } from './panels/entity-messages/entity-messages.component';
import { EntityMessageComponent } from './panels/entity-message/entity-message.component';
import { TasksComponent } from './panels/tasks/tasks.component';
import { TaskDetailsComponent } from './panels/task-details/task-details.component';
import { TaskHeadingComponent } from './panels/task-heading/task-heading.component';
import { StepComponent } from './input/step/step.component';
import { RecordsComponent } from './panels/records/records.component';
import { RecordDetailsComponent } from './panels/record-details/record-details.component';
import { InputSelectComponent } from './input/input-select/input-select.component';
import { InputDateComponent } from './input/input-date/input-date.component';
//import { InputDateDuoComponent } from './input-date-duo/input-date-duo.component';
//import { InputTextDuoComponent } from './input-text-duo/input-text-duo.component';
//import { InputSelectDuoComponent } from './input-select-duo/input-select-duo.component';
import { InputTextComponent } from './input/input-text/input-text.component';
import { EntitiesContainerComponent } from './panels/entities-container/entities-container.component';
import { InputTextareaComponent } from './input/input-textarea/input-textarea.component';
import { ButtonsCancelSaveComponent } from './buttons/buttons-cancel-save/buttons-cancel-save.component';
import { ButtonsInputTextComponent } from './buttons/buttons-input-text/buttons-input-text.component';
import { FilesAttributesComponent } from './panels/files-attributes/files-attributes.component';
import { FilesDetailsComponent } from './panels/files-details/files-details.component';
import { ButtonsInputSelectComponent } from './buttons/buttons-input-select/buttons-input-select.component';
import { InputCheckboxComponent } from './input/input-checkbox/input-checkbox.component';
import { InputDuoComponent } from './input/input-duo/input-duo.component';
import { InputAddressComponent } from './input/input-address/input-address.component';
import { InputPersonComponent } from './input/input-person/input-person.component';
import { InputFilterAddComponent } from './input/input-filter-add/input-filter-add.component';
import { EntityTasksComponent } from './panels/entity-tasks/entity-tasks.component';
import { EntityTaskComponent } from './panels/entity-task/entity-task.component';
import { InputScheduleComponent } from './input/input-schedule/input-schedule.component';
import { InputSelectCheckboxComponent } from './input/input-select-checkbox/input-select-checkbox.component';
import { InputSelectTextComponent } from './input/input-select-text/input-select-text.component';
import { EntityDetailsCompanyPrimaryComponent } from './panels/entity-details-company-primary/entity-details-company-primary.component';
import { EntityDetailsCompanySecondaryComponent } from './panels/entity-details-company-secondary/entity-details-company-secondary.component';
import { EntityDetailsCustomComponent } from './panels/entity-details-custom/entity-details-custom.component';
import { EntityDetailsCompanyOptionalComponent } from './panels/entity-details-company-optional/entity-details-company-optional.component';

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
    //InputDateDuoComponent,
    InputTextComponent,
    //InputTextDuoComponent,
    //InputSelectDuoComponent,
    EntitiesContainerComponent,
    InputTextareaComponent,
    ButtonsCancelSaveComponent,
    ButtonsInputTextComponent,
    FilesAttributesComponent,
    FilesDetailsComponent,
    ButtonsInputSelectComponent,
    InputCheckboxComponent,
    InputDuoComponent,
    InputAddressComponent,
    InputPersonComponent,
    InputFilterAddComponent,
    EntityTasksComponent,
    EntityTaskComponent,
    InputScheduleComponent,
    InputSelectCheckboxComponent,
    InputSelectTextComponent,
    EntityDetailsCompanyPrimaryComponent,
    EntityDetailsCompanySecondaryComponent,
    EntityDetailsCustomComponent,
    EntityDetailsCompanyOptionalComponent
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
