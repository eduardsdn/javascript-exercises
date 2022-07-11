let string 
let num 

const repeatString = function(string, num) {
    let final = ""
    i = 0
    while(i < Math.abs(num))

        if (num < 0) {
            final = "ERROR"
            break
        }

        else if (num >= 0) {
                final += string;
                i ++
            }
        
    return final
};  

// Do not edit below this line
module.exports = repeatString;
