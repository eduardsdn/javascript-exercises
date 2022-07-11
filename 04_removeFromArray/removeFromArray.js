

const removeFromArray = function() {

    const new_array = arguments[0]
    len = arguments[0].length
    
    for (let i=1; i < len+1; i++) {
        
        if (new_array.includes(arguments[i])) {
            let index = new_array.indexOf(arguments[i]);
            new_array.splice(index,1);
        }
        else {
            continue
        }
    }

    console.log(new_array)
    return new_array
}

//removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
