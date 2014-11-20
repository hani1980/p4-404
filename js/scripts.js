
 $("p").hide("fast");
  $("p").show("slow");
$(document).ready(function(){

var msg = ['\"Sorry, This page doesn not exist!!\"', '\"The link you followed may be broken!!\"', '\"The page may have been removed!!\"', ];

var randomValue = msg[Math.floor(msg.length * Math.random())];

console.log(randomValue);
$('.message').text(eval('randomValue'));

  $(".message").squishy({maxWidth:300});
  });