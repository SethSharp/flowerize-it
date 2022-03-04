import { Component, OnInit } from '@angular/core';
// import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  isLinear = false;
  firstFormGroup: any;
  secondFormGroup: any;

  constructor() {} // private _formBuilder: FormBuilder

  order = {
    fName: "",
    lName: "",
    address: "",
    suburb: "",
    state: "",
    postCode: ""
  }

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }


  payNow() {
    alert("AYING");
  }
}
