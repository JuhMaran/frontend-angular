import { Routes } from '@angular/router';
import { ContainerMeasureListComponent } from './features/container-measures/presentation/pages/list/container-measure-list/container-measure-list.component';

/**
 * Usado para o roteamento do cliente (Browser).
 */
export const routes: Routes = [
    {
        path: 'app/container-measures', // URL da rota no navegador
        component: ContainerMeasureListComponent
    },
    {
        path: '',
        redirectTo: 'app/container-measures',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'app/container-measures'
    }
];
