function findMaxPalindrome(arr){

    let max = Number.MIN_VALUE

    for(let i=0; i<arr.length; i++){

        let temp = []

        for(let j=i; j<arr.length; j++){

            temp.push(arr[j])

            console.log(temp)

            let s = 0

            let e = temp.length-1

            let isPalindrome = true

            while(s<e){

                if(temp[s] != temp[e]){

                    isPalindrome = false

                }

                s++

                e--

            }

            if(isPalindrome && temp.length>max){

                max = temp.length

            }

        }

    }

    console.log(max)

}

