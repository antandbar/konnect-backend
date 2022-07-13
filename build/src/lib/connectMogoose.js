'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbMongodbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbMongodbConnection = () => {
    // en caso de error en la conexión
    mongoose_1.default.connection.on('error', (err) => {
        console.log('Error de conexión a MongoDB', err);
        process.exit(1);
    });
    // evento al conectar primea vez la BBDD
    mongoose_1.default.connection.once('open', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Conectado a MongoDB en la BD:', mongoose_1.default.connection.name);
    }));
    /*   mongoose.connect((process.env.URI!), {
        useNewUrlParser: true,
      } as mongoose.ConnectOptions);
    }; */
    mongoose_1.default.connect(process.env.NODE_ENV === 'development'
        ? process.env.URI_LOCAL
        : process.env.URI, {
        useNewUrlParser: true,
    });
};
exports.dbMongodbConnection = dbMongodbConnection;
