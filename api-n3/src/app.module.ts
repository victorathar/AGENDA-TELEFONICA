import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ContatosModule } from './contatos/contatos.module';

@Module({
  imports: [ContatosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
