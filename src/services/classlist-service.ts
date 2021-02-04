import { Sequelize } from "sequelize";
import { MySqlQueries } from "../queries/mySqlQueryies";

export class ClassListService {
    private dbConnection: Sequelize;
    private queries: MySqlQueries = new MySqlQueries();

    constructor(username: string, password: string, host: string) {
        this.dbConnection = new Sequelize('pearsongarp', username, password, {
            host: host,
            dialect: 'mysql'
        });

        this.dbConnection.authenticate()
            .then(() => console.log('successfully connected to database'))
            .catch((error) => console.log('something went wrong connecting to database:  ', error));
    }

    public async getClassList(): Promise<any[]> {
        const result = await this.dbConnection.query(this.queries.classListQuery);

        return result;
    }

    public async getAttendance(start: string, end: string): Promise<any[]> {
        const result = await this.dbConnection.query(this.queries.attendance);

        return result;
    }
}

