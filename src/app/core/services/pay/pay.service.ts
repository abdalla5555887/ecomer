import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {
token :string = localStorage.getItem('token')!;
  constructor( private readonly httpClient:HttpClient) { }

  pay(id:string,shipdata:object):Observable<any>{
return this.httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${window.location.origin}`,{"shippingAddress":shipdata},
{  headers:{token:this.token!} })

  }


}
