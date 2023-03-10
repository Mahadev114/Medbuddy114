import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MedicineHomeComponent } from './component/medicine-home/medicine-home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { VeiwProductDetailsComponent } from './component/veiw-product-details/veiw-product-details.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'medicines',component:MedicineHomeComponent,
  },
  {
    path:'veiw-product-details/:drug',component:VeiwProductDetailsComponent,
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
