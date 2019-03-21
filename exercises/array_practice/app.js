axios.get("http://api.vschool.io/casey/todo").then(response =>{
    console.log(response.data);
    for (let i = 0; i < response.data.length; i++) {
        createTodo= response.data[i];
        
    }

});
 
function createTodo(todo){
    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h1");
    title.className = "title";
    title.textConten = tod0.title;

    const description = document.createElement
}
