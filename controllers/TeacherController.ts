import { Elysia } from 'elysia';
import { TeacherService } from '../services/TeacherService';
import { Logger } from '../utils/Logger';

const logger = Logger.getInstance();
const teacherService = new TeacherService();

export const teacherRouter = new Elysia({ prefix: '/api/teachers' })
  .post('/', async ({ body }) => {
    try {
      const teacher = await teacherService.createTeacher(
        (body as any).firstName,
        (body as any).lastName
      );
      logger.info('Преподаватель создан', { id: teacher.id });
      return teacher;
    } catch (error) {
      logger.error('Ошибка создания преподавателя', error as Error);
      throw error;
    }
  })
  .get('/', async () => {
    try {
      return await teacherService.getAllTeachers();
    } catch (error) {
      logger.error('Ошибка получения преподавателей', error as Error);
      throw error;
    }
  })
  .get('/:id', async ({ params }) => {
    try {
      const id = parseInt(params.id);
      const teacher = await teacherService.getTeacherById(id);
      if (!teacher) {
        throw new Error('Преподаватель не найден');
      }
      return teacher;
    } catch (error) {
      logger.error('Ошибка получения преподавателя', error as Error);
      throw error;
    }
  })
  .delete('/:id', async ({ params }) => {
    try {
      const id = parseInt(params.id);
      await teacherService.deleteTeacher(id);
      logger.info('Преподаватель удалён', { id });
      return { success: true };
    } catch (error) {
      logger.error('Ошибка удаления преподавателя', error as Error);
      throw error;
    }
  });