var count = 0;
for(var i = 1; i < 100; i++){
    for(var j = 0; j < i; j++){
        count = i + j;
        console.log(count);
        count--;
    }
}