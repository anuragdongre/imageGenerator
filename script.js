const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const handelFormSubmission = (e) => {
  e.preventDefault();

  // get user input and image quantity values from the from
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;

  const imgCardMarkup = Array.from(
    { leanth: userImgQuantity },
    () => `
   <div class="img-card">
            <img src="images/img-1.jpg" alt="image">
            <a href="#" class="download-btn">
                <img src="images/download.svg" alt="download icon">
            </a>
        </div>
   `
  ).join("");

  imageGallery.innerHTML = imgCardMarkup;
};
generateForm.addEventListener("submit", handelFormSubmission);
