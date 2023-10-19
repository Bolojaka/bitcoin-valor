$(document).ready(function(){
  $("#calcular").click(function(){

    let qtdBitcoin = Number( $("#qtdBitcoin").val() );
    //console.log(qtdBitcoin);
    
    $.get("https://api.coinlore.net/api/ticker/?id=90", function(data, status){
      //console.log(status);
      //alert("Data: " + data + "\nStatus: " + status);
      $("valor").text(data[0].price_usd);
      let valorTotalUSD= qtdBitcoin * Number(data[0].price_usd);
      $("#resultado").val(valorTotalUSD);
    });
    
  });
});
