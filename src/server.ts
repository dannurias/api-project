import app from "./app";

const PORT= process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://127.0.0.1:${PORT}`);
});