let infoNasa = document.querySelector("#app");

const fetchNasa = async () => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=EqMpOFvMqsvebAXAtZfFsjZBpvOo47rigNra0jkB");
    const data = await response.json();
    console.log(data);

    const spaceInfo = document.querySelector("div");
    spaceInfo.innerHTML = 
    `
    <img src="${data.url}" />
    <h4>${data.title}</h4>
    <p>${data.explanation}</p>
    `;

    infoNasa.append(spaceInfo);

};

fetchNasa();