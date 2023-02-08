import { NumberValueAccessor } from "@angular/forms";

export class Contact {
          [key: string]: string | number;

        
      }


//  interface IDevice extends Contact {
//     id: number;
//     name: string;
//     title: string;
//     email: string;
//     phone: string;
//     address: string;
//     city: string;

    
    


interface Contacts {

    id: number;
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    [key:string]: string |Number;
}

function getIdContacts(contact: Contacts): number {
    return contact.id;
}