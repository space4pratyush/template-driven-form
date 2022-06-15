import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('contactForm', ) contactForm: NgForm;

  contact:Contact;

  ngOnInit(){
    this.contact={
      firstName:"Sachin",
      lastName:"Tendularkar",
      email: "sachin@gmail.com",
      gender:"male",
      isMarried:true,
      country:"2",
      address:{city:"Mumbai", street:"Perry Cross Road", pincode:"400050"}
    };
    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });
  };

 

  countryList:Country[]=[
    new Country("1", "India"),
    new Country("2", "USA"),
    new Country("3", "England")
  ];

  // onSubmit(contactForm, pincode){
  //   console.log(contactForm.value);
  //   console.log(pincode.value);
  // }

  onSubmit(contactForm){
    console.log(this.contactForm.value);
  }

  setDefaults(){
    this.contactForm.setValue(this.contact);
  }

  changeCountry(){
    this.contactForm.controls["country"].setValue("1");
  }

  reset(){
    this.contactForm.reset();
  }

  resetForm(){
    this.contactForm.resetForm();
  }

  patchValue(){
    let obj={
      firstName:"Rahul",
      lastName:"Dravid",
      email:"rahul@gmail.com",
    };
    this.contactForm.control.patchValue(obj);
  }

  changeAddress(){
    let obj={
      city:"Bangalore",
      street:"Brigade Road",
      pincode:"563749"
    };
    let address=this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);
  }

}

export class Country{
  id:string;
  name:string;

  constructor(id:string, name:string){
    this.id=id;
    this.name=name;
  }
}

export class Contact{
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city:string;
    street: string;
    pincode: string;
  }
}
