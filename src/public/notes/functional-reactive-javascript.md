##### What is Functional Programming?

- separate functions from their environments (e.g. by providing values as inputs)
- separate mutations from calculations (perform calculations first, not after or at same time)
    - e.g. instead of providing calculations as direct inputs, use compose, partial, flow, to combine simpler methods
- pure functions
    - 3 types of functions:
        - mapping functions (conversions)
        - procedural functions (process)
        - I/O functions (often causes side effects)
    - one input -> one output (and same output for same input)
    - no side effects (no state mutation)
    - only relies on arguments (no unknown external dependencies)
    - benefits include:
        - reliability
        - testability
        - portable
        - memoizable
        - parallelizable
- consider defining UI as output of pure function(s) accepting current application state as input
    - i.e. state reducers -- NOTE: this is how redux works
    - allows for "time traveling" debugging because states are never mutated
- at their most pure, functions only accept a single argument
    - currying - can help us simplify the process of converting a multi-argument function to a single-argument version that can be invoked multiple times, until the required argument count has been provided
    - composition - generating functions from other functions
    - functors and monads:
        - a functor is an object that can be  .map'ed over:
        
        
        MyClass.prototype.map = function map(fn) {
        return fn(this.value);
        };
   
- popular functor: Maybe (ignores null/undefined results)
- mjoin - flattens results of Maybes to only existent values

##### What is Reactive Programming?

Programming with asynchronous data streams. The goal is for code to be "easier to reason about."

FRP combines the Observable + Iterator patterns.

Observables have Observers (subscribers). Think pub/sub. There are "streams" of data published by the Observable to any subscribed Observers. This is a "push" model instead of "pull" model.

What are streams?
time-based events (setTimeout, setInterval), mouse events, DOM events, network responses, video/audio streams, service calls, form validations, speech inputs, gestures/touches, etc. Even basic data structures (arrays, iterables, generators, etc.) can be thought of as streams.

This is powerful, because we can react to all inputs/data using the same behaviors. - .map, .concat, .combine, .flatten, etc.

##### Functional Reactive Programming & Angular 2

Routes, HTTP, Forms, and DOM events are all observable-based in Ng2.