require.config({

    // sharepoint scripts library deployment path to vendors 
    baseUrl: '../scripts/debug',

    deps: ['sp-runtime','sp','jquery'],

    paths: {
        'jquery': 'jquery-2.1.4.min', // relative to basepath
        'jquery-private': 'jquery-private',
        app: '../app',
        'sp-runtime': '/_layouts/15/sp.runtime.js',
        'sp': '/_layouts/15/sp.js'
    },

    shim:{
        'sp' : ['sp-runtime']
    },

    map: {

        // any module ask for jquery give jquery-private
        "*": { 'jquery': 'jquery-private' },

        "jquery-private": { 'jquery': 'jquery' }
    }
});

require(['app/start'], function (p_start) {
    debugger;
    var app = new p_start();
    app.Init();
});