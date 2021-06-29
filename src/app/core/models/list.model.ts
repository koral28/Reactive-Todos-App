export interface List {
  _id: string
  Caption: string
  Description: string
  Icon: string
  Color: string
  Items: { item: string; completed: boolean }[]
}
