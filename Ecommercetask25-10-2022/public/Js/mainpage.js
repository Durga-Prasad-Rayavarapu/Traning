
function getitems(){
    
let productdata =[{
    "id":1,
    "Name":"product-1.jpg",
    "disc":"Red Printed T-shirt",
    "amount":500.00,
    "quantity" :1
    },
{
"id":2,
"Name":"product-2.jpg",
"disc":"Hrx shoes",
"amount":1500.00,
"quantity" :1
},
{
"id":3,
"Name":"product-3.jpg",
"disc":"Track Phant",
"amount":1000,
"quantity" :1
},
{
"id":4,
"Name":"product-4.jpg",
"disc":"Puma T-shirt",
"amount":800,
"quantity" :1
},
{
"id":5,
"Name":"product-5.jpg",
"disc":"white shoes",
"amount":1500,
"quantity" :1
},
{
"id":6,
"Name":"product-6.jpg",
"disc":"Puma T-shirt",
"amount":800,
"quantity" :1
},
{
"id":7,
"Name":"product-7.jpg",
"disc":"HRX Scoks",
"amount":200,
"quantity" :1
},
{
"id":8,
"Name":"product-8.jpg",
"disc":"Fossile Watch",
"amount":3000,
"quantity" :1
},
{
"id":9,
"Name":"product-9.jpg",
"disc":"Roadster watch",
"amount":2500,
"quantity" :1
},
{
"id":10,
"Name":"product-10.jpg",
"disc":"HRX Red Shoes",
"amount":900,
"quantity" :1
},
{
"id":11,
"Name":"product-11.jpg",
"disc":"White Neted snekers",
"amount":800,
"quantity" :1
},
{
"id":12,
"Name":"product-12.jpg",
"disc":"Nike Track Phant",
"amount":700,
"quantity" :1
}

]
localStorage.setItem("collections",JSON.stringify(productdata))
    let data = JSON.parse(localStorage.getItem('collections'));
    console.log(data)
    let product='';
    for(i=0;i<data.length;i++){

        product +='<div class="col-4">   <img src="assests/images/collections/'+data[i].Name+'" alt="image" />   <h4>'+data[i].disc+'</h4>   <div>   ₹<span id="amount">'+data[i].amount+'</span>   <span class="number"><input type="number" name="quntity" id="quntity'+data[i].id+'" value="'+data[i].quantity+'" min="1" max="10" onchange="addqun('+data[i].id+')"></span> </div>   <button class="btn" onclick="addcart('+data[i].id+')">Addcart</button> </div>'
    }


document.getElementById('demo').innerHTML=product
}

function addqun(id){
    let data = JSON.parse(localStorage.getItem('collections'))
    let quntity= $("#quntity"+id).val();
    // console.log(quntity)

    for(i=0;i<data.length;i++){
        if(id==data[i].id){
            // console.log(data[i].id)
            data[i]["quantity"]=quntity
            let Tamount = data[i].amount*quntity
            data[i]["Totalamount"]=Tamount
        }
        localStorage.setItem('collections',JSON.stringify(data))
        // console.log(data)
    }
}

function addcart(id){
    let data = JSON.parse(localStorage.getItem('collections'))
    // console.log(data)
    
    for(i=0;i<data.length;i++){
        if(id==data[i].id){
            if(data[i].quantity>1){
                data[i]["Totalamount"]=data[i].Totalamount
                // alert('qt>1')
            }
            else{
            data[i]["Totalamount"]=data[i].amount
            }
        let pastcartdata = JSON.parse(localStorage.getItem('usercartdatas')||'[]');
        console.log(pastcartdata)

            let Tamount = data[i].amount*data[i].quantity
                data[i]['Toatal amount']=Tamount
        let selectedata={'ID':id,'Name':data[i].Name,'disc':data[i].disc,'Amount':data[i].amount,'Quantity':data[i].quantity,'Totalamount':data[i].Totalamount}
           console.log(selectedata)
        
        pastcartdata.push(selectedata)
        localStorage.setItem('usercartdatas',JSON.stringify(pastcartdata));
            alert('item add to cart')
            console.log(pastcartdata)
            console.log(data[i].uid)
            // console.log(usercartdatas)
            }
        
        }
}



function cart(){
    let data = JSON.parse(localStorage.getItem('usercartdatas'))
    let cart;
    let finalcost;
    finalamount=0
    items='';

    // alert('its working')
    console.log(data)
    for(i=0;i<data.length;i++)
    { 
        console.log(data[i].Quantity)  
        if(data.length>0){
            finalamount +=data[i].Totalamount
            items+=data[i].disc
        }
        else{
            finalamount=data[i].Totalamount
            items+=data[i].disc
        }
        // console.log(finalamount)
    
    //   cart +='<tr><td><img src="../public/assests/images/collections/'+data[i].Name+'" alt="img" class="pic"></td><td><h4>'+data[i].disc+'</h4></td><td><input type="number" id="exampleInputEmail1" value="'+data[i].Quantity+'" /></td><td>₹<strong>'+data[i].Amount+'</strong></td><td>₹<strong>'+data[i].Totalamount+'</strong></td><td><button>Remove</button> <button>Add</button></td><td><button>Checkout</button></td></tr></tr>'

      cart +=  '<div class="basket-product"><div class="item"> <div class="product-image"> <img src="assests/images/collections/'+data[i].Name+'" alt="img" class="product-image"></div> <div class="product-details"><h1><strong>'+data[i].disc+'</strong></h1> </div></div> <div class="price"><strong>'+data[i].Amount+'</strong></div> <div class="quantity"><input type="number" class="quantity-field" id="quantity'+data[i].ID+'" value="'+data[i].Quantity+'" onchange="addorsub('+data[i].ID+')" min="1" max="10" /> </div>  <div class="subtotal"><strong>'+data[i].Totalamount+'</strong></div> <div class="remove"><button id="remv" onclick="remove('+data[i].ID+')">Remove</button> </div></div>'

      finalcost +='<div><div class="subtotal-title">'+data[i].disc+'</div><div class="subtotal-value final-value" id="basket-subtotal">'+data[i].Totalamount+'</div></div>'

      finalcost1='<div><div class="total-title">Total</div><div class="total-value final-value" id="basket-total">'+finalamount+'</div></div'
        document.getElementById('app').innerHTML=cart
        document.getElementById('app1').innerHTML=finalcost
        document.getElementById('app2').innerHTML=finalcost1

    }
}

function remove(id){
    let data =JSON.parse(localStorage.getItem('usercartdatas'))
    for(i=0;i<data.length;i++){
        if(data[i].ID==id){
            // alert('its working')
            console.log(data[i].ID)
            data.splice(i,1)
        }
        localStorage.setItem('usercartdatas',JSON.stringify(data))
    }
    window.location.reload();
}

function addorsub(id){
    let data = JSON.parse(localStorage.getItem('usercartdatas'))
    let quntity= $("#quantity"+id).val();
    console.log(quntity)

    for(i=0;i<data.length;i++){
        if(id==data[i].ID){
            console.log(data[i].ID)
          console.log(data[i]["Quantity"]=quntity)
            let Tamount = data[i].Amount*quntity
            console.log(Tamount)
            data[i].Totalamount=Tamount
        }
        localStorage.setItem('usercartdatas',JSON.stringify(data))
        console.log(data)
    }
    window.location.reload();
}

