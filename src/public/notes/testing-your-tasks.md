Zones
- Zones is being used in Angular 2
- zone.js API https://github.com/angular/zone.js/
- new Zones created with .fork( ), Zones inherit from the parent fork

Microtasks:
- Queued
- Used for promise callbacks - executed after call stack empties, but before the event loop (messages, XHR, timeouts, etc.)

Macrotask
- Queued
- Used for browser APIs: XHR, setTimeout, etc.

Angular 2 change detection is done from node to descendents, in one direction.
ngZone wraps the app.

    ngZone.onMicrotaskEmpty( ( ) => { // logic and async callbacks have finished, make sure everything is up to date });
    ngZone.run( ( ) => { // run stuff within the Angular zone });
    ngZone.runOutsideAngular( ( ) => { // run stuff outside the Angular zone. Don't run change detection for this code });

##### End to End Testing
- Avoid test issues and race conditions
- Use zones to make "wait" logic smarter

    window.getAngularTestability(el).whenStable(callback);

If constant macrotasks (rotating carousel through setInterval( ) means there is always a pending task. Instead, run the interval (or other task) outside of Angular's Zone and then execute the callback within the zone:

    ngZone.runOutsideAngular( () => {
        setInterval( () => {
            ngZone.run('now it's changed!');
        }, 2000);
    });

##### Unit Testing
- wrap async tests in `async()`
     
    fixture.autoDetectChanges();
    fixture.whenStable().then( () => {
        expect( ... );
    });

- fakeAsync
    - precise timing control
    - `tick(1000); // advance the clock 1000 ms`
    - warns on pending async issues
    - intercepts and stops propagation of clock ticks

http://github.com/juliemr/ngconf-2016-zones