var payment = {
    pageview:"",
    price:""
}

function netVal (value){
    if(value==1){
        payment.pageview="10K"
        payment.price="$8.00"
    } else if(value==2){
        payment.pageview="50K"
        payment.price="$12.00"
    } else if(value==3){
        payment.pageview="100K"
        payment.price="$16.00"
    } else if(value==4){
        payment.pageview="500K"
        payment.price="$24.00"
    } else if(value==5){
        payment.pageview="1M"
        payment.price="$36.00"
    }
    
    return payment;
}

function slideFunction(val){
    $('.page_val').html(netVal(val).pageview)
    $('.pricing').html(netVal(val).price)
}

console.log('#flexSwitchCheckDefault')