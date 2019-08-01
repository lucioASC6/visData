const profiles = data.results;
const profile_div = document.getElementById("profileDiv");

 for (x of profiles) {
     // creates card for each user
     let userCard = document.createElement("div");
     userCard.className = "card";
     profile_div.appendChild(userCard);

     // inputs image as thumbnail
     let userImg = document.createElement("img");

 }