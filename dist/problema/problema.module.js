"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemaModule = void 0;
const prisma_service_1 = require("../database/prisma.service");
const problema_controller_1 = require("./problema.controller");
const common_1 = require("@nestjs/common");
const problema_service_1 = require("./problema.service");
let ProblemaModule = class ProblemaModule {
};
ProblemaModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [problema_controller_1.ProblemaController],
        providers: [problema_service_1.ProblemaService, prisma_service_1.PrismaService],
    })
], ProblemaModule);
exports.ProblemaModule = ProblemaModule;
//# sourceMappingURL=problema.module.js.map