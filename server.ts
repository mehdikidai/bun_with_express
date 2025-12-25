import express from "express";
import BooksRouter from "./routers/books.routers";
import HomeRouter from "./routers/home.routers";
import LoginRouter from "./routers/login.routers";


const app = express();
const port = Number(Bun.env.PORT) || 8080;

app.use(express.json());

// routers
app.use("/", HomeRouter);
app.use("/books", BooksRouter);
app.use("/login", LoginRouter);

// app listen
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
