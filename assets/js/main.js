
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const iconImg = document.getElementById('iconImg');

        fullscreenBtn.addEventListener('click', toggleFullscreen);

        function toggleFullscreen() {
            if (document.fullscreenElement) {
                exitFullscreen();
                iconImg.src = 'assets/img/expandir.png';
            } else {
                enterFullscreen();
                iconImg.src = 'assets/img/expandir.png';
            }
        }

        function enterFullscreen() {
            const element = document.documentElement;

            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }

        function exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }



      