import { Component, OnInit } from '@angular/core';
import { ContainerMeasureResponse } from '../../../../models';
import { ContainerMeasureService } from '../../../../services/container-measure.service';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container-measure-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-measure-list.component.html',
  styleUrls: ['./container-measure-list.component.scss']
})
export class ContainerMeasureListComponent implements OnInit {

  containerMeasures: ContainerMeasureResponse[] = [];
  isLoading = false;

  constructor(
    private containerMeasureService: ContainerMeasureService
  ) {}

  ngOnInit(): void {
    this.carregarContainerMeasures();  
  }

  /**
   * Carrega a lista de medidas de recipientes via serviço
   */
  carregarContainerMeasures(): void {
    console.log('[ContainerMeasureListComponent] Iniciando carregamento dos Container Measures...');
    this.isLoading = true;

    this.containerMeasureService.listAllContainerMeasures().subscribe({
      next: (response) => {
        this.containerMeasures = response;
        console.log('[ContainerMeasureListComponent] Medidas carregadas com sucess: ', response);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('[ContainerMeasureListComponent] Erro ao carregar medidas: ', error);
        this.isLoading = false;
      }
    })

  }

}
