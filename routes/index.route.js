const router = require('express').Router();
const publicRoutes = require('./public.route');

router.use('/', publicRoutes);

module.exports = router;
