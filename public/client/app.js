$(document).ready(() => {
  console.log("hello");

  $.ajax({
    type: "GET",
    url: "/api"
  }).then(res => {
    console.log(res);
    const randNum = Math.floor(Math.random() * res.length);
    console.log(res[randNum]);
  });
});
