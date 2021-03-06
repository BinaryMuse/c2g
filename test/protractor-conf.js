exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

	specs: [
		'c2g100km20minScenario.js',
		'c2g10km2000minScenario.js',
		'c2g10km20minScenario.js',

		'c2gb100km20minScenario.js',
		'c2gb10km2000minScenario.js',
		'c2gb10km20minScenario.js',

		'sm10km10hClassicScenario.js',
		'sm10km10hBasicScenario.js'
	],

	capabilities: {
		'browserName': 'chrome',
		shardTestFiles: true,
		maxInstances: 8
	},
};
