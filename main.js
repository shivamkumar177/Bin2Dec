function Convert(){
    var bin=(document.getElementById("binarybox").value);
    var dec=0;
    for(var i=bin.length-1;i>=0;i--){
        if(bin[i]=='1'){
            dec+=Math.pow(2,bin.length-i-1); 
        }
    }
    console.log(dec);
    document.getElementById("decimalbox").value=dec;
}