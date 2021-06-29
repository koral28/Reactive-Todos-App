import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { List } from 'src/app/core/models/list.model'
import { DataService } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  constructor(private router: Router, private data: DataService) {}
  lists: List[] = []

  ngOnInit(): void {
    this.data.getLists().subscribe((data) => {
      this.lists = data
    })
  }
}
