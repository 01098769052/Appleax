import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutt',
  imports: [],
  templateUrl: './aboutt.component.html',
  styleUrl: './aboutt.component.css',
})
export class AbouttComponent {
  cards = [
    {
      title: 'Item 1',
      description: 'This is the first card.',
      image: '/images/6.jpg',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: '/images/5.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      image: '/images/bg6.jpg',
    },
    {
      title: 'Card 4',
      description: 'This is the third card.',
      image: '/images/23.jpg',
    },
    {
      title: 'Card 5',
      description: 'This is the third card.',
      image: '/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg',
    },
    {
      title: 'Card 6',
      description: 'This is the third card.',
      image: '/images/bg2.jpg',
    },
    {
      title: 'Card 7',
      description: 'This is the third card.',
      image: '/images/full-screen-smartphone-mockup-design_53876-65968.webp',
    },
    {
      title: 'Card 8',
      description: 'This is the third card.',
      image: '/images/smartphone-mockup_1310-812.webp',
    },
    {
      title: 'Card 9',
      description: 'This is the third card.',
      image: '/images/phone-mockup-brown-background-vector_53876-164914.jpg',
    },
  ];
}
