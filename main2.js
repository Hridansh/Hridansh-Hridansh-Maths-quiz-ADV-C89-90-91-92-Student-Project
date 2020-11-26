player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name;
document.getElementById("player_2_name").innerHTML = player2_name;

document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn:-" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn:-" + player2_name;

function send(){
    get_word_1 = document.getElementById("word_1").value;
    get_word_2 = document.getElementById("word_2").value;

    question = "<h4 id='number_display'>Q."+get_word_1 + "X" +get_word_2 +"</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";

    row = question + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word_1").value = "";
    document.getElementById("word_2").value = "";

}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == get_word_1*get_word_2){
        if(answer_turn == "player_2"){
            player2_score = player2_score + 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
        }
        else{
            player1_score = player1_score + 1;
            document.getElementById("player_1_score").innerHTML = player1_score;
        }
    }

    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }
    if(answer_turn == "player_2"){
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }
    else{
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }

    document.getElementById("output").innerHTML = "";

}