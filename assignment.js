// 01. feetToMile:
function feetToMile(feet){
    var mile = feet  / 5280;
    return mile;
}

// 02. woodCaculator:
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5 ;
    var total = chairCount + tableCount + bedCount;
    return total;
}
// 03. brickCalculator:



// 04. tinyFriend:

function tinyFriend(nums){
    var shortest = nums[0];
    for(i=0; i <nums.length; i++){
        var nextNum = nums[i];
        if(nextNum < shortest){
            shortest = nextNum;
        }
    }
    return shortest;
}

