function getData(url, good, bad) {
    return new Promise((resolve, reject) => {
      if (url === null) {
        reject("No url found");
      }

      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.onload = function () {
        if (xhr.status === 200) {
          // ...
          resolve(xhr.responseText);
        } else {
          // ...
          reject(xhr.status);
        }
      };
    });
}

function success(response) {
    console.log("Successful!");
    console.log(response);
}

function notSuccessful(response) {
    console.log("Failed!");
    console.log(`The status of this resulted to: ${message}`);
}

let url = prompt("Enter a url: ")

getData(url)
  .then((res) => {
    success(res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 2");
    console.log(res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 3");
    console.log(res);
    return getData("https://reqres.in/api/users/2");
  })
  .then((res) => {
    console.log("Successful 4");
    console.log(res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 5");
    console.log(res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 6");
    console.log(res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 7");
    console.log(res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .catch((status) => {
    notSuccessful(res);
  });

// getData(url, success, notSuccessful);
// console.log("Hello world");

// getData(url, (res) => {
//     console.log("Successful 1");
//     console.log(res);
//     getData(
//       url,
//       (res) => {
//         console.log("Successful 2");
//         console.log(res);
//         getData(
//           url,
//           (res) => {
//             console.log("Successful 3");
//             console.log(res);
//             getData(
//               url,
//               (res) => {
//                 console.log("Successful 4");
//                 console.log(res);
//                 getData(
//                   url,
//                   (res) => {
//                     console.log("Successful 5");
//                     console.log(res);
//                     getData(
//                       url,
//                       (res) => {
//                         console.log("Successful 6");
//                         console.log(res);
//                         getData(
//                           url,
//                           (res) => {
//                             console.log("Successful 7");
//                             console.log(res);
//                           },
//                           notSuccessful
//                         );
//                       },
//                       notSuccessful
//                     );
//                   },
//                   notSuccessful
//                 );
//               },
//               notSuccessful
//             );
//           },
//           notSuccessful
//         );
//       },
//       notSuccessful
//     );
// }, notSuccessful)