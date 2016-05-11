All material can be found here:
http://tinyurl.com/TS-ES6-In60

This loosely structured talk showcased some of the TypeScript-specific functionality, as well as introducing some of the newer ES6 functionality.

High Level Notes

 - Modules are one of the best ES6 features
 - let / const (block scope)
 - Arrow functions
 - Default parameters
 - Feature compatibility matric: http://kangax.github.io/compat-table/es6/
 - TypeScript is a superset of JavaScript
 - Playground to test TypeScript: https://www.typescriptlang.org/play/index.html
 - TypeScript brings some traditionally OO constructs to JavaScript
 - Interfaces
 - Subclasses
 - Strong types
 - Template strings
 - Inline string expansion
 - `"this is an ${expression}"`
 - Multiline string literals using the backtick character

Destructuring: ES6 syntax

    var [first, last] = ['John','Doe'];
    var {total2, tax2} = {total:9.99, tax:.50};