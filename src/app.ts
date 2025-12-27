import express from "express";
import BooksRouter from "./routers/books.route";
import HomeRouter from "./routers/home.route";
import LoginRouter from "./routers/login.route";
import UsersRouter from "./routers/users.route";


const app = express();

app.use(express.json());


app.use("/", HomeRouter);
app.use("/books", BooksRouter);
app.use("/login", LoginRouter);
app.use("/users", UsersRouter);



export default app;