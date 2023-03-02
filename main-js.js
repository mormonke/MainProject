// VANTA - LOGO;
VANTA.NET({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x82ff3f,
});
// /VANTA - LOGO

const API = "http://localhost:8000/products";

// CRUD CARD
// место для хранение карточек
const list = document.querySelector(".data-storage");

//инпуты с данными и их отправка
const log = document.querySelector("#login");
const pass = document.querySelector("#pass");
const name1 = document.querySelector("#name");
const send = document.querySelector("#btn-send");
// инпуты/btn модалки изменения
const nameEdit = document.querySelector("#input1");
const loginEdit = document.querySelector("#input2");
const passwordEdit = document.querySelector("#input3");
const editSaveBtn = document.querySelector("#modalSave");
const editModal = document.querySelector("#edit-modal");
const exit = document.querySelector(".close");

// bigCard

const bigCard = document.querySelector(".bigContent");

// Random Story
const generateRandomStory = () => {
  const characters = [
    "Olivia",
    "Liam",
    "Sophia",
    "Ethan",
    "Ava",
    "Jackson",
    "Isabella",
    "Aiden",
    "Mia",
    "Lucas",
    "Charlotte",
    "Noah",
    "Amelia",
    "Mason",
    "Harper",
    "Logan",
    "Abigail",
    "Ethan",
    "Emily",
    "Chloe",
    "Caleb",
    "Madison",
    "Elijah",
    "Elizabeth",
    "Avery",
    "Grayson",
    "Ella",
    "Benjamin",
    "Scarlett",
    "Samuel",
    "Victoria",
    "Dylan",
    "Aria",
    "Owen",
    "Penelope",
    "Wyatt",
    "Aurora",
    "Luke",
    "Hazel",
    "Michael",
    "Grace",
    "Gabriel",
    "Luna",
    "Nicholas",
    "Zoey",
    "Levi",
    "Ellie",
  ];
  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "San Francisco",
    "Charlotte",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "Nashville",
    "El Paso",
    "Detroit",
    "Memphis",
    "Portland",
    "Oklahoma City",
    "Las Vegas",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Mesa",
    "Atlanta",
    "Kansas City",
    "Colorado Springs",
    "Miami",
    "Raleigh",
    "Omaha",
    "Long Beach",
    "Virginia Beach",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Wichita",
    "New Orleans",
  ];

  const actions = [
    "run a marathon",
    "jump over obstacles",
    "swim in the ocean",
    "sing in the shower",
    "dance with friends",
    "play a game",
    "cook a meal",
    "clean the house",
    "read a book",
    "write a letter",
    "draw a picture",
    "paint a landscape",
    "build a birdhouse",
    "fix a leaky faucet",
    "create a sculpture",
    "invent a machine",
    "explore a new city",
    "travel the world",
    "learn a new language",
    "teach a class",
    "study for a test",
    "work from home",
    "exercise in the park",
    "stretch before bed",
    "do yoga at sunrise",
    "meditate for clarity",
    "sleep under the stars",
    "wake up early",
    "dream of possibilities",
    "imagine the future",
    "think about solutions",
    "speak with confidence",
    "listen to music",
    "watch a movie",
    "film a documentary",
    "record a podcast",
    "edit a video",
    "design a logo",
    "code a website",
    "hack a system",
    "test a hypothesis",
    "debug a program",
    "launch a rocket",
    "market a product",
    "sell a service",
    "buy a gift",
    "invest in stocks",
    "save for retirement",
    "donate to charity",
  ];
  const outcomes = [
    "run and jump",
    "swim and dive",
    "sing and dance",
    "play and laugh",
    "cook and eat",
    "clean and organize",
    "read and learn",
    "write and share",
    "draw and paint",
    "build and create",
    "fix and repair",
    "invent and innovate",
    "explore and discover",
    "travel and experience",
    "teach and inspire",
    "study and research",
    "work and collaborate",
    "exercise and stretch",
    "yoga and meditate",
    "sleep and rest",
    "wake and rise",
    "dream and imagine",
    "think and ponder",
    "speak and communicate",
    "listen and understand",
    "watch and observe",
    "film and edit",
    "record and produce",
    "design and develop",
    "code and program",
    "hack and mod",
    "test and debug",
    "launch and publish",
    "market and advertise",
    "sell and negotiate",
    "buy and acquire",
    "invest and grow",
    "save and budget",
    "donate and give back",
    "bake and decorate",
    "study and memorize",
    "explore and hike",
    "paint and draw",
    "play and compete",
    "train and improve",
    "meditate and reflect",
    "write and edit",
    "code and debug",
    "launch and scale",
    "market and brand",
    "sell and promote",
  ];
  const startText = [
    "Once upon time",
    "Long time ago",
    "In dark forest",
    "On sunny day",
    "Under blue sky",
    "In crowded city",
    "On quiet street",
    "At the old house",
    "In mysterious cave",
    "Near wild river",
    "In endless desert",
    "On top of hill",
    "Inside ancient ruins",
    "In distant galaxy",
    "Beyond the horizon",
    "In secret laboratory",
    "In abandoned mine",
    "On the high seas",
    "In deep space",
    "In enchanted garden",
    "In magical kingdom",
    "At the haunted mansion",
    "On stormy night",
    "In the morning mist",
    "Among the stars",
    "In the bamboo forest",
    "On the snowy peak",
    "In the burning sun",
    "In the icy waters",
    "In the shadowy alley",
    "In the neon lights",
    "In the digital realm",
    "In the virtual world",
    "On the dusty road",
    "In the endless sky",
    "In the stormy clouds",
    "In the peaceful meadow",
    "On the rocky terrain",
    "On the barren wasteland",
    "In the bright sunlight",
    "In the deep ocean",
    "In the tranquil forest",
    "In the bustling marketplace",
    "In the ancient library",
    "In the futuristic city",
    "In the underground bunker",
    "In the post-apocalyptic world",
    "In the industrial wasteland",
    "In the quiet countryside",
    "In the modern metropolis",
  ];

  const randomCharacter =
    characters[Math.floor(Math.random() * characters.length)];
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  const randomStart = startText[Math.floor(Math.random() * startText.length)];

  const storyIntro = `${randomStart}, ${randomCharacter} went to ${randomLocation}.`;
  const storyMiddle = `${randomCharacter} ${randomAction} and something unexpected happened. ${randomOutcome}.`;
  const storyEnd = `In the end, ${randomCharacter} learned an important lesson and returned home.`;

  return `${storyIntro} ${storyMiddle} ${storyMiddle} ${storyMiddle} ${storyMiddle} ${storyMiddle}  ${storyEnd}`;
};

