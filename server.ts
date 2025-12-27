import Config from "./src/configs/app.config";
import app from "./src/app";


app.listen(Config.PORT, () => {
  console.log(`Listening on port ${Config.PORT}`);
});
