import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { LoginInfoDTO } from '../dto/loginInfoDto';
import { SocialSignInInfoDTO } from '../dto/socialSignInInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:8080/auth/"

  constructor(private http: HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}signup`, userObj)
  }

  login(loginObj: LoginInfoDTO) {
    console.log("aaaa");
    return this.http.post<any>(`${this.baseUrl}login`, loginObj)
  }

  googleSignIn(userInfo: SocialSignInInfoDTO) {
    console.log("aaa" + userInfo);
    return this.http.post<any>(`${this.baseUrl}google/login`, userInfo)
  }
}
