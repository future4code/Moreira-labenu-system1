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
const __1 = require("..");
const Classes_1 = require("../types/Classes");
__1.app.post(`/turmas`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turma = new Classes_1.Turma(Date.now().toString(), req.body.nome, req.body.modulo);
    console.log(turma);
    try {
        yield (0, __1.connection)("turma")
            .insert({
            turma
        });
        res.send("Success!");
    }
    catch (error) {
        console.error("Erro", error);
        return null;
    }
}));
__1.app.get("/turmas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('rodei');
}));
