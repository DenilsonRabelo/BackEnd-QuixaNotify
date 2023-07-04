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
exports.ProblemaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let ProblemaService = class ProblemaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async postProblema(problema, idUsuario, file) {
        try {
            const { titulo, longitude, latitude, endereco, tipo_problema, nivel_gravidade, votacao, descricao } = problema;
            await this.prisma.problema.create({
                data: {
                    titulo: String(titulo),
                    longitude: String(longitude),
                    latitude: String(latitude),
                    endereco: String(endereco),
                    tipo_problema: String(tipo_problema),
                    nivel_gravidade: Number(nivel_gravidade),
                    votacao: Number(votacao),
                    descricao: String(descricao),
                    imagem: String(file.filename),
                    usuario: {
                        connect: { id: Number(idUsuario) }
                    },
                }
            });
            return { message: 'Problema criado com sucesso' };
        }
        catch (error) {
            return { message: 'aconteceu algum problema' + error };
        }
    }
    async getProblemas() {
        try {
            const problemas = await this.prisma.problema.findMany({
                include: { usuario: true },
            });
            return problemas;
        }
        catch (error) {
            return { message: 'aconteceu algum problema', error };
        }
    }
    async getEnderecoCordenada(cords) {
        try {
            const Problema = await this.prisma.problema.findFirst({
                where: {
                    longitude: `${cords.longitude}`,
                    latitude: `${cords.latitude}`
                }
            });
            return Problema;
        }
        catch (error) {
            return { message: 'aconteceu algum problema', error };
        }
    }
    async votar(voto) {
        try {
            const Problema = await this.prisma.problema.update({
                where: {
                    id: voto.id
                },
                data: {
                    votacao: Number(`${voto.votacao + 1}`),
                },
            });
            return "sucesso";
        }
        catch (error) {
            return { message: 'aconteceu algum problema', error };
        }
    }
    async getProblema(id) {
        try {
            const problema = await this.prisma.problema.findFirst({
                where: {
                    id: Number(`${id}`)
                }
            });
            return problema;
        }
        catch (error) {
            return { message: 'aconteceu algum problema', error };
        }
    }
    async getProblemaComentario(id) {
        try {
            const problema = await this.prisma.problema.findFirst({
                where: {
                    id: Number(`${id}`)
                },
                include: {
                    Comentario: true
                }
            });
            return problema;
        }
        catch (error) {
            return { message: 'aconteceu algum problema', error };
        }
    }
    async postComentario(comentario, usuario) {
        try {
            const { id, name, } = usuario;
            const comentarios = await this.prisma.comentario.create({
                data: {
                    problemaId: comentario.idproblema,
                    nome: name,
                    idusuario: id,
                    comentario: String(comentario.comentario)
                }
            });
            return { message: 'Problema criado com sucesso' };
        }
        catch (error) {
            return { message: 'aconteceu algum problema' + error };
        }
    }
    async finalizar(id) {
        try {
            await this.prisma.problema.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    finalized: true
                }
            });
            return { message: "Problema finalizado com sucesso" };
        }
        catch (error) {
            return { message: 'Aconteceu algum problema' + error.message };
        }
    }
    async deleteProblema(id, user) {
        try {
            if (id == user.id) {
                const problema = await this.prisma.problema.delete({
                    where: {
                        id: Number(`${id}`)
                    },
                });
                return { message: "Problema deletado com sucesso", problema };
            }
        }
        catch (error) {
            return { message: 'Aconteceu algum problema' + error.message };
        }
    }
};
ProblemaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProblemaService);
exports.ProblemaService = ProblemaService;
//# sourceMappingURL=problema.service.js.map