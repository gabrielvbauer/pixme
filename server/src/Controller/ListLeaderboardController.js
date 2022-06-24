"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLeaderboardController = void 0;
const ListLeaderboardService_1 = require("../Services/ListLeaderboardService");
class ListLeaderboardController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listLeaderboardService = new ListLeaderboardService_1.ListLeaderboardService();
            const pixs = yield listLeaderboardService.execute();
            return res.json(pixs);
        });
    }
}
exports.ListLeaderboardController = ListLeaderboardController;
