/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BookingRequest } from '../../models/booking-request';

export interface GetAllNotAllotedBookings$Params {
}

export function getAllNotAllotedBookings(http: HttpClient, rootUrl: string, params?: GetAllNotAllotedBookings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BookingRequest>>> {
  const rb = new RequestBuilder(rootUrl, getAllNotAllotedBookings.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<BookingRequest>>;
    })
  );
}

getAllNotAllotedBookings.PATH = '/booking/notAlloted';
