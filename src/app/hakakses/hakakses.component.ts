import {Component, OnDestroy, OnInit} from '@angular/core';
import {MasterService} from "../services/master.service";
import {Hak} from "../models/Hak";

@Component({
  selector: 'app-hakakses',
  templateUrl: './hakakses.component.html',
  styleUrls: ['./hakakses.component.css']
})
export class HakaksesComponent implements OnInit, OnDestroy{

  hakList!: Hak[]
  constructor(private masterService: MasterService) {
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.masterService.listHak().subscribe({
      next: (data)=>{
        this.hakList = data
      },error: (err) =>{
        console.log(err)
      }, complete: () =>{

      }
    })
  }

}
