import { Request, Response } from "express";
import connection from "../connection";


export const mudaModulo = async (req: Request,res: Response) => {
    try {
       const turma =  await connection("turma")
       
        .where({nome: req.params.nome})
        .update({modulo: req.body.newModulo})

        res.status(201).send("Módulo da turma alterado!")

    } catch (error: any) {
        res.send({message: error.sqlMessage})
    }
}