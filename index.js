const reviews = [
  {
    id: 1,
    name: "Julia Yeng",
    job: "Accountant",
    img: "./media/pexels-pixabay-415829.jpg",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos totam, assumenda ea laborum numquam unde tenetur odio ullam repellendus necessitatibus.",
  },
  {
    id: 2,
    name: "Alicia Doe",
    job: "Manager",
    img: "./media/pexels-spencer-selover-428333.jpg",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos totam, assumenda ea laborum numquam unde tenetur odio ullam repellendus necessitatibus.",
  },
  {
    id: 3,
    name: "Michael Smith",
    job: "CEO",
    img: "./media/pexels-ezekixl-akinnewu-1006265.jpg",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos totam, assumenda ea laborum numquam unde tenetur odio ullam repellendus necessitatibus.",
  },
  {
    id: 4,
    name: "Jenny Smith",
    job: "Assistant",
    img: "./media/pexels-martin-péchy-2078265.jpg",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos totam, assumenda ea laborum numquam unde tenetur odio ullam repellendus necessitatibus.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
