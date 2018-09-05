module.exports = {
	devServer: {
		open: process.platform === 'win32' ? 'chrome' : 'google chrome',
	},
	chainWebpack: (config) => {
		// config.resolve.alias
		//     .set('@', resolve('src'))
		//     .set('@assets',resolve('src/assets'))
		//     .set('@components',resolve('src/components'))
		//     .set('@views',resolve('src/views'))
		//     .set('@images',resolve('src/images'))
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
			config.module
				.rule('production-remove-html')
				.test(/\.vue$/)
				.pre()
				.use('webpack-remove-blocks')
				.loader('webpack-remove-blocks')
				.options({
					blocks: [{
						block: 'debug',
						start: '<!--',
						end: '-->',
					}, 'debug', {
						block: 'debug',
						start: '//',
					}],
				})
				.end();
			config.module
				.rule('production-remove-js')
				.test(/\.js$/)
				.pre()
				.exclude
				.add(/(node_modules|bower_components|\.spec\.js)/)
				.end()
				.use('webpack-remove-blocks')
				.loader('webpack-remove-blocks')
				.options({
					blocks: ['debug', {
						block: 'debug',
						start: '//',
					}],
				})
				.end();
		} else {
			// 为开发环境修改配置...
			config.module
				.rule('development-remove-html')
				.test(/\.vue$/)
				.pre()
				.use('webpack-remove-blocks')
				.loader('webpack-remove-blocks')
				.options({
					blocks: [{
						block: 'build',
						start: '<!--',
						end: '-->',
					}, 'build', {
						block: 'build',
						start: '//',
					}],
				})
				.end();
			config.module
				.rule('development-remove-js')
				.test(/\.js$/)
				.pre()
				.exclude
				.add(/(node_modules|bower_components|\.spec\.js)/)
				.end()
				.use('webpack-remove-blocks')
				.loader('webpack-remove-blocks')
				.options({
					blocks: ['build', {
						block: 'build',
						start: '//',
					}],
				})
				.end();
		}
	},
};
