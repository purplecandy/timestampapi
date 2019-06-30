const express = require('express');
const router = express.Router();

router.get('/:timeStamp?',(req,res)=>{
  let timeStamp = req.params.timeStamp;
  
  if(timeStamp !== undefined){
    if(timeStamp.search('-')<0){
    timeStamp = parseInt(timeStamp);
    }   
  }
  
  const date = timeStamp == undefined?new Date():new Date(timeStamp);
  if(date instanceof Date && !isNaN(date)){
    res.status(200).json({
      unix:date.getTime(),
      utc:date.toUTCString()
    });  
  }else{  
    res.status(200).json({
      'error':'Invalid Date'
    });    
  }  
});

module.exports = router;