import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private req:HttpClient) {

    console.log('service is wprking!')

   }

   getData(){
    return this.req.get<datos[]>(this.url)

   }
}


interface datos{
  "userId":number;
  "id":number;
  "title":string;
  "completed":boolean;
}