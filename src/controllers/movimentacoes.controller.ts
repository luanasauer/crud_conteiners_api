import { Request, Response } from "express";
import { Conteiner } from "../models/Conteiner";
import { Movimentacao } from "../models/Movimentacao";

export const getMovimentacoes = async (req: Request, res: Response) => {
    const movimentacoes = await Movimentacao.findAll();
    return res.json({ movimentacoes });
}

export const getMovimentacao = async (req: Request, res: Response) => {

    let { id } = req.params;
    let movimentacao = await Movimentacao.findByPk(id);
    if (movimentacao) {
        res.json({ movimentacao });
    } else {
        res.json({ error: "Movimentacão não encontrada" });
    }
}

export const addMovimentacao = async (req: Request, res: Response) => {

    if (req.body.id_conteiner) {

        let newMovimentacao = await Movimentacao.create({
            id: req.body.id,
            id_conteiner: req.body.id_conteiner,
            tipo_movimentacao: req.body.tipo_movimentacao,
            dataHora_Inicio: req.body.dataHora_Inicio,
            dataHora_Fim: req.body.dataHora_Fim,
        });
        res.status(201).json({ newMovimentacao });

    } else {
        res.json({ error: 'Dados não enviados.' });
    }
}

export const updateMovimentacao = async (req: Request, res: Response) => {

    const id: string = req.params.id;
    let { id_conteiner, tipo_movimentacao, dataHora_Inicio, dataHora_Fim } = req.body;
    let movimentacao = await Movimentacao.findByPk(id);

    if (movimentacao) {
        if (req.body.id_conteiner) {
            movimentacao.id_conteiner = id_conteiner;
        }
        if (req.body.tipo_movimentacao) {
            movimentacao.tipo_movimentacao = tipo_movimentacao;
        }
        if (req.body.dataHora_Inicio) {
            movimentacao.dataHora_Inicio = dataHora_Inicio;
        }
        if (req.body.dataHora_Fim) {
            movimentacao.dataHora_Fim = dataHora_Fim;
        }
        await movimentacao.save();
        res.json({ item: movimentacao });

    } else {
        res.json({ error: 'Movimentacao não encontrada' });
    }

    res.json({});
}

export const removeMovimentacao = async (req: Request, res: Response) => {
    let id: string = req.body.id;
    let movimentacao = await Movimentacao.findByPk(id);

    if (movimentacao) {
        await movimentacao.destroy();

    } else {
        res.json({ error: 'Não foi possivel escluir' });

    }

}