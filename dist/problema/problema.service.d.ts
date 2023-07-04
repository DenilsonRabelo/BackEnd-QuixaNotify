import { PrismaService } from 'src/database/prisma.service';
import { GetEnderecoDto } from './dto/get-endereco-dto';
export declare class ProblemaService {
    private prisma;
    constructor(prisma: PrismaService);
    postProblema(problema: any, idUsuario: any, file: any): Promise<{
        message: string;
    }>;
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
    getEnderecoCordenada(cords: GetEnderecoDto): Promise<(import("@prisma/client/runtime").GetResult<{
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
    postComentario(comentario: any, usuario: any): Promise<{
        message: string;
    }>;
    finalizar(id: any): Promise<{
        message: string;
    }>;
    deleteProblema(id: any, user: any): Promise<{
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
