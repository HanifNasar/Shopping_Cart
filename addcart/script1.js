var product = [
    {
        img:"./img/card10.png",
        name: "Black shoe",
        price: 150,
        id: 1
    },
    {
        img:"./img/card12.png",
        name: "Black shoe",
        price: 200,
        id: 2
    },
    {
        img:"./img/card10.png",
        name: "Black shoe",
        price: 250,
        id: 3
    },
    {
        img:"./img/card12.png",
        name: "Black shoe",
        price: 300,
        id: 4
    },
    
]
var temp = [];
var cartlist = [];
var cartcount = 0;
var selectedproduct = []; 
product.map((e,i)=>{
    temp.push(`<div><img src =`+product[i].img+`><br><div>`+product[i].name+`</div><br><div>`+product[i].price+`</div><br><div><button onclick = "addcart(`+i+`)">addcart</button></div></div>`)
    document.getElementById('product-list').innerHTML = temp.join("");
  })

function addcart(index){
    var newobj = {
        img:product[index].img,
        name:product[index].name,
        price:product[index].price,
        id:product[index].id,
        quantity:1
    }
    var isduplicate = false;
    cartlist.map((e,j) =>{
        if(cartlist[j].id == newobj.id){
            isduplicate = true;
            cartlist[j].price += newobj.price;
            cartlist[j].quantity += newobj.quantity;
        }
    })
    if(!isduplicate){
    cartlist.push(newobj)
    }
    cartcount += 1;
    document.getElementById('count').innerHTML = cartcount;
}

function viewport(){
    var tempval = 0;
    if(cartlist !=0){
    document.getElementById('product-list').innerHTML = "";
    // for(var i=0; i<cartlist.length; i++){

    cartlist.map((e,i)=>{
        tempval+=cartlist[i].price;
        selectedproduct.push(`<div><img src = `+cartlist[i].img+`><div>`+cartlist[i].name+`</div><div>Rs:`+cartlist[i].price+`</div><div><p>quantity `+cartlist[i].quantity+`</p><button onclick = Delete(`+i+`)>-Remove</button></div></div>`)
        document.getElementById('product-list').innerHTML = selectedproduct.join("");
        })
        document.getElementById('totalprice').innerHTML = 'Total price=' + tempval
    }else{
        alert("please select any one product")
    }
}

function Delete(index){
    var deleteproduct = [];
    var tempval = 0;
    if(cartlist[index].quantity == 1){
        cartlist.splice(index,1)
    }else{
    var reduceproduct = cartlist[index].price / cartlist[index].quantity;
    cartlist[index].price = cartlist[index].price - reduceproduct;
    cartlist[index].quantity = cartlist[index].quantity - 1;
    }
    cartlist.map((e,i) => {
        tempval+=cartlist[i].price;
        deleteproduct.push(`<div><img src = `+cartlist[i].img+`><div>`+cartlist[i].name+`</div><div>Rs:`+cartlist[i].price+`</div><div><p>quantity `+cartlist[i].quantity+`</p><button onclick = Delete(`+i+`)>-Remove</button></div></div>`)
        })
        document.getElementById('product-list').innerHTML = deleteproduct.join("");
        cartcount -= 1;
        document.getElementById('count').innerHTML = cartcount;
        document.getElementById('totalprice').innerHTML = 'Total price=' + tempval;
}    




