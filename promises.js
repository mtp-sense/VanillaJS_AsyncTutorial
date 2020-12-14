const posts = [
    {
        title:"Post One",
        body:"This is body of post one."
    },
    {
        title:"Post Two",
        body:"This is body of post two."
    },

];
function getPosts(){
    setTimeout(()=>{
            let output ="";
        posts.forEach((post)=>{
            output +=`<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}

function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push(post);
        //mimicing some kind of error checking to resolve or reject the promise.
        const error = false;
        if(!error){
            resolve();
        }else{
            reject("Error: Something went wrong.");
        }
        },2000);
    });   
}

//Single Promise
// createPosts({title:"Post Three",body:"This is body of post three."})
// .then(getPosts)
// .catch(err=>console.log(err));


//Async /Await

// async function init(){
//     await createPosts({title:"Post Four", body:"This is body of post four"});
//     getPosts();
// }
// init();

//Async/Await with Fetch
async function fetchUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}
fetchUsers();

//Multiple promises 
// const promise1 = Promise.resolve("Hello there..");
// const promise2=27;
// const promise3 = new Promise((resolve,reject)=> setTimeout(resolve,2000,"Goodbye.."));
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());
// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));
                