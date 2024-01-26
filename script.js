console.log('this is a test');
function addToCart(e) {
    console.log('called')
    restImg.classList.add('remove')
        console.log('added')
        if (data.length > 0) {
            last.children[last.children.length - 3].remove()
        }
        var price = e.target.parentElement.children[0].innerHTML
        var name = e.target.parentElement.parentElement.children[1].innerHTML
        var imgSrc = e.target.parentElement.parentElement.children[0].src
        data.push({
            price: price,
            name: name,
            imgSrc: imgSrc,
            value: 1
        })
        let newCart = document.createElement('div')
        newCart.classList.add('.bodyHold')
        htmlMaker(data).forEach((node)=>{
            newCart.appendChild(node)
        })
        cartBody.insertAdjacentElement('afterend', newCart)
        total.innerHTML = `$${totalFunc()}`
        console.log(data)
}

cartAdder.forEach((btn)=>{
        btn.onclick=(e)=>{
        addToCart(e)
    }
})
