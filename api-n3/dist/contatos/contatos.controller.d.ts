import { ContatosService } from './contatos.service';
import { Contato } from '@prisma/client';
export declare class ContatosController {
    private readonly contatosService;
    constructor(contatosService: ContatosService);
    create(data: Contato): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }[]>;
    findContactById(id: string): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }>;
    delete(id: string): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }>;
    update(id: string, contato: any): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }>;
}
