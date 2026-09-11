// argv
console.log(process.argv);

// process.env
console.log(process.env.LOGNAME);

// pid
console.log(process.pid);

// cwd
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

process.on("exit", (code) => {
  console.log("ABOUT TO EXIT WITH CODE: ", code);
});

// exit()
process.exit(0);

console.log("HELLO FROM AFTER EXIT");
