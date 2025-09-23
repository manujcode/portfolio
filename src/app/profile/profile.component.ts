import { Component } from "@angular/core";
import { ActivatedRoute, RouterLink ,Router} from "@angular/router";


@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.css',
    imports: [RouterLink]

})

export class ProfileComponent{
       
    constructor(private router:Router){

    }


    goToLogin(){
        console.log("come first")
        this.router.navigate(['/login'],{queryParams:{name:'manuj gupta'}})
    }
}