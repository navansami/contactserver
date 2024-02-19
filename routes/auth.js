const router = require('express').Router()

router
    .route('/register')
    .post(() => console.log('route not defined'))

router
    .route('/login')
    .post(() => console.log('route not defined'))

module.exports = router