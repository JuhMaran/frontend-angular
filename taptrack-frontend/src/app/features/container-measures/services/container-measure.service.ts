import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContainerCategory, ContainerMeasureResponse, ContainerType } from '../models';
import { response } from 'express';

/**
 * Serviço responsável por acessar os endpoints de Container Measure.
 */
@Injectable({
  providedIn: 'root'
})
export class ContainerMeasureService {

  private readonly baseUrl = `${environment.apiUrl}/container-measures`;

  constructor(private http: HttpClient) {}
  
  listAllContainerMeasures(): Observable<ContainerMeasureResponse[]> {
    console.log('[Service][listAllContainerMeasures] GET =>', this.baseUrl);
    return new Observable(observer => {
      this.http.get<ContainerMeasureResponse[]>(this.baseUrl).subscribe({
        next: (response) => {
          console.log('[Service][listAllContainerMeasures] Sucesso:', response);
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.error('[Service][listAllContainerMeasures] Erro:', error);
          observer.error(error);
        }
      });
    });
  }

  getById(id: number): Observable<ContainerMeasureResponse> {
    const url = `${this.baseUrl}/${id}`;
    console.log('[Service][getById] GET =>', url);
    return new Observable(observer => {
      this.http.get<ContainerMeasureResponse>(url).subscribe({
        next: (response) => {
          console.log(`[Service][getById] Sucesso ID=${id}:`, response);
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.error(`[Service][getById] Erro ID=${id}:`, error);
          observer.error(error);
        }
      });
    });
  }

  filterContainerMeasures(category?: ContainerCategory, type?: ContainerType, active?: boolean): Observable<ContainerMeasureResponse[]> {
    let params = new HttpParams();
    if (category) params = params.set('category', category.toString());
    if (type) params = params.set('type', type.toString());
    if (active !== undefined && active !== null) params = params.set('active', active.toString());

    console.log('[Service][filterContainerMeasures] GET =>', this.baseUrl, 'Params:', params.toString());
    return new Observable(observer => {
      this.http.get<ContainerMeasureResponse[]>(this.baseUrl, { params }).subscribe({
        next: (response) => {
          console.log('[Service][filterContainerMeasures] Sucesso:', response);
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.error('[Service][filterContainerMeasures] Erro:', error);
          observer.error(error);
        }
      });
    });
  }

}
  