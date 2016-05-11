[ngconf-router](http://tinyurl.com/ngconf-router)
[ngconf-router source](https://github.com/brandonroberts/ngconf-router)

Suggestion to use `ROUTER_PROVIDERS` and `ROUTER_DIRECTIVES` to add to the `@component` definition:

    import { router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, OnActivate } from '@angular2/router';
    // can also import:
    RouteSegment, RouteTree

    @Component({
        directives: [ROUTER_DIRECTIVES],
        providers: [ROUTER_PROVIDERS],
        ...
    })
    @Routes([
        new Route({
            path: '/', // slash optional
            component: 'HomeComponent'
        })
    ])
    export class AppComponent implements OnActivate { 
        routerOnActivate () { // do some stuff on route activation }
    }

index.html needs `<base href="/" />` tag in the `<head>` section

works with either `LocationStrategy`

`<router-outlet>` is the component in which sub-routes should be rendered
routes are relative to the current route - if we're currently at `/some/path`:

     <a [routerLink]="['page']">Page</a>   --> /some/path/page
     <a [routerLink]="['/page']">Page</a>  --> /page
     <a [routerLink]="['../']">Go up</a>   --> /some

can call programmatically by injecting the router, and then call

     this.router.navigate(['/some/new/path'])

`[routerLink]` adds `"router-link-active"` and `"router-link"` classes

optional params = "matrix params" - essentially query params

OnActivate: lifecycle step for when route becomes active

Lifecycle Hooks:
- OnActivate: `routerOnActivate( )`
- CanReuse: `routerCanReuse( )       // store some state information on leave, for when reused`
- OnReuse: `routerOnReuse( )         // gets the information stored during routerCanReuse`
- CanDeactivate: `routerCanDeactivate( )   // essentially "navigateCheck"`
- OnDeactivate: `routerOnDeactivate( )     // cleanup`

These are function Boolean or Promise that resolves with a Boolean

LocationStrategies and Providers
- Path (default) PathLocationStrategy: `/path`         Uses HTML5 History API
- HashLocationStrategy: `/#!/path` or `/#/path`         (Angular 1 router default)
- To override default, include `ROUTER_PROVIDERS`, then `LocationStrategy` and `HashLocationStrategy`

LazyLoading
 - Resolve components at time of navigation
 - Requires a certain directory path
 - Uses SystemJS. Webpack support coming
 - Use component: 'PageComponent' instead of component: PageComponent (string, not object reference)
 - To implement:
 - import `ComponentResolver`, `SystemJsComponentResolver`, `RuntimeCompiler`
 - override `ComponentResolver` with `SystemJsComponentResolver`
 
 
        provide(ComponentResolver, {
            useFactory: (compiler) => new SystemJsComponentResolver(compiler),
            deps: ['RuntimeCompiler']
        });
    
 - relative paths for components: `{ path: '/some/path', component: 'path/to/path.component.ts' }`

Route Restriction
- Restrict access, hide content, redirect, etc.
- Coming soon
