var btn= document.getElementsByName("btn").addEventListener("click",getPost);
var div=document.getElementsByName("cardDiv");
var con=0;

function getPost(){
 fetch('http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666')
 .then((res)=>{
     return res.json();
 })
 .then((post)=>{
     for(let index =0; index <1; index++){
         div.innerHTML+=`
        <div class="card col-3 m-1 mx-auto">
        <img class="card-img-top" src=${post[con].Poster}">
        <div class="card-body">
            <h5 class="card-title">${post[con].title}</h5>
            <p class="card-text">${post[con].type}</p>

         `
         con=con+1;
     }
 })
 .catch((error)=>{
    console.log(error);
 })
}
//the url doesn't have a unique id for each item therefore not able to get the data to view individual on the page 
// however able to view all data on the page 