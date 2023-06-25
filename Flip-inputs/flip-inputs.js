const size1 = document.querySelector('.btn-size1');
const size2 = document.querySelector('.btn-size2');
var sizechossed = document.getElementById('size-choose');
var book = document.querySelector('.book');
var frontCover = document.querySelector('.front-cover');
var bookBefore = document.querySelector('.book-pages');
var backCover = document.querySelector('.back-cover');
var sideCover = document.querySelector('.side-cover');
const customContainer = document.querySelector('.custom-container');

size1.addEventListener('click', () => {
    size1.classList.add('selected');
    size2.classList.remove('selected');
    customContainer.style.display = 'block';
    setTimeout(function() {
        customContainer.style.opacity = '1';
    }, 1);
    size1.style.borderColor = '#FF5757';
    size2.style.borderColor = '';
    size1.style.background = 'floralwhite';
    size2.style.background = 'white';
    book.style.height = '200px';
    frontCover.style.height = '200px';
    page1.style.height = '200px';
    bookBefore.style.height = '196px';
    backCover.style.height = '200px';
    sideCover.style.height = '200px';
    book.style.width = '189px';
    frontCover.style.width = '189px';
    page1.style.width = '189px';
    backCover.style.width = '189px';
    videoPage.style.maxWidth = '135px';
    bookBefore.style.transform = 'translateX(162px) rotateY(90deg)';
    bookShadow68x72();
    cropAspectRatio = 17 / 18;
    sizechossed.value = '68x72mm';
});

size2.addEventListener('click', () => {
    size1.classList.remove('selected');
    size2.classList.add('selected');
    customContainer.style.display = 'block';
    setTimeout(function() {
        customContainer.style.opacity = '1';
    }, 1);
    size1.style.borderColor = '';
    size2.style.borderColor = '#FF5757';
    size1.style.background = 'white';
    size2.style.background = 'floralwhite';
    book.style.height = '133px';
    frontCover.style.height = '133px';
    page1.style.height = '133px';
    bookBefore.style.height = '129px';
    backCover.style.height = '133px';
    sideCover.style.height = '133px';
    book.style.width = '283px';
    frontCover.style.width = '283px';
    page1.style.width = '283px';
    backCover.style.width = '283px';
    videoPage.style.maxWidth = '240px';
    bookBefore.style.transform = 'translateX(258px) rotateY(90deg)';
    bookShadow48x102();
    cropAspectRatio = 17 / 8;
    sizechossed.value = '48x102mm';
});

const bookShadow = document.querySelector('.book-shadow');

const bookShadow68x72 = () => {
    bookShadow.style.width = '0px';
    bookShadow.style.height = '0px';
    bookShadow.style.transform = 'translateX(95px) translateY(215px) rotateY(90deg) rotateX(90deg)';
};

const bookShadow48x102 = () => {
    bookShadow.style.width = '0px';
    bookShadow.style.height = '105px';
    bookShadow.style.transform = 'translateX(142px) translateY(100px) rotateY(90deg) rotateX(90deg)';	
};

const edit1 = document.querySelector('.edit1');
const edit2 = document.querySelector('.edit2');
const rc1 = document.getElementById('r_c1');
const rc2 = document.getElementById('r_c2');

edit1.addEventListener('click', function() {
    rc2.style.opacity = '0';
    rc1.style.display = 'block';
    setTimeout(function() {
        rc2.style.display = 'none';
        rc1.style.opacity = '1';
    }, 500);
});

edit2.addEventListener('click', function() {
    rc1.style.opacity = '0';
    rc2.style.display = 'flex';
    setTimeout(function() {
        rc1.style.display = 'none';
        rc2.style.opacity = '1';
    }, 500);
});

function changeColor(buttonId) {
  var buttons = document.getElementsByClassName("editbtns")[0].getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }

  var selectedButton = document.querySelector(".editbtns .edit" + buttonId);
  selectedButton.classList.add("selected");
}

