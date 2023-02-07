import {Component, OnDestroy, OnInit} from '@angular/core';
import {MasterService} from "../services/master.service";
import {Hak} from "../models/Hak";
import {Page} from "../models/Page";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hakakses',
  templateUrl: './hakakses.component.html',
  styleUrls: ['./hakakses.component.css']
})
export class HakaksesComponent implements OnInit, OnDestroy{

  hakList!: Hak[]
  page!: Page
  formHalaman!: FormGroup
  formCari!: FormGroup
  jumlahPerPage = [2, 3 , 5, 10, 20, 50];
  constructor(private formBuild:FormBuilder,private masterService: MasterService) {
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.page = new Page()
    this.formHalaman = this.formBuild.group({
      "size": new FormControl(this.page.size)
    })

    this.formCari = this.formBuild.group({
      "nama": new FormControl()
    })
    this.getListHak(this.page)
  }

  pageChangeEvent(event: number) {
    this.page.pageNumber = event;
    this.getListHak(this.page)

  }
  getCariHak():void{
    this.page.pageNumber = 0;
    this.page.param = {
      'nama':this.formCari.controls['nama'].value
    }
    this.getListHak(this.page)
  }



  getListHak(page: Page) {
    this.masterService.listHakPaging(this.page).subscribe({
      next: (hasil)=>{
        this.hakList = hasil.data
        this.page = hasil.page
      },error: (err) =>{
        console.log(err)
      }, complete: () =>{

      }
    })
  }
  sizeChange():void {
    this.page = new Page()
    this.page.size = this.formHalaman.controls["size"].value
    this.getListHak(this.page)
  }

}
