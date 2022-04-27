import { Request, Response } from "express";
import { app, connection } from "../";
import { Turma } from "../types/Classes";

app.post(`/turmas`, async (req: Request,res: Response) => {
    const turma = new Turma(Date.now().toString(), req.body.nome, req.body.modulo)
    console.log(turma)
    try {
        await connection("turma")
        .insert({
            turma
        })
        res.send("Success!")

    } catch (error) {
        console.error("Erro", error)
        return null
    }
})

app.get("/turmas",async (req:Request, res: Response) => {
    console.log('rodei')
  })