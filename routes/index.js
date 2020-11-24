const {Router} = require('express');
var route = Router();

route.get('/', async (req, res, next) => {
    res.send({http_code:"403",content:"Access Denied"})
});

route.get('*', async (req, res, next) => {
    res.send({http_code:"403",content:"Access Denied"})
});

module.exports = route;
