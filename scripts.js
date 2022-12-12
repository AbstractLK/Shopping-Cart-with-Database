console.log("Hello");
var cart = [];

function addToCart(item) {
    console.log(item);
    if (!cart.includes(item.id)) {
        cart.push(item.id);
        //const list = document.getElementById("list");
        let newItem = `<li id="item${item.id}">${item.name} <button class='btn' onclick='removeItem(${item.id})'><img src='Assets/x-square.svg' class='float-end'></button></li>`;
        $("#list").append(newItem);
        //list.innerHTML += newItem;
    }
}

function removeItem(itemId) {
    // const list = document.getElementById("list");
    // let i = document.getElementById("item" + itemId);
    // list.removeChild(i);

    $("#item" + itemId).remove();
    delete cart[cart.indexOf(itemId)];
}

