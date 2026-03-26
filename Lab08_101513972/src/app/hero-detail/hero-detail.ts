import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  imports: [RemoveSpacesPipe, FormsModule],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css',
})
export class HeroDetail {
  @Input() hero?: Hero;
}
