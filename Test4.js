function form(a, b){

    console.log(a);

    let timerId = setInterval(function chis(){

        if(a < b){
            a++; console.log(a);
        }else{
            clearInterval(timerId);
        }


    }, 1000);

}

form(10, 15);