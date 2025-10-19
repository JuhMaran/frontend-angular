import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContainerMeasureResponse } from '../models';
import { response } from 'express';

/**
 * Serviço responsável por acessar os endpoints de Container Measure.
 */
@Injectable({
  providedIn: 'root'
})
export class ContainerMeasureService {

  private readonly baseUrl = `${environment.apiUrl}/container-measures`;

  constructor(
    private http: HttpClient
  ) {}
  
  /**
   * Obtém todos os registros de medidas de recipientes (Container Measures)
   * do backend (via API Gateway).
   */
  listAllContainerMeasures(): Observable<ContainerMeasureResponse[]>{
    console.log('[ContainerMeasureService] Chamando GET: ', this.baseUrl);

    return new Observable(observer => {
      this.http.get<ContainerMeasureResponse[]>(this.baseUrl).subscribe({
        next: (response) => {
          console.log('[ContainerMeasureService] Sucesso ao buscar medidas: ', response);
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          console.log('[ContainerMeasureService] Erro ao buscar medidas: ', error);
          observer.error(error);
        }
      })
    });

  }

}
