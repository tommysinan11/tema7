document.addEventListener("DOMContentLoaded", function () {
  let items; 
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

  let active = 3;
  fetch("https://hvlgtuztakjwxqrwpwbm.supabase.co/rest/v1/test_product", {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bGd0dXp0YWtqd3hxcndwd2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTY2MTAsImV4cCI6MjAyMzQzMjYxMH0.hg7bA_euEged0Q_cE4NJq-E7zc7XELhRGXjj-RcAK8s",
    },
  })
    .then((res) => res.json())
    .then(fhowproducts);

  function fhowproducts(froducts) {
    froducts.forEach(fhowproduct);
  }

  function fhowproduct(product, i, arr) {
    const plate = document.querySelector("#cardtemp").content;

    const kopy = plate.cloneNode(true);

    document.querySelector(".slider").appendChild(kopy);
    console.log("i",i);
    console.log("arr",arr);
    if (i >= arr.length - 1) {
        console.log("last");
        items = document.querySelectorAll(".slider .item ");
        loadShow();
    }
  }

  function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  }
  next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
  };
  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
  };
});
