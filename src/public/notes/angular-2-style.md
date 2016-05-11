##### Justin Schwartzenberger
- @schwarty
- https://github.com/jschwarty

##### Styles and StyleUrl Meta data properties
- CSS Shimming to attach unique name to code
- Encapsulation is a typescript enumeration to native mode
- puts the css in shadow dom when browser allows it

##### Three modes for style
- No Encapsulation
    - renders css to DOM just as written in `<style>` tags

- Emulated
    - takes css written into the style header and Shims the CSS name to be unique to specific component so no bleed to global CSS
    - Attribute selector tells Angular how to scope  the CSS and encapsulate to specific component using same style name by scoped to the component.

- Native
    - uses Shadow DOM for scoping
    - use `:host` to select the current Shadow DOM scope

Encapsulation declaration scope is important, to cascade generated css to children depending on the child component encapsulation declaration. Not bleeding, but inheriting from the parent encapsulation context.

Emulated mode allows this css mode to be used now and Angular determines how to render CSS to allow browsers without shadow dom capability to work properly.




