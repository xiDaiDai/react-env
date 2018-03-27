const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basepath = process.cwd();
const distpath = path.resolve(basepath, "./dist");
module.exports = {
		devtool:'eval-source-map',
		mode: 'development',
    entry:{
    	'app':'./src/app.js',
    	'utils':'./src/utils/lodashmin.js'
    },
    output: {
    		path:distpath,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
   					  loader: 'babel-loader',
   					  exclude: /node_modules/
            },
            {
							  test: /\.(less|css)$/,
							  use: [{
							            loader: "style-loader" 
							         }, {
							             loader: "css-loader"
							         }, {
							             loader: "less-loader"
							         }]
						}
        ]

    },
    plugins: [
    	new htmlWebpackPlugin({
        title: 'app',
        template:'./src/index.html',//相对工程路径react-latest
        filename:'index.html',
        chunks: ['app','utils']
    	}),
    	new htmlWebpackPlugin({
        title: 'web',
        template:'./src/pages/home.html',//相对工程路径react-latest
        filename:'home.html',
        chunks: ['utils']
    	})
		],
}