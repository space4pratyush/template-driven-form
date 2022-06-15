import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  countryList:Country[]=[
    new Country("1", "India"),
    new Country("2", "USA"),
    new Country("3", "England")
  ];

  onSubmit(contactForm, pincode){
    console.log(contactForm.value);
    console.log(pincode.value);
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
