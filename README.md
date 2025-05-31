## Установка
bun install
## Запуск сервера 
bun run src/index.ts
## Настройте базу данных:

npx prisma migrate dev --name init

npx prisma generate

# 1. Добавление преподавателя (POST)
### запрос:
curl -X POST http://localhost:3000/api/teachers \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Nikita","lastName":"Borisenko"}'

  ![Добавление преподавателя (POST)](photo_2025-05-31_21-36-27.jpg)

  ### ответ:
[object Object]

# 2 Получение всех преподавателей (GET)
### запрос: 
curl http://localhost:3000/api/teachers


![Получение всех преподавателей (GET)](photo_2025-05-31_21-36-33.jpg)

### ответ:

[{"id":8,"firstName":"Nikita","lastName":"Borisenko"}]

# 3. Получение преподавателя по ID (GET)
### Запрос:
curl http://localhost:3000/api/teachers/8

![Получение преподавателя по ID (GET)](photo_2025-05-31_21-36-37.jpg)


### ответ: 

[object Object]

*Если пользователя не существует то ответ(Преподаватель не найден)*


# 4. Удаление преподавателя (DELETE)
### запрос: 
curl -X DELETE http://localhost:3000/api/teachers/8

![Удаление преподавателя (DELETE)](photo_2025-05-31_21-36-39.jpg)

### ответ:
{"success":true}


