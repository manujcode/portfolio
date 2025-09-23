import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HomeComponent } from "../home/home.component";
import { EducationComponent } from "../education/education.component";
// import { ExperinceComponent } from "../projects/project.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-portfolio',
  imports: [NavComponent, HomeComponent, EducationComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
