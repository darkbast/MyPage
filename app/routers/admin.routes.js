module.exports = function(app){
    var admin = require('../ctrls/admin/admin.user.ctrl');
    app.route('/admin').get(admin.render);
    // app.route('/admin').post(admin.render);
};