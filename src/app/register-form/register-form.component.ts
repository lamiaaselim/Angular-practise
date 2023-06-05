import { Component , OnInit} from '@angular/core';
import {Register} from '../register';
import { EnrollService } from './../enroll.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  websites = ["Facebook ", "Twitter", "Google"];
  registerModel = new Register ("Lamiaa", "Lamiaa@gmail.com", "2311", "2311", "Facebook");
  constructor(private enrollService: EnrollService) {}

  // Bouns
  get passwordsMatch(): boolean {
    return this.registerModel.password === this.registerModel.confirmPassword;
  }

  ngOnInit() {}

  onRegister(){
    this.enrollService.userEnrollments(this.registerModel).subscribe({
      next: data => console.log(data),
      error: (error) => console.log(error)
    })
    // console.log(this.registerModel)
  }
}
