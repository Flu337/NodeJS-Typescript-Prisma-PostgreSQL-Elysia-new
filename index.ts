import { Elysia } from 'elysia';
import router from './Router';
import { Logger } from './utils/Logger';

const logger = Logger.getInstance();
const port = process.env.PORT || 3000;

const app = new Elysia()
  .use(router)
  .listen(port, () => {
    logger.info(` Сервер запущен на http://localhost:${port}`);
  });

export default app;