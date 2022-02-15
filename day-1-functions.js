/*
 * Create the function factorial here
 */
function factorial(n) {
    //base case
      if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
  
}
