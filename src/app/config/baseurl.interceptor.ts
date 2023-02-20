import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class BaseUrlInterceptor implements HttpInterceptor {
    constructor(@Inject('BASE_API_URL') private baseUrl: string) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = req.clone({
            url: `${this.baseUrl}/${req.url}`, setHeaders: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(req.body), withCredentials: true
        });
        return next.handle(apiReq);
    }

}