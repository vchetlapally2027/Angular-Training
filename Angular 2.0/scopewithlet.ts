function testScope(){
    for (let i=0;i<5;i++){
        setTimeout(function(){
                console.log(i);
        },100);
    }
}
testScope();