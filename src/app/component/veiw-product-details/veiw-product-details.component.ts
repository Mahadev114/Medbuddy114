import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { HttpParams } from '@angular/common/http'
@Component({
  selector: 'app-veiw-product-details',
  templateUrl: './veiw-product-details.component.html',
  styleUrls: ['./veiw-product-details.component.scss']
})
export class VeiwProductDetailsComponent implements OnInit {
  productDetails: any

  constructor(private http: ServiceService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const drugCode = this.route.snapshot.paramMap.get('drug')
    if (drugCode != null) {
      this.getProductDetailsByDrugCode(drugCode)
    }
  }
  getProductDetailsByDrugCode(drug_code: string) {
    const params: HttpParams = new HttpParams()
      .set('drugCode', drug_code);

    this.http.getDetailsFromServer('topDeals', params).subscribe((response: any) => {
      if (response && response.length > 0) {
        this.productDetails = response[0]
      }
    })
  }
}



