const header = document.getElementById("header")
const footer = document.getElementById("footer")

// assigning the header and footer to the respective html elements
header.innerHTML = ` <div class="logo">
            <a href="index.html"><img src="./images/Logo.svg" alt="Nintendo Logo"></a>
        </div>
        <nav>
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>`
footer.innerHTML = `<p>© Nintendo. Games are property of their respective owners. Nintendo of Canada, Ltd. Headquarters are in Burnaby, BC, Canada</p>
        <a href="contact.html">Contact Us</a>`

// adding the active class to the clicked link

const links = document.querySelectorAll('.menu > li > a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
console.log(currentPage);

// Loop through each nav link and check if it matches the current page
links.forEach(link => {
    const linkHref = link.getAttribute('href');

    if (linkHref === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

const h1button = document.querySelector('h1.button');

if (h1button) {
    h1button.addEventListener('click', (e) => {
        // when the h1 button is clicked, it will move the scroll to the top of the page
        e.preventDefault();
        window.scrollTo({
            top: 850,
            behavior: 'smooth'
        });
    });
}