const btnChoose1 = document.querySelector('#btn-choose1');
const btnChoose2 = document.querySelector('#btn-choose2');
const choose1 = document.querySelector('.choose1');
const choose2 = document.querySelector('.choose2');
const field = document.getElementById('line-property1');
const videoInput = document.querySelector('input[id="videoUpload"]');
const videoPreview = document.querySelector('#video-preview');
const previewContainer = document.querySelector('#video-preview-container');
const removeVideo = document.querySelector('.remove_video');

btnChoose1.addEventListener('click', () => {
    choose1.style.display = 'flex';
    choose2.style.opacity = '0';
    setTimeout(function() {
        choose1.style.opacity = '1';
    }, 500);
    if (videoInput.files.length > 0) {
        playPreviewContainer.style.display = 'flex';
        videoPreview.play();
    }
    if (videoInput.files && videoInput.files[0]) {
        previewContainer.style.display = 'flex';
      }
    
    if (btnChoose2.classList.contains('selected')) {
        setTimeout(function() {
            field.removeChild(choose2);
        }, 500);
        }
        field.appendChild(choose1);
        btnChoose1.classList.add('selected');
        btnChoose2.classList.remove('selected');
});

btnChoose2.addEventListener('click', () => {
    choose2.style.display = 'flex';
    choose1.style.opacity = '0';
    setTimeout(function() {
        choose2.style.opacity = '1';
    }, 500);
    previewContainer.style.display = 'none';
    playPreviewContainer.style.display = 'none';
    if (btnChoose1.classList.contains('selected')) {
        setTimeout(function() {
            field.removeChild(choose1);
        }, 500);
    }
    field.appendChild(choose2);
    btnChoose1.classList.remove('selected');
    btnChoose2.classList.add('selected');
});

const showPreviewContainer = () => {
    previewContainer.style.display = 'flex';	
};

const hidePreviewContainer = () => {
    previewContainer.style.display = 'none';	
};

videoInput.addEventListener('change', () => {
    const videoFile = videoInput.files[0];
    if (videoInput.files.length > 0) {
        const url = URL.createObjectURL(videoFile);
        videoPreview.src = url;
        videoPage.src = url;
        videoInput.style.background = '#4BB543';
        playPreviewContainer.style.display = 'flex';
        showPreviewContainer();
    } else {
        videoInput.style.background = '#FF5757';
        playPreviewContainer.style.display = 'none';
        hidePreviewContainer();
    }
});

removeVideo.addEventListener('click', () => {
    videoInput.value = '';
    videoPreview.src = '';
    videoPage.src = '';
    videoInput.style.background = '#FF5757';
    playPreviewContainer.style.display = 'none';
    frontCover.style.transform = 'translateZ(25px) rotateY(0deg)';
    setTimeout(function() {
        previewConstrols.style.display = 'flex';
        resetPreview.style.display = 'none';
    }, 500);
    hidePreviewContainer();
})

const btnCoverEdit1 = document.querySelector('.btn-cover-edit1');
const btnCoverEdit2 = document.querySelector('.btn-cover-edit2');
const btnCoverEdit3 = document.querySelector('.btn-cover-edit3');
const coverEdit1 = document.querySelector('.cover-edit1');
const coverEdit2 = document.querySelector('.cover-edit2');
const coverEdit3 = document.querySelector('.cover-edit3');

btnCoverEdit1.addEventListener('click', function() {
    coverEdit1.style.display = 'flex';
    coverEdit2.style.display = 'none';
    coverEdit3.style.display = 'none';
    btnCoverEdit1.classList.add('selected');
    btnCoverEdit2.classList.remove('selected');
    btnCoverEdit3.classList.remove('selected');
    angleSlider.value = 0;
    if (book.style.transform !== 'rotateY(0deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(0deg)';
    }
});

