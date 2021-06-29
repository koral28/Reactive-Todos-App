import { Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { List } from 'src/app/core/models/list.model'
import { DataService } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],
})
export class ListEditComponent implements OnInit {
  myForm!: FormGroup
  obj: List = {
    _id: '',
    Caption: '',
    Description: '',
    Icon: '',
    Color: '',
    Items: [],
  }
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      //new list
      if (listId != '1') {
        this.data.getListById(listId).then((data) => {
          this.obj = data
          this.myForm = this.formBuilder.group({
            Caption: [this.obj.Caption, [Validators.required]],
            Description: [
              this.obj.Description,
              [
                Validators.required,
                Validators.minLength(10),
                descriptionWordsValidation,
              ],
            ],
            Icon: [this.obj.Icon, [Validators.required]],
            Color: [this.obj.Color, [Validators.required]],
          })
        })
      }
      this.myForm = this.formBuilder.group({
        Caption: [this.obj.Caption, [Validators.required]],
        Description: [
          this.obj.Description,
          [
            Validators.required,
            Validators.minLength(10),
            descriptionWordsValidation,
          ],
        ],
        Icon: [this.obj.Icon, [Validators.required]],
        Color: [this.obj.Color, [Validators.required]],
      })
    })
  }

  colors: string[] = [
    'Coral',
    'DarkCyan',
    'DarkMagenta',
    'DeepPink',
    'Violet',
    'LimeGreen',
    'MidnightBlue',
  ]

  icons: string[] = ['work', 'shopping_cart', 'stars', 'phone', 'flagged']
  onSubmit(list: List) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      if (listId == '1') {
        //add new list!!!
        this.data.addList(list).subscribe(
          (data: List) => {
            this.router.navigate(['lists'])
          },
          (err: any) => console.log(err),
        )
      }
      //update a list!!!
      else {
        // console.log(list)
        this.data.addItems(listId, list).then((data) => {
          console.log('updated:' + data)
        })
        this.router.navigate(['lists'])
      }
    })
  }
}
function descriptionWordsValidation(
  control: AbstractControl,
): { [key: string]: any } | null {
  const description: string = control.value
  let words: string[] = description.split(' ')
  if (words.length < 3) {
    return { description: true }
  } else {
    return null
  }
}
