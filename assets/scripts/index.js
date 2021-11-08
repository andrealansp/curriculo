window.addEventListener("load", start);

function start() {
    loadEvents();
    loadGithub();
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
    const access_token = "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";
    axios
        .get("https://api.github.com/user", {
            headers: {
                Authorization: `token ${access_token}`,
            },
        })
        .then(function(response) {
            for (x in response.data) {}
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });
}