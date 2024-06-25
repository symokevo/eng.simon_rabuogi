import { Component } from '@angular/core';
import { HeaderComponent, } from './components/general/header/header.component';
import { GeneralModule } from './components/general/general.module';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, GeneralModule]
})
export class AppComponent {
  title = 'eng_simon_rabuogi';
}
