$(document).ready(() => {
  displayCharacter = (nm, rl, fp) => {
    $("#role-header").text(rl);
    $("#name").text(nm);
    $("#role").text(rl);
    $("#forcePower").text(fp);
  };

  $.ajax({
    type: "GET",
    url: "/api"
  }).then(res => {
    const randNum = Math.floor(Math.random() * res.length);
    const display = res[randNum];
    displayCharacter(display.name, display.rank, display.forcepoints);
  });

  $("#btnSearch").on("click", () => {
    let userSearch = $("#search").val();
    userSearch = userSearch
      .split(" ")
      .join("")
      .toLowerCase();

    $.ajax({
      type: "GET",
      url: `/api/${userSearch}`
    }).then(res => {
      console.log(res);
      displayCharacter(res.name, res.rank, res.forcepoints);
    });
  });

  $("#btnSubmit").on("click", e => {
    e.preventDefault();

    const newChar = {
      name: $("#nameInput").val(),
      rank: $("#roleInput").val(),
      forcepoints: $("#fpInput").val()
    };

    console.log(newChar);

    $.ajax({
      type: "POST",
      url: "/api",
      data: newChar
    }).then(res => {
      console.log(res);
    });
  });
});
