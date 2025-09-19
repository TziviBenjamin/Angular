import { Component, OnInit } from '@angular/core';
import { Student } from '../../../student';

@Component({
  selector: 'app-class',
  imports: [],
  templateUrl: './class.html',
  styleUrls: ['./class.css']
})
export class Class implements OnInit {
  girlsList: Student[] = [];
  goodGirls: Student[]=[];


  takeOut(s: Student) {
    this.girlsList = this.girlsList.filter(x => x != s);
    this.goodGirls = this.goodGirls.filter(x => x !== s);

  }


  putIn(s: Student) {
  if (!this.goodGirls.includes(s)) {
    this.goodGirls.push(s);
  }
}

  ngOnInit(): void {
    let student1 = new Student("sara", "a1", 99);
    let student2 = new Student("chani", "b2", 100);
    let student3 = new Student("michal", "a2", 80);
    let student4 = new Student("dina", "c3", 70);
    this.girlsList.push(student1);
    this.girlsList.push(student2);
    this.girlsList.push(student3);
    this.girlsList.push(student4);

  }

}