const fieldtextch = document.querySelector(".fieldtextch");
const fieldtextfr = document.querySelector(".fieldtextfr");
const tradch = document.querySelector(".tradch");
const tradfr = document.querySelector(".tradfr");

tradch.addEventListener("click", (e) => {
    fieldtextch.style.display = 'block';
    fieldtextfr.style.display = 'none';
});

tradfr.addEventListener("click", (e) => {
    fieldtextfr.style.display = 'block';
    fieldtextch.style.display = 'none';
});


