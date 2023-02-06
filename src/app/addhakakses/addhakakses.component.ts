import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MasterService} from "../services/master.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pengguna} from "../models/Pengguna";
import {Hak} from "../models/Hak";

@Component({
  selector: 'app-addhakakses',
  templateUrl: './addhakakses.component.html',
  styleUrls: ['./addhakakses.component.css']
})
export class AddhakaksesComponent implements OnInit{

  id!:number

  formhak!: FormGroup

  constructor(private  formBuild: FormBuilder,
              private ms: MasterService,
              private router: Router,
              private  route: ActivatedRoute
  ) {
    this.formhak = this.formBuild.group({
      'namaHak': [null, [Validators.required,Validators.minLength(3)]]
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(rte =>{
      this.id = rte['id']
      if(this.id){
        this.ms.getHak(this.id).subscribe({
          next: hasil =>{
            this.formhak.controls['namaHak'].setValue(hasil.namaHak)
          }
        })
      }
    })
  }

  simpan() : void{
    if (this.formhak.valid){
      let hak = new Hak()
      if (this.id){
        hak.id = this.id;
      }
      hak.namaHak = this.formhak.controls['namaHak'].value
      this.ms.addhak(hak).subscribe({
        next: (hasil) =>{
          console.log(hasil)
          alert(hasil.status)
        },
        error: err =>{
          console.log(err)
        }
      })
    }


  }

}
