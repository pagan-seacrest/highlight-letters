const [...b] = document.getElementsByClassName("btn");

document.addEventListener("keydown", (ev) => {
    b.forEach(element => element.style.backgroundColor = "#000");

    const letter = [...ev.code].splice(3);

    b.find(value => { 
        if (value.textContent === letter[0] || value.textContent === ev.key)
        value.style.backgroundColor = "blue";
    });
});