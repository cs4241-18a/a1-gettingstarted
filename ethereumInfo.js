function getETH(){
  $.ajax({
    url:"https://www.cryptopia.co.nz/api/GetMarkets/BTC",
    type: "GET",
    success: function(res){
      res.Data.map((el)=>{
        if(el.Label === "ETH/BTC"){
          $("#eth-price").html(el.LastPrice);
        }
      });
    }
  })
}
getETH();
setInterval(getETH, 10000);
