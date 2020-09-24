https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

    function divisors(integer) {
        let arr = [];
        for(let n = 2; n < integer; n++){
            if(integer % n === 0) {
                arr.push(n)
            }
        }

        if(arr.length === 0){
            return `${integer} is prime` ;
        }
        return arr;
    }