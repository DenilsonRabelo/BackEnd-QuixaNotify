/// <reference types="multer" />
import { ProblemaDto } from './dto/create-problema-dto';
import { ProblemaService } from './problema.service';
import { GetEnderecoDto } from './dto/get-endereco-dto';
import { User } from 'src/user/entities/user.entity';
export declare class ProblemaController {
    private readonly problemaService;
    constructor(problemaService: ProblemaService);
    posProblema(data: ProblemaDto, user: User, file: Express.Multer.File): Promise<{
        message: string;
    }>;
    getImagem(img: any, res: any): Promise<any>;
    getProblemas(): Promise<({
        usuario: import("@prisma/client/runtime").GetResult<{
            id: number;
            email: string;
            password: string;
            name: string;
            company: boolean;
        }, unknown, never> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        titulo: string;
        longitude: string;
        latitude: string;
        endereco: string;
        tipo_problema: string;
        nivel_gravidade: number;
        votacao: number;
        descricao: string;
        imagem: string;
        created_at: Date;
        usuarioId: number;
        finalized: boolean;
    }, unknown, never> & {})[] | {
        message: string;
        error: any;
    }>;
    getProblemaCordenada(getEnderecoDto: GetEnderecoDto): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        titulo: string;
        longitude: string;
        latitude: string;
        endereco: string;
        tipo_problema: string;
        nivel_gravidade: number;
        votacao: number;
        descricao: string;
        imagem: string;
        created_at: Date;
        usuarioId: number;
        finalized: boolean;
    }, unknown, never> & {}) | {
        message: string;
        error: any;
    }>;
    votar(voto: any): Promise<"sucesso" | {
        message: string;
        error: any;
    }>;
    finalizar(id: any): Promise<{
        message: string;
    }>;
    getProblema(id: any): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        titulo: string;
        longitude: string;
        latitude: string;
        endereco: string;
        tipo_problema: string;
        nivel_gravidade: number;
        votacao: number;
        descricao: string;
        imagem: string;
        created_at: Date;
        usuarioId: number;
        finalized: boolean;
    }, unknown, never> & {}) | {
        message: string;
        error: any;
    }>;
    getProblemaComentario(id: any): Promise<({
        Comentario: (import("@prisma/client/runtime").GetResult<{
            id: number;
            problemaId: number;
            idusuario: number;
            nome: string;
            comentario: string;
        }, unknown, never> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        titulo: string;
        longitude: string;
        latitude: string;
        endereco: string;
        tipo_problema: string;
        nivel_gravidade: number;
        votacao: number;
        descricao: string;
        imagem: string;
        created_at: Date;
        usuarioId: number;
        finalized: boolean;
    }, unknown, never> & {}) | {
        message: string;
        error: any;
    }>;
    posComentario(comentario: any, user: User): Promise<{
        message: string;
    }>;
    deleteProblema(id: any, user: User): Promise<{
        message: string;
        problema: import("@prisma/client/runtime").GetResult<{
            id: number;
            titulo: string;
            longitude: string;
            latitude: string;
            endereco: string;
            tipo_problema: string;
            nivel_gravidade: number;
            votacao: number;
            descricao: string;
            imagem: string;
            created_at: Date;
            usuarioId: number;
            finalized: boolean;
        }, unknown, never> & {};
    } | {
        message: string;
        problema?: undefined;
    }>;
}
