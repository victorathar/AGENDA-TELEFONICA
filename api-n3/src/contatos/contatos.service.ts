import { Injectable, NotFoundException } from '@nestjs/common';
import { Contato, Prisma } from '@prisma/client';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContatosService {


  constructor(private prisma: PrismaService) { }

  async create(data: Contato) {
    const contatos = await this.prisma.contato.create({ data });
    return contatos;
  }

  async findAll() {
    return this.prisma.contato.findMany();
  }

  async update(id: number, contato: any) {
    try {
      const contatoAtualizado = await this.prisma.contato.update({
        where: { id: id },
        data: contato,
      });
      return contatoAtualizado;
    } catch (error) {
      throw new NotFoundException('Contato não encontrado');
    }
  }

  async findOne(id: number) {
    return this.prisma.contato.findUnique({ where: { id } });
  }

  async delete(id: number) {
    const contact = await this.findOne(id);
    if (!contact) {
      throw new Error('Contato não encontrado');
    }
    return this.prisma.contato.delete({ where: { id } });
  }
}
