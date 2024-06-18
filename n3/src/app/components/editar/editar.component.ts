import { Component, Input, OnInit, input } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Console } from 'console';




@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  @Input() btnSalvar!: string;
  contatoForm!: FormGroup;
  contato: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    this.contatoForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]), // Adicionei uma validação de email
      endereco: new FormControl('')
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchContato(id);
    }
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

  async fetchContato(id: string): Promise<void> {
    try {
      this.contato = await this.contatoService.getContatos(id);
      this.contatoForm.patchValue(this.contato); // Atualiza o formulário com os dados do contato
    } catch (error) {
      console.error('Erro ao buscar contato:');
    }
  }

  async onSubmit() {
    if (this.contatoForm.invalid) {
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        await this.contatoService.updateContato(id, this.contatoForm.value);
        this.router.navigate(['/contatos']);
      } catch (error) {
        console.error('Erro ao atualizar contato:');
      }
    }
  }
}
