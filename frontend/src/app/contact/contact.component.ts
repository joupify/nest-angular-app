import { Component, OnInit } from '@angular/core';
import { Any } from 'typeorm';
import { ApiService } from '../api.service';
import { Contact } from '../contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  displayedColumns  :  string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource: any []  = [];
  contact:any = {};
  
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readContacts().subscribe((result: any)=>{   
      console.log(result); 
      this.dataSource=  result;
      
    })
  }

  selectContact(contact: any){
    this.contact = contact;
    console.log("selected: ", this.contact);
  }

  newContact(){
    this.contact = {};
  }

  createContact(f: any){

    console.log("form value: ", f.value);

    this.apiService.createContact(f.value).subscribe((result)=>{
      console.log(result);
    });
    
  }

  deleteContact(id: any){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateContact(f: any){
    
    console.log("Update", f.value)
    f.value.id = this.contact['id'];
    this.apiService.updateContact(f.value).subscribe((result)=>{
      console.log(result);
    });
  }
  

}