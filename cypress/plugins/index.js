const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on,_config) => {
    on('file:preprocessor', cucumber({
        ...browserify.defaultOptions,
        typescript: require('resolve').sync('typescript'),
    }));
    on('task', { // 508 logging
        log(message) {
            console.log(message);

            return null;
        },
        table(message) {
            console.table(message);

            return null;
        },
    });
};
