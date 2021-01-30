import { Sequelize } from "sequelize/types";

export default class AuthService {

    private dbConnection = new Sequelize('dashboard', <string>process.env.garpusername, <string>process.env.garppassword, {
        host: <string>process.env.garphost,
        dialect: 'mysql'
    });

    constructor(cust: string) {
        try {
            this.dbConnection.authenticate();
            console.log('you are connected!');
        } catch (error) {
            console.log('something went wrong:  ', error);
        }
    }
}
