let stepen = (x, n) => {

    if(Number.isInteger(x) && x > 0 && Number.isInteger(n) && n > 0){

        console.log(x ** n);

    }else{
        console.log('введите натуральное число');    }

}

stepen(6, 2);