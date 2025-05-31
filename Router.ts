import { Elysia } from 'elysia';
import { teacherRouter } from './controllers/TeacherController';

const router = new Elysia()
  .get('/', () => 'API для управления преподавателями работает!')
  .use(teacherRouter);

export default router;