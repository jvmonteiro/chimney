module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	rules: [
		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'style-loader',
				},
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
					},
				},
				{
					loader: 'postcss-loader',
				},
			],
		},
	],
};
