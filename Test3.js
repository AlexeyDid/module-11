function fun(chislo){


    return function fun2(chislo2){
        return chislo + chislo2;
    }
}
const result = fun(6);

console.log(result(5));