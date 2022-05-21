// Add your code here

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// }

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });







function submitData(name, email) {
    const body = document.querySelector('body')
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name, email })
    })

        .then(res => res.json())
        .then(data => body.append(data.id))
        .catch(function (error) {
            alert("Unauthorized Access")
            body.append(error.message)
        })
}