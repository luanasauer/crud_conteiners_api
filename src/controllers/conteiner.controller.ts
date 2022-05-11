import { Request, Response } from "express";
import { Conteiner } from "../models/Conteiner";
import { Movimentacao } from "../models/Movimentacao";

export const getConteiners = async (req: Request, res: Response) => {
    const conteiners = await Conteiner.findAll();
    return res.json({ conteiners });
}

export const getConteiner = async (req: Request, res: Response) => {

    let { id } = req.params;
    let conteiner = await Conteiner.findByPk(id);
    if (conteiner) {
        res.json({ conteiner });
    } else {
        res.json({ error: "Conteiner não encontrado" });
    }
}

export const addConteiner = async (req: Request, res: Response) => {

    let { cliente, numero_conteiner, tipo, status, categoria } = req.body;
    if (cliente) {
        let newConteiner = await Conteiner.create({
            cliente,
            numero_conteiner,
            tipo,
            status,
            categoria
        });
        res.status(201).json({ newConteiner });
    } else {
        res.json({ error: "Conteiner não cadastrado" });
    }
}

export const updateConteiner = async (req: Request, res: Response) => {

    const id = req.params.id;
    let { cliente, numero_conteiner, tipo, status, categoria } = req.body;
    let conteiner = await Conteiner.findByPk(id);

    if (conteiner) {
        if (req.body.cliente) {
            conteiner.cliente = cliente;
        }
        if (req.body.numero_conteiner) {
            conteiner.numero_conteiner = numero_conteiner;
        }
        if (req.body.tipo) {
            conteiner.tipo = tipo;
        }
        if (req.body.status) {
            conteiner.status = status;
        }
        if (req.body.categoria) {
            conteiner.categoria = categoria;
        }

        await conteiner.save();
        res.json({ item: conteiner });
    } else {
        res.json({ error: 'Conteiner não encontrado' });
    }
}

export const removeConteiner = async (req: Request, res: Response) => {
    let id: string = req.body.id;
    let conteiner = await Conteiner.findByPk(id);
    let movimentacoes = await Movimentacao.findOne({ where: { id_conteiner: id } });

    if (conteiner) {
        if (!movimentacoes) {
            await conteiner.destroy();
        } else{
            res.json({error: 'Não foi possivel escluir pois existem movimentações com este conteiner'})
        }
    }else{
        res.json({error: 'Não foi possivel escluir'});

    }

}