        // Set date
        var countDownDate = new Date("Feb 7, 2024 00:00:00").getTime();

        // Update countdown
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Calculate time
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "BE AMAZED";
            }
        }, 1000);