import UserController from '@src/controller/UserController';
import HttpMethod from '@src/enum/HttpMethod';
import UserModel from '@src/models/user';
import RouteMethod from '@src/type/RouteMethod';
import User from '@src/type/User';
import AbstractRoute from './AbstractRoute';

class UserRoute extends AbstractRoute<UserController, User> {
    protected allowedRouteMethods: RouteMethod<UserController>[] = [
        // TODO: Add your code here
        {
            "httpMethod": HttpMethod.POST,
            "methodName": "createUser",
            "path": "/api/user",
            "standardCode": 200
        },
    ];
    
}

export default UserRoute;
