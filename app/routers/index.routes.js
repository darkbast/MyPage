module.exports = function(app){
    var index = require('../ctrls/index.ctrl');
    app.route('/').get(index.render);
};
