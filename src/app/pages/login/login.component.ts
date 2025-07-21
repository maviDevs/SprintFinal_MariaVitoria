import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  imports: [NavBarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   loginService = inject(LoginService)
  router = inject(Router)

  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
  })

  onSubmitLogin() {
    const { nome, senha } = this.loginForm.value

    if (!this.loginForm.valid || !nome || !senha) {
      alert("Existem campos não preenchidos!")
      return
    }

    this.loginService.login(nome, senha).subscribe({
      error: (err) => {

        if (err.status === 401) {
          alert("O usuário ou senha estão incorretos!")
          return
        }

        alert("Erro ao conectar com o servidor, tente novamente mais tarde")
      },
      
      next: () => {
        this.router.navigate(["/receitas"])
      }

    })
  }

}