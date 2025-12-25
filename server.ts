import express from "express";
import Config from "./src/configs/app.config";
import BooksRouter from "./src/routers/books.route";
import HomeRouter from "./src/routers/home.route";
import LoginRouter from "./src/routers/login.route";
const app = express();

app.use(express.json());

// routers
app.use("/", HomeRouter);
app.use("/books", BooksRouter);
app.use("/login", LoginRouter);

// app listen
app.listen(Config.PORT, () => {
  console.log(`Listening on port ${Config.PORT}`);
});
