
function containsEnglish(string) {
    var str = string.toLowerCase();
    console.log(str);
    if(str.includes("english")){
        return true;
    }else
    {
        return false;
    }
}


function countSum(x){
    var count = 0;
    var sum = 0;
    var newArrray = [];
    if(x === null){
        return newArrray;
    }else {
        for (var i = 0; i < x.length; i++) {
            if (x[i] > 0) {
                count++;
            } else {
                sum = sum + x[i];
            }
        }
        newArrray.push(count);
        newArrray.push(sum)
        return newArrray
    }
}


console.log(countSum([1, -6, 5, 4, 3, -7, -10, 201, -3]));
console.log(countSum(null));

console.log(containsEnglish("FaagdnglishAGG"));
console.log(containsEnglish("SMFENgliSHasnD"));