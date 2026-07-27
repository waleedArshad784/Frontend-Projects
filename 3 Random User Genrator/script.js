const button = document.getElementById("btn");
const image = document.getElementById("avatar");
const name = document.getElementById("name");
const email = document.getElementById("email");
const country = document.getElementById("country");
const phone = document.getElementById("phone");

button.addEventListener("click", generateUser);

async function generateUser() {

    const response = await fetch("https://randomuser.me/api/");

    const data = await response.json();

    const user = data.results[0];

    const firstName = user.name.first;
    const lastName = user.name.last;
    const userEmail = user.email;
    const userCountry = user.location.country;
    const userPhone = user.phone;
    const userImage = user.picture.large;

    name.textContent = `${firstName} ${lastName}`;
    email.textContent = userEmail;
    country.textContent = userCountry;
    phone.textContent = userPhone;
    image.src = userImage;

}


