import { LightningElement, wire } from 'lwc';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import TEAM from '@salesforce/schema/Contact.Team__c';
import STEPS from '@salesforce/schema/Contact.Steps__c';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    { label: 'Team', fieldName: TEAM.fieldApiName, type: 'text' },
    { label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text' },
    { label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text' },
    { label: 'Steps', fieldName: STEPS.fieldApiName, type: 'number' }
];

export default class RecordsCard extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
}
