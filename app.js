const request = require('request');

var getQuote = () => {
  request({
    url: 'http://api.coindesk.com/v1/bpi/currentprice.json',
    json: true
  },(error,response,body) => {


    if(error){
      console.log('Unable to Connect because of Error');
    }
    if(response.statusCode === "404"){
      console.log('404 Error!');
     }
     else{
       var rate = body.bpi.USD.rate;
       var timee = body.time.updated;
       console.log(`Time       : ${timee}`);
       console.log(`Price(USD) : ${rate}`)
   }

});
};


getQuote();
