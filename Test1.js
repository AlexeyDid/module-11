let arr = [5, 5, 6, 4, 8, 9, 0];

function funcArray (arr){

    let chetn = 0;
    let nechetn = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++){

        if(typeof arr[i] === 'number' && !isNaN(arr[i])){

            if(arr[i] === 0){
                zero +=1;
            }

            else if(arr[i] % 2 === 0){

                chetn +=1;
            }

            else{

                nechetn +=1;
            }
        }
    }
    console.log(chetn);
    console.log(nechetn);
    console.log(zero);
};
funcArray (arr);
