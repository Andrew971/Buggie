var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/location', (req,res,next)=>{
  console.log(req.body)

  setTimeout(()=>{
    res.json({status:true})
  },1000)
})

router.post('/places', (req,res,next)=>{
  console.log(req.body)

  setTimeout(()=>{
    res.json({status:true,redirect:true})
  },1000)
})
module.exports = router;
