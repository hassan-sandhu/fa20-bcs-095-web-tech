$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        let hasError = false;

        // Hide all error messages initially
        $('.error').hide();

        // Check each input and textarea in the form
        $('input, textarea').each(function() {
            if ($(this).val().trim() === '') {
                $(this).next('.error').show();  // Show the error message for this input
                hasError = true;
            }
        });

        if (!hasError) {
            alert("Form Data Submitted Successfully");
            // Clear the form
            $('input[type="text"], input[type="email"], textarea').val('');
        }
    });
});
