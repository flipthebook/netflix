const size1 = document.querySelector('.btn-size1');
const size2 = document.querySelector('.btn-size2');
var sizechossed = document.getElementById('size-choose');
var book = document.querySelector('.book');
var frontCover = document.querySelector('.front-cover');
var bookBefore = document.querySelector('.book-pages');
var backCover = document.querySelector('.back-cover');
var sideCover = document.querySelector('.side-cover');
const customContainer = document.querySelector('.custom-container');
const frontCoverImg = document.querySelector('.front-cover-img');
const btnImgEditContainer = document.querySelector('.btn-img-edit-container');
const backText = document.querySelector(".back-text");

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
    backText.style.maxWidth = '70%';
    sizechossed.value = '68x72mm';
    angleSlider_30();
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
    backText.style.maxWidth = '80%';
    sizechossed.value = '48x102mm';
    angleSlider_30();
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
    rc1.style.display = 'block';
    rc2.style.display = 'none';
});

edit2.addEventListener('click', function() {
    rc1.style.display = 'none';
    rc2.style.display = 'flex';
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
const fieldChoose = document.querySelector('.videoChooseContainer');
const videoInput = document.querySelector('input[id="videoUpload"]');
const videoPreview = document.querySelector('#video-preview');
const previewContainer = document.querySelector('#video-preview-container');
const removeVideo = document.querySelector('.remove_video');
const notChoosed = document.querySelector('.notChoosed');
const inputVideoFile = document.querySelector('.inputVideoFile');
const inputVideoText = document.querySelector('.inputVideoText');
const propertyField = document.querySelector('.line-item-property__field');
const videolink = document.querySelector('#videolink');

btnChoose1.addEventListener('click', () => {
    if (videoInput.files.length > 0) {
        playPreviewContainer.style.display = 'flex';
        videoPreview.play();
    }
    if (videoInput.files && videoInput.files[0]) {
        previewContainer.style.display = 'flex';
    }
    notChoosed.appendChild(inputVideoText);
    propertyField.appendChild(inputVideoFile);
    btnChoose1.classList.add('selected');
    btnChoose2.classList.remove('selected');
    choose1.classList.add('selected');
    choose2.classList.remove('selected');
});

btnChoose2.addEventListener('click', () => {
    previewContainer.style.display = 'none';
    playPreviewContainer.style.display = 'none';
    notChoosed.appendChild(inputVideoFile);
    propertyField.appendChild(inputVideoText)
    btnChoose1.classList.remove('selected');
    btnChoose2.classList.add('selected');
    choose2.classList.add('selected');
    choose1.classList.remove('selected');
});

const showPreviewContainer = () => {
    previewContainer.style.display = 'flex';	
};

const hidePreviewContainer = () => {
    previewContainer.style.display = 'none';	
};

videoInput.addEventListener('input', () => {
    const videoFile = videoInput.files[0];
    if (videoInput.files.length > 0) {
      const url = URL.createObjectURL(videoFile);
      videoPreview.src = url;
      videoPage.src = url;
      inputVideoFile.files = videoInput.files;
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

videolink.addEventListener('input', () => {
    inputVideoText.value = videolink.value;
});

function coverEditOption(index) {
    const containers = document.getElementsByClassName('cover-edit');
    const buttons = document.getElementsByClassName('btn-cover-edit');
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.remove('selected');
        buttons[i].classList.remove('selected');
    }
    containers[index].classList.add('selected');
    buttons[index].classList.add('selected');
    if (buttons.length >= 2 && buttons[1].classList.contains('selected')) {
        angleSlider_0();
    }
    if (buttons.length >= 3 && buttons[2].classList.contains('selected')) {
        angleSlider_180();
    }
}

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
        frontCoverImg.src = '';
        frontCoverImg.style.display = 'none';
        btnImgEditContainer.style.display = "none";
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
    angleSlider_0();
    PopupEditor1.style.display = 'none';
    closePopup1.style.display = 'flex';
    var croppedImage1 = canvas.toDataURL('image/webp');
    document.getElementById('previewResult1').src = croppedImage1;
    frontCoverImg.style.display = 'block';
    frontCoverImg.src = croppedImage1;
    btnImgEditContainer.style.display = "flex";

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
    updateCroppedImgInfo()    
});

closePopup1.addEventListener('click', function() {
PopupEditor1.style.display = 'none';
});

document.getElementById('remove_file_editor1').addEventListener('click', function() {
    upload1.value = '';
    upload1.style.background = '#FF5757';
    PopupEditor1.style.display = 'none';
    document.getElementById('previewResult1').src = '';
    frontCoverImg.src = '';
    frontCoverImg.style.display = 'none';
    btnImgEditContainer.style.display = "none";
    closePopup1.style.display = 'none';
    aboveUpload1.style.display = 'none';
    cropfileInput1.value = '';
    angleSlider_30();
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
    frontCoverImg.src = '';
    frontCoverImg.style.display = 'none';
    btnImgEditContainer.style.display = "none";
    closePopup1.style.display = 'none';
    aboveUpload1.style.display = 'none';
    cropfileInput1.value = '';
    angleSlider_30();
});

function updatePreview1() {
    var inputText1 = document.getElementById("input-text1").value;
    backText.textContent = inputText1;
}

function updateCharCount() {
    var inputText1 = document.getElementById("input-text1").value;
    var charCount1 = inputText1.length;
    var charLimit1 = 120;
    var charCountElement1 = document.getElementById("char-count1");
    charCountElement1.textContent = charCount1 + "/" + charLimit1;
    var replicatedTextElement1 = document.getElementById("replicated-text1");
    replicatedTextElement1.value = inputText1;
}

function textPreviewDisplay() {
    if ($input1.val().length > 0) {
        backText.style.display = 'flex';
    } else {
        backText.style.display = 'none';
    }
}

var $input1 = $('#input-text1');
$input1.on('input', function(e) {
    var max = 120;
    setTimeout(function() {
        if ($input1.val().length > max) {
        $input1.val($input1.val().substr(0, max));
        }
        updatePreview1(); // Atualiza a prévia do texto
        updateCharCount(); // Atualiza a contagem de caracteres
        textPreviewDisplay();
        updateTextInfo();
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
const imgBorderWidhtInput = document.querySelector('.img-border-width-input');
const imgBorderRadiusInput = document.querySelector('.img-border-radius-input');
const imgBorderColorInput = document.querySelector('.img-border-color-input');
const frontCoverStyle = document.querySelector('.front-cover-style');
const sideCoverStyle = document.querySelector('.side-cover-style');
const backCoverStyle = document.querySelector('.back-cover-style');
const croppedImgInfo = document.querySelector('.croppedImgInfo');
const replicatedTextInfo = document.querySelector('.replicatedTextInfo');
const coverInfoColor = document.querySelector('.coverInfoColor');
const coverInfoSVG = document.querySelector('.coverInfoSVG');

let imgSize = '100%';
let imgBorderWidth = 0;
let imgBorderRadius = 0;
let imgBorderColor = '#000000FF';

function updateCroppedImgInfo() {
    croppedImgInfo.value = 'height: '+ imgSize +'; border-width: '+ imgBorderWidth +'; border-radius: '+ imgBorderRadius +'; border-color: '+ imgBorderColor +'; ';
}

function imgOption(imgIndex) {
    const imgContainers = document.getElementsByClassName('img-edit-container');
    const buttons = document.getElementsByClassName('btn-img-edit');
    
    for (let i = 0; i < imgContainers.length; i++) {
        imgContainers[i].classList.remove('selected');
        buttons[i].classList.remove('selected');
    }
    
    imgContainers[imgIndex].classList.add('selected');
    buttons[imgIndex].classList.add('selected');
    imgSize = buttons[imgIndex].value;

    if (buttons.length >= 2 && buttons[1].classList.contains('selected')) {
        frontCoverImg.classList.add('border');
    } else {
        frontCoverImg.classList.remove('border');
        frontCoverImg.style.borderWidth = '0px';
        frontCoverImg.style.borderRadius = '0px';
        imgBorderWidhtInput.value = 0;
        imgBorderRadiusInput.value = 0;
        imgBorderWidth = 0;
        imgBorderRadius = 0;
    }
    updateCroppedImgInfo();
}

function imgborderOption(imgIndex) {
    const imgContainers = document.getElementsByClassName('img-border');
    const buttons = document.getElementsByClassName('btn-img-border');
    for (let i = 0; i < imgContainers.length; i++) {
        imgContainers[i].classList.remove('selected');
        buttons[i].classList.remove('selected');
    }
    imgContainers[imgIndex].classList.add('selected');
    buttons[imgIndex].classList.add('selected');
}

imgBorderWidhtInput.addEventListener('input', function() {
    var value = imgBorderWidhtInput.value;
    frontCoverImg.style.borderWidth = ''+ value +'px';
    imgBorderWidth = ''+ value +'px';
    angleSlider_0();
    updateCroppedImgInfo();
});

imgBorderRadiusInput.addEventListener('input', function() {
    var value = imgBorderRadiusInput.value;
    frontCoverImg.style.borderRadius = ''+ value +'px';
    imgBorderRadius = ''+ value +'px';
    if (book.style.transform !== 'rotateY(0deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(0deg)';
    }
    updateCroppedImgInfo()
});

const ColorImgborderObserver = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-current-color') {
            frontCoverImg.style.borderColor = imgBorderColorInput.dataset.currentColor;
            imgBorderColor = imgBorderColorInput.dataset.currentColor;
            angleSlider_0();
            updateCroppedImgInfo()
            break;
        }
    }
});

ColorImgborderObserver.observe(imgBorderColorInput, { attributes: true });

let textColor = '#000000FF';
let textBackground = '#FFFFFFFF';
let textBorderWidth = 0;
let textBorderRadius = 0;
let textBorderColor = '#000000FF';

function updateTextInfo() {
    if ($input1.val().length > 0) {
        replicatedTextInfo.value = 'Color:'+ textColor +'; background: '+ textBackground +'; border-width: '+ textBorderWidth +'; border-radius: '+ textBorderRadius +'; border-color: '+ textBorderColor +';';
    } else {
        replicatedTextInfo.value = '';
    }
}

function selectOption(optionIndex) {
    const textContainers = document.getElementsByClassName('text-option-container');
    const buttons = document.getElementsByClassName('text-option');

    for (let i = 0; i < textContainers.length; i++) {
      textContainers[i].classList.remove('selected');
      buttons[i].classList.remove('selected');
    }

    textContainers[optionIndex].classList.add('selected');
    buttons[optionIndex].classList.add('selected');
}

function borderOption(borderIndex) {
    const borderContainers = document.getElementsByClassName('border-option');
    const buttons = document.getElementsByClassName('btn-border-option');
    for (let i = 0; i < borderContainers.length; i++) {
        borderContainers[i].classList.remove('selected');
        buttons[i].classList.remove('selected');
    }
    borderContainers[borderIndex].classList.add('selected');
    buttons[borderIndex].classList.add('selected');
}

const ColorTextObserver = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-current-color') {
        var color = inputColorText.dataset.currentColor;
        backText.style.color = color;
        textColor = color;
        angleSlider_180();
        updateTextInfo();
        break;
    }
  }
});

