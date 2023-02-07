import {Component, OnDestroy, OnInit} from '@angular/core';
import {MasterService} from "../services/master.service";
import {Pengguna} from "../models/Pengguna";
import {Page} from "../models/Page";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  penggunaList!: Pengguna[]
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
    this.getListPengguna(this.page)

  }

  pageChangeEvent(event: number) {
    this.page.pageNumber = event;
    this.getListPengguna(this.page)

  }

  getCariPengguna():void{
    this.page.pageNumber = 0;
    this.page.param = {
      'nama':this.formCari.controls['nama'].value
    }
    this.getListPengguna(this.page)
  }

  getListPengguna(page: Page) {
    this.masterService.listPenggunaPaging(this.page).subscribe({
      next: (hasil)=>{
        this.penggunaList = hasil.data
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
    this.getListPengguna(this.page)
  }
}
