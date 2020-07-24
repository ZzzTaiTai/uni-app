module.exports = {
	devServer: {
		host: '127.0.0.1',
		proxy: {
			'/api': {
				target: 'https://api.map.baidu.com/', //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
