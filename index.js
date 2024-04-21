// const configurationObject = {
//   method: "POST",
//   Headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     //you cound predefine the form data outside, and just pass it in
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// };
// fetch("http://localhost:3000/dogs", configurationObject)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log("error.message");
//   });

function submitData(name, email) {
  const data = {
    name: name,
    email: email,
  };
  const usersObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:3000/users", usersObj)
    .then((res) => res.json())
    .then((data) => {
      const passedId = data.id;
      const paragragh = document.createElement("p");
      paragragh.textContent = passedId;
      document.body.appendChild(paragragh);
    })
    .catch(function (error) {
      alert("Sorry, something is wrong!");
      const h4 = document.createElement("h4");
      h4.textContent = error;
      document.body.appendChild(h4);
    });
}
