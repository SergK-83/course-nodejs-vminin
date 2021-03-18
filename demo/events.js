const EventEmitter = require('events');

// const emitter = new EventEmitter();
//
// emitter.on('anything', data => {
//   console.log('ON: anything', data);
// });
//
// emitter.emit('anything', {a: 1}); // получаем прослушку события 'anything'
// emitter.emit('anything', {b: 1});
//
// setTimeout(() => {
//   emitter.emit('anything', {c: 3});
// }, 1000);

class Dispatcher extends EventEmitter {

}
