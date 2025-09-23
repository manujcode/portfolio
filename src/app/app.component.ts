import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, RouterLinkActive} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from "./profile/profile.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Manuj Gupta';
   


}
