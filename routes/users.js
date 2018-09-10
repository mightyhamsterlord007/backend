var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createuser', function(req, res, next) {
  console.log('data', req.body);
  res.json({
    confirmation: 'success',
    data: req.body
  });
});

router.get('/allusers', function(req, res) {

  userController.getUser({})
    .then(users => {
      res.json({
        confirmation: 'success',
        data: users
      });
    })
    .catch( err => {
      res.json({
        confirmation: 'failure',
        data: err
      });
    })

});

module.exports = router;
