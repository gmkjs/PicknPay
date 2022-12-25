import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateUser(data:any){
    console.log(data,'hhh');

    if(data.email=='code@gmk.com' && data.password=='code@1243'){

      return true;

    }else{
      return false;
    }
  }
}
