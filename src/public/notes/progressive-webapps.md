One idea, many apps, can you unify them?

##### why native?
- Performance
- Re-engagement
- API access

##### Progressive Web Apps:
- Instant Loading
- Offline
- Installable
- Notifications

##### Issue Zero App

##### Instant Loading
- App Shell (everything outside of the router)
- Using Angular Universal
- using a "preRendered" class (flag for isPrerendered or not)
- show a loading indicator with ngIf
- ngIf any dynamic stuff out based on isPrerendered

##### Offline
- Using Service Worker

It's a little HTTP server running on your client's machine.  

Look up for Angular 1.x?

##### Installable

Web App Manifest

Look into this!

https://mobile.angular.io