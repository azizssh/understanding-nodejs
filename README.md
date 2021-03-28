# Learn and Understand NodeJS

Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.

[Get it on Udemy](https://www.udemy.com/course/understand-nodejs/)

## Conceptual Asides, Definitions:

**Command Line Interface**: A utility to type commands to your computer rather than clicking.

_Bash on Linux, Terminal on Mac, Command Prompt/PowerShell on Windows_

**Arguments**: Values you give your program that affect how it runs.

_Essentially passing parameters to a function_

**Microprocessor**: a tiny machine that accepts instructions and carries them out. A microprocessor speaks a language. Not all microprocessors are the same. They don't all speak the exact same language.

**Instructions**: IA32, x86-64, ARM, MIPS.

**Machine Code**: programming languages spoken by computer processors.

_Every program you run on your computer has been converted (compiled) into machine code_

**Level of Abstraction**: JavaScript -> C/C++ -> Assembly Language -> Machine Language

Node is written in C++. V8 is written in C++.

**ECMAScript**: The standard JavaScript is based on. JavaScript is the actual language we're writing in. ECMAScript is the standard that states how the language should work.

_Needed a standard since there are many engines_

**JavaScript Engine**: a program that converts JavaScript code into something the computer processor can understand.

_And it should follow the ECMAScript standard on how the language should work and what features it should have. V8_

**V8**: Google's open source JS Engine. V8 is written in C++ and is used in Google Chrome. JavaScript -> V8 (C++) -> Machine Code

**Node.js**: a C++ program, with V8 embedded, that has added features that make it suitable to be a server technology.

**Server**: a computer that's performing services. Server responds to a client. Response is in some standard format.

**Client**: asks for services. Makes a request to a server. The request is in some standard format.

### What does JS need to manage a server?

- Better ways to organize our code into reusable pieces
- Ways to deal with files
- Ways to deal with databases
- The ability to communicate over the internet
- The ability to send requests and send responses (in the standard format)
- A way to deal with work that takes a long time

### The C++ Core

Node deps folder (.cc .h files)

### The JS Core

Node lib folder (.js files in it, wrappers for C++ features)
zlib.js:
`var binding = process.binding('zlib');`
_Grabs C++ feature and makes it available in JS_

`node -v`
_Check node version_

`node`
_Runs Node CLI_

`node app.js`
_Runs app.js with Node_

**Breakpoint** : A spot in our code where we tell a debugging tool to pause the execution of our code. _So we can figure out what's going on_

**Module** : A reusable block of code whose existence doesn't accidentally impact other code. _JavaScript didn't have this before_

**CommonJS Modules** : An agreed upon standard for how code modules should be structured.

**First-class Functions** : Everything you can with other types you can do with functions.
_You can use functions like strings, numbers, etc (i.e. pass them around, set variables equal to them, put them in arrays, and more)_

    function greet() {
        console.log('hi');
    }
    function logGreeting(fn) {
        fn();
    }
    logGreeting(greet);

**Expression** : A block of code that results in a value.
_Function expressions are possible in Javascript because functions are first-class_
`const a = function() {... }` or `const a = () => {...}`

**Invoke** : Run the function.
_We can also say 'call' the function_
