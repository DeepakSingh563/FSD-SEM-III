function printConsoleLog(message) {
    console.log(message);
}

console.log("Start");

process.nextTick(() => {
    printConsoleLog("nextTick");
});

setTimeout(() => {
    printConsoleLog("setTimeout");
}, 5000);

setImmediate(() => {
    printConsoleLog("setImmediate");
});

printConsoleLog("End");