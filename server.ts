import express from "express";
import BooksRouter from "./routers/books.routers";
import HomeRouter from "./routers/home.routers";
import LoginRouter from "./routers/login.routers";


const PORT = Number(Bun.env.PORT) || 8080;
const app = express();

app.use(express.json());

// routers
app.use("/", HomeRouter);
app.use("/books", BooksRouter);
app.use("/login", LoginRouter);

// app listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
