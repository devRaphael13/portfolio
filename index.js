function projects() {
    const projectsDiv = document.getElementById("projects_container");
    let result = ""
    const allProjects = [
        {
            name: "Ecommerce Website API",
            description: "An API backend for storing products and handling payments",
            live_link: "https://django-ecommerce-api.vercel.app/",
            repo_link: "https://github.com/devRaphael13/Django-ecommerce-api",
            tags: ["django", "django-rest-framwork", "python", "redis"],
        },
        {
            name: "Py4paystack",
            description: "An python wrapper for handling payments using the paystack API",
            live_link: "https://django-ecommerce-api.vercel.app/",
            repo_link: "https://pypi.org/project/py4paystack/",
            tags: ["python"],
        },
        {
            name: "Real Estate App",
            description: "Real Estate Website",
            live_link: "https://django-home-agent-app.vercel.app/",
            repo_link: "https://github.com/devRaphael13/Django_home_agent_app",
            tags: ["django", "python"],
        },
    ];

    allProjects.forEach((obj) => {
        result = result.concat(addProject(obj))
    })
    projectsDiv.innerHTML = result
}

function addProject({ name, description, live_link, repo_link, tags }) {
    tags = tags.map((tag) => `<small>${tag}</small>`);
    return `<article>
                <div>
                    <h3>${name}</h3>
                    <div class="project__links">
                        <a href="${live_link}">Live link</a>
                        <a href="${repo_link}">GitHub</a>
                    </div>
                    <p>${description}</p>
                </div>

                <div class="project__tags">
                    ${tags.join("")}
                </div>
            </article>`
}

function main() {
    projects()
}

main()
