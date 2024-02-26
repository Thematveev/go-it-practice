const ENDPOINT = 'https://65d63786f6967ba8e3bdba79.mockapi.io/api/v1/users';


function saveNewUser(name, city){
    const data = JSON.stringify({
        name, city
    })

    const config = {
        method: 'POST',
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    }

    return fetch(ENDPOINT, config).then(response => response.json())
}

function getAllUsers(){
    return fetch(ENDPOINT).then(res => res.json())
}


// saveNewUser('Alex', 'London').then(data => {
//     console.log('User created!', data)
// })


const a = getAllUsers();
a.then((data) => console.log(data))


