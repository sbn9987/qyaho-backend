import { Component, OnInit } from '@angular/core';
import { CustomerNumService } from "../../services/customers_num.service";
import { Cus_num } from "../../models/cus.num"
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  
 
  //--대기 순번 등록(텍스트)
  customers: Cus_num[] = [];
  customerForm: FormGroup;
  selectedCustomer: Cus_num = new Cus_num();
  customersQuantity: number = 0;

constructor(private customer1Service: CustomerNumService, private _builder: FormBuilder) {
    this.customer1Service.getCustomerNums().subscribe((data) => {
      this.customers = data;
      this.customersQuantity = data.length;
    });


    this.customerForm = this._builder.group({
      name: ["", Validators.required],
      birth: ["", Validators.required]
    });

  }
  ngOnInit(): void {

  }

  _blankControls() {
    this.customerForm.get("name").reset();
    this.customerForm.get("birth").reset();
  }

  manageSubmit(values: Cus_num) {
    if (this.selectedCustomer._id === undefined) {
      this.customer1Service.addCustomerNum(values).subscribe((data) => {
        return this.customers.push(data);
      });
      this.customersQuantity = this.customersQuantity + 1;
      Swal.fire({
        title: "예약 성공! ",
        icon: "success",
        confirmButtonText: "확인",
      });
    } 
    this.selectedCustomer = new Cus_num();
    this._blankControls();
  }
}



