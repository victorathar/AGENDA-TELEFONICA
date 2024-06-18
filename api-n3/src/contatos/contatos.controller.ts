import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { Contato } from '@prisma/client';

@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @Post()
  async create(@Body() data: Contato) {
    return this.contatosService.create(data);
  }

  @Get()
  async findAll() {
    return this.contatosService.findAll();
  }

  @Get(':id')
  async findContactById(@Param('id') id: string) {
    return this.contatosService.findOne(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.contatosService.delete(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() contato: any) {
    return this.contatosService.update(parseInt(id), contato);
  }
}
