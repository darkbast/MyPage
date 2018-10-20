module.exports = function(app){
    var qa = require('../../ctrls/board/b.qa.ctrl');
    app.route('/qa').post(qa.render);
    app.route('/qa/search').post(qa.search_render);
};