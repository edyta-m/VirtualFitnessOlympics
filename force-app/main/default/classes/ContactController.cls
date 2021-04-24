public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT Team__c, FirstName, LastName, Steps__c
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER BY Steps__c DESC
        ];
    }
}
