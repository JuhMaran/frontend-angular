import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Usado para Server-Side Rendering (SSR)
 * Apenas rotas "catch-all" ou rtoas que devem ser pré-renderizadas pelo servidor
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
