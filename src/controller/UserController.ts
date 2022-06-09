import AbstractController from './AbstractController';
import models from '../models';

class UserController extends AbstractController {
    // TODO: Add your code here
    public async createUser(req: Request, res: Response): Promise<Object> {
        const user = req.body;
        const newUser = models.UserRoute.create(user);

        return newUser
    }

    public async listUser(req: Request, res: Response): Promise<void> {
        const { userId } = req.query;
        if (!userId) {
            //** Listar apenas o usuario pesquisado */
            //** Retornar o usuário */
        }

        /**
         * Exibo todos os usuários aqui
         * Retornar a lista de todos usuários
         */
    }

    public async handleUser(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { activated } = req.query;

        if (!id) {
            res.status(404).json({ message: "id not found" });
        }

        /**
         * database user searching
         * set user attribute activated (true / false - "toggle button")
         */
    }
}

export default UserController;
