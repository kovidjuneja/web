fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => b.points - a.points);

    const top3 = data.slice(0, 3);
    const remaining = data.slice(3, 9);

    console.log(top3);
    console.log(remaining);

    const winnerNamesElements = document.getElementsByClassName("winner-name");
    winnerNamesElements[0].textContent = `${top3[1].name} - ${top3[1].points}`;
    winnerNamesElements[1].textContent = `${top3[0].name} - ${top3[0].points}`;
    winnerNamesElements[2].textContent = `${top3[2].name} - ${top3[2].points}`;

    const profileCircles = document.getElementsByClassName("profile-circle");
    profileCircles[0].style.backgroundImage = `url(${top3[1].avatar})`;
    profileCircles[1].style.backgroundImage = `url(${top3[0].avatar})`;
    profileCircles[2].style.backgroundImage = `url(${top3[2].avatar})`;

    let tableData = "";
    for (let index = 0; index < remaining.length; index++) {
      const values = remaining[index];
      const position = index + 4;
      tableData += `
        <div class="Names">
          <div class="name-circle">
            <div class="avatar-image" style="background-image: url(${values.avatar})"></div>
          </div>
          <div class="number">${position}</div>
          <div class="people">${values.name}</div>
          <div class="score">${values.points}</div>
          </br>
        </div>
      `;
    }

    document.getElementsByClassName("Remaining")[0].innerHTML = tableData;
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });