let string1 = "Bitch get out of the way !! ! $$@3124"

const reverseString = function() {
    len = string1.length
    i = 0
    let rev_string1 = ""
    while (i <= len) {
        rev_string1 += string1.charAt(len-i)
        i ++ 
    }

    console.log(rev_string1)
    return  rev_string1
        
};

reverseString()

// Do not edit below this line
module.exports = reverseString;
