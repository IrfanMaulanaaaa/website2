let skills = [
        {
            name: "Java",
            imageSrc: "assets/src/Java_programming_language_logo.svg.png",
            description: "Java is a programming language that commonly used for developing backend side of Android apps, software, and also website."
        },
        {
            name: "MySQL",
            imageSrc: "assets/src/MySQL.png",
            description: "MySQL is an open source RDBMS (Relational Database Management System) that using Structured Query Language (SQL)."
        },
        {
            name: "Python",
            imageSrc: "assets/src/Python-Symbol.png",
            description: "Python is a flexible programming language that has capability to used as apps and website developing language. Python also used in Data Analytical purpose."
        }
    ];

    let imageSources = [
        "assets/src/Muhammad Irfan Maulana_page-0001.jpg",
        "assets/src/Muhammad Irfan Maulana - Introduction to Frontend_page-0001.jpg"
    ];

    let skillRow = document.getElementById("skill-row");
    let certifWrapper = document.getElementById("certif-row");
    skills.forEach(function(skill) {
        let html = `
            <div class="col-md-4">
                <div class="${skill.name} mb-3">
                    <img src="${skill.imageSrc}" id="${skill.name.toLowerCase()}" alt="${skill.name}">
                    <div class="card-body">
                        <p class="card-text">${skill.description}</p>
                    </div>
                </div>
            </div>
        `;
        skillRow.insertAdjacentHTML("beforeend", html);
    });
    imageSources.forEach(function(src) {
        // Create an img element
        var imgElement = document.createElement("img");
        // Set the src attribute to the current image source
        imgElement.src = src;
        // Add the necessary classes
        imgElement.classList.add("img-fluid");
        // Add alt attribute
        imgElement.alt = "...";
        // Append the img element to the certif-wrapper
        certifWrapper.appendChild(imgElement);
    });