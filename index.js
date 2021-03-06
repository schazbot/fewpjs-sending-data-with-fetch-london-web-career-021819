// const testVar = {}

// function testFunc() {
//   return "hi"
// }

let formData = {
  "firstName": "Charl",
  "message": "Nice One"
};
 
let configObj = {
  method: "POST",
  body: formData
}


function registerSelf(){
  return fetch("http://guestbook.example.com/register" , configObj)
  .then(function (response){ 
    return response.json()
  })
  .then(function (json) {
    return json.message;
  })
}

function errorSelf(){
  return fetch("http://guestbook.example.com/register-error" , configObj)
  .then(function (response){ 
    return response.json()
  })
  .then(function (json) {
    return json.message;
  })
  .catch(() => {
    return ":("
  });
}