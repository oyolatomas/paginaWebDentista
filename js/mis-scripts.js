$(function(){
    
    /* ----------------1. FUNCIONES PARA EL MENU PRINCIPAL---------------- */
    
    /* Funcion que inserta y quita la clase ".icono-cerrar" al boton del menu */
    /* Con esto selecciono exclusivamente el boton */
    $('#menu-navegacion .navbar-toggler').click(function(){
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /* Al hacer click en un enlace del menu principal */
    $('#menu-navegacion .navbar-nav a').click(function(){
        /* 1. Quita la clase :.icono-cerrar */
        $('.boton-menu').removeClass('icono-cerrar');
        /* 2. Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /* ----------------2. INICIANDO SWIPER ---------------- */
    var swiper = new Swiper('#animacion', {
        
        /* Botones de navegacion */
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        /* Botones de paginacion */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        /* Reproduccion automatica */
        autoplay: {
            delay: 3000,
        },

        /* Cambio los slides con el teclado */
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        
        /* Otras propiedades */
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
      });

    /* ----------------3. INICIANDO VENOBOX ---------------- */
    $('.venobox-video').venobox({
        closeBackground: 'red',
        closeColor: 'white',
        spinner: 'three-bounce',
    });

    /* ----------------4. INICIANDO CounterUp ---------------- */
    $('.counter').counterUp();

    /* ----------------5. INICIANDO picker.date.js ---------------- */
    $('.datepicker').pickadate({
        monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
        weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
        weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
        today: 'Hoy',
        clear: 'Borrar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 1,
        format: 'dddd dd !de mmmm !de yyyy',
        /* format: 'dd!/mm!/yy', */
        formatSubmit: 'dd/mm/yyyy', /* Esta es como la info va a ser enviada al servidor en caso de que se llene */
        selectYears: true,
        selectMonths: true,
        min: true,
        max: 90,

        onStart: function()
            {
                var date = new Date();
                this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);   
            }

    });

    /* ----------------6. INICIANDO picker.time.js ---------------- */
    $('.timepicker').pickatime({
        clear: 'Borrar',
        format: 'H:i a',
        formatSubmit: 'HH:i',
        interval: 30,
        min: [0,00], /* Si pongo true agarra la hs actual */
        max: [18,00],
        
    })

    /* ----------------7. INICIANDO Parsley ---------------- */
    $('#mi-formulario').parsley({
        errorClass: 'is-invalid',
        /* errorClass: 'is-invalid text-danger', */
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
        errorTemplate: '<li></li>',
        trigger: 'change',
        triggerAfterFailure: 'change',
    });

    /* ----------------8. INICIANDO Stickit ---------------- */
    $('#menu-navegacion').stickit({
        className: 'menu-fijo',
        /* top: , Por si quiero algun margen superior arriba de la barra fija
        zIndex: Por si algun contenido se poner por encima de mi barra, coloco un numero grande aca para que gane, */ 
    });

    /* 9. INICIANDO ScrollToId */
    $('#menu-principal a,.redireccion').mPageScroll2id({
        offset:49,
        highlightClass:'active',
    });

})

