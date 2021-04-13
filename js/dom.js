function endGame(){
    document.getElementById("winner").innerText=(winner!="draw")?`And the winner is \n${winner}`:"We have a draw";
}
function newGame(){
    //window.location.reload()
    document.getElementById("winner").innerText="";
}