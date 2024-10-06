import { inject } from "@angular/core";
import { UserSeviceService } from "../customServices/user-sevice.service";
import { I } from "@angular/cdk/keycodes";
import { Router } from "@angular/router";

export function authenticationcard():boolean{

    const route  = inject(Router);
    const userservice = inject(UserSeviceService);
    if(userservice.loginFlag){
        return true;
    }else{
        window.alert("Please login first");
        route.navigate(["/login"]);
        return false;
    }
}