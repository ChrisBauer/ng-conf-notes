##### Top improvements:
 
1. Upgrade Angular to latest version (e.g. 1.5.5 uses documentFragment for select options using ngOptions -- md-select doesn't do this and has been really hurting us). There are usually performance improvements in each update.
2. Disable debug data (e.g. .scope(), .controller() methods on jqLite/jQuery).
3. Always use track by to avoid regenerating DOM nodes.
4. Bundle your JavaScript to reduce network requests.
5. Don't duplicate AJAX requests -- look in network tab for duplicate requests. Don't use AJAX in directives/repeated components, or from a $watch handler. Consider throttling/debouncing specific service methods that perform AJAX requests.
6. Limit simultaneous AJAX requests. Consider making an Aggregator service that combines multiple requests into a single array and returns an array of responses. But how would returned responses be partitioned out to the appropriate callers?
7. Don't block the event loop. Simplify your $watch logic and/or reduce $watch counts and $digest cycles.

##### Performance Improvement Process:

1. Verify that a real-world problem exists. Use incognito mode with no running extensions/plugins.
2. Establish a performance baseline before making any changes.
3. Identify and improve the biggest bottleneck.
4. Measure and assess the impact of the change on performance.

There is a cost/benefit analysis -- you can always make small improvements but is it worth the extra time investment?

##### Random Improvements:

- `$httpProvider` has `useApplyAsync(bool)` that can be used to delay applying a $digest cycle until x ms have passed -- this can help during bootstrapping when a lot of calls are being made at once.
- Set 3rd parameter of `$timeout (invokeApply)` to `false` if we don't need to re-run any $watchers.
- make sure to cancel $timeout and $interval tokens
- Consider writing a utility method to manually group multiple $digest cycles into


    var timer;
    function apply() {
    if (timer) {
        $timeout.cancel(timer);
    }
    timer = $timeout(angular.noop, 25); // forces digest after 25ms
    }
    