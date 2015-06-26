'use strict';

var application = function ($,p_logger,p_userService) {

    var appModule = function () {

        var logger = new p_logger("SPA"),
            userService = new p_userService();

        function init() {

            // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
            $(document).ready(function () {

                logger.log("Application Start.");

                $.when(userService.Current())
                 .then(function (p_response) {
                     $('#message').text('Hello ' + p_response.get_title());
                     logger.log("Application End.");
                 });
            });
        };

        return {
            Init: init

        };
    };
    
    return appModule;
    
};

define(['jquery', 'app/services/logger', 'app/services/user'], application);