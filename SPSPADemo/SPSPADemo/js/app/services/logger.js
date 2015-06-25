var logger = function () {

    var loggerModule = function (p_moduleName) {

        function log(p_msg) {
            console.group(p_moduleName);
            console.log(p_msg);
        };

        return {
            log: log
        }
    };

    return loggerModule;
};

define(logger)
