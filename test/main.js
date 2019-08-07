var btn= document.getElementsByName("btn").addEventListener("click",getData);
var btn2= document.getElementsByName("btn2").addEventListener("click",getData);
var btn3= document.getElementsByName("btn3").addEventListener("click",getData);
var div=document.getElementsByName("postsDiv");

var con=0;

function getData(){
 console.log("hi");    
 let xhr= new XMLHttpRequest();
 xhr.open('GET','http://www.omdbapi.com/?s=Matrix&apikey=720c3666',true);
 xhr.onload=function(){
     if(this.status==200){
        let data = JSON.parse(this.responseText);
       
        for(let index = 0; index < 2; index++) {
            div.innerHTML +=`
            <div class="card bg-dark mx-auto border border-white" >
         <div class="card-body">
        
        <p class="card-title">TITLE: ${data[con].Title}</p>
        <p class="card-title">TYPE: ${data[con].Imdb}</p>
        <p class="card-title">TYPE: ${data[con].Type}</p>
        <p class="card-title">YEAR: ${data[con].Year}</p>
         </div>
         </div>
            `
            con=con+1;
        }
     }
  }
xhr.send();
}

//the url doesn't have a unique id for each item therefore not able to get the data to view individual on the page 
// however able to view all data on the page 