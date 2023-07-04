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
exports.ProblemaDto = void 0;
const class_validator_1 = require("class-validator");
class ProblemaDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O Titulo não deve ser vazio.' }),
    (0, class_validator_1.Length)(3, 30),
    __metadata("design:type", String)
], ProblemaDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O longitude não deve ser vazio.' }),
    (0, class_validator_1.Length)(3, 100),
    __metadata("design:type", String)
], ProblemaDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O latitude não deve ser vazio.' }),
    (0, class_validator_1.Length)(3, 100),
    __metadata("design:type", String)
], ProblemaDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O endereço não deve ser vazio.' }),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], ProblemaDto.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O tipo de problema não deve ser vazio.' }),
    (0, class_validator_1.Length)(3, 30),
    __metadata("design:type", String)
], ProblemaDto.prototype, "tipo_problema", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProblemaDto.prototype, "nivel_gravidade", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProblemaDto.prototype, "votacao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "a descrição não pode ser vazio" }),
    __metadata("design:type", String)
], ProblemaDto.prototype, "descricao", void 0);
exports.ProblemaDto = ProblemaDto;
//# sourceMappingURL=create-problema-dto.js.map