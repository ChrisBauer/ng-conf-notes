##### Angular 2

- `ngc` command to compile Angular 2 (similar to `tsc`)
- parses templates at compile-time, not run time
    - this is why ngIf rather than ng-if, etc.
    - allows for line number error checking of templates, etc.
    - compiles everything to JS, uses `document.createElement()`, etc rather than innerHTML/other HTML-include methods
- uses ES6 imports
    - modules are inlined in Angular 2 at compile time
    - this eliminates overhead of multiple name lookups, etc.
- tree-shaking
    - checks for modules that are not actually used in the app (e.g. `ngFor`, `ngCompile`)
    - improves file size and load time (the time it takes to evaluate the app code)
- compile all the things - DI too?

##### Angular Universal
- Run on ASP.NET, Java, etc.
    - .NET <-> Node
    - Java <-> Nashorn (within Java)
- Template generation/compiling can emit any code: JS, PHP, etc.
- Server-side rendering in multiple server environments/languages

##### Angular Material (2)
- Material Core: components that can be used by 3rd party (or our) UI components
    - mobile
    - a11y
    - i18n
    - overlay
    - other general components
- Material Components
    - tab
    - button
    - input
    - etc.
- Material Vaporware
    - Automatic form generation
    - `<md-data-table />`

##### Breaking changes
- Keep Angular 2 "evergreen" in the same way that browsers are
- Avoid a full rewrite in the future.
- Produce source edit patch files when breaking changes are introduced
- apply the patch, fix the breaking changes