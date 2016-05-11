Slides at [https://tinyurl.com/Angular2JumpStart](https://tinyurl.com/Angular2JumpStart)

Components can/should be developed independently and composed into a SPA. They are made from code + templates. You can specify a moduleId on your @Component to make moving component folders around not break your module loading. Think RequireJS's path names.

The `bootstrap(Component):Promise` method is imported from a particular module. Which module you import from tells Angular what platform we're targeting (e.g. "platform-browser-dynamic").

[Latest API Docs](https://angular.io/docs/ts/latest/api) -- documentation on built-in Angular2 components and how to import them.

Databinding: "state changes go down, events go up" (unidirectional databinding). This can be manual using property bindings and event handlers, or automated using [(ngModel)].

`*` in front of a directive means "structural" -- indicates that Angular2 should expect DOM changes; Angular2 will wrap these directives in a type of template. E.g. `*ngFor`, `*ngIf`

Services are same concept as Angular 1.x. To inject dependencies into your service, import `@Injectable` from `'@angular/core'` and decorate your class with it.

Many built-in Angular2 services return Observables.