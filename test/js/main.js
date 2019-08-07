//RUN WOW.JS
new Window().init();
//Global
var products=[];
var carItems=[];
var cart_n= document.getElementsByName("cart_n");
//DIVS
var ftmovieDIV= document.getElementsByName("ftmovieDIV");
var fttypeDIV= document.getElementsByName("fttypeDIV");
var imdmovieDIV= document.getElementsByName("imdmovieDIV");
//information
var Movie=[
    {name: 'The Matrix',year:2000},
    {name: 'The Matrix Rev',year:2004},
    {name: 'The Matrix 2',year:2002},
    {name: 'The Matrix ZE',year:2005},
    {name: 'The Matrix 4',year:2007}, 
    {name: 'The Matrixc F',year:2008}
];
var TYPE=[
    {name: 'The Matrix game',year:2000}, 
    {name: 'The Mtx3 game',year:2002}, 
    {name: 'Final mtx game',year:2006}
];
var IMDB=[
    {name: 'tt023043',year:2000},
    {name: 'tt023444',year:2005}, 
    {name: 'tt023666',year:2007}
];
//HTML
function HTMLmovieProduct(con){
    let URL=`img/movie/movie${con}.jpg`;
    let btn=`btnMovie${con}`;
    return `
        <div class="col-md-4" wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <p class="card-text">${Movie[con-1]}</p>
                <p class="card-text">Year:${Movie[con-1].year}</p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" onclick="car2('${Movie[con-1].name}',
                '${Movie[con-1].year}','${URL}','${con}','${btn}')" 
                class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" href="car.php">View</a>
                </button>
                <button type="button" onclick="car('${Movie[con-1].name}',
                '${Movie[con-1].year}','${URL}','${con}','${btn}')" 
                class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" href="#">Add to list</a>
                </button>
                </div>
                <small class="text-muted">More Info</small>
                </div>
            </div>
        </div>
        </div>

    `;
}
function HTMLIMDBypeProduct(con){
    let URL=`img/imdb/imdb${con}.jpg`;
    let btn=`btnImdb${con}`;
    return `
        <div class="col-md-4" wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <p class="card-text">${IMDB[con-1]}</p>
                <p class="card-text">Year:${IMDB[con-1].year}</p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" onclick="car2('${IMDB[con-1].name}',
                '${IMDB[con-1].year}','${URL}','${con}','${btn}')" 
                class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" href="car.php">View</a>
                </button>
                <button type="button" onclick="car('${IMDB[con-1].name}',
                '${IMDB[con-1].year}','${URL}','${con}','${btn}')" 
                class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" href="#">Add to list</a>
                </button>
                </div>
                <small class="text-muted">More Info</small>
                </div>
            </div>
        </div>
        </div>

    `;
}
function HTMLProduct(con){
    let URL=`img/type/type${con}.jpg`;
    let btn=`btnType${con}`;
    return `
        <div class="col-md-4" wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <p class="card-text">${TYPE[con-1]}</p>
                <p class="card-text">Year:${TYPE[con-1].year}</p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" onclick="car2('${TYPE[con-1].name}',
                '${TYPE[con-1].year}','${URL}','${con}','${btn}')" 
                class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" href="car.php">View</a>
                </button>
                <button type="button" onclick="car('${TYPE[con-1].name}',
                '${TYPE[con-1].year}','${URL}','${con}','${btn}')" 
                class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" >Add to list</a>
                </button>
                </div>
                <small class="text-muted">More Info</small>
                </div>
            </div>
        </div>
        </div>

    `;
}
//animation
function animation(){
    const toast=swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:1000    
    });
    toast({
        type:'success',
        title: 'Added to Movie list'
    });
} 
//Functions
function car(name,year,url,con,btn){
    var item={
        name:name,
        year:year,
        url:url
    }
    carItems.push(item);
    let storage=JSON.parse(localStorage.getItem("car"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("car",JSON.stringify(products));
    }else{
        products=JSON.parse(localStorage.getItem("car"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
}   
    product=JSON.parse(localStorage.getItem("car"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementsByName(btncar).style.display="none";
    animation();

    function car2(name,year,url,con,btncar){
        var item={
            name:name,
            year:year,
            url:url
    }
    carItems.push(item);
    let storage=JSON.parse(localStorage.getItem("car"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("car",JSON.stringify(products));
    }else{
        products=JSON.parse(localStorage.getItem("car"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    product=JSON.parse(localStorage.getItem("car"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementsByName(btncar).style.display="none";
    animation();
}
//Render
function render(){
    for (let index = 1; index <=6; index++) {
        ftmovieDIV.innerHTML+=`${HTMLmovieProduct(index)}`;
    }
    for (let index = 1; index <=3; index++) {
        fttypeDIV.innerHTML+=`${HTMLProduct(index)}`;
        imdmovieDIV.innerHTML+=`${HTMLIMDBypeProduct(index)}`;
    }
    if(localStorage.getItem("car")==null){

    }else{
        products=JSON.parse(localStorage.getItem("car"));
        cart_n.innerHTML=`[${products.length}]`;
    }
    
}