// Pagination
const paginationList = document.querySelector(".pagination-list");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// random avatar
function getImage0() {
  const random = Math.floor(Math.random() * 303) + 3;
  return (
    '<img class = "avatars" src="./img/avatars/' +
    random +
    '.jpg" border="0" />'
  );
}

// random location
function getImage1() {
  const random = Math.floor(Math.random() * 23) + 3;
  return (
    '<img class = "bigJPG" src="./img/location/' +
    random +
    '.jpg" border="0" />'
  );
}

// Search
const searchInp = document.querySelector("#search");
let searchVal = "";

// pagination
let limit = 4;
let currentPage = 1;
let pageTotalCount = 1;

const mediaQuery = window.matchMedia("(max-width: 550px)");
if (window.matchMedia("(max-width: 550px)").matches) {
  limit = 2;
}

getProducts();
// стяжка данных с сервера

async function getProducts() {
  const res = await fetch(
    `${API}?name_like=${searchVal}&_limit=${limit}&_page=${currentPage}`
  );

  const count = res.headers.get("x-total-count");
  pageTotalCount = Math.ceil(count / limit);
  const data = await res.json(); // ? расшивровка данных
  //? отображаем актуальные данные
  render(data);
}

// добавление продукта
async function addProducts(product) {
  //? await для того чтобы getProducts подождал пока данные добавятся
  await fetch(API, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //? стянуть и отоброзить актуальные данные
  getProducts();
}

// удаление продукта
async function deleteProduct(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  getProducts();
}

// изменение продукта
async function editProduct(id, editedProduct) {
  await fetch(`${API}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(editedProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  getProducts();
}

async function getOneProduct(id) {
  const res = await fetch(`${API}/${id}`);
  const data = await res.json();
  return data;
}
// отображение на странице
function render(arr) {
  list.innerHTML = "";
  arr.forEach((item) => {
    list.innerHTML += `
		<div class="card">
    <div class="content">
      <div class="back">
        <div class="back-content">      
      ${getImage0()}
        <strong>${item.name}</strong>
        </div>
      </div>
      <div class="front">
        <div class="img">
          <div class="circle"></div>
          <div class="circle" id="right"></div>
          <div class="circle" id="bottom"></div>
        </div>
    
        <div class="front-content">
        <p>Login</p>
          <small class="badge">${item.title}</small>
          <p>Password</p>
          <small class="badge">${item.price}</small>
          <div class="description">
            <div class="title">
              <p class="title">
              </p>
              <svg
                fill-rule="nonzero"
                height="15px"
                width="15px"
                viewBox="0,0,256,256"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  style="mix-blend-mode: normal"
                  text-anchor="none"
                  font-size="none"
                  font-weight="none"
                  font-family="none"
                  stroke-dashoffset="0"
                  stroke-dasharray=""
                  stroke-miterlimit="10"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-width="1"
                  stroke="none"
                  fill-rule="nonzero"
                  fill="#20c997"
                >
                  <g transform="scale(8,8)">
                    <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p class="card-footer">
              <button class="edit-btn" id="${item.id}">Edit</button>
              <button class="delete-btn" id="${item.id}">Delete</button>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>  
    `;
  });
  renderPagination();
}

function renderImage() {
  bigCard.innerHTML += `
  <div class="bigcard">
        <div class="cardbig">
          <div class="card-info">
            <div class="textCard">
              <h2>Story</h2>
              ${generateRandomStory()}
              </div>
              <div class="fullInfo">
              </div>
            </div>
          </div>
        </div>
        <div class="bigImg">
        ${getImage1()}
        </div>`;
}

// кнопка для добавления (create)

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (!name1.value.trim() || !log.value.trim() || !pass.value.trim()) {
    alert("Проверьте что вы ввели все данные");
    return;
  }
  const product = {
    name: name1.value,
    title: log.value,
    price: pass.value,
  };
  addProducts(product);
});

// кнопка для удаления
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    deleteProduct(e.target.id);
  }
});

// кнопка для изменения

let id = null;

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("edit-btn")) {
    id = e.target.id;
    editModal.style.display = "block";

    const product = await getOneProduct(e.target.id);

    nameEdit.value = product.name;
    loginEdit.value = product.title;
    passwordEdit.value = product.price;
  }
});

editSaveBtn.addEventListener("click", () => {
  if (
    !nameEdit.value.trim() ||
    !loginEdit.value.trim() ||
    !passwordEdit.value.trim()
  ) {
    alert("Заполните все поля");
    return;
  }

  const editedProduct = {
    name: nameEdit.value,
    title: loginEdit.value,
    price: passwordEdit.value,
  };
  editProduct(id, editedProduct);
});

searchInp.addEventListener("input", () => {
  searchVal = searchInp.value;
  currentPage = 1;
  getProducts();
});

exit.addEventListener("click", () => {
  editModal.style.display = "none";
});

function renderPagination() {
  paginationList.innerHTML = "";
  for (let i = 1; i <= pageTotalCount; i++) {
    paginationList.innerHTML += `
	<li class="page-item ${currentPage == i ? "active" : ""}">
	<button href="#" class="page-link page_number">${i}</button>
	</li>`;
  }

  if (currentPage == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (currentPage == pageTotalCount) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("page_number")) {
    currentPage = e.target.innerText;
    getProducts();
  }
});

next.addEventListener("click", (e) => {
  if (currentPage == pageTotalCount) {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  currentPage++;
  getProducts();
});

prev.addEventListener("click", (e) => {
  if (currentPage == 1) {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  currentPage--;
  getProducts();
});

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("card") ||
    e.target.classList.contains("front-content")
  ) {
    renderImage();
  }
});
