require('dotenv').config();
import express, { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';
import path from 'path';
import { ClassListService } from './services/classlist-service';

const app = express();
const service = new ClassListService(<string>process.env.garpusername, <string>process.env.garppassword, <string>process.env.garphost);
console.log(`${<string>process.env.garpusername} + ${<string>process.env.garppassword} + ${<string>process.env.garphost}`);
app.set('port', process.env.PORT || 3080);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('This is the homepage!  Make it so!');
});

app.get('/attendance', async (req, res) => {
    const data = await service.getAttendance('', '');
    res.send(data);
});

app.get('/classlist', async (req, res) => {
    const list = await service.getClassList();
    res.send(list);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
  
export default app;