"use strict";
/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
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
exports.ScriptMockField = void 0;
const appUtils_1 = require("../components/appUtils");
/**
 * Parsed MockField object
 * from the script file
 */
class ScriptMockField {
    constructor(init) {
        // ------------- JSON ----------------------//
        this.name = "";
        this.pattern = "";
        this.excludedRegex = "";
        this.includedRegex = "";
        if (init) {
            this.initialize(init);
        }
    }
    // ------------ Methods ----------------
    initialize(init) {
        if (init) {
            appUtils_1.AppUtils.objectAssignSafe(this, init);
        }
    }
    isValid() {
        return true;
    }
}
__decorate([
    appUtils_1.NonSerializable(),
    __metadata("design:type", String)
], ScriptMockField.prototype, "errorMessage", void 0);
__decorate([
    appUtils_1.NonSerializable(),
    __metadata("design:type", String)
], ScriptMockField.prototype, "$$hashKey", void 0);
exports.ScriptMockField = ScriptMockField;
//# sourceMappingURL=scriptMockField.js.map