document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    // Check if the user has accepted cookies before
    if (!localStorage.getItem('cookiesAccepted')) {
        // If cookies have not been accepted, show the cookie popup
        cookiePopup.style.display = 'block';

        // Add event listener for accept cookies button
        acceptCookiesBtn.addEventListener('click', function() {
            // Hide the cookie popup
            cookiePopup.style.display = 'none';
            // Set a flag in local storage indicating that cookies have been accepted
            localStorage.setItem('cookiesAccepted', true);
        });
    }
});