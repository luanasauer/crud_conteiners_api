import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface MovimentacaoInstance extends Model {
    id: number;
    id_conteiner: number;
    tipo_movimentacao: string;
    dataHora_Inicio: Date;
    dataHora_Fim: Date;
}

export const Movimentacao = sequelize.define<MovimentacaoInstance>('Movimentacao', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_conteiner: {
        type: DataTypes.INTEGER
    },
    tipo_movimentacao: {
        type: DataTypes.STRING
    },
    dataHora_Inicio: {
        type: DataTypes.DATE
    },
    dataHora_Fim: {
        type: DataTypes.DATE
    }
},
    {
        tableName: 'movimentacao',
        timestamps: false
    }
)