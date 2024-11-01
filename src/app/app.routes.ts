import { Routes } from '@angular/router';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { ManageCustomerComponent } from './page/manage-customer/manage-customer.component';

export const routes: Routes = [
    {
        path: "add-customer",
        component: AddCustomerComponent
    },
    {
        path: "manage-customer",
        component: ManageCustomerComponent
    }
];
