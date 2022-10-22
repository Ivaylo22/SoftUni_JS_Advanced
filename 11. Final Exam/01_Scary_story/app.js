window.addEventListener("load", solve);

function solve() {
  let buttonPublish = document.getElementById("form-btn");
  buttonPublish.addEventListener("click", () =>{
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let age = document.getElementById("age");
    let storyTitle = document.getElementById("story-title");
    let genre = document.getElementById("genre");
    let storyText = document.getElementById("story");
    let mainDiv = document.getElementById("main");

    if(firstName.value === "" || lastName.value === "" || age.value === "" || storyTitle.value === "" || storyText.value === ""){
      return;
    }

    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let genreValue = genre.value
    let storyTitleValue = storyTitle.value;
    let storyTextValue = storyText.value
    
    let ulToPush = document.getElementById("preview-list");
    let li = document.createElement("li");
    li.classList.add("story-info");

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.innerText = `Name: ${firstNameValue} ${lastNameValue}`

    let pAge = document.createElement("p");
    pAge.innerHTML = `Age: ${ageValue}`;

    let pTitle = document.createElement("p");
    pTitle.innerHTML = `Title: ${storyTitleValue}`;

    let pGenre = document.createElement("p");
    pGenre.innerHTML = `Genre: ${genreValue}`

    let pText = document.createElement("p");
    pText.innerHTML = `${storyTextValue}`;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pText);

    li.appendChild(article);

    let buttonSave = document.createElement("button");
    buttonSave.classList.add("save-btn");
    buttonSave.innerText = "Save Story";

    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("edit-btn");
    buttonEdit.innerText = "Edit Story";

    let buttonDelete = document.createElement("button");
    buttonDelete.classList.add("delete-btn");
    buttonDelete.innerText = "Delete Story";

    li.appendChild(buttonSave);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);

    ulToPush.appendChild(li);

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    storyText.value = "";

    buttonPublish.disabled = true;

    buttonEdit.addEventListener("click", () => {
      firstName.value = firstNameValue
      lastName.value = lastNameValue;
      age.value = ageValue;
      genre.value = genreValue;
      storyText.value = storyTextValue;
      storyTitle.value = storyTitleValue;

      ulToPush.removeChild(li);
      buttonPublish.disabled = false;
      buttonEdit.disabled = true;
      buttonSave.disabled = true;
      buttonDelete.disabled = true;
    })

    buttonSave.addEventListener("click", () => {
      mainDiv.innerHTML = '';
      let h1 = document.createElement("h1");
      h1.innerText = "Your scary story is saved!";
      mainDiv.appendChild(h1);
    })

    buttonDelete.addEventListener("click", () => {
      ulToPush.removeChild(li);
      buttonPublish.disabled = false;
    })

  })
}
