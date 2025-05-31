import { PrismaClient } from '@prisma/client';
import { Teacher } from '../models/Teacher';

const prisma = new PrismaClient();

export class TeacherService {
  async createTeacher(firstName: string, lastName: string): Promise<Teacher> {
    const teacher = await prisma.teacher.create({
      data: { firstName, lastName }
    });
    return new Teacher(teacher.id, teacher.firstName, teacher.lastName);
  }

  async getAllTeachers(): Promise<Teacher[]> {
    const teachers = await prisma.teacher.findMany();
    return teachers.map(t => new Teacher(t.id, t.firstName, t.lastName));
  }

  async getTeacherById(id: number): Promise<Teacher | null> {
    const teacher = await prisma.teacher.findUnique({ where: { id } });
    return teacher ? new Teacher(teacher.id, teacher.firstName, teacher.lastName) : null;
  }

  async deleteTeacher(id: number): Promise<void> {
    await prisma.teacher.delete({ where: { id } });
  }
}