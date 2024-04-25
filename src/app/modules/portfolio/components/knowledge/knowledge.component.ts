import { Component, signal } from '@angular/core';
import { iKnowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<iKnowledge[]>([
    {
      src:"assets/icons/knowledge/financial.svg",
      alt:"ícone de conhecimento em finanças"
    },
    {
      src:"assets/icons/knowledge/angular.svg",
      alt:"ícone de conhecimento em angular.js"
    },
    {
      src:"assets/icons/knowledge/css3.svg",
      alt:"ícone de conhecimento em css3"
    },
    {
      src:"assets/icons/knowledge/html5.svg",
      alt:"ícone de conhecimento em html5"
    },
    {
      src:"assets/icons/knowledge/javascript.svg",
      alt:"ícone de conhecimento em javascript"
    },
    {
      src:"assets/icons/knowledge/nodejs.svg",
      alt:"ícone de conhecimento em nodeJs"
    },
    {
      src:"assets/icons/knowledge/sass.svg",
      alt:"ícone de conhecimento em sass"
    },
  ]);

}
