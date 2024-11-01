import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  
  public customer:any={
    name:"",
    address:"",
    email:""
  };

  constructor(private http:HttpClient){}

  public addCustomer() {
    this.http.post("http://localhost:8080/customer/add-customer", this.customer).subscribe((data) => {
      alert("Customer Added!!!!");
    })
  }
}
