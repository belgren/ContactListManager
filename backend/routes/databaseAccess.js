const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.js')

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/add', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    number: req.body.number,
    birthdate: req.body.birthdate,
  });
  newContact.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });

  router.get('/ping', function (req, res) {
    return res.send('pong');
  });

  router.get('/all', (req,res) => {
    Contact.find({}, function(err, contacts){
      if (err){
        res.send(err);
        return;
      } else{
        res.send(contacts);
      }
    })
  })

module.exports = router;
