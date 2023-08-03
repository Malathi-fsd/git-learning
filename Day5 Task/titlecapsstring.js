let str="welcome to guvi geeks";
let totitlecaps =(str)=>{
    return str.toLowerCase().split(" ").map (word){
        return (word.charAt(0).toUppercase()+word.slice(1));
    }
}
totitlecaps(str);