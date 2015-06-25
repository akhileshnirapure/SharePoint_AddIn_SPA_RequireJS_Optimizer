var userService = function (p_jquery,p_logger) {

    var userModule = function (p_context) {

        var context = p_context || SP.ClientContext.get_current(),
            logger = new p_logger("User Service");
            
        function getCurrentUser() {

            var userDeferred = p_jquery.Deferred(),
                user = context.get_web().get_currentUser();
            logger.log("Loading User");
            context.load(user);
            context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);

            function onGetUserNameSuccess() {
                userDeferred.resolve(user);
                logger.log("User Loaded");
            };

            function onGetUserNameFail(sender, args) {
                userDeferred.reject(args.get_message());
                logger.log("User load fail");
            };


            return userDeferred.promise();
        };

        return {
            Current: getCurrentUser
        };
    };
};

define(['jquery','app/services/logger'],userService);