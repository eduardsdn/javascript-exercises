

const removeFromArray = function() {

    const array = arguments[0]
    
    for (let i=1; i < array.length; i++) {
        
        if (array.includes(arguments[i])) {
            let index = array.indexOf(arguments[i]);
            array.splice(index,1);
        }
        else {
            continue
        }
    }

    console.log(array)
    return array
}

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
