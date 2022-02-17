const path = require('path')

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
}