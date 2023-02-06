import {Component, OnDestroy, OnInit} from '@angular/core';
import {MasterService} from "../services/master.service";
import {Pengguna} from "../models/Pengguna";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  penggunaList!: Pengguna[]
  constructor(private masterService: MasterService) {
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.masterService.listPengguna().subscribe({
      next: (data)=>{
        this.penggunaList = data
      },error: (err) =>{
        console.log(err)
      }, complete: () =>{

      }
    })
  }

}
