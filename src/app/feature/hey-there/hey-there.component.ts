import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hey-there',
  templateUrl: './hey-there.component.html',
  styleUrls: ['./hey-there.component.css']
})
export class HeyThereComponent implements OnInit {
  title: string = "Hey There Component!!"
  username: string = "Enter a username";

  constructor() { }

  ngOnInit(): void {
    console.log(this.title+" was called");
  }

}
