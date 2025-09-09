const Team = [
  {
    img: "./img/John.svg",
    name: "John Smith",
    jobType: "CEO and Founder",
    text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    img: "./img/Jane.svg",
    name: "Jane Doe",
    jobType: "Director of Operations",
    text: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    img: "./img/Michael.svg",
    name: "Michael Brown",
    jobType: "Senior SEO Specialist",
    text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    img: "./img/Emily.svg",
    name: "Emily Johnson",
    jobType: "PPC Manager",
    text: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    img: "./img/Brian.svg",
    name: "Brian Williams",
    jobType: "Social Media Specialist",
    text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    img: "./img/Sarah.svg",
    name: "Sarah Kim",
    jobType: "Content Creator",
    text: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

const elList = document.querySelector(".team__list");

function renderList() {
  elList.innerHTML = "";
  Team.forEach((el) => {
    elList.innerHTML += `
            <li class="team__item">
                  <div class="team__item-top">
                    <div class="tema__item-left">
                      <img src=${el.img} alt="" class="team__item-img" />
                    </div>
                    <div class="team__item-right">
                      <h4 class="team__item-name">${el.name}</h4>
                      <h4 class="team__item-about">${el.jobType}</h4>
                    </div>
                  </div>
                  <div class="team__item-bottom">
                    <p class="team__item-text">
                      ${el.text}
                    </p>
                  </div>
            </li>
        `;
  });
}
renderList();

const elItems = document.querySelectorAll(".our__item");
const elBtns = document.querySelectorAll(".our__btn-div");
const elBottoms = document.querySelectorAll(".our__item-bottom");

elBtns.forEach((btn, index) => {
  btn.onclick = () => {
    const isActive = elItems[index].classList.contains("active");

    elBottoms.forEach((el) => el.classList.remove("block"));
    elBtns.forEach((el) => (el.innerHTML = "+"));
    elItems.forEach((el) => el.classList.remove("active"));

    if (!isActive) {
      btn.innerHTML = "-";
      elItems[index].classList.add("active");
      elBottoms[index].classList.add("block");
    }
  };
});
