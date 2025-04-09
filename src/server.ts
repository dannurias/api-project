import app from "./app";
import appLogger from "./utils/logger";

const PORT= process.env.PORT || 3000;

app.listen(PORT, () => {
  appLogger.info(`Servidor corriendo en el puerto http://127.0.0.1:${PORT}`);
});
