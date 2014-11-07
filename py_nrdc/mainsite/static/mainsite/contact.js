$(document).ready(function () {
    $('#emailBtn').click(function () {
        $('#emailBtn')[0].disabled = true;

        $('#emailSuccessful').hide();
        $('#emailError').hide();
        var suggestion = {
            topic: $('#topic').val(),
            userEmail: $('#userEmail').val(),
            description: $('#description').val()
        };

        $.getJSON(baseUrl + 'Contact/EmailAdmins', suggestion, function (data) {
            $('#emailBtn')[0].disabled = false;
            if (data.success) {
                $('#emailSuccessful').show();

                $('#userEmail').val('');
                $('#description').val('');
            } else {
                $('#emailError').show();
            }
        });
    });
});