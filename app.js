var payment = {
    pageview:"",
    price:""
}

var checked = false

function netVal (value){
    if(value==1){
        payment.pageview="10K"
        payment.price=8.00.toFixed(2)
    } else if(value==2){
        payment.pageview="50K"
        payment.price=12.00.toFixed(2)
    } else if(value==3){
        payment.pageview="100K"
        payment.price=16.00.toFixed(2)
    } else if(value==4){
        payment.pageview="500K"
        payment.price=24.00.toFixed(2)
    } else if(value==5){
        payment.pageview="1M"
        payment.price=36.00.toFixed(2)
    }
    
    if(checked) payment.price*=0.75
    
    return payment;
}

// function slideFunction(val){
//     $('.page_val').html(netVal(val).pageview)
//     $('.pricing').html(netVal(val).price)
// }

document.getElementById("slider").oninput = function(){
    $('.page_val').html(netVal(this.value).pageview)
    $('.pricing').html(netVal(this.value).price)

    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}



function toggle(){
    checked = !checked
    if(checked) $('.pricing').html((($('.pricing').html())*0.75).toFixed(2))
    else $('.pricing').html((($('.pricing').html())*(4/3)).toFixed(2))
}


