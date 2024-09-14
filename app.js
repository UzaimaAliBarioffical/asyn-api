let mainDiv =document.getElementById("main");
console.log(mainDiv);

async function dataFech() {
let user = await fetch("https://jsonplaceholder.typicode.com/users");
console.log(user);
let userInfo = await user.json();
console.log(userInfo);
let post = await fetch("https://jsonplaceholder.typicode.com/posts")
console.log(post);
let postInfo = await post.json();
console.log(postInfo);
return {userInfo,postInfo}

}
dataFech() ;
let userData =dataFech() ;
userData.then(({userInfo,postInfo})=>{
   for (let i=0;i<userInfo.length;i++){
    let mainUser =userInfo[i];
// console.log(mainUser);

    let createH1=document.createElement("h1");
    createH1.innerHTML=`userId : ${mainUser.id}`;
    // console.log(createH1);
    mainDiv.appendChild(createH1)

    let createH2=document.createElement("h2");
    createH2.innerHTML=`userName : ${mainUser.name}`;
    // console.log(createH2);
    mainDiv.appendChild(createH2);
for (let j=0;j<postInfo.length;j++){
    let mainPost =postInfo[j];
    if(mainPost.userId===mainUser.id ){
    let createPara=document.createElement("h3");
    createPara.innerHTML=`post : ${mainPost.userId}`
    mainDiv.appendChild(createPara);
    let body=document.createElement("p");
    body.innerHTML=`post body : ${mainPost.body}`
    mainDiv.appendChild(body)

    let title=document.createElement("p");
    title.innerHTML=`post title : ${mainPost.title}`
    mainDiv.appendChild(title)

    }
}


   }

}).catch((error)=>{
    console.log(error);
    
})