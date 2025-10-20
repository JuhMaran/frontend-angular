import { Component, OnInit } from '@angular/core';
import { ContainerCategory, ContainerMeasureResponse, ContainerType } from '../../../../models';
import { ContainerMeasureService } from '../../../../services/container-measure.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-container-measure-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './container-measure-list.component.html',
  styleUrls: ['./container-measure-list.component.scss']
})
export class ContainerMeasureListComponent implements OnInit {

  containerMeasures: ContainerMeasureResponse[] = [];
  isLoading = false;

  // Filtros
  id?: number;
  category?: ContainerCategory;
  type?: ContainerType;
  active?: boolean;

  categories = Object.values(ContainerCategory);
  types = Object.values(ContainerType);

  constructor(private containerMeasureService: ContainerMeasureService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    console.log('[ContainerMeasureListComponent] Iniciando carregamento dos Container Measures...');
    this.isLoading = true;

    this.containerMeasureService.listAllContainerMeasures().subscribe({
      next: (response) => {
        this.containerMeasures = response;
        console.log('[ContainerMeasureListComponent] Medidas carregadas com sucesso: ', response);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('[ContainerMeasureListComponent] Erro ao carregar medidas: ', error);
        this.isLoading = false;
      }
    });
  }

  searchById(): void {
    if (!this.id) return;
    this.isLoading = true;
    console.log(`[ContainerMeasureListComponent][searchById] Iniciando busca por ID=${this.id}`);
    this.containerMeasureService.getById(this.id).subscribe({
      next: (response) => {
        console.log(`[ContainerMeasureListComponent][searchById] Resultado ID=${this.id}:`, response);
        this.containerMeasures = [response];
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`[ContainerMeasureListComponent][searchById] Erro ao buscar ID=${this.id}:`, error);
        this.containerMeasures = [];
        this.isLoading = false;
      }
    });
  }

  searchWithFilters(): void {
    console.log('[ContainerMeasureListComponent][searchWithFilters] Iniciando busca com filtros:', {
      category: this.category,
      type: this.type,
      active: this.active
    });
    this.isLoading = true;
    this.containerMeasureService.filterContainerMeasures(this.category, this.type, this.active).subscribe({
      next: (response) => {
        console.log('[ContainerMeasureListComponent][searchWithFilters] Resultado filtrado:', response);
        this.containerMeasures = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('[ContainerMeasureListComponent][searchWithFilters] Erro ao buscar com filtros:', error);
        this.isLoading = false;
      }
    });
  }

  clearFilters(): void {
    this.id = undefined;
    this.category = undefined;
    this.type = undefined;
    this.active = undefined;
    this.loadAll();
  }

}
