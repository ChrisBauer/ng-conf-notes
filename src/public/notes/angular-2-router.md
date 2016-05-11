##### What is a router?
A router is the "thing" that is on top. The router coordinates the loading of components based on the intent (generally, the URL).

##### How Routes are Defined
Routes annotation within a component:

    // decorator
    @Routes([
        {
            path: 'simple',
            component: 'SimpleComponent'
        }
    ])

Note that the router annotation is declared in the components, not application; this couples the route definitions with the component, keeping the two together.

##### Key Points
- With respect to the components, each component can have siblings and children
- The router takes the URL and parse it into a "tree of URL segments"; this defers lazy loading as much as possible.
- Route segments are touples of URL segments (for example, "user/:id")
- The interface allows action on a route activation:
    - `routerOnActivate(segment: RouteSegment, tree: Tree<RouteSegment>) {...}`
- Generate link in template using the `[routerLink]` binding; this will "automatically" create the correct URL:
    - `<a [routerLink]="['../list', {sort: 'name'}]">list</a>`
- Links are relative to some other place in the application (depends on where it is defined)
