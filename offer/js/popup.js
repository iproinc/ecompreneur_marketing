function check_account(){
  let email = $("#modal")[0].value;
  console.log(email);
  check_account_ajax(email, ( response ) => {
    if (response.msg == "error"){
      console.log("error -    - ");
    }  else if (response.msg == "ok") {
      console.log(response.tiny+ "tiny");
      console.log(response.shop+ "shop");
      if (response.tiny && response.shop) {
        jQuery('#shop-tiny-modal').modal('show');
      } else if (response.tiny) {
        jQuery('#tiny-modal').modal('show');
      } else if (response.shop) {
        jQuery('#shop-modal').modal('show');
      } else {
        jQuery('#regular-modal').modal('show');
      }
    }
  });
}

// go to ep app to check account
function check_account_ajax(email, callback){
  $.ajax({
    url: 'https://www.ecompreneur.net/check_recurly_account',
    type: "POST",
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
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

function close() {
  console.log("test");
  $('#myModal').modal('close');
}


