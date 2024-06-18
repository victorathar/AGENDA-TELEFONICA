import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ContatoService]
})
export class CadastroComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit(): void {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      endereco: new FormControl('')
    });
  }

  get nome() {
    return this.contatoForm.get('nome')!;
  }

  get telefone() {
    return this.contatoForm.get('telefone')!;
  }

  get email() {
    return this.contatoForm.get('email')!;
  }

  get endereco() {
    return this.contatoForm.get('endereco')!;
  }

  async onSubmit() {
    if (this.contatoForm.invalid) {
      return;
    }

    try {
      const modal = document.querySelector("dialog");
      modal?.showModal();

      const data = {
        ...this.contatoForm.value,
        telefone: this.contatoForm.value.telefone.toString()
      };

      await this.contatoService.addContato(data);
    } catch (error) {
      console.error('Erro ao adicionar usuario:', error);
    }
  }

  fechar() {
    this.router.navigate(['/contatos']);
  }
}
