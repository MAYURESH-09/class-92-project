
player_1 = localStorage.getItem("Player 1 name is ")
player_2 = localStorage.getItem("Player 2 name is ")
document.getElementById("name_1").innerHTML =player_1 + "  :  "  ;
document.getElementById("name_2").innerHTML = player_2+ "  :  "  ;

score_1 = 0 ;
score_2 = 0 ;

document.getElementById("player_1score").innerHTML = score_1 ;
document.getElementById("player_2score").innerHTML = score_2 ;

document.getElementById("qns").innerHTML = " Question Turn -" + player_1 ;
document.getElementById("ans").innerHTML = " Answer Turn -" + player_2 ;

function Send()
{
   Number_1 = document.getElementById("letter_1").value ;
   Number_2 = document.getElementById("letter_2").value ;
   actual_answer = parseInt(Number_1) * parseInt(Number_2) ;
   question = "<h4 id='word_display'> Q."+ Number_1 + "*" + Number_2 + "</h4>";
   input_box = "<br>Answer: <input type = 'text' id= 'input_check_box' >";
   check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
   row = question + input_box + check_button ;
   document.getElementById("output").innerHTML = row ;
   document.getElementById("letter_1").innerHTML = "" ;
   document.getElementById("letter_2").innerHTML = ""  ;
}

qns = "player_1"
ans= "player_2"
function Check()
{
   answer = document.getElementById("input_check_box").value
   console.log(answer) ;

   if( answer == actual_answer)
   {
      if(ans == "player_1")
      {
         score_1 = score_1 + 1 ;
         document.getElementById("player_1score").innerHTML = score_1 ;
         console.log(score_1) ;
      }

      else
      {
         score_2 = score_2 + 1 ;
         document.getElementById("player_2score").innerHTML = score_2 ;
         console.log(score_2);  
      }
   }

   if(qns == "player_1")
   {
      qns = "player_2"
      document.getElementById("qns").innerHTML = "Question turn - " + player_2 ;
      document.getElementById("ans").innerHTML = "Answer turn - " ;
   }
   else
   {
      qns = "player_1"
      document.getElementById("qns").innerHTML = "Question turn - " + player_1 ;
      document.getElementById("ans").innerHTML = "Answer turn - " ;
   }

   if(ans == "player_1")
   {
      answ = "player_2"
      document.getElementById("qns").innerHTML = "Question turn - " + player_2 ;
      document.getElementById("ans").innerHTML = "Answer turn - " + player_1 ;
   }
   else
   {
      ans = "player_1"
      document.getElementById("qns").innerHTML = "Question turn - " + player_1 ;
      document.getElementById("ans").innerHTML = "Answer turn - "  + player_2;
   }

   document.getElementById("letter_1").innerHTML = "" ;
   document.getElementById("letter_2").innerHTML = "" ;
}