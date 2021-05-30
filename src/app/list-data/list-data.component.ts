import { Individual } from './../models/individual';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {


  data : Array<any> = [];

  readData() {
    this.afs.collection('Individuals', ref => ref
      .orderBy('id', 'desc')).get().subscribe(res => {
        res.docs.forEach(el => {
          console.log(el.data());
          console.log("asd");
          this.data.push(el.data());
        })
      }, error => {
        console.log('hiba kiolvasas', error);
      })
  }

  constructor(  private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

}
