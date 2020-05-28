"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWord = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWord(request, response) {
    var user = CreateUser_1.default({
        email: "julio@julio.com.br",
        password: "123456",
        techs: ["React", "ReactNative", "NodeJS", { title: "Java", experience: 2 }],
    });
    //return response.json({ message: "HelloWord" });
    return response.json({ user: user });
}
exports.helloWord = helloWord;
