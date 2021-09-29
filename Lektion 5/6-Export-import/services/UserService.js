class UserService {
    constructor() {}

    static signUp(userObj) {
        console.log(`Registering the user ${userObj.firstName}.`);
        setTimeout(() => {
            console.log(userObj)
        }, 1000)
    };

    static signIn(email, password) {
        console.log(`Signing in the user`);
        setTimeout(() => {
            console.log(email, password);
        }, 1000)
    };

}


export default UserService;