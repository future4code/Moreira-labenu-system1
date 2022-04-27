import { Request, Response } from "express";
import { Usuario } from "../types/Classes";
import connection from "../connection";


export const createEstudante = async (req: Request,res: Response) => {
    try {
        const novoEstudante: Usuario = new Usuario(Date.now().toString(), req.body.nome, req.body.email, req.body.data_nasc, req.body.turma_id)
        if(!novoEstudante){
            res.statusCode = 422
            throw new Error("Favor preencher todos os campos.")
        }
       const estudante =  await connection("estudante")
        .insert(novoEstudante)
        res.status(201).send("Estudante adicionado com sucesso!")

    } catch (error: any) {
    if(error.sqlMessage.includes("Incorrect date value:")){
        res.status(400).send({ message: "Formato de data de nascimento incorreto. Favor inserir data AAAA-MM-DD." })
    } else {
        res.status(400).send({message: error.sqlMessage})
    }
    }
}