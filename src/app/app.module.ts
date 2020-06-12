import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
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
import { InputCustomComponent } from './input/input-custom/input-custom.component';
import { InputFileComponent } from './input/input-file/input-file.component';
import { InputAnyComponent } from './input/input-any/input-any.component';
import { InputBrowseComponent } from './input/input-browse/input-browse.component';
import { InputNumberComponent } from './input/input-number/input-number.component';
import { EntityDetailsFilesComponent } from './panels/entity-details-files/entity-details-files.component';
import { EntityDetailsUsersComponent } from './panels/entity-details-users/entity-details-users.component';
import { InputSelectEntityComponent } from './input/input-select-entity/input-select-entity.component';
import { EntityDetailsGroupComponent } from './panels/entity-details-group/entity-details-group.component';
import { EntityDetailsUserComponent } from './panels/entity-details-user/entity-details-user.component';
import { InputDuoColumnComponent } from './input/input-duo-column/input-duo-column.component';
import { EntityDetailsIndividualComponent } from './panels/entity-details-individual/entity-details-individual.component';
import { EntityDetailsIndividualSecondaryComponent } from './panels/entity-details-individual-secondary/entity-details-individual-secondary.component';
import { EntityDetailsRegulatorComponent } from './panels/entity-details-regulator/entity-details-regulator.component';
import { EntityDetailsRegulationComponent } from './panels/entity-details-regulation/entity-details-regulation.component';
import { EntityDetailsTrustComponent } from './panels/entity-details-trust/entity-details-trust.component';
import { EntityDetailsAuditorComponent } from './panels/entity-details-auditor/entity-details-auditor.component';
import { InputPersonContactComponent } from './input/input-person-contact/input-person-contact.component';
import { EntityDetailsContactComponent } from './panels/entity-details-contact/entity-details-contact.component';
import { SettingsComponent } from './panels/settings/settings.component';
import { EntityDetailsSecretaryComponent } from './panels/entity-details-secretary/entity-details-secretary.component';
import { EntityAuditComponent } from './panels/entity-audit/entity-audit.component';
import { EntityAuditsComponent } from './panels/entity-audits/entity-audits.component';

import { TestMaterialComponent } from './material/test-material/test-material.component'
import { MaterialModule } from './material/material.module';
import { ButtonsToggleComponent } from './buttons/buttons-toggle/buttons-toggle.component';
import { ButtonsToolbarButtonComponent } from './buttons/buttons-toolbar-button/buttons-toolbar-button.component';
import { EntityDetailsHeaderComponent } from './panels/entity-details-header/entity-details-header.component';
import { EntityDetailsDashboardComponent } from './panels/entity-details-dashboard/entity-details-dashboard.component';
import { InputTableComponent } from './input/input-table/input-table.component';
import { ButtonCheckComponent } from './buttons/button-check/button-check.component';
import { EntityDetailsMeetingsComponent } from './panels/entity-details-meetings/entity-details-meetings.component';
import { InputMeetingComponent } from './input/input-meeting/input-meeting.component';
import { EntityDetailsAttendeesComponent } from './panels/entity-details-attendees/entity-details-attendees.component';
import { ButtonCaretComponent } from './buttons/button-caret/button-caret.component';
import { EntityDetailsDocTemplatesComponent } from './panels/entity-details-doc-templates/entity-details-doc-templates.component';



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
    EntityDetailsCompanyOptionalComponent,
    InputCustomComponent,
    InputFileComponent,
    InputAnyComponent,
    InputBrowseComponent,
    InputNumberComponent,
    EntityDetailsFilesComponent,
    EntityDetailsUsersComponent,
    InputSelectEntityComponent,
    EntityDetailsGroupComponent,
    EntityDetailsUserComponent,
    InputDuoColumnComponent,
    EntityDetailsIndividualComponent,
    EntityDetailsIndividualSecondaryComponent,
    EntityDetailsRegulatorComponent,
    EntityDetailsRegulationComponent,
    EntityDetailsTrustComponent,
    EntityDetailsAuditorComponent,
    InputPersonContactComponent,
    EntityDetailsContactComponent,
    SettingsComponent,
    EntityDetailsSecretaryComponent,
    EntityAuditComponent,
    EntityAuditsComponent,
    TestMaterialComponent,
    ButtonsToggleComponent,
    ButtonsToolbarButtonComponent,
    EntityDetailsHeaderComponent,
    EntityDetailsDashboardComponent,
    InputTableComponent,
    ButtonCheckComponent,
    EntityDetailsMeetingsComponent,
    InputMeetingComponent,
    EntityDetailsAttendeesComponent,
    ButtonCaretComponent,
    EntityDetailsDocTemplatesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    OAuthModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
