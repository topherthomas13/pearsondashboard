import app from "./server";

const server = app.listen(app.get('port'), () => {
    console.log(`Dashboard app is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
});

export default server;