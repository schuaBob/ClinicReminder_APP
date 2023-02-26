import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, from, map, Observable, switchMap, throwError } from "rxjs";
import { StorageService } from "../services/storage.service";

@Injectable({
    providedIn: 'root'
})
export class BaseUrlInterceptor implements HttpInterceptor {
    constructor(@Inject('BASE_API_URL') private baseUrl: string, private storageService: StorageService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = req.clone({
            url: `${this.baseUrl}/${req.url}`,
            setHeaders: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body),
            withCredentials: true,
        });
        return next.handle(apiReq);
    }

}