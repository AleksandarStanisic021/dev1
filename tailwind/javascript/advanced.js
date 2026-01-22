console.log("hi");

/*const fetchdata = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve("data fetched");
      else reject("error occurred");
    }, 2000);
  });
};

let data = fetchdata();

data.then((res) => console.log(res)).catch((err) => console.log(err));

async function fetchdataAsync() {
  try {
    let response = await fetchdata();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
fetchdataAsync();*/
/*
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = outer();
console.log(counter());*/

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter1 = outer();
let counter2 = outer();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());

function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success = false;
      if (success) resolve("data fetched");
      else reject("error occurred");
    }, 2000);
  });
}

async function fetchdataAsync() {
  try {
    let response = await fetchdata();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
fetchdataAsync();

fetchdata()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
