import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  downloadResume(){
     const link = document.createElement('a');
    link.href = 'Resume.pdf'; // path to your resume file
    link.download = 'Manuj_Gupta_Resume.pdf'; // optional custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
