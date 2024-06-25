import { CvDownloadService } from './../../../services/header/cv-download.service';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './../../../app.routes';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';
import { UntypedFormControl } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({opacity: 0, transform: "translateY(-50px)"}),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"})
            )
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  responsiveMenuVisible: Boolean = false;
  pageYPosition!: number;
  languageFormControl: UntypedFormControl = new UntypedFormControl();
  cvName: string = "";

  constructor(
    private router: Router,
    // private cvDownloadService: CvDownloadService
  ) {}

  ngOnInit(): void {  }

  scroll(el: string) {
    if(document.getElementById(el)){
      document.getElementById(el)?.scrollIntoView({behavior: "smooth"});
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el)?.scrollIntoView({behavior: "smooth"}));
    }
    this.responsiveMenuVisible = false;
  }

  // Implement the downloadCV method

  @HostListener('window:scroll', ['getScrollPosition($event)'])
    getScrollPosition(event: any) {
      this.pageYPosition = window.pageYOffset;
    }

  // Method to trigger the download of the CV
  // triggerDownloadCV() {
  //   this.cvDownloadService.downloadCV();
  // }

}
