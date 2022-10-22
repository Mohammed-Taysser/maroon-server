const router = require('express').Router();
const controller = require('../controller/public.controller');

router.get('/health-check', controller.healthCheck);

module.exports = router;
