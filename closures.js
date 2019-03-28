function counter(){
    var count = 0
    return function(){
        return ++count;
    }
}

count1 = counter(); 
count1(); // 1
count1(); // 2


