import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { createUser } from './endpoints/createUser';
import { getTurmas } from './endpoints/getTurmas';
import { mudaModulo } from './endpoints/mudaModulo';

export const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


app.post('/turmas', createUser)
app.get('/turmas', getTurmas)
app.put('/turmas/:nome', mudaModulo)