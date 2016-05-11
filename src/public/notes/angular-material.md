##### State of Angular Material 1:

- 450+ commits (bug fixes, stability improvements, features)
- $mdColors service - consume theme colors in your own custom components
- $mdPanel service - flexible floating panel-based components (dialogs, kickers, etc.)
- example responsive webapps

##### Angular Material 2:

Scaffolding: 

- md-toolbar
- md-icon
- md-sidenav-layout
- md-sidenav
- md-list-item
- md-list-icon
- md-line
- md-card
- md-card-actions
- md-checkbox indeterminate="true"
- md-fab
- integrates with Angular 2's template id feature to simplify event binding

##### Still TODO:
- more components (dialogs, chips, toasts, tabs, switch, menu, FAB speed dial?)
better testing (more unit and e2e plus screenshots before/after commits to track visual regressions, performance, accessibility, etc.)
- API docs [material.angular.io](material.angular.io)
- developer guides
- component toolkit

##### Component Toolkit
A lot of time spent on "foundational" components. Goal is to make these
- overlays
- mobile (gestures via hammer.js, responsive helpers)
- a11y (aria-live)
- virtual scrolling
- selection model (multiselect, data tables, etc.)
- testing utilities

Beta not yet ready (expected sometime in 2016), but aiming for feature parity with v1.

Seeking feedback on desired components -- e.g. would data visualizations be useful to anyone?
