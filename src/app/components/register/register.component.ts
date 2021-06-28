import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponce } from 'src/app/models/auth-responce';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  form={
    email : "",
    password:""
  }
  error = {
    name: '',
    password: null
  };  


  ngOnInit(): void {
  }

  Register(){
    this.authService.register(this.form.email,this.form.password).subscribe((authResponse: AuthResponce) => {
      localStorage.setItem('token', JSON.stringify(authResponse.token));
      this.router.navigateByUrl(`/`);
      
    })
  }
}
