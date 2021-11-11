window.addEventListener("load", start);

function start() {
    loadEvents();
    loadGithub();
    initData();
}

function initData() {
    localStorage.setItem(
        "acess",
        "Z2hwX3hmVTNuRDE0aTZqMXRlejhzSEZKdXJYNUFiNE5ZcTNLM3hWMg=="
    );
}

function loadEvents() {
    homeLink = document.getElementById("homelink");
    laborLink = document.getElementById("laborlink");
    coursesLink = document.getElementById("courseslink");
    messagesLink = document.getElementById("messageslink");
    githubLink = document.getElementById("githublink");
    homeLink.addEventListener("click", () => {
        sectionHome = document.getElementById("home");
        sectionHome.scrollIntoView({ behavior: "smooth" });
    });
    laborLink.addEventListener("click", () => {
        sectionLabor = document.getElementById("laborProfile");
        sectionLabor.scrollIntoView({ behavior: "smooth" });
    });
    courseslink.addEventListener("click", () => {
        sectionCourse = document.querySelector("#courses");
        sectionCourse.scrollIntoView({ behavior: "smooth" });
    });
    githubLink.addEventListener("click", () => {
        sectionMessage = document.querySelector("#github");
        sectionMessage.scrollIntoView({ behavior: "smooth" });
    });
    messagesLink.addEventListener("click", () => {
        sectionMessage = document.querySelector("#messages");
        sectionMessage.scrollIntoView({ behavior: "smooth" });
    });
}

function loadGithub() {
    bioElem = document.querySelector("#bio");
    imgElem = document.querySelector("#profile");
    repositoriesElem = document.querySelector("#repositories");
    const access = atob(localStorage.getItem("acess"));

    let one = "https://api.github.com/user";
    let two = "https://api.github.com/users/andrealansp/repos";

    const requestOne = axios.get(one, {
        headers: {
            Authorization: `token ${access}`,
        },
    });
    const requestTwo = axios.get(two, {
        headers: {
            Authorization: `token ${access}`,
        },
    });

    axios
        .all([requestOne, requestTwo])
        .then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                bioElem.innerHTML = responseOne.data.bio;
                imgElem.src = responseOne.data.avatar_url;

                console.log(responseTwo);

                for (x in responseTwo.data) {
                    repo = document.createElement("div");
                    repo.classList.add("repos");
                    repo.innerHTML = `<p><a href="${responseTwo.data[x]["html_url"]}">${responseTwo.data[x]["name"]}</a><p>${responseTwo.data[x]["description"]}</p>`;
                    repositoriesElem.appendChild(repo);
                }
            })
        )
        .catch((errors) => {
            // react on errors.
            console.error(errors);
        });
}