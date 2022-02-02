const projects = [
  {
    title: "Headlines - News on the go",
    imgURL: "./images/headlines-newsapp.png",
    description: "A simple news web app which helps busy professionals keep updated with news by reading just headlines. No articles, no temptation to read further, no time wasted.",
    link: "https://headlines-newsapp.web.app"
  },
  {
    title: "Krishi Mart",
    imgURL: "./images/krishi-mart.png",
    description: "Krishi Mart (farmer's portal) - an academic project built with ReactJS. Authentication and storage is implemented using Firebase. The review system is enhanced by using Vader Sentimental Analysis library, to display most appreciated products to the users.",
    link: "https://krishi-mart.web.app"
  },
  {
    title: "Sarathi - A hotel booking website",
    imgURL: "./images/sarathi-hotelbooking.png",
    description: "Sarathi is a travel booking guide which helps you to book hotel rooms across different cities and provides you with the best deals and packages.",
    link: "https://sarathi-c95a5.web.app"
  }
];

/*
const rows = projects.map((project) => {
  return `
    <li class="projects__container__list__item">
      <div class="container projects__item">
        <div class="projects__item__img">
          <img src="./images/headlines-newsapp.png" alt="Headlines - News on the go" width="100%" height="auto" />
        </div>
        <div class="projects__item__content">
          <h2>Headlines</h2>
          <p>Description</p>
          <a href="">Link<i class="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
    </li>
  `
});
*/

const projectPlaceholder = document.querySelector(".projects__container__list");

projects.forEach(project => {
  // create a list element
  const li = document.createElement("li");

  // add class names
  li.classList.add("projects__container__list__item");

  // declare and define child of li item
  const projectItem = document.createElement("div");
  projectItem.classList.add("container", "projects__item");

  // append the child item to li
  li.appendChild(projectItem);

  // declare and define the image container
  const projectItemImg = document.createElement("div");
  projectItemImg.classList.add("projects__item__img");

  // append the image container to the div
  projectItem.appendChild(projectItemImg);

  // declare and define the img tag
  const projectItemImgEl = document.createElement("img");
  projectItemImgEl.src = project.imgURL;
  projectItemImgEl.alt = project.title;
  
  // append the image tag to the image container
  projectItemImg.appendChild(projectItemImgEl);

  // declare and define the content div
  const projectItemContent = document.createElement("div");
  projectItemContent.classList.add("projects__item__content");

  // append the content div to the div child of li
  projectItem.appendChild(projectItemContent);

  // declare and degine the project title
  const projectItemTitle = document.createElement("h3");
  projectItemTitle.textContent = project.title;

  // append the project title to content div
  projectItemContent.appendChild(projectItemTitle);

  // declare and define the project description
  const projectItemDescription = document.createElement("p");
  projectItemDescription.textContent = project.description;

  // append the project description to the content div
  projectItemContent.appendChild(projectItemDescription);

  // declare and define the project link
  const projectItemLink = document.createElement("a");
  projectItemLink.textContent = "Launch project website "
  projectItemLink.href = project.link;

  // declare and define icon besides the a tag
  const linkIcon = document.createElement("i");
  linkIcon.classList.add("bi", "bi-box-arrow-up-right");

  // append the link icon to the a tag
  projectItemLink.appendChild(linkIcon);
  
  // append the project link a tag to the content div
  projectItemContent.appendChild(projectItemLink);


  // append the list element to the original list
  projectPlaceholder.appendChild(li);
})