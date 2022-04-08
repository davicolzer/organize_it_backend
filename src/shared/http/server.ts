import express from "express";
import { router } from "./routes";
import { PORT } from "../../utils/constants";

const app = express();
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
  console.log(`🌍 Server Started on port ${PORT}`);
});
