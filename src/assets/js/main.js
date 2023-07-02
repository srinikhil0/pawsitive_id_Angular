// Open links in mobiles
function handleSmallScreens() {
    document.querySelector(".navbar-toggler").addEventListener("click", () => {
        let navbarMenu = document.querySelector(".navbar-menu");

        if (!navbarMenu.classList.contains("active")) {
            navbarMenu.classList.add("active");
        } else {
            navbarMenu.classList.remove("active");
        }
    });
}

handleSmallScreens();


// Display file name
const actualBtn = document.getElementById('upload__btn');

const fileChosen = document.getElementById('file-chosen');

// actualBtn.addEventListener('change', function(){
//   fileChosen.textContent = this.files[0].name
// })


function showPreview(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var imageSrc = e.target.result;

        // Create a new image element
        var newImage = document.getElementById("file-ip-1-preview");
        newImage.src = imageSrc;

        // Replace the first image with the new image
        var uploadPreview = document.querySelector(".upload__preview");
        var oldImage = uploadPreview.querySelector(".upload__img__bg");
        uploadPreview.replaceChild(newImage, oldImage);
    };

    reader.readAsDataURL(file);
}
