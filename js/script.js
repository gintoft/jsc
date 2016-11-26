$(function () { 
    
    $('#createUserSubmit').click( sendData );


    function sendData () {
        
        var data         = {};
            data.name    = $('#inputName').val();
            data.surname = $('#inputSurname').val();
            data.lasname = $('#inputLastName').val();
            data.email   = $('#inputEmail').val();

        $.ajax({
            
            type: 'POST',
            url: 'http://92.53.104.115:3000/api/v1/users',
            data: data,
            dataType: 'json', //script, html, json, jsonp
            
            beforeSend: function ( jqXHR, settings ) {
                $('#createUserSubmit').prop('disabled', true)
                $('#createUserSubmit span').css('opacity', 0.5);
                $('#createUserSubmit .cssload-container').css('display', 'block');
                console.log(jqXHR);
                console.log(settings);
                console.log('Я выполняюсь перед отправкой ajax-запроса!');
                // return false; //если в этом методе вернуть false, то ajax-запрос не выполнится
            },
            
            error: function ( jqXHR, textStatus, errorThrown ) {
                
                $('#errorAjax').show();
                
               /*
               console.log(jqXHR);
               console.log(textStatus);
               console.log(errorThrown);
               console.log('Я выполняюсь в случае ошибки!');
               */
            },
            
            success: function ( data, textStatus, errorThrown ){
                $('#successAjax').show();
                $('#inputName').val('');
                $('#inputSurname').val('');
                $('#inputLastName').val('');
                $('#inputEmail').val('');
                console.log('Пользователь создан');
            },
            
            complete: function ( jqXHR, textStatus ) {
                $('#createUserSubmit').prop('disabled', false)
                $('#createUserSubmit span').css('opacity', 1);
                $('#createUserSubmit .cssload-container').css('display', 'none');
                console.log(jqXHR);
                console.log(textStatus);
                console.log('Мне всё равно с каким статусом завершился ajax-запрос, я выполнюсь в любом случае!');
            }
        });

        return false;
    }
    
    function getData () {
        
        var data         = {};
            data.name    = $('#inputName').val();
            data.surname = $('#inputSurname').val();
            data.lasname = $('#inputLastName').val();
            data.email   = $('#inputEmail').val();

        $.ajax({
            
            type: 'GET',
            url: 'http://92.53.104.115:3000/api/v1/users',
            data: data,
            
            dataType: 'json', //script, html, json, jsonp
            
            beforeSend: function ( jqXHR, settings ) {
                console.log('сейчас что-то будет!');
            },
            
            error: function ( jqXHR, textStatus, errorThrown ) {
                console.log('ошибка');
            },
            
            success: function ( data, textStatus, errorThrown ){
                
                var list = $('#list');
                
                data.forEach( function (user) {
                    
                    list.append('<li class="list-group-item">' + user.name + '</li>')
                    
                });
                
//                $('#container').show();
                
                console.log('а вот и данные:');
                console.log(data);
                
            },
            
            complete: function ( jqXHR, textStatus ) {
                console.log('все готово');
            }
        });

        return false;
    }
    
    $('#getUser').click( getData );

});



// wer
























