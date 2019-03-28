function counter(){
    var count = 0
    return function(){
        return ++count;
    }
}

count1 = counter(); 
count1(); // 1
count1(); // 2

count2 = counter();
count2(); //1
count2(); //2

count1(); //3

///////////////////////////////////////

function classRoom(){
    var instructors = ["Oliver", "Teresa"]
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}