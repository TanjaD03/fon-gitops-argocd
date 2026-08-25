const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "Dobrodosli na FON Cloud GitOps demo aplikaciju!",
    version: "v2.0.0",
    author: "Tanja Dumanovic"
  });
});

app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Aplikacija slusa na portu ${PORT}`);
});