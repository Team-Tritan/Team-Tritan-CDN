const {Router} = require('express');
var route = Router();

route.get('/status', async (req, res, next) => {
    res.send({status:"alive"})
});

route.get('*', async (req, res, next) => {
    res.send({http_code:"403",content:"Access Denied","go_back":"https://teamtritan.wtf"})
});

module.exports = route;
