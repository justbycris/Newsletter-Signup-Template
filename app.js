document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById("submit-container");

    if (!container) {
        return;
    }

    var checkBoxes = document.querySelectorAll("input[type='checkbox']");
    var h2Title = document.getElementById("count-nl");
    var form = document.getElementById("newsletterForm");
    var emailInput = document.getElementById("emailInput");
    var errorMessage = document.getElementById("error-mssg");

    //Count checkboxes
    function checkCheckboxes() {
        var checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");

        if (checkedCheckboxes.length > 0) {
            container.style.display = 'flex';
            container.style.animation = 'slideUp .5s ease-in-out';
            h2Title.innerHTML = checkedCheckboxes.length;

        } else if (checkedCheckboxes.length == 0) {
            container.style.animation = 'slideDown .5s ease-in-out';
            setTimeout(function(){
                container.style.display = 'none'
                }, 400);
        }
    }

    checkCheckboxes();

    //Email Validation
    function validateEmail() {

        var email = emailInput.value.trim();

        var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (isValidEmail) {
            errorMessage.style.display = 'none';
            return true;
        } else {
            container.style.display = 'flex';
            errorMessage.style.display = 'block';
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            return false;
        }
    }


    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        if (validateEmail()) {
            console.log('Form submitted successfully.');
            alert('Thank you for signing up!');
        
        } else {
            console.log('Invalid email'); // Show an alert with the error message
        }
    });

    //If checkbox state changes then call checkCheckboxes()
    checkBoxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkCheckboxes);
    });
});