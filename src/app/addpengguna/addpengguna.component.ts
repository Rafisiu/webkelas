import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MasterService} from "../services/master.service";
import {Pengguna} from "../models/Pengguna";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-addpengguna',
  templateUrl: './addpengguna.component.html',
  styleUrls: ['./addpengguna.component.css']
})
export class AddpenggunaComponent implements OnInit{
  id!:number

  formpengguna!: FormGroup

  pesanKesalahan!: String
  constructor(private  formBuild: FormBuilder,
              private ms: MasterService,
              private router: Router,
              private  route: ActivatedRoute
              ) {
    this.formpengguna = this.formBuild.group({
      'namaPengguna': [null, /*[Validators.required,Validators.minLength(3)]*/],
      'email': [null,/*[Validators.required,Validators.email]*/]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(rte =>{
      this.id = rte['id']
      if(this.id){
        this.ms.getPengguna(this.id).subscribe({
          next: hasil =>{
            this.formpengguna.controls['namaPengguna'].setValue(hasil.namaPengguna)
            this.formpengguna.controls['email'].setValue(hasil.email)
          }
        })
      }
    })


  }

  simpan() : void{
    if (this.formpengguna.valid){
      let pengguna = new Pengguna()
      if (this.id){
        pengguna.id = this.id;
      }
      pengguna.namaPengguna = this.formpengguna.controls['namaPengguna'].value
      pengguna.email = this.formpengguna.controls['email'].value
      this.ms.addpengguna(pengguna).subscribe({
        next: (hasil) =>{
          console.log(hasil)
          alert(hasil.status)
          this.router.navigate([""])
        },
        error: err =>{
          if (err.error.errors && err.error.errors.length > 0){
            let pesanSalah = "";
            for (let i = 0; i < err.error.errors.length; i++){
              pesanSalah += err.error.errors[i].field + " : "+err.error.errors[i].defaultMessage+" <br/>"
            }
            this.pesanKesalahan = pesanSalah
          }
        }
      })
    }


  }

}
