import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  attributes = signal([
    {
      title: 'Attention to Detail',
      icon: 'critical-thinking-wh-v2.png',
      classes: 'bg-card text-primary',
      description:
        'Small things matter — I focus on clean visuals and smooth user interactions.',
      route: '',
    },
    {
      title: 'Problem Solving',
      icon: 'problem-solving-wh.png',
      classes: 'bg-primary text-text',
      description:
        'I create smart solutions that balance usability,performance,and codeSimplicity.',
      route: '',
    },
    {
      title: 'Passion for UI/UX',
      icon: 'ux-design-wh.png',
      classes: 'bg-card text-primary',
      description:
        'I love crafting interfaces that feel intuitive, beautiful, and user-focused.',
      route: '',
    },
  ]);


  skills = signal([
    {
      title: 'HTML',
      icon: 'html5.svg',
      classes: 'bg-card text-primary',
      description:
        'I build clean, semantic, and accessible structures that form the foundation of every web project.',
      route: '',
    },
    {
      title: 'CSS',
      icon: 'css.svg',
      classes: 'bg-primary text-text',
      description:
        'I craft responsive, modern, and visually appealing designs with a deep understanding of layout and animations.',
      route: '',
    },
    {
      title: 'JavaScript',
      icon: 'javascript.svg',
      classes: 'bg-card text-primary',
      description:
        'I develop dynamic, efficient, and interactive web experiences using modern JavaScript best practices.',
      route: '',
    },
    {
      title: 'TypeScript',
      icon: 'typescript.svg',
      classes: 'bg-card text-primary',
      description:
        'I write robust, type-safe code with TypeScript, improving scalability, maintainability, and developer experience.',
      route: '',
    },
    {
      title: 'Angular',
      icon: 'angular.svg',
      classes: 'bg-card text-primary',
      description:
        ' I create scalable and maintainable applications with Angular, focusing on modular architecture and performance optimization.',
      route: '',
    },
  ]);

  showImage(icon: string){
    return icon ? `./assets/images/${icon}` : '';
  }
}