ColorTextObserver.observe(inputColorText, { attributes: true });

const ColorTextBackgroundObserver = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-current-color') {
        var color = inputBackgroundText.dataset.currentColor;
        backText.style.backgroundColor = color;
        textBackground = color;
        angleSlider_180();
        updateTextInfo();
        break;
    }
  }
});

ColorTextBackgroundObserver.observe(inputBackgroundText, { attributes: true });

borderThickness.addEventListener('input', function() {
    var newThickness = borderThickness.value;
    backText.style.borderWidth = ''+ newThickness +'px' ;
    textBorderWidth = ''+ newThickness +'px' ;
    angleSlider_180();
    updateTextInfo();
});

borderRadius.addEventListener('input', function() {
    var newRadius = borderRadius.value;
    backText.style.borderRadius = ''+ newRadius +'px' ;
    textBorderRadius = ''+ newRadius +'px' ;
    angleSlider_180();
    updateTextInfo();
});

const ColorTextborderObserver = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-current-color') {
            const Color = borderColor.dataset.currentColor;
            backText.style.borderColor = Color;
            textBorderColor = Color;
            angleSlider_180();
            updateTextInfo();
            break;
        }
    }
});

ColorTextborderObserver.observe(borderColor, { attributes: true });

function coverOption(coverIndex) {
    const coverContainers = document.getElementsByClassName('cover-option-container');
    const buttons = document.getElementsByClassName('cover-option');
    for (let i = 0; i < coverContainers.length; i++) {
        coverContainers[i].classList.remove('selected');
      buttons[i].classList.remove('selected');
    }
    coverContainers[coverIndex].classList.add('selected');
    buttons[coverIndex].classList.add('selected');
}

