import { FlowbiteService } from './../flowbite.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }

  //
  // isDarkMode = false;

  // toggleDarkMode(): void {
  //   this.isDarkMode = !this.isDarkMode;
  //   if (this.isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }

  // /

  // isDarkMode = false;

  // toggleDarkMode(): void {
  //   this.isDarkMode = !this.isDarkMode;

  //   // Change the document's background color
  //   if (this.isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //     document.body.style.backgroundColor = '#1f2937'; // Tailwind's gray-800
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     document.body.style.backgroundColor = '#ffffff'; // White background
  //   }
  // }

  isDarkMode = false;
  navdark: Boolean = true;
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    // Change the body's background color dynamically
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
