function check_account(email){
  check_account_ajax(email, ( response ) => {
    if (response.msg == "error"){
      console.log("error -    - ");
    }  else if (response.msg == "ok") {
      console.log(tiny+ "tiny");
      console.log(shop+ "shop");
    }
  });
}

// go to ep app to check account
function check_account_ajax(email, callback){
  $.ajax({
    url: 'https://3775be74.ngrok.io/check_recurly_account',
    type: "POST",
    data: {
      email: email
    },
    dataType: "json",
    success: ( response, status ) => {
      console.log(status);
      console.log(response);
      if (callback){
        callback(response);
      }
    },
    error: ( response, status ) => {
      console.log(status);
      console.log(response);
    }
  });
};



// msg: "ok",
// tiny: tiny,
// shop: shop
// }