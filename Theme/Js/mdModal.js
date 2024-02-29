// Append CDN
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js';
document.head.appendChild(script);


function mdModal(src) {
    // Create modal container
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("mdModal");

    // Modal content
    modalContainer.innerHTML = `
        <button id="close-btn"><i class="fa-solid fa-x"></i></button>
        <zero-md id="theMark" src="${src}">
            <template>
                <link rel="stylesheet" href="/Assets/css/addon/md.css" />
                <link rel="stylesheet" href="/Assets/css/addon/hili.css" />
            </template>
        </zero-md>
    `;

    // Append modal container to the header
    const header = document.querySelector("header");
    header.appendChild(modalContainer);

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    // Event listener for closing the modal
    const closeButton = modalContainer.querySelector("#close-btn");
    closeButton.addEventListener("click", function() {
        // Enable scrolling on the body
        document.body.style.overflow = "auto";
        // Remove the modal from the DOM
        modalContainer.remove();
    });
}
