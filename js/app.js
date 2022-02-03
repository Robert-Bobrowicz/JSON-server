const url = "http://localhost:3000/users"

fetch(url)
    .then(res => res.json())
    .then(data => {
            console.log(JSON.stringify(data, null, 2));
    })
    .catch(err => console.log(err));
