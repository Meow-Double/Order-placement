
//----------Payment---

const elements = document.querySelectorAll(".order__payment-label");

elements.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("order__payment-label--active");
    }

    item.classList.add("order__payment-label--active");
  });
});

// --------------Button---

const elementsButton = document.querySelectorAll(".order__delivery-button");

elementsButton.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < elementsButton.length; i++) {
      elementsButton[i].classList.remove("order__delivery-button--active");
    }

    item.classList.add("order__delivery-button--active");

    if (item.getAttribute("data-delivery") === "first") {
      const elementActive = document.querySelectorAll(".delivery-window");

      elementActive.forEach((item) => {
        item.classList.remove("delete");
      });
    }
    if (item.getAttribute("data-delivery") === "second") {
      const elementActive = document.querySelectorAll(".delivery-window");

      elementActive.forEach((item) => {
        item.classList.add("delete");
      });
    }
  });
});

// -----------------Select--

const buttonSelect = document.querySelector(".order__form-select");

buttonSelect.addEventListener("click", () => {
  document
    .querySelector(".order__form-select-dropdown")
    .classList.toggle("order__form-select-dropdown--active");

  const elementSelect = document.querySelectorAll(".order__form-select-item");

  elementSelect.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < elementSelect.length; i++) {
        elementSelect[i].classList.remove("order__form-select-item--active");
      }

      item.classList.add("order__form-select-item--active");

      const phoneInput = document.querySelector(".order__form-input--phone");
      if (phoneInput.value == "") {
        phoneInput.value = "+" + item.getAttribute("data-phone-country");
      }
      // }else if (phoneInput.value.substr(0,1) = "+"){

      // }
      // if (phoneInput.value.substr(0,1))
    });
  });
});

document.querySelector(".order__form-input--persone").onkeypress = function (
  e
) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    return false;
  }
};
document.querySelector(".order__form-input--phone").onkeypress = function (e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    return false;
  }
};

//   -------------------------------------------Back-------------------------

// const requestUrl = "https://localhost:7213/api/FavouriteProduct/CreateDb";


// const sendRequest = async (method, url, body = null) => {
//   const response = await fetch(url);
//     response.json();

//     return response;
// };

// sendRequest("GET", requestUrl)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ------------------------------------------------------------------------

// const requestUrl = "http://localhost:7213/api/FavouriteProduct/GetAllProduct";



// fetch('https://localhost:7213/api/FavouriteProduct/CreateDb', {
    // method: 'post',
    // body: JSON.stringify({email: 'max@test.com', password: '12345'}),
    // headers: {
    //     'content-type': 'application/json'
    // }
// })


// fetch(requestUrl).then(res => {return res.json}).then(json => console.log(json))



// async function submit() {
//   console.log("start")
//   // let blob = await new Promise(resolve => {return {title:"hello"}});
//   let response = await fetch('https://localhost:7213/api/FavouriteProduct/CreateDb', {
//     method: 'POST',
//     body: {
//       products:{
//         title:"ssss"
//       }
//     }
//   });

//   // сервер ответит подтверждением и размером изображения
//   let result = await response.json();
//   alert(result.message)

//   console.log("finish")
// }


// submit();
const res = axios.post("https://localhost:7213/api/FavouriteProduct/CreateDb", {"Content-Type": "application/json",
"Access-Control-Allow-Origin": "http://localhost:3000",
 });
console.log(res);

const data = axios.post("https://localhost:7213/api/FavouriteProduct/AddProductToFavourite", {
  name:"12233", price:1000
});
console.log(data)
// const date = axios.post("https://localhost:7213/", {"Content-Type": "application/json",
// "Access-Control-Allow-Origin": "http://localhost:3000",
//  });
// console.log(date)

axios.get("https://localhost:7213/api/FavouriteProduct/GetAllProduct").then(res =>{
  console.log(res.data);
});

// fetch(
//   'http://localhost:7213/api/FavouriteProduct/GetAllProduct',
//   {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: 'Ilija'})
//   }
// ).then(resp => resp.text()).then(console.log)