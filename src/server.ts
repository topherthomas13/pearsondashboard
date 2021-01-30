import express, { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 3080);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('This is the homepage!  Make it so!');
});

app.get('/attendance', (req, res) => {
    res.send('You have reached the attendance page');
});

app.get('/classlist', (req, res) => {
    res.send('Here are all the classes for your dropdown');
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