let coverColor = '#FFFFFFFF';
let coverSvg = '';
let coverSvgAngle = 0;

function updateCoverInfo() {
    coverInfoColor.value = coverColor;
    coverInfoSVG.value = 'angle: '+ coverSvgAngle +'; '+ coverSvg +'';
}

const ColorCoverObserver = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-current-color') {
      const color = inputColorCover.dataset.currentColor;
      coverColor = color;
      frontCoverStyle.style.backgroundColor = color;
      sideCoverStyle.style.backgroundColor = color;
      backCoverStyle.style.backgroundColor = color;
      updateCoverInfo();
      break;
    }
  }
});

ColorCoverObserver.observe(inputColorCover, { attributes: true });

const coverIcons = document.querySelectorAll('.cover-icon');
const coverIconsClear = document.querySelector('.cover-icon-clear');

coverIcons.forEach(coverIcon => {
    coverIcon.addEventListener('click', function() {
        coverIcons.forEach(button => {
            button.classList.remove('selected');
            coverIconsClear.classList.remove('selected');
        });
        coverIcon.classList.add('selected');
        const svg = coverIcon.querySelector('svg');
        coverSvg = svg.outerHTML;
        updateCoverInfo();
        clearContainers();
        createContainersWithCopies(svg);
    });
});

