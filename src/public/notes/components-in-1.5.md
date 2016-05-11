d@ component

"Angular 1.5 is the future of webapps"
"err... components are the future of webapps"

build apps using component-based architecture, organized into a tree structure

##### Three types of components:
- Presentation
    - simply display the UI.
    - Stateless
    - inputs (bindings), outputs (events)
- Business
    - access services
    - maintain state
    - direct other components to be rendered
- View
    - build the view from a URL (or a state)
    - specialized business components
    - do know about state (route, etc.)
    - know how to create the tree of components

- AppComponent
    - Villains Component
        - Villain Component
        - Favorites Component

Angular 1.5 documentation [brought to you by React](https://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)

    // Angular 1.5 Component definition
    myModule.component('myComponent', {
        template: '...', // template string or function
        selector: 'my-component',
        bindings: { }, // like scope bindings
        controller: function MyComponentController (SomeService) { // do stuff },
        require: { 'tabs': '^?tabList' }, // creates this.tabs in MyComponentController as a reference
        $routeConfig: [{path: '...', component: '...'}]
    });

##### Component lifecycle hooks
- `$onInit()` : when bindings have been completed
- `$onDestroy()` : when containing scope (not isolated scope) is destroyed
- `$onChanges(changes)` : called whenever any input bindings change. Only contains key-value pairs that have changed
- `$postLink()` : after linking but before binding (?)

##### Testing Components
- `$componentController` as a mock (for testing components rather than Angular 1.x controllers)

##### Code Examples
https://github.com/petebacondarwin/ng1-component-demo