$(document).ready(() => {
  function displayCharacter(nm, rl, fp) {
    $("#role-header").text(rl);
    $("#name").text(nm);
    $("#role").text(rl);
    $("#forcePower").text(fp);
  }

  $.ajax({
    type: "GET",
    url: "/api"
  }).then(res => {
    const randNum = Math.floor(Math.random() * res.length);
    const display = res[randNum];
    displayCharacter(display.name, display.rank, display.forcepoints);
  });
});

$("#btnSearch").on("click", () => {
  let userSearch = $("#search").val();
  console.log(userSearch);
  userSearch = userSearch
    .split(" ")
    .join("")
    .toLowerCase();

  $.ajax({
    type: "GET",
    url: `/api/${userSearch}`
  }).then(res => {
    console.log(res);
  });

  console.log(userSearch);
});
