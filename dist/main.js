"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
async function bootstrap() {
    const port = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.enableCors();
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map