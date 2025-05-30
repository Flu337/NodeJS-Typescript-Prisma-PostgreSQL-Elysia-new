import { Elysia } from 'elysia';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = new Elysia();

// Добавление преподавателя
app.post('/api/teachers', async ({ body }) => {
  const teacher = await prisma.teacher.create({
    data: body as any
  });
  return teacher;
});

// Получение всех преподавателей
app.get('/api/teachers', async () => {
  return await prisma.teacher.findMany();
});

// Получение преподавателя по ID
app.get('/api/teachers/:id', async ({ params }) => {
  const id = parseInt(params.id);
  return await prisma.teacher.findUnique({ where: { id } }) || { error: "Not found" };
});

// Удаление преподавателя
app.delete('/api/teachers/:id', async ({ params }) => {
  const id = parseInt(params.id);
  await prisma.teacher.delete({ where: { id } });
  return { success: true };
});

export default {
  port: 3000,
  fetch: app.handle
};