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