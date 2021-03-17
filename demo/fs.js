// File System - позволяет работать с различными файлами
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => { // Правило в NodeJS - когда мы работаем с асинхронными операциями, то всегда первый параметр callback функции является ошибкой.
//
//   if (err) {
//     throw err;
//   }
//
//   console.log('Папка создана');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//   if (err) {
//     throw err;
//   }
//
//   console.log('Файл создан');
//
//   fs.appendFile(filePath, '\nHello again', (err) => {
//     if (err) {
//       throw err;
//     }
//
//     console.log('Файл создан');
//   });
// });

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }

  // const data = Buffer.from(content);
  // console.log('Content:', content.toString());

  console.log(content);
});
