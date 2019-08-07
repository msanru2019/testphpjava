var product=JSON.parse(localStorage.getItem('cart'));
var carItems=[];
var cart_n = document.getElementsByName('cart_n'); //getElementsById
var table = document.getElementsByName("table");
var total=0;

//HTML
function tableHTML(i){
    return `<tr>
     <th scope="row">${i+1}</th> 
    <td>${product[i].Title}</td>
    <td>1</td>
    <td>${product[i].Type}</td>
    </tr>
    
    `; 
     
    
}

function clean(){
    localStorage.clear();
for(let index = 0; index < product.lenght; index++ ){
     table.innerHTML +=tableHTML(index);
     total= total+parseInt(product[index].Type);
}
total=0;
table.innerHTML=`
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
`;
cart_n.innerHTML='';
document.getElementsByName("btnBy").style.display="none";
document.getElementsByName("btnClean").style.display="none";

}
//Render
function Render(){
    for (let index = 0; index < product.length; index++) {
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(product[index].Type);
        
    }
    table.innerHTML+=`
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">Total:$${total}.00 </th>
    </tr>
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">
      <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">
            Clear Movie Data
      </button>
    </th>
    <th scope="col">
    <form id="formAdd">
    <button type="submit" id="btnBy" class="btn btn-success">View</button>
    </form>
    </th>
    </tr>
    `;
    product=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${product.lenght}];`
}

$(document).ready(function(){
    $("#formAdd").sumbit(function(e){
        e.preventDefault();
        var option=1;
        post = $.trim(option);
        $.ajax({
            url:"./db/crud.php",
            type:"POST",
            dataType: "json",
            data: {order:total*total*23,total:total,option:post},
            success: function(data){
                console(`success:${data}`);
            }
        });
        swal({
           position: 'center',
           type: 'success',
           title: 'Item is selected',
           text:`Item is: ${total*total*23}`,
           showConfirmation: true,
           timer:5000


        });
        clean();
    });
});
