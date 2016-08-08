
$(document).ready(function(){
    // Document ready, place your code here.
    $('#contact form').on('submit', function(e){
        e.preventDefault();
        console.log('I am here.');
        var $form = $(e.currentTarget),
            $email = $form.find('#contact-email'),
            $button = $form.find('button[type=submit]');

        console.log('$form', $form);
        console.log('$email', $email);
        console.log('$button', $button);

        if ($email.val().indexOf('@')==-1){
            console.log('In if statement.');
            //vaca = $email.closest('form-group')
            $email.closest('.form-group').addClass('has-error');
        } else {
            console.log('In else statement.');
            $form.find('.form-group').addClass('has-success').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span>Message sent. We will contact you soon.</span>');
        }
    });

    $('#sign-btn').on('click', function(e){
        console.log('In onclick of sign-btn. Hello world!!');
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });
});
