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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemaController = void 0;
const create_problema_dto_1 = require("./dto/create-problema-dto");
const common_1 = require("@nestjs/common");
const problema_service_1 = require("./problema.service");
const get_endereco_dto_1 = require("./dto/get-endereco-dto");
const is_public_decorator_1 = require("../auth/decorators/is-public.decorator");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let ProblemaController = class ProblemaController {
    constructor(problemaService) {
        this.problemaService = problemaService;
    }
    async posProblema(data, user, file) {
        return this.problemaService.postProblema(data, user.id, file);
    }
    async getImagem(img, res) {
        return res.sendFile(img, { root: 'files' });
    }
    async getProblemas() {
        return this.problemaService.getProblemas();
    }
    async getProblemaCordenada(getEnderecoDto) {
        return this.problemaService.getEnderecoCordenada(getEnderecoDto);
    }
    async votar(voto) {
        return this.problemaService.votar(voto);
    }
    async finalizar(id) {
        return await this.problemaService.finalizar(id);
    }
    async getProblema(id) {
        return await this.problemaService.getProblema(id);
    }
    async getProblemaComentario(id) {
        return await this.problemaService.getProblemaComentario(id);
    }
    async posComentario(comentario, user) {
        return this.problemaService.postComentario(comentario, user);
    }
    async deleteProblema(id, user) {
        return await this.problemaService.deleteProblema(id, user);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagem', {
        storage: (0, multer_1.diskStorage)({
            destination: './files',
            filename(req, file, callback) {
                const UniqueSufix = Date.now() + -+Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${UniqueSufix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_problema_dto_1.ProblemaDto,
        user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "posProblema", null);
__decorate([
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.Get)(':img'),
    __param(0, (0, common_1.Param)('img')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "getImagem", null);
__decorate([
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "getProblemas", null);
__decorate([
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.Get)('cordenadas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_endereco_dto_1.GetEnderecoDto]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "getProblemaCordenada", null);
__decorate([
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.Put)('voto'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "votar", null);
__decorate([
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.Put)('/finalizar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "finalizar", null);
__decorate([
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.Get)('/problema/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "getProblema", null);
__decorate([
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.Get)('/comentario/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "getProblemaComentario", null);
__decorate([
    (0, common_1.Post)('/comentario'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "posComentario", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ProblemaController.prototype, "deleteProblema", null);
ProblemaController = __decorate([
    (0, common_1.Controller)('problemas'),
    __metadata("design:paramtypes", [problema_service_1.ProblemaService])
], ProblemaController);
exports.ProblemaController = ProblemaController;
//# sourceMappingURL=problema.controller.js.map