btnCoverEdit2.addEventListener('click', function() {
    coverEdit1.style.display = 'none';
    coverEdit2.style.display = 'flex';
    coverEdit3.style.display = 'none';
    btnCoverEdit1.classList.remove('selected');
    btnCoverEdit2.classList.add('selected');
    btnCoverEdit3.classList.remove('selected');
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
});

btnCoverEdit3.addEventListener('click', function() {
    coverEdit1.style.display = 'none';
    coverEdit2.style.display = 'none';
    coverEdit3.style.display = 'flex';
    btnCoverEdit1.classList.remove('selected');
    btnCoverEdit2.classList.remove('selected');
    btnCoverEdit3.classList.add('selected');
    angleSlider.value = 30;
    if (book.style.transform !== 'rotateY(30deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(30deg)';
    }
});

var cropper1;
const upload1 = document.getElementById('upload1');
const aboveUpload1 = document.querySelector('.above_upload1');
const openPopup1 = document.querySelector('.open__popup1');
const removeFile1 = document.querySelector('.remove_file1');
const PopupEditor1 = document.querySelector('.popup__background1');
const closePopup1 = document.getElementById('closePopupEditor1');
const cropfileInput1 = document.getElementById('croppedImageInput1');
const preview1 = document.getElementById('preview1');

var cropAspectRatio;

upload1.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        PopupEditor1.style.display = 'block';
        aboveUpload1.style.display = 'flex';
        closePopup1.style.display = 'none';
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            var img = new Image();
            img.onload = function() {
                var editor1 = document.getElementById('editor1');
                editor1.innerHTML = '';
                editor1.appendChild(img);
                cropper1 = new Cropper(img, {
                    aspectRatio: cropAspectRatio,
                    crop: function(event) {
                        var canvas = cropper1.getCroppedCanvas({
                            aspectRatio: cropAspectRatio
                        });
                        preview1.innerHTML = '';
                        preview1.style.aspectRatio = cropAspectRatio;
                        preview1.appendChild(canvas);
                        upload1.style.background = '#4BB543';
                    }
                });
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        PopupEditor1.style.display = 'none';
        document.getElementById('previewResult1').src = '';
        document.querySelector('.front-cover-img').src = '';
        document.querySelector('.front-cover-img').style.display = 'none';
        closePopup1.style.display = 'none';
        aboveUpload1.style.display = 'none';
        cropfileInput1.value = '';
        upload1.style.background = '#FF5757';
    }
});

document.getElementById('cropBtn1').addEventListener('click', function() {
    var canvas = cropper1.getCroppedCanvas({
        aspectRatio: cropAspectRatio
    });
    angleSlider.value = 0;
    if (book.style.transform !== 'rotateY(0deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(0deg)';
    }
    PopupEditor1.style.display = 'none';
    closePopup1.style.display = 'flex';
    var croppedImage1 = canvas.toDataURL('image/webp');
    document.getElementById('previewResult1').src = croppedImage1;
    document.querySelector('.front-cover-img').style.display = 'block';
    document.querySelector('.front-cover-img').src = croppedImage1;

    fetch(croppedImage1)
        .then(res => res.blob())
        .then(blob => {
            var cropfileInput1 = document.getElementById('croppedImageInput1');
            var fileList1 = createFileList(blob, 'croppedImage1.webp');
            cropfileInput1.files = fileList1;
        });
        
    function createFileList(file1, name1) {
        var fileList1 = new DataTransfer();
        var newFile1 = new File([file1], name1);
        fileList1.items.add(newFile1);
        return fileList1.files;
    }    
});

closePopup1.addEventListener('click', function() {
PopupEditor1.style.display = 'none';
});

document.getElementById('remove_file_editor1').addEventListener('click', function() {
    upload1.value = '';
    upload1.style.background = '#FF5757';
    PopupEditor1.style.display = 'none';
    document.getElementById('previewResult1').src = '';
    document.querySelector('.front-cover-img').src = '';
    document.querySelector('.front-cover-img').style.display = 'none';
    closePopup1.style.display = 'none';
    aboveUpload1.style.display = 'none';
    cropfileInput1.value = '';
    angleSlider.value = 30;
    if (book.style.transform !== 'rotateY(30deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(30deg)';
    }
});

