"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression = require("compression");
const cors = require("cors");
const createApp_1 = require("./skeleton/createApp");
const BodyParser = require("body-parser");
const app_middlewares_1 = require("./app.middlewares");
const masiveImport_1 = require("./utils/masiveImport");
function buildApp(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield createApp_1.createApp(config);
        app.use(compression());
        app.use(cors());
        app.use(BodyParser.urlencoded({ extended: false }));
        app.use(BodyParser.json());
        app.set('appMiddlewares', app_middlewares_1.default);
        const servicesDir = `${__dirname}/services/**/*.service{.ts,.js}`;
        const services = masiveImport_1.default.getInstance(servicesDir);
        if (services && services.length) {
            services.forEach(service => service.register(app));
        }
        return app;
    });
}
exports.buildApp = buildApp;
//# sourceMappingURL=app.js.map