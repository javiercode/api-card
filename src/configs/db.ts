import { DataSource,createConnections } from "typeorm";
import { Movimiento } from "../entities/Movimiento";
import { Categoria } from "../entities/Categoria";
import { Producto } from "../entities/Producto";
import { Rol } from "../entities/Rol";
import { RolUser } from "../entities/RolUser";
import { User } from "../entities/User";
import { Marca } from "../entities/Marca";
import { ProductoQR } from "../entities/ProductoQR";

export const MysqlDataSource = new DataSource({

    type: 'mysql',
    // host: process.env.MYSQLDB_HOST,
    // port: Number(process.env.MYSQLDB_PORT),
    // username: process.env.MYSQLDB_USR,
    // password: process.env.MYSQLDB_PSW,
    // database: process.env.MYSQLDB,
    // host: '127.0.0.1',
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: "",
    // database: 'card',
    // synchronize: false,
    // logging: false,
    url:process.env.MYSQLDB_URL,
    // ssl:true,
    // extra: {
    //      ssl: {
    //          rejectUnauthorized: false,
    //      },
    //  },
    entities: [
        // "./src/entities/*.ts"
        // Movimiento,Categoria,Producto,Rol,RolUser,User,Marca,ProductoQR
        Rol,RolUser,User
    ]
})