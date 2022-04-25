import { Request, Response } from "express";
import connection from "../connection";

export const getTurmas = async (req: Request,res: Response) => {
    try {
    const turmas = await connection("turma")
    .select("*")
    .whereNot({ modulo: 0 })

    res.send(turmas)

    } catch (error) {
        console.error("Erro", error)
    }
}