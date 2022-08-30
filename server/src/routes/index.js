const router = require('express').Router();

router.get('/',(req,res)=>{
res.json({hi:"start"})
})
module.exports = router;
