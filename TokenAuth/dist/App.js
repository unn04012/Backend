"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.application = express_1.default();
        this.router();
    }
    App.prototype.router = function () {
        this.application.get('/', function (req, res) {
            res.send('hello!');
        });
    };
    return App;
}());
exports.default = App;
