import { Component, OnInit } from '@angular/core';
import {
  NgIf,
  NgFor, 
  UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent,
    RouterModule
  ],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
