const events = require('events');

function createEmitter(onOpen, onClose) {
  const emitter = new events.EventEmitter();

  // Register the "open" and "close" listeners
  emitter.once('open', onOpen);
  emitter.once('close', onClose);

  return emitter;
}

function opened(emitter) {
  // Emit the "open" event
  emitter.emit('open');
}

function closed(emitter) {
  // Emit the "close" event
  emitter.emit('close');
}

// Example usage
let emitter = createEmitter(
  () => console.log('Opened!'),
  () => console.log('Closed!')
);

opened(emitter); // Outputs: Opened!
closed(emitter); // Outputs: Closed!

