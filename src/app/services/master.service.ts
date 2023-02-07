import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Pengguna} from "../models/Pengguna";
import {Hak} from "../models/Hak";
import {Page} from "../models/Page";



@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  listPengguna(): Observable<any>{
    return this.http.get(environment.baseUrl+"/listpengguna").pipe(map(data=>data))
  }

  listPenggunaPaging(page: Page): Observable<any>{
    return this.http.post(environment.baseUrl+"/listpenggunapaging",page)
      .pipe(map(data=>data))
  }

  listHakPaging(page: Page): Observable<any>{
    return this.http.post(environment.baseUrl+"/listhakpaging",page)
      .pipe(map(data=>data))
  }

  getPengguna(id:number): Observable<any>{
    return this.http.get(environment.baseUrl+"/getpengguna/"+id).pipe(map(data=>data))
  }

  addpengguna(pengguna: Pengguna): Observable<any>{
    let url = "/simpanpengguna";

    if (pengguna.id){
      url = "/updatepengguna";
    }

    return this.http.post(environment.baseUrl+url, pengguna)
      .pipe(map(data=>data))
  }

  listHak(): Observable<any>{
    return this.http.get(environment.baseUrl+"/listhak").pipe(map(data=>data))
  }

  getHak(id:number): Observable<any>{
    return this.http.get(environment.baseUrl+"/gethak/"+id).pipe(map(data=>data))
  }

  addhak(hak: Hak): Observable<any>{
    let url = "/simpanhak";

    if (hak.id){
      url = "/updatehak";
    }

    return this.http.post(environment.baseUrl+url, hak)
      .pipe(map(data=>data))
  }

}