coverIconsClear.addEventListener('click', function() {
    coverIcons.forEach(button => {
        button.classList.remove('selected');
    });
    coverIconsClear.classList.add('selected');
    clearContainers();
    coverSvg = '';
    updateCoverInfo();
});

function createContainersWithCopies(svg) {
  const copies1 = 5;
  const copies2 = 6;

  for (let i = 1; i <= 8; i++) {
    const container = document.createElement('div');
    container.classList.add('svg-container');

    if (i % 2 !== 0) {
        for (let j = 0; j < copies1; j++) {
            const copy = svg.cloneNode(true);
            copy.style.transform = 'rotate('+ coverSvgAngle +'deg)';
            container.appendChild(copy);
        }
    } else {
        for (let j = 0; j < copies2; j++) {
            const copy = svg.cloneNode(true);
            copy.style.transform = 'rotate('+ coverSvgAngle +'deg)';
            container.appendChild(copy);
        }
    }

    $('.front-cover-style').append(container.cloneNode(true));
    $('.back-cover-style').append(container.cloneNode(true));
    $('.side-cover-style').append(container);
  }
}

function clearContainers() {
  $('.front-cover-style').empty();
  $('.back-cover-style').empty();
  $('.side-cover-style').empty();
}

const iconAngle = document.querySelectorAll('.icon-angle');

iconAngle.forEach(iconAngleSelected => {
    iconAngleSelected.addEventListener('click', function() {
        iconAngle.forEach(button => {
            button.classList.remove('selected');
        });
        iconAngleSelected.classList.add('selected');
        coverSvgAngle = iconAngleSelected.value;
        coverIcons.forEach(coverIcon => {
            if (coverIcon.classList.contains('selected')) {
                const svgContainers = document.querySelectorAll('.svg-container');
                svgContainers.forEach(svgContainer => {
                    const svgs = svgContainer.querySelectorAll('svg');
                    svgs.forEach(svg => {
                        svg.style.transform = 'rotate(' + coverSvgAngle + 'deg)';
                    });
                });
            }
        });          
        updateCoverInfo();
    });
});

var angleSlider = document.getElementById('angle-slider');
var textSlider = document.getElementById("input-text1");

angleSlider.addEventListener('input', function() {
    var newDeg = angleSlider.value;
    book.style.transform = 'rotateY(' + newDeg + 'deg)';
    book.style.transition = '';
});

function angleSlider_0() {
    angleSlider.value = 0;
    if (book.style.transform !== 'rotateY(0deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(0deg)';
    }
}

function angleSlider_30() {
    angleSlider.value = 30;
    if (book.style.transform !== 'rotateY(30deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(30deg)';
    }
}

function angleSlider_180() {
    angleSlider.value = 180;
    if (book.style.transform !== 'rotateY(180deg)') {
        book.style.transition = 'transform 1s ease';
        book.style.transform = 'rotateY(180deg)';
    }
}

textSlider.addEventListener('click', function() {
    angleSlider_180();
    updateTextInfo();
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



