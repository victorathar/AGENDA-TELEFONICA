import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { CommonModule } from '@angular/common';
import { EditarComponent } from '../editar/editar.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatos-salvos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contatos-salvos.component.html',
  styleUrl: './contatos-salvos.component.css'
})
export class ContatosSalvosComponent {
  contatos: any[] = [];

  contatoIdParaExcluir!: number;
  @ViewChild('deleteDialog') deleteDialog!: ElementRef<HTMLDialogElement>;

  constructor(private contatoService: ContatoService, private router: Router) { }

  async ngOnInit() {
    try {
      this.contatos = await this.contatoService.getContato();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  openModal(id: number) {
    this.contatoIdParaExcluir = id;
    const modal = this.deleteDialog.nativeElement;
    modal.showModal();
  }

  closeModal() {
    const modal = this.deleteDialog.nativeElement;
    modal.close();
  }

  async confirmDelete() {
    try {
      await this.contatoService.removeContato(this.contatoIdParaExcluir);
      this.contatos = this.contatos.filter(contato => contato.id !== this.contatoIdParaExcluir);
      this.closeModal();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  editarContato(id: number): void {
    this.router.navigate(['/editar', id]);
  }


}
