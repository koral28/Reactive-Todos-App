import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { List } from '../models/list.model'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly baseUrl: string = 'http://localhost:8800'
  constructor(private http: HttpClient) {}

  getLists(): Observable<List[]> {
    const url = `${this.baseUrl}/api/lists`
    // const url = `api/lists`

    return this.http.get<List[]>(url)
  }

  getListById(listId: string): Promise<List> {
    const url = `${this.baseUrl}/api/lists/${listId}`
    // const url = `api/lists/${listId}`

    return this.http.get<List>(url).toPromise()
  }

  getNumberOfLists(): Promise<Number> {
    const url = `${this.baseUrl}/api/lists`
    // const url = `api/lists`

    return this.http
      .get<List[]>(url)
      .pipe(map((list) => list.length))
      .toPromise()
  }

  getActiveItemsOfList(): Promise<{}[]> {
    const url = `${this.baseUrl}/api/lists`
    // const url = `api/lists`
    return this.http
      .get<List[]>(url)
      .pipe(
        map((list) =>
          list.map((i) =>
            i.Items.filter((m) => m.completed == false).map((k) => k.item),
          ),
        ),
      )
      .toPromise()
  }

  getNotActiveItemsOfList(): Promise<{}[]> {
    const url = `${this.baseUrl}/api/lists`
    // const url = `api/lists`
    return this.http
      .get<List[]>(url)
      .pipe(
        map((list) =>
          list.map((i) =>
            i.Items.filter((m) => m.completed == true).map((k) => k.item),
          ),
        ),
      )
      .toPromise()
  }

  getNumberOfItems(): Promise<Number[]> {
    const url = `${this.baseUrl}/api/lists`
    // const url = `api/lists`

    return this.http
      .get<List[]>(url)
      .pipe(map((list) => list.map((m) => m.Items.length)))
      .toPromise()
  }
  getNumberOfActiveItems(): Promise<Number[]> {
    const url = `${this.baseUrl}/api/lists`
    // const url = `api/lists`
    return this.http
      .get<List[]>(url)
      .pipe(
        map((list) =>
          list.map((i) => i.Items.filter((m) => m.completed == false).length),
        ),
      )
      .toPromise()
  }

  addList(list: List): Observable<List> {
    const url = `${this.baseUrl}/api/lists`
    // const url = `api/lists`

    return this.http.post<List>(url, list, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    })
  }

  addItems(listId: string, list: List): Promise<List> {
    const url = `${this.baseUrl}/api/lists/${listId}`
    // const url = `api/lists/${listId}`

    return this.http
      .put<List>(url, list, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .toPromise()
  }

  deleteList(listId: string): Promise<List> {
    const url = `${this.baseUrl}/api/lists/${listId}`
    // const url = `api/lists/${listId}`

    return this.http.delete<List>(url).toPromise()
  }
}
