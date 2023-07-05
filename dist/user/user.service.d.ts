import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): Prisma.Prisma__UsuarioClient<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        name: string;
        company: boolean;
    }, unknown, never> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
