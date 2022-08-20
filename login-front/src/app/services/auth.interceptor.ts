import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private _login: LoginService,
    ){}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {

            // add the jwt token 
            let authReq = req;
            const token = this._login.getToken();
            console.log('Inside Interceptor');
            
            if(token != null){
                authReq = authReq.clone({
                    setHeaders: {Authorization: `Bearer ${token}`},
                });
            }

            return next.handle(authReq);
    }

}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }
];