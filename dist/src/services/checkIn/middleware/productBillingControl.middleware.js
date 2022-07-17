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
const lodash_1 = require("lodash");
exports.ProductBillingControlMiddleware = (app) => (req, _res, next) => __awaiter(this, void 0, void 0, function* () {
    const listData = req.body.listOfProductSale;
    if (!lodash_1.isEmpty(listData)) {
        listData.map((productList) => __awaiter(this, void 0, void 0, function* () {
            if (productList.productType === 1) {
                yield app.service('products').get(productList.product).then((res) => __awaiter(this, void 0, void 0, function* () {
                    const quantityTotal = Number(res.quantity - productList.quantity);
                    yield app.service('products').update(productList.product, {
                        quantity: quantityTotal,
                    }).then((res) => __awaiter(this, void 0, void 0, function* () {
                        if (res.quantity === 0) {
                            yield app.service('products').update(productList.product, {
                                enabled: false,
                            });
                        }
                    }));
                }));
            }
        }));
    }
    next();
});
//# sourceMappingURL=productBillingControl.middleware.js.map