function purgeChar(str){
    return str.replace('[', '').replace(']', '').replace('"', '').replace('"', '');
}

document.getElementById("sport").onclick = function () {

    let zoneMain = document.querySelectorAll(".zone.sport");
    let preview = zoneMain[0].children[0];
    let fullview = zoneMain[0].children[1];
    // clean the previous content
    preview.innerHTML = "";
    fullview.innerHTML = "";

    // preview static display
    title = document.createElement("h1");
    nbaLogo = document.createElement("img");

    title.setAttribute("class", "titlePreview");
    nbaLogo.setAttribute("class", "imgPreview");
    nbaLogo.setAttribute("src", "https://cdn.1min30.com/wp-content/uploads/2018/03/logo-NBA.jpg");


    title.appendChild(document.createTextNode("Classement des meilleurs joueurs NBA"));

    preview.appendChild(title);
    preview.appendChild(nbaLogo);

    getReq('/api/nba', (result) => {
    	var classement=0;
        // preview dynamic display 
        for (var i=0;i<3;i++) {
        	classement+=1;

            playerName = document.createElement("h1");
            playerTeam = document.createElement("h2");
            playerPosition = document.createElement("p");
            separator=document.createElement("hr")

            playerName.classList.add("playerName");
            playerTeam.classList.add("playerTeam");
            playerPosition.classList.add("playerPosition");

            playerName.appendChild(document.createTextNode(purgeChar("Top "+classement+" : "+result[i].playerName)));
            playerTeam.appendChild(document.createTextNode("Equipe : " + purgeChar(result[i].playerTeam)));
            playerPosition.appendChild(document.createTextNode("Position : " + purgeChar(result[i].playerPosition)));

            preview.appendChild(playerName);
            preview.appendChild(playerTeam);
            preview.appendChild(playerPosition);
            preview.appendChild(separator);
        }
        classroom=0;
        // fullview dynamic display
        var classement=0;
        for (let elt in result) {
        	classement+=1;

            playerName = document.createElement("h1");
            playerTeam = document.createElement("h2");
            playerPosition = document.createElement("p");
            separator=document.createElement("hr")

            playerName.classList.add("playerName");
            playerTeam.classList.add("playerTeam");
            playerPosition.classList.add("playerPosition");

            playerName.appendChild(document.createTextNode(purgeChar("Top "+classement+" : "+result[elt].playerName)));
            playerTeam.appendChild(document.createTextNode("Equipe : " + purgeChar(result[elt].playerTeam)));
            playerPosition.appendChild(document.createTextNode("Position : " + purgeChar(result[elt].playerPosition)));

            fullview.appendChild(playerName);
            fullview.appendChild(playerTeam);
            fullview.appendChild(playerPosition);
            fullview.appendChild(separator);
        }
    });
}