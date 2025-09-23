import { NgFor,NgIf ,NgSwitch, NgSwitchCase,NgSwitchDefault} from '@angular/common';
import { Component ,computed,effect,Signal,signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
//  val =""
//  getval(val:string){
//     this.val=val
//  }
//  setval(){
//   this.val="manuj@gmail.com"
//  }
// display=true;

// hide(){
//   this.display=false
// }

// show(){
//   this.display=true
// }
// togle(){
//   this.display = !this.display
// }
   
// color = 'red';
// updateColor(val:string){
//   this.color=val

// }

//  students =[
//   { name :'anil',age : 21,email:"anil@gmail.com"},
//   { name :'sam',age : 21,email:"anil@gmail.com"},
//   { name :'deepak',age : 21,email:"anil@gmail.com"},
//   { name :'kumar',age : 21,email:"anil@gmail.com"}
//  ]
   
  // count = signal(0);
  // countR:Signal<number> = computed(()=>300);
  // x =5
 
  // constructor(){
  //   effect(()=>{

  //     console.log(`the count val is ` ,this.count())
  //   }
  //   )
  // }
// fun(){ 
//   this.count.set(this.count()+1);
//   this.count.update(val=>val+1)
//     console.log("this count function: " +this.count());

//     // this.countR.set(400)
//   }
  
// x = signal(10)
// y = signal(20);
// z = computed(()=>this.x()+this.y())

// fun(){
//   console.log('value of z is',this.z() );
//   this.x.set(40)
//   console.log('value of z is after change',this.z());

// }
// color = 'red'
//  names =[
//   'manuj',
//   'chand',
//   'deepak'
//  ]

// color = 'reds'
// chsngeColor(){
//   this.color='green'
// }
userName:string|null =""
    constructor(private route:ActivatedRoute){
  
    }

    ngOnInit(){
        // let name = this.route.snapshot.paramMap.get('name')
        // console.log(name,"ksnvkjd")
        // this.userName=name

        this.route.queryParams.subscribe(params=>{
          this.userName=params['name']
         })

    }


}
