const netflixLogo = document.querySelector(".netflix__logo1");
const userSelector = document.querySelector(".user__selector");
const btnSelector = document.querySelector(".btnUser__selector");
const login = document.querySelector(".login");

window.addEventListener("load", function() {
    netflixLogo.style.display = "block";
    userSelector.style.display = "flex";
    setTimeout(function() {
      netflixLogo.style.opacity = "1";
      userSelector.style.opacity = "1";
    }, 1);
});


  btnSelector.addEventListener("click", function() {
      userSelector.style.opacity = "0";
      netflixLogo.style.opacity = "0";
      firstPage.style.display = "block";
      setTimeout(function() {
          login.remove();
          firstPage.style.opacity = "1";
      }, 2000);
  });


const firstPage = document.querySelector('.first__Page');
const play = document.querySelector('.play')
const videoContainer = document.querySelector('.video__container')
const video1 = document.getElementById('video__1')
const video2 = document.getElementById('video__2')
const videoExit = document.getElementById('video__exit')
const favorite = document.querySelector('.favorite')
const unfavorited = document.querySelector('.unfavorited')
const favorited = document.querySelector('.favorited')
const info = document.querySelector('.info')
const mainInfo = document.querySelector('.main__info')
const mainbtns = document.querySelector('.main__btns')
const list = document.querySelector('.list')
const mask = document.querySelector('.mask')
const infoExit = document.getElementById('info__exit')
const listP = document.querySelector('.list__P')

favorite.addEventListener("click", function() {
    unfavorited.style.display = 'none';
    favorited.style.display = 'block';
});

info.addEventListener("click", function() {
    mainInfo.style.display = 'block';
    mainbtns.style.display = 'none';
    list.style.display = 'none';
    listP.style.display = 'none';    
});

infoExit.addEventListener("click", function() {
    mainInfo.style.display = 'none';
    mainbtns.style.display = 'flex';
    list.style.display = 'flex';
    listP.style.display = 'block';    
});

var isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

play.addEventListener("click", function() {
    firstPage.style.opacity = "0";
    setTimeout(function() {
        firstPage.style.display = 'none';
        videoContainer.style.display = 'flex';
        if (isAppleDevice) {
            video2.style.display = 'block';
            video2.load();
            video2.currentTime = 0;
            videoExit.style.display = 'flex';
            setTimeout(function() {
                video2.play();
            }, 1);
        } else {
                video1.style.display = 'block';
                video1.currentTime = 0;
                video1.play();
                videoExit.style.display = 'none';
            }
    }, 2000);
});

video1.addEventListener("ended", function() {
    video1.style.display = 'none';
    video2.style.display = 'block';
    video2.currentTime = 0;
    video2.play();
});

video2.addEventListener("ended", function() {
    videoExit.style.display = 'flex';
});

videoExit.addEventListener("click", function() {
    firstPage.style.display = 'block';
    mainbtns.style.display = 'flex';
    list.style.display = 'flex';
    mask.style.display = 'block';
    video2.pause();
    video2.style.display = 'none';
    videoExit.style.display = 'none';
    setTimeout(function() {
        firstPage.style.opacity = '1';
        mainInfo.style.opacity = '1';
        videoContainer.style.display = 'none'
        video2.currentTime = 0;
    }, 10);
});

if (!isAppleDevice) {
    let timeoutId;

    function showVideoExitOnPause() {
        clearTimeout(timeoutId);
        videoExit.style.display = 'flex';
    }

    video2.addEventListener('timeupdate', function() {
        if (video2.paused) {
            clearTimeout(timeoutId);
            videoExit.style.display = 'flex';
        }
    });

    function showVideoExitOnplay() {    
        clearTimeout(timeoutId);
        videoExit.style.display = 'none';
    }

    function showVideoExit() {
    if (!video2.paused) {
        clearTimeout(timeoutId);
        videoExit.style.display = 'flex';
        timeoutId = setTimeout(() => {
        videoExit.style.display = 'none';
        }, 3000);
    }
    }

    video2.addEventListener('mousemove', showVideoExit);
    video2.addEventListener('touchstart', showVideoExit);
    video2.addEventListener('pause', showVideoExitOnPause);
    video2.addEventListener('play', showVideoExitOnplay);
}