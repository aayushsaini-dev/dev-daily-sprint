function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    
    return `Aayush`;
  })
  .then((value) => console.log(value)) // chaining

  .catch((error) => console.log(error));
