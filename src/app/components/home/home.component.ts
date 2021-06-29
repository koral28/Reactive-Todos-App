import { ValueTransformer } from '@angular/compiler/src/util'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DataService } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  numberOfLists$!: Promise<Number>
  todoItems$!: Promise<Number[]>
  itemsCompleted$!: Promise<Number[]>
  countActiveItems: number = 0
  countItems: number = 0
  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {
    this.itemsCompleted$ = this.data.getNumberOfActiveItems()
    this.itemsCompleted$.then((data) =>
      data.forEach((element) => {
        this.countActiveItems += +element
      }),
    )
    this.numberOfLists$ = this.data.getNumberOfLists()
    this.data.getNumberOfItems().then((data) =>
      data.forEach((element) => {
        this.countItems += +element
      }),
    )
  }
}