openPopup1.addEventListener('click', function() {
    PopupEditor1.style.display = 'block';
    var fileInput1 = document.getElementById('upload1');
    var file = fileInput1.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
        var editor1 = document.getElementById('editor1');
        editor1.innerHTML = '';
        editor1.appendChild(img);
        cropper1 = new Cropper(img, {
            aspectRatio: cropAspectRatio,
            crop: function(event) {
            var canvas = cropper1.getCroppedCanvas({
                aspectRatio: cropAspectRatio
            });
            preview1.innerHTML = '';
            preview1.style.aspectRatio = cropAspectRatio;
            preview1.appendChild(canvas);
            }
        });
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

removeFile1.addEventListener('click', function() {
    upload1.value = '';
    upload1.style.background = '#FF5757';
    PopupEditor1.style.display = 'none';
    document.getElementById('previewResult1').src = '';
    document.querySelector('.front-cover-img').src = '';
    document.querySelector('.front-cover-img').style.display = 'none';
    closePopup1.style.display = 'none';
    aboveUpload1.style.display = 'none';
    cropfileInput1.value = '';
    angleSlider.value = 30;
    if (book.style.transform !== 'rotateY(30deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(30deg)';
    }
});

const backText = document.querySelector(".back-text");

function updatePreview1() {
    var inputText1 = document.getElementById("input-text1").value;
    backText.textContent = inputText1;
}

function updateCharCount() {
    var inputText1 = document.getElementById("input-text1").value;
    var charCount1 = inputText1.length;
    var charLimit1 = 15;
    var charCountElement1 = document.getElementById("char-count1");
    charCountElement1.textContent = charCount1 + "/" + charLimit1;
    var replicatedTextElement1 = document.getElementById("replicated-text1");
    replicatedTextElement1.value = inputText1;
}

var $input1 = $('#input-text1');
$input1.on('input', function(e) {
    var max = 15;
    setTimeout(function() {
        if ($input1.val().length > max) {
        $input1.val($input1.val().substr(0, max));
        }
        updatePreview1(); // Atualiza a prévia do texto
        updateCharCount(); // Atualiza a contagem de caracteres
    }, 0);
});

const inputColorCover = document.querySelector('.cover-color-input');
const colorCovers = document.querySelectorAll('[class^="edit-color"][class$="cover"]');
const inputColorText = document.querySelector('.text-color-input');
const colorText = document.querySelectorAll('[class^="edit-color"][class$="text"]');
const inputBackgroundText = document.querySelector('.text-background-input');
const backgroundText = document.querySelectorAll('[class^="edit-color"][class$="background"]');
const borderThickness = document.querySelector('.border-thickness-input');
const borderRadius = document.querySelector('.border-radius-input');
const borderColor = document.querySelector('.border-color-input');

colorText.forEach((colortext, indexColor) => {
    colortext.addEventListener('click', function() {
        const color = getColorByIndex(indexColor);
        inputColorText.value = color;
        backText.style.color = color;
        angleSlider.value = 180;
        if (book.style.transform !== 'rotateY(180deg)') {
            book.style.transition = 'transform 1s ease';
            book.style.transform = 'rotateY(180deg)';
        }
    });
});

inputColorText.addEventListener('input', function() {
    var color = inputColorText.value;
    backText.style.color = color;
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
});

backgroundText.forEach((backgroundtext, indexColor) => {
    backgroundtext.addEventListener('click', function() {
        const color = getColorByIndex(indexColor);
        inputBackgroundText.value = color;
        backText.style.backgroundColor = color;
        angleSlider.value = 180;
        if (book.style.transform !== 'rotateY(180deg)') {
            book.style.transition = 'transform 1s ease';
            book.style.transform = 'rotateY(180deg)';
        }
    });
});

inputBackgroundText.addEventListener('input', function() {
    var color = inputBackgroundText.value;
    backText.style.backgroundColor = color;
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
});

borderThickness.addEventListener('input', function() {
    var newThickness = borderThickness.value;
    backText.style.borderWidth = ''+ newThickness +'px' ;
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
});

borderRadius.addEventListener('input', function() {
    var newRadius = borderRadius.value;
    backText.style.borderRadius = ''+ newRadius +'px' ;
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
});

borderColor.addEventListener('input', function() {
    var newCorlor = borderColor.value;
    backText.style.borderColor = ''+ newCorlor +'' ;
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
});

colorCovers.forEach((colorCover, indexColor) => {
    colorCover.addEventListener('click', function() {
        const color = getColorByIndex(indexColor);
        inputColorCover.value = color;
        frontCover.style.backgroundColor = color;
        sideCover.style.backgroundColor = color;
        backCover.style.backgroundColor = color;
    });
});

inputColorCover.addEventListener('input', function() {
    const color = inputColorCover.value;
    frontCover.style.backgroundColor = color;
    sideCover.style.backgroundColor = color;
    backCover.style.backgroundColor = color;
});

function getColorByIndex(indexColor) {
    switch (indexColor) {
        case 0:
            return '#FFFFFF';
        case 1:
            return '#000000';
        case 2:
            return '#FF0000';
        case 3:
            return '#00FF00';
        case 4:
            return '#0000FF';
        case 5:
            return '#FFFF00';
        case 6:
            return '#FF00FF';
        case 7:
            return '#FFA500';
        case 8:
            return '#800080';
        case 9:
            return '#FFC0CB';
        case 10:
            return '#00FFFF';
        case 11:
            return '#808080';
        case 12:
            return '#008000';
        case 13:
            return '#800000';
        case 14:
            return '#FFD700';
        default:
            return '';
    }
}

var angleSlider = document.getElementById('angle-slider');
var textSlider = document.getElementById("input-text1");

angleSlider.addEventListener('input', function() {
    var newDeg = angleSlider.value;
    book.style.transform = 'rotateY(' + newDeg + 'deg)';
});

textSlider.addEventListener('click', function() {
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
});

book.addEventListener('transitionend', function() {
    book.style.transition = '';
});

const previewConstrols = document.querySelector('.preview-controls');
const playPreview = document.querySelector('.play-preview');
const playPreviewContainer = document.querySelector('.play-preview-container');
const resetPreview = document.querySelector('.reset-preview');
const page1 = document.querySelector('.book-page1');
const page2 = document.querySelector('.book-page2');
const videoPage = document.querySelector('.video-page');

const frontFlip = () => {
    book.style.transition = '';
    frontCover.style.transition = 'transform .5s ease';
    frontCover.style.transform = 'translateZ(25px) rotateY(-90deg)';
    setTimeout(function() {
        videoPage.play();
    }, 500);
};

playPreview.addEventListener('click', function() {
    previewConstrols.style.display = 'none';
    resetPreview.style.display = 'block';
    if (book.style.transform !== 'rotateY(0deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(0deg)';
        angleSlider.value = 0;
        setTimeout(function() {
            frontFlip();
        }, 1000);
    } else {
        frontFlip();
    }
})

videoPage.addEventListener('ended', function() {
    videoPage.currentTime = 0;
    frontCover.style.transform = 'translateZ(25px) rotateY(0deg)';
    setTimeout(function() {
        previewConstrols.style.display = 'flex';
        resetPreview.style.display = 'none';
    }, 500);
});

resetPreview.addEventListener('click', function() {
    frontCover.style.transform = 'translateZ(25px) rotateY(0deg)';
    videoPage.pause();
    setTimeout(function() {
        videoPage.currentTime = 0;
        previewConstrols.style.display = 'flex';
        resetPreview.style.display = 'none';
    }, 500);
});



