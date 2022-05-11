import { DataTypes, Model } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ConteinerInstance extends Model {
    id: number;
    cliente: number;
    numero_conteiner: string;
    tipo: number;
    status: 'cheio' | 'vazio';
    categoria: 'importacao' | 'exportacao'
}

export const Conteiner = sequelize.define<ConteinerInstance>('Conteiner', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    cliente: {
        type: DataTypes.INTEGER
    },
    numero_conteiner: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'conteiner',
        timestamps: false
    }
);