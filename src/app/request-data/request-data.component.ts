import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.css']
})
export class RequestDataComponent implements OnInit {

  name = "";
  checked = false;
  gender = "male"

  readDataByGender() {
    this.afs.collection('Individuals', ref => ref.where('gender', '==', this.gender)
      .orderBy('id', 'desc')).get().subscribe(res => {
        res.docs.forEach(el => {
          console.log(el.data());
        })
      }, error => {
        console.log('hiba kiolvasas', error);
      })
  }

  readDataByName() {
    this.afs.collection('Individuals', ref => ref.where('gender', '==', this.name)
      .orderBy('id', 'desc')).get().subscribe(res => {
        res.docs.forEach(el => {
          console.log(el.data());
        })
      }, error => {
        console.log('hiba kiolvasas', error);
      })
  }

  readDataByAge() {
    this.afs.collection('Individuals', ref => ref.orderBy('age', 'desc')).get().subscribe(res => {
        res.docs.forEach(el => {
          console.log(el.data());
        })
      }, error => {
        console.log('hiba kiolvasas', error);
      })
  }

  constructor(  private afs: AngularFirestore) {

  }

  ngOnInit(): void {
  }

}
