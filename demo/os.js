const os = require('os');

console.log('OS:', os.platform());
console.log('Архитектура процессора:', os.arch());
console.log('Инфа процессорам:', os.cpus());
console.log('Свободная память:', os.freemem());
console.log('Всего память:', os.totalmem());
console.log('Домашняя директория:', os.homedir());
console.log('Включен время:', os.uptime());
