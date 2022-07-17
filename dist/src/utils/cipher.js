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
const mapper_utils_1 = require("./mapper.utils");
const AWS = require('aws-sdk');
class Cipher {
    constructor() {
        this.kms = new AWS.KMS();
    }
    encrypt(keyId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                KeyId: keyId,
                Plaintext: data,
            };
            const encrypted = yield this.kms.encrypt(params).promise();
            return `hidden:${encrypted.CiphertextBlob.toString('base64')}`;
        });
    }
    decrypt(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.startsWith('hidden:')) {
                const params = {
                    CiphertextBlob: Buffer.from(data.split(':')[1], 'base64'),
                };
                const decrypted = yield this.kms.decrypt(params).promise();
                return decrypted.Plaintext.toString('utf-8');
            }
            return data;
        });
    }
    decryptObject(object) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mapper_utils_1.mapper(object, this.decrypt.bind(this), 'string');
        });
    }
    encryptObject(object) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mapper_utils_1.mapper(object, this.encrypt.bind(this), 'string');
        });
    }
}
exports.default = Cipher;
//# sourceMappingURL=cipher.js.map