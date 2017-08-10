var array = []
            function breakNumber(num){
            var input = num.toString()
            for (i  = 0;i <= input.length-1;i++){
            array.push(input.charAt(i))
        }
        console.log(array)
    }
    //Here the value is 2233123
    breakNumber(2233123)