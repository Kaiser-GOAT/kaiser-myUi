const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode:'production',
	entry:{
		myUi:'./lib/index.tsx'
	},
	output:{
		path:path.resolve(__dirname,'dist/lib'),
		library:'myUi',
		libraryTarget:'umd'
	},
	module:{
		rules:[
			{
				test:/\.tsx?$/,
				loader:'awesome-typescript-loader'
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'myUi',
			template:'index.html'
		})
	]
}