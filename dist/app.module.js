"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const prisma_service_1 = require("./database/prisma.service");
const common_1 = require("@nestjs/common");
const problema_module_1 = require("./problema/problema.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const app_service_1 = require("./app.service");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            problema_module_1.ProblemaModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            platform_express_1.MulterModule.register({ dest: './files' }),
        ],
        controllers: [],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            prisma_service_1.PrismaService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map