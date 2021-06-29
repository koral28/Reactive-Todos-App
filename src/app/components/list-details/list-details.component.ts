import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { List } from 'src/app/core/models/list.model'
import { DataService } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'],
})
export class ListDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private data: DataService,
  ) {}
  chosenList$!: List
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      if (listId) {
        this.data.getListById(listId).then((data) => {
          this.chosenList$ = data
        })
      }
    })
  }
  EditList(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      this.router.navigate(['lists', listId, 'edit'])
    })
  }
  DeleteList(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      if (listId) {
        this.data.deleteList(listId).then((data) => {
          console.log('deleted:' + data)
        })
      }
    })
    this.router.navigate(['lists'])
  }
  change(item: any, value: any) {
    item.completed = !item.completed
    const newItemToAdd = {
      item: item,
      completed: item.completed,
    }
    this.activatedRoute.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      if (listId) {
        this.data.addItems(listId, this.chosenList$)
      }
    })
  }
  addItem(newItem: string): void {
    const newItemToAdd = {
      item: newItem,
      completed: false,
    }
    this.chosenList$.Items.push(newItemToAdd)
    //add items to list in db
    this.activatedRoute.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      if (listId) {
        this.data.addItems(listId, this.chosenList$)
      }
    })
  }
}
