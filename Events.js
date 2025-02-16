// setTimeout() - Delays execution
setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);



// ✅ setInterval() - Executes repeatedly
setInterval(() => {
    console.log("Repeating every 2 seconds");
}, 2000);


// ✅ clearTimeout() - Stops a timeout
const timeout = setTimeout(() => console.log("Will not run"), 5000);
clearTimeout(timeout);



// ✅ clearInterval() - Stops an interval
const interval = setInterval(() => console.log("Running"), 1000);
clearInterval(interval);
