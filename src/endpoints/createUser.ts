import { Request, Response } from "express";
import { Turma } from "../types/Classes";
import connection from "../connection";


export const createUser = async (req: Request,res: Response) => {
    try {
        const novaTurma: Turma = new Turma(Date.now().toString(), req.body.nome, req.body.modulo)
        if(!novaTurma){
            res.statusCode = 422
            throw new Error("Nome e módulo são obrigatórios")
        }
       const turma =  await connection("turma")
       
        .insert(novaTurma)
        res.status(201).send("Turma criada com sucesso!")

    } catch (error: any) {
    if(error.code === "ER_DUP_ENTRY"){
        res.status(500).send({ message: "Uma turma com esse nome já existe" })
    } else {
        res.send(error)
    }
    }
}