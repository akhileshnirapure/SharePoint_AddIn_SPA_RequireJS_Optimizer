({
    //  baseUrl to consider while build, this overrides the baseUrl defined in config file
    baseUrl: '../js/vendors',

    //  defines all the shim configuration
    mainConfigFile: '../js/app.config.js',

    deps: ['sp-runtime', 'sp', 'jquery'],
    
    //  The boostraper module which loads up the SPA 
    name: 'app/start',
    include: ['requirelib', '../app.config.js'],

    paths: {
        'sp': "empty:",
        'sp-runtime': "empty:"
    },
        

    //  the release output directory
    out: '../Scripts/debug/app.js',

    //  no minification
	optimize: 'none'                     
})