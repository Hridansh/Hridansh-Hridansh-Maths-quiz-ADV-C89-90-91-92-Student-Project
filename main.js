function add_User(){
    player1_name = document.getElementById("player1_username").value;
    player2_name = document.getElementById("player2_username").value;
    localStorage.setItem("player1_name", player1_name)
    localStorage.setItem("player2_name", player2_name)
    window.location = "index2.html";
}