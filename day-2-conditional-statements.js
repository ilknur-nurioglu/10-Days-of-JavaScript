
function main() {
    const N = parseInt(readLine().trim(), 10);
   
    if (N%2!=0){
    console.log("Weird")
    }else if(N>20 && N%2==0){
    console.log("Not Weird")
    }
}
