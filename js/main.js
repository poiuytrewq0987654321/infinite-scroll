'use strict';


/* pobieranie danych ze strony przy pomocy AJAX i wyświetlenie ich na własnej stronie w odpowiedniej formie po zescrollowaniu na koniec strony (INFINITE SCROLL) */
$(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
                console.log(data);
                
                data.forEach(function(element){
                    console.log(element.name);
                    console.log(element.id);
                    console.log(element.website);
                    $('body').append('<p>ID użytkownika to: ' + element.id + '</p>');
                    $('body').append('<p>nazwa użytkownika to: ' + element.name+ '</p>');
                    $('body').append('<p>url użytkownika to: ' + element.website + '</p>');
                    $('body').append('<hr>');
                    
                });
            });
        }
    });
});
