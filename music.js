<script>
    var audio = document.getElementById("myAudio");

    function playMusic() {
      audio.play();
    }

    function pauseMusic() {
      audio.pause();
    }

    function stopMusic() {
      audio.pause();
      audio.currentTime = 0;
    }
  </script>

 