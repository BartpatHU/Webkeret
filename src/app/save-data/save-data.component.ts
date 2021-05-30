import { Individual } from './../models/individual';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-data',
  templateUrl: './save-data.component.html',
  styleUrls: ['./save-data.component.css']
})

export class SaveDataComponent implements OnInit {

  individual : Individual

  birthDate = ""
  country = ""
  familyName = ""
  givenName = ""
  gender = ""
  nationality = ""
  age = 0;

  saveData() {
    this.setParameters();
    this.afs.collection('Individuals').add(this.individual).then(res => {
      console.log('mentes sikeres', res);
    }).catch(error =>{
      console.log('error', error);
    })

    this.birthDate = ""
    this.country = ""
    this.familyName = ""
    this.givenName = ""
    this.gender = ""
    this.nationality = ""
    this.age = 0;
  }

  setParameters(){
    this.individual =
    {
      "id": "",
      "href": "",
      "gender": this.gender,
      "placeOfBirth": "",
      "age": this.age,
      "countryOfBirth": this.country,
      "nationality": this.nationality,
      "maritalStatus": "",
      "birthDate": this.birthDate,
      "deathDate": "",
      "title": "",
      "aristocraticTitle": "",
      "generation": "",
      "givenName": this.givenName,
      "preferredGivenName": "",
      "familyNamePrefix": "",
      "familyName": this.familyName,
      "legalName": "",
      "middleName": "",
      "fullName": "",
      "formattedName": "",
      "location": "",
      "status": ""
    }
  }

  constructor(private afs: AngularFirestore) {
    this.individual =
    {
      "id": "",
      "href": "",
      "gender": "",
      "placeOfBirth": "",
      "age" : 0,
      "countryOfBirth": " States",
      "nationality": "",
      "maritalStatus": "",
      "birthDate": "",
      "deathDate": "",
      "title": "",
      "aristocraticTitle": "",
      "generation": "",
      "givenName": "",
      "preferredGivenName": "",
      "familyNamePrefix": "",
      "familyName": "",
      "legalName": "",
      "middleName": "",
      "fullName": "",
      "formattedName": "",
      "location": "",
      "status": ""
    }
  }

  ngOnInit(): void {
  }

}
