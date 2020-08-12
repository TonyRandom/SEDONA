var popupForm = document.querySelector(".search-form");
var link = document.querySelector(".search-form-title-link");


link.addEventListener("click", function (evt) {
    evt.preventDefault(); 

    /* popupForm.classList.remove("search-form"); */
    popupForm.classList.toggle("search-form-popup");

   

    
});

