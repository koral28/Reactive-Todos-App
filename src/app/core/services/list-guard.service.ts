import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { List } from '../models/list.model'
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root',
})
export class ListGuardService {
  constructor(private data: DataService, private router: Router) {}
  lists: List[] = []

  checkIfListsIsNotEmpty(): boolean {
    this.data.getLists().subscribe((data) => {
      this.lists = data
      if (this.lists.length == 0) {
        this.router.navigate(['lists', '1', 'edit'])
      }
    })
    return true
  }
}
