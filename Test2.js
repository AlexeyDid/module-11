function num(chis){

    if(chis <= 1000 && chis > 1){

        let result = "Простое число";

        for(i = 2; i < chis; i++){


            if(chis % i === 0){

                result = "непростое число";
                break;
            }
        }

        console.log(result);

    }else if(chis > 1000){
        console.log("данные неверны");
    }else if(chis === 1 || chis === 0){
        console.log("введите число больше");
    }
}

num(10);