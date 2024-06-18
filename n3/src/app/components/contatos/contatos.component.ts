import { Component } from '@angular/core';
import { ContatosSalvosComponent } from "../contatos-salvos/contatos-salvos.component";

@Component({
    selector: 'app-contatos',
    standalone: true,
    templateUrl: './contatos.component.html',
    styleUrl: './contatos.component.css',
    imports: [ContatosSalvosComponent]
})
export class ContatosComponent {

}
