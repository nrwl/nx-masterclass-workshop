import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { MovieService } from '@nx-workshop/movies/data-access-movies';
import { map, switchMap } from 'rxjs';
import { StarRatingComponent } from '@nx-workshop/shared/ui-star-rating';
import { MovieImagePipe } from '@nx-workshop/shared/utils';

import { DetailGridComponent } from '@nx-workshop/shared/ui';

// some thing else

@Component({
  selector: 'movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DetailGridComponent,
    StarRatingComponent,
    FastSvgComponent,
    MovieImagePipe,
  ],
})
export class MovieDetailPageComponent {
  private movieService = inject(MovieService);
  private activatedRoute = inject(ActivatedRoute);
  private location = inject(Location);

  movie$ = this.activatedRoute.params.pipe(
    map((params) => params['id']),
    switchMap((id) => this.movieService.getMovieById(id))
  );

  goBack() {
    this.location.back();
  }
}
