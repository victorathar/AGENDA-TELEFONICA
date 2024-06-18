"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContatosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContatosService = class ContatosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const contatos = await this.prisma.contato.create({ data });
        return contatos;
    }
    async findAll() {
        return this.prisma.contato.findMany();
    }
    async update(id, contato) {
        try {
            const contatoAtualizado = await this.prisma.contato.update({
                where: { id: id },
                data: contato,
            });
            return contatoAtualizado;
        }
        catch (error) {
            throw new common_1.NotFoundException('Contato não encontrado');
        }
    }
    async findOne(id) {
        return this.prisma.contato.findUnique({ where: { id } });
    }
    async delete(id) {
        const contact = await this.findOne(id);
        if (!contact) {
            throw new Error('Contato não encontrado');
        }
        return this.prisma.contato.delete({ where: { id } });
    }
};
exports.ContatosService = ContatosService;
exports.ContatosService = ContatosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContatosService);
//# sourceMappingURL=contatos.service.js.map