"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const glob = require("glob");
class MassiveImport {
    static getInstance(from) {
        const importedFiles = [];
        glob.sync(from).forEach((fileName) => {
            const file = require(path.resolve(fileName));
            if (file['default']) {
                const instance = file['default'];
                importedFiles.push(instance);
            }
        });
        return importedFiles;
    }
}
exports.default = MassiveImport;
//# sourceMappingURL=masiveImport.js.map