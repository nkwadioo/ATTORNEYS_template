    $(document).ready(function () {
        function second_passed() {
            $('.clock').removeClass('is-off');
        }
        setTimeout(second_passed, 2000)

        $('.switcher').on('click', function(e) {
            e.preventDefault();
            $('.screen').toggleClass('glitch');
        });

        var countDownDate = new Date("Mar 3, 2021 23:59").getTime();

        var newDate = new Date();
        newDate.setDate(newDate.getDate());

        setInterval( function() {
            // debugger
            var now = new Date().getTime();
    
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
// debugger
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            
            
        // var hours    = new Date().getHours();
        // var seconds  = new Date().getSeconds();
        // var minutes  = new Date().getMinutes();

        // var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds
        
        // Output the result in an element with id="demo"
        var realTime = hours + "h "
            + minutes + "m " + seconds + "s ";

        $('.time').html(realTime);
        $('.time').attr('data-time', realTime);

        }, 1000);

    });