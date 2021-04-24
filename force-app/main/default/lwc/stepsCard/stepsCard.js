import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import TEAM from '@salesforce/schema/Contact.Team__c';
import STEPS from '@salesforce/schema/Contact.Steps__c';

export default class StepsCard extends LightningElement {
    amount = 0;

    handleAmountChange(e) {
        this.amount = e.detail.value;
    }

    objectApiName = CONTACT_OBJECT;
    fields = [TEAM, FIRST_NAME, LAST_NAME, STEPS];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Record created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}