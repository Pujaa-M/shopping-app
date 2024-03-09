import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemData: Item[] = []

  constructor (private http:HttpClient) {}

  getData = (dataPath:string):Observable<any> => {
    return this.http.get<any>(dataPath)
  }

  setItemData = (itemData:Item[]) => {
    this.itemData = itemData
  }

  getItemData = () => this.itemData
}
