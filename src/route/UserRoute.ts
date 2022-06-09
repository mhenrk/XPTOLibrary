import UserController from '@src/controller/UserController';
import RouteMethod from '@src/type/RouteMethod';
import User from '@src/type/User';
import AbstractRoute from './AbstractRoute';

class UserRoute extends AbstractRoute<UserController, User> {
    protected allowedRouteMethods: RouteMethod<UserController>[] = [
        // TODO: Add your code here
    ];
    
}

export default UserRoute;
