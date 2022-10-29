import express from "express";
import config from "./config";
import clientesRouter from "./routes";
import swaggerUI, { serve } from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const app = express();

app.listen(config.PORT, () => console.log("Server Up!"));

app.use(express.json());

app.use("/clientes", clientesRouter);

const swaggerPath = path.resolve(process.cwd(), "./swagger.yml");
const swaggerDoc = YAML.load(swaggerPath);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use((req, res) =>
  res.status(404).json({
    Msg: "Undefined path",
  })
);
