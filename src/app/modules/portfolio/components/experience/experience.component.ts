import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public arrayExperience = signal<IExperiences[]>([
    {
      sumary: {
        strong: "Front Especialista",
        p: "ZUP | SET 2020 - PRESENT"
      },
      text: "<p>Desde setembro de 2020 atuo como Analista de Sistemas especialista na ZUP, destacando-me nas áread de Front e Back-end<p>"
    }
  ]);

}
