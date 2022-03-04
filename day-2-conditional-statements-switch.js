function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case  "a" || "e" || "i" || "o" || "u":
            return letter="A";
        break;
        
        case "b"||"c"||"d"||"f"||"g":
            return letter="B";
        break;
        
        case "h"|| "j"|| "k"|| "l"|| "m":
            return letter="C" ;
        break;
        
        case "n"|| "p"|| "q"|| "r"|| "s"|| "t"|| "v"|| "w"|| "x"|| "y"|| "z":
            return letter="D";
        break
    }

}
