import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 8080;

const app = express();

app.use(express.static("src"));

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "src/views"),
  };
  res.sendFile("/home/index.html", options);
});

app.listen(8080, () => {
  console.log(`server listening on ${PORT}`);
});
