import app from './server.js';
import connection from './database.js';

const startServer = async () => {
  try {
    await connection(); // Espera a que la conexión se establezca
    const port = app.get('port');
    app.listen(port, () => {
      console.log(`Server ok on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor', error);
  }
};

startServer();
