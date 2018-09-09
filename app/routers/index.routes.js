module.exports = function(app){
    var index = require('../ctrls/index.ctrl');
    app.route('/').get(index.render);
    // app.route('/').post(index.render);
    // app.get('/',index.render);
};