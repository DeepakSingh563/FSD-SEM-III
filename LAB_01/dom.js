import { EventEmitter } from 'events';

function createDOMElement() {
    const emitter = new EventEmitter();
    return {
        addEventListener(eventName, callback) {
            emitter.on(eventName, callback);
        },
        removeEventListener(eventName, callback) {
            emitter.off(eventName, callback);
        },
        dispatchEvent(event) {
            emitter.emit(event.type, event);
        }
    };
}

const button = createDOMElement();
button.addEventListener('click', (event) => {
    console.log('Button clicked!', event);

});

button.dispatchEvent({
    type: 'click',
    message: 'btn clk'
});

