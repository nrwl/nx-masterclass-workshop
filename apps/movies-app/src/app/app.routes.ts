import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list/:category',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-list').then(
        m => m.MovieListPageComponent
      ),
    title: 'Movies List',
  },
  {
    path: 'list/genre/:id',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-list').then(
        m => m.MovieListPageComponent
      ),
    title: 'Movies Genre .'
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-detail').then(
        m => m.MovieDetailPageComponent
      ),
    title: 'Movie Id'
  },
  {
    path: 'search/:query',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-movie-search').then(
        m => m.MovieSearchPageComponent
      ),
    title: 'Search Movie'
  },
  {
    path: 'my-movies',
    loadComponent: () =>
      import('@nx-workshop/movies/feature-my-movie-list').then(
        m => m.MyMovieListComponent
      ),
    title: 'My Movies'
  },
  {
    path: '',
    redirectTo: 'list/popular',
    pathMatch: 'full',
    title: 'Popular Movies'
  },
  {
    path: '**',
    loadComponent: () =>
      import('@nx-workshop/shared/feature-not-found-page').then(
        m => m.NotFoundPageComponent
      ),
    title: 'Page Not Found'
  },
];
