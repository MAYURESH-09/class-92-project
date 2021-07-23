function Next_Page()
{
    player_1 = document.getElementById("player1_name").value 
    player_2 = document.getElementById("player2_name").value 

    console.log(player_1)
    console.log(player_2)

    localStorage.setItem("Player 1 name is ", player_1)
    localStorage.setItem("Player 2 name is ", player_2)

    window.location = "game_page.html"
}
