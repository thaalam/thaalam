let lln = document.querySelector(".lln");

lln.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/gloryezhil2022";
});

let mail = document.querySelector(".mail");

mail.addEventListener("click", () => {
    mail.alert("You");
});



let divs = document.querySelectorAll('div');

window.onscroll = () => {
    divs.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('anime');
        }
        else {
            sec.classList.remove('anime');
        }
    })
}

let mrskeer = document.querySelector(".mrskeer");

mrskeer.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/keerthana-kanthan-b317b5257";
});

let mrsa = document.querySelector(".mrsa");

mrsa.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/aiswarya-g-b5b9b5256";
});
