import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list/:category',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-list').then(
        (m) => m.MovieListPageComponent
      ),
    title: 'Movies List',
  },
  {
    path: 'list/genre/:id',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-list').then(
        (m) => m.MovieListPageComponent
      ),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-detail').then(
        (m) => m.MovieDetailPageComponent
      ),
  },
  {
    path: 'search/:query',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-search').then(
        (m) => m.MovieSearchPageComponent
      ),
  },
  {
    path: 'my-movies',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-my-movie-list').then(
        (m) => m.MyMovieListComponent
      ),
  },
  {
    path: '',
    redirectTo: 'list/popular',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('@nx-workshop/shared/feature-not-found-page').then(
        (m) => m.NotFoundPageComponent
      ),
  },
];
