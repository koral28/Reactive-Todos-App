import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  itemsNotCompleted$!: Promise<{}[]>
  itemsCompleted$!: Promise<{}[]>
  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.itemsNotCompleted$ = this.data.getActiveItemsOfList()
    this.itemsCompleted$ = this.data.getNotActiveItemsOfList()
  }
}
