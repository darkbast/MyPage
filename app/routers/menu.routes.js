module.exports = function(app){
    var index = require('../ctrls/program.ctrl');
    var java = require('../ctrls/java.ctrl');

    app.route('/program').post(index.render);
    app.route('/java').post(java.render);
    
};