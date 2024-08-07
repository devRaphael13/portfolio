function projects() {
    const projectsDiv = document.getElementById("projects_container");
    let result = "";
    const allProjects = [
        {
            name: "Ecommerce Website",
            description: "The Ecommerce frontend for consuming data from the API",
            live_link: "https://django-ecommerce-api.vercel.app/",
            repo_link: "https://ecommerce-devraphael13.vercel.app/",
            tags: ["react", "javascript"],
        },
        {
            name: "Ecommerce Website",
            description: "An API backend for storing products and handling payments",
            live_link: "https://django-ecommerce-api.vercel.app/",
            repo_link: "https://github.com/devRaphael13/ecommerce",
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
            description: "A Real Estate company website",
            live_link: "https://django-home-agent-app.vercel.app/",
            repo_link: "https://github.com/devRaphael13/Django_home_agent_app",
            tags: ["django", "python", "TailwindCSS"],
        },
    ];

    allProjects.forEach((obj) => {
        result = result.concat(addProject(obj));
    });
    projectsDiv.innerHTML = result;
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
            </article>`;
}

function skills() {
    const skillsDiv = document.getElementById("skills_container");
    let result = "";
    const allSkills = [
        {
            name: "React",
            svg: `<svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.448 16.237a21.887 21.887 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425Zm-1.31.087c-.758.031-1.518.031-2.276 0 .377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364Zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598Zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.5-2.419.26-4.09 1.884a22.049 22.049 0 0 1 1.746 2.175c.978.09 1.904.234 2.757.425Zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.865 21.865 0 0 1-1.746-2.175 21.878 21.878 0 0 1-2.757-.425Zm4.067-8.142a27.507 27.507 0 0 1 2.276 0c-.36-.47-.74-.925-1.138-1.363-.38.416-.76.872-1.138 1.364V7.67Zm-1.31.087A21.873 21.873 0 0 1 11.3 5.582C9.627 3.959 8.07 3.199 7.209 3.698c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425Zm4.342 7.52a25.369 25.369 0 0 0 1.893-3.28 25.371 25.371 0 0 0-1.893-3.28 25.366 25.366 0 0 0-3.788 0 25.366 25.366 0 0 0-1.893 3.28 25.363 25.363 0 0 0 1.893 3.28c1.26.094 2.527.094 3.788 0Zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.57 20.57 0 0 0-.612-1.667 27.5 27.5 0 0 1-1.138 1.97Zm-6.356-6.3c-.615.08-1.2.184-1.75.305.17.536.374 1.094.612 1.667a27.5 27.5 0 0 1 1.138-1.97v-.001Zm-1.75 5.995c.55.12 1.135.223 1.75.304a27.51 27.51 0 0 1-1.138-1.97 20.42 20.42 0 0 0-.612 1.666Zm-.978-.245c.261-.834.6-1.708 1.01-2.6a22.003 22.003 0 0 1-1.01-2.6c-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6ZM16.928 9.15a20.808 20.808 0 0 0-1.75-.304 27.5 27.5 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666Zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6ZM12 13.876a1.88 1.88 0 1 1 0-3.759 1.88 1.88 0 0 1 0 3.76Z"></path>
                </svg>`,
        },

        {
            name: "Django",
            svg: `<svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.533 12.246c-.011 1.985 1.445 3.168 3.768 2.63V9.615c-2.352-.716-3.758.733-3.768 2.63Zm3.839-10.238h3.199V17.15c-3.066.5-6.004.819-8.104-.355-2.705-1.513-2.923-6.32-.782-8.46C6.77 7.25 8.955 6.486 11.3 6.985V2.222c-.006-.101-.012-.202.07-.214ZM19.76 5.35h-3.2V2.008h3.2V5.35Z"></path>
                    <path d="M19.761 7.047c-.003 2.356-.003 4.048-.003 6.91-.136 2.814-.104 5.053-1.135 6.399-.203.266-.634.652-.995.924-.303.228-.88.69-1.208.71-.33.022-1.18-.458-1.564-.64-.505-.236-.97-.552-1.493-.71 1.218-.753 2.372-1.32 2.844-2.843.41-1.326.355-3.247.355-5.12 0-1.848.01-3.997.01-5.63h3.19Z"></path>
                </svg>`,
        },

        {
            name: "Python",
            svg: `<svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.715 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554Zm-.056-5.74a.785.785 0 1 1 0-1.57.785.785 0 0 1 0 1.57Z"></path>
                    <path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451Zm-3.981 10.436a.785.785 0 1 1 0 1.57.785.785 0 0 1 0-1.57Z"></path>
                </svg>`,
        },
        {
            name: "JavaScript",
            svg: `<svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h18v18H3V3Zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049Zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042Z"></path>
                </svg>`,
        },
    ];

    allSkills.forEach((skill) => {
        result = result.concat(addSkill(skill));
    });
    skillsDiv.innerHTML = result;
}

function addSkill({ name, svg }) {
    return `<article>
                ${svg}
                <h3>${name}</h3>
            </article>`;
}

function nav() {
    const navLinks = document.getElementsByClassName("nav");
    let active = navLinks[0];
    for (let link of navLinks) {
        link.addEventListener("click", (e) => {
            if (active) active.classList.toggle("active");
            link.classList.toggle("active");
            active = link;
        });
    }
}

function main() {
    nav();
    skills();
    projects();
}

main();

const observer = new IntersectionObserver((element) => {
    element.forEach((h2) => {
        if (h2.isIntersecting) {
            h2.target.classList.add("expand");
            return;
        }

        h2.target.classList.remove("expand");
    });
});

let allH2 = document.querySelectorAll("h2");
allH2 = Array.from(allH2).slice(1);
for (let h2 of allH2) {
    observer.observe(h2);
}
