
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', Open);
// function Open(){
//     body.classList.add('active');
// }; same as next 3 lines


openShopping.addEventListener("click",()=>{
    body.classList.add('active');
})
closeShopping.addEventListener("click",()=>{
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        name:'Chicken',
        image:'image1.jpg',
        price:120000
    },
    {
        id:2,
        name:'Deer',
        image:'image2.jpg',
        price:130000
    },
    {
        id:3,
        name:'tecnopop7',
        image:'tecnopop7.jpg',
        price:180000
    },
    {
        id:4,
        name:'Lamb',
        image:'image4.jpg',
        price:140000
    },
    {
        id:5,
        name:'womenwear',
        image:'womenwear.png',
        price:170000
    },
    {
        id:6,
        name:'Goat-ribs',
        image:'image4.jpg',
        price:140000
    },
    {
        id:7,
        name:'blackview tab1',
        image:'blackview tab1.jpg',
        price:110000
    },
    {
        id:8,
        name:'blackview tab2',
        image:'blackview tab2.jpg',
        price:124000
    },
    {
        id:9,
        name:'blackview',
        image:'blackview.jpg',
        price:160000
    },
    {
        id:10,
        name:'laptop1',
        image:'laptop1.jpg',
        price:115000
    },
    {
        id:11,
        name:'laptop2',
        image:'laptop2.jpg',
        price:134000
    },
    {
        id:12,
        name:'smartwatch',
        image:'smartwatch.jpg',
        price:115000
    },
    {
        id:13,
        name:'sweetperfume1',
        image:'sweetperfume1.png',
        price:180000
    },
    {
        id:14,
        name:'sweetperf3',
        image:'sweetperf3.png',
        price:180000
    },
    {
        id:15,
        name:'tecnophone2',
        image:'tecnophone2.jpg',
        price:180000
    },
    
];


let listCards =[];

// function initApp(){
//     products.map((value,key)=>{})
// }
let initApp = ()=>{
    products.map((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class"title">${value.name}</div>
            <div class"price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
        `
        list.appendChild(newDiv);
    });
}
initApp();

let addToCart =(key)=>{
    if(listCards[key] == null){
        listCards[key]=products[key];
        listCards[key].quantity = 1;
    }
    reloadCart();
}
    let reloadCart = ()=>{
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
    
    listCards.map((value,key)=>{
        totalPrice = totalPrice+value.price;
        count = count+value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}" /></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerHTML=totalPrice.toLocaleString();
    quantity.innerHTML=count;
}

function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}
