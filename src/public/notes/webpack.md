##### Entry
entrypoint of the application. can be array of files, or can be object with key-value pairs of string/array

##### Output
where the entry bundles go

##### Loaders
load files and perform a compilation step. All outputs are .js in some form

##### Plugins
plugin implements an `apply(compiler)` function

    module.exports = {
    	entry: 'filename.js',
    	entry: ['firstfile.js', 'secondfile.js'],
    	entry: {
    		app: 'app.js',
    		vendor: 'vendor/index.js'
    	},
    	output: {
    		path: './dist',
    		// supports various module types
    		filename: 'app.umd.js',
    		library: 'app',
    		libraryTarget: 'umd'
    	},
    	preLoaders: [], // lint, hint, etc.
    	loaders: [
    		{test: /\.ts$/, loaders: 'ts'},
    		{test: /\.js$/, loader: 'babel'},
    		{test: /\.css$/, loader: 'css'},
    		{
    			test: regex,
    			loader: string,
    			loaders: [string],
    			include: [regex],
    			exclude: [regex]
    		},
    		// can be chained
    		{test: /\.less$/, loader: 'style!css!less'},
    		// or like this:
    		{
    			test: /\.less$/,
    			loaders: ['style', 'css', 'less']
    		}
    		// LOTS OF LOADER STUFF
    	],
    	postLoaders: [], // coverage, docs, etc
    	plugins: [
    		new PluginName(),
    		// extract shared dependencies out of entries and put it in a separate bundle
    		// could cache-bust app without forcing reload of 3rd party libs
    		new webpack.optimize.CommonsChunkPlugin('vendors'),
    		new webpack.optimize.UglifyJsPlugin()
    		// extract text
    	]
    };

### Webpack 2

 - tree shaking
 - es2015 module support built in
 - faster compilation
 - optimizations: moved in some plugins to the core
 - other stuff

### Webpack and Angular 2

[Angular 2 Webpack Lite](github.com/thelarkinn/angular2-webpack-lite)
@TheLarkInn

Webpack is a module bundler, not a task runner

Works with any type of module.

3 Ways to Use Webpack
 - config
 - webpack cli
 - node API

##### Concepts

1. Entry
  1. "contextual root", entry file is the file that kicks off your whole site (app.js?)
  2. can define external deps on entry
  3. can define different bundles (web, mobile, desktop, etc.)
  4. Look up what "Vendors" means
2. Output
  1. path
  2. filename
  3. Will create a single JS file, concatenated of everything (CSS, JS, images?)
3. Loaders
  1. Loaders tell webpack how to load something
  2. Can include and exclude folders
  3. ex. pass LESS -> CSS -> JS -> inline JS
4. Plugins
  1. ES5 Class
  2. Implements one function on prototype chain, apply().
  3. A compilation is a bundle of files processed by webpack
  
Example Plugins:
 - UglifyJSPlugin()

http://github.com/thelarkinn/angular2-webpack-lite