import { Contato } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ContatosService {
    private prisma;
    constructor(prisma: PrismaService);
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
    update(id: number, contato: any): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        nome: string;
        telefone: string;
        email: string;
        endereco: string;
    }>;
}
