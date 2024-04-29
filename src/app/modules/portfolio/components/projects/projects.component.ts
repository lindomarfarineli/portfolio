import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/vfull.png",
      alt: "projeto vida fullstack",
      title: "Vida FullStack",
      width: "100px",
      height: "51px",
      description: "<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>",
      links: [
        {
          name: "Conheça o blog!",
          href: "https://vidafullstack.com.br"
        },
      ]
    }
  ]);
}
