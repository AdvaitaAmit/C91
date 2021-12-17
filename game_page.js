getplayer1_name=localStorage.getItem("player1_name_key")
getplayer2_name=localStorage.getItem("player2_name_key")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=getplayer1_name+" - "
document.getElementById("player2_name").innerHTML=getplayer2_name+" - "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="question turn -"+getplayer1_name
document.getElementById("player_answer").innerHTML="answer turn -"+getplayer2_name

function sendword(){
    get_word = document.getElementById("word").value
word = get_word.toLowerCase();
console.log("Word in Lower Case = " + word)

charAt1 = word.charAt(1);
position2=Math.floor(word.length/2);
charAt2= word.charAt(position2);
position3=word.length-1
charAt3=word.charAt(position3)
replace1= word.replace(charAt1, "_")
replace2= replace1.replace(charAt2, "_")
replace3= replace2.replace(charAt3, "_")
console.log(replace3)

question_tag="<h3 id='word_display'> Question:" + replace3 + "</h3>";
input_tag= "<br> Answer: <input type='text' id='input_check_box'>";
button_tag="<br> <br> <button class='btn btn-success' onclick='check()'>Check</button>";
row = question_tag+input_tag+button_tag;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}
