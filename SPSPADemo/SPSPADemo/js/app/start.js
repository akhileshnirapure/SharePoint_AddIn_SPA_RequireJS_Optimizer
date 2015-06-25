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

                //var context = SP.ClientContext.get_current();
                //var user = context.get_web().get_currentUser();

                //getUserName();

                //// This function prepares, loads, and then executes a SharePoint query to get the current users information
                //function getUserName() {
                //    context.load(user);
                //    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
                //}

                //// This function is executed if the above call is successful
                //// It replaces the contents of the 'message' element with the user name
                //function onGetUserNameSuccess() {
                //    $('#message').text('Hello ' + user.get_title());
                //}

                //// This function is executed if the above call fails
                //function onGetUserNameFail(sender, args) {
                //    alert('Failed to get user name. Error:' + args.get_message());
                //}

                

            });
        };

        return {
            Init: init

        };
    };
    
    return appModule;
    
};

define(['jquery', 'app/services/logger', 'app/services/user'], application);