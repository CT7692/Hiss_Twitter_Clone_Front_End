import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  token = localStorage.getItem("token");

  decodeToken(){
    return jwtDecode((this.token as string));
  }

  isTokenExpired(token: any) {
    if(!token)
      return true;

    try{
      const decoded: {exp: number} = jwtDecode(token);
      const currentTime = Math.floor(Date.now()/1000);

      return decoded.exp < currentTime;
    } catch (error){
      return true;
    }
  }

}
