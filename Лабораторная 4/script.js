const todo = document.getElementById("comments");
const Base_url = "https://jsonplaceholder.typicode.com";

const featchUserById = async(id) => {
    const result = await fetch(Base_url + '/comments?_limit=20');
    const data = await result.json();

    data.map(e =>{
        todo.innerHTML +=`
        <div class = "block">
            <h2>${e.name}</h2>
            <p>${e.email}</p>     
            <p>${e.body}</p>
        </div>`;
    })
}

featchUserById()