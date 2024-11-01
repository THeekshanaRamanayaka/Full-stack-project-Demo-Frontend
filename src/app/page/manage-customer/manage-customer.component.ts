import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-manage-customer',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent {
  public customerList: any = [];
  isModalOpen = false;
  public customerTemp: any = {};

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable() {
    this.http.get("http://localhost:8080/customer/get-allCustomers").subscribe(data => {
      console.log(data);
      this.customerList = data;
    });
  }

  deleteCustomerById(id: any) {
    console.log(id);
    this.http.delete(`http://localhost:8080/customer/delete-by-id/${id}`).subscribe(data => {
      alert("Customer deleted!");
      this.loadTable();
    });
  }

  updateCustomer(customer: any) {
    console.log(customer);
    this.customerTemp = { ...customer };
    this.isModalOpen = true;
  }

  saveCustomer() {
    this.http.put("http://localhost:8080/customer/update-customer", this.customerTemp).subscribe(data => {
      alert("Customer updated!");
      this.loadTable();
      this.closeModal();
    });
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
