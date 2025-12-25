import express from "express";
import BooksRouter from "./routers/books.routers";
import HomeRouter from "./routers/home.routers";

const app = express();
const port = Number(process.env.PORT) || 8080;

app.use(express.json());

// routers
app.use("/", HomeRouter);
app.use("/books", BooksRouter);


// app listen
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
