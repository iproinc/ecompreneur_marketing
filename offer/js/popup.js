function check_account(email){
  check_account_ajax(email, ( response ) => {
    if (response.msg == "error"){
      console.log("error -    - ");
    }  else if (response.msg == "ok") {
      console.log(response.tiny+ "tiny");
      console.log(response.shop+ "shop");
      if (response.tiny && response.shop) {
        window.location = "https://www.example.com";
      } else if (response.tiny) {

      } else if (response.shop) {
        
      } else {

      }
    }
  });
}

// go to ep app to check account
function check_account_ajax(email, callback){
  $.ajax({
    url: 'https://www.ecompreneur.net/check_recurly_account',
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


