import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, AddCustomerComponent, ManageCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Full-stack-project-Demo';
}
