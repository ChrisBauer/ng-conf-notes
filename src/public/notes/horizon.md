NoSQL DB for JSON docs. Distributed, easy to scale

Instead of basing off of a LAMP/MEAN stack seed project, use Backend-as-a-service: Firebase, CloudKit. New state: open-source backend e.g. Meteor

Horizon is a realtime backend a la Meteor

### Components:

 - subscriptions
 - persistence
 - auth
 - access control
 - sessions, presence
 - geolocation

Provides front end API - start frontend development without backend.

Extensible through the Node.js modules on the backend.
Quickly prototype app, then scale.

### Horizon Stack

|==Title==|==Service==|
|-Front End-|-Horizon Client-|
|-Middle-|  |
| Backend | RethinkDB |

Front-end framework-agnostic
Full-stack realtime updates using RethinkDB, WebSockets, and Observables

npm install, run locally, or use Horizon Cloud service

    hz init myproject
    hz serve -db

### Client API

Horizon uses collections which contain JSON documents, inspired by ReQL

Chain commands to collections for queries

Commands return Observables

	var hz = Horizon();

	hz('messages')	// DB name
		.order('date', 'desc')
		.limit(10)
		.fetch() // gets once
		.forEach( (m) => { // do something with m })

Everything before `.fetch()` happens on the server. Everything after is client-side code. In the example above, `.order()` and `.limit()` happen in ReQL

call `.watch()` to get realtime updates. Returns an observable, emits the entire result set on each change

	hz('messages')
		.watch()
		.forEach(items => console.log(items))

	hz('messages')
		.watch({rawType}) // get the raw changeFeed object

Today: store, query with WebSocket, live updates with `.watch()`

Coming soon:
 - access control
 - input validation with JSON Schema
 - optimistic updates
 - Admin UI
 - GraphQL, Falcor adapters

[Discussion](discuss.horizon.io)

[Angular + Horizon](github.com/rethinkdb/typescript-horizon-workshop)