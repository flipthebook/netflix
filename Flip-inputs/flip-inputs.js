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
    bookBefore.style.height = '196px';
    backCover.style.height = '200px';
    sideCover.style.height = '200px';
    book.style.width = '189px';
    frontCover.style.width = '189px';
    backCover.style.width = '189px';
    bookBefore.style.transform = 'translateX(162px) rotateY(90deg)';
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
    bookBefore.style.height = '129px';
    backCover.style.height = '133px';
    sideCover.style.height = '133px';
    book.style.width = '283px';
    frontCover.style.width = '283px';
    backCover.style.width = '283px';
    bookBefore.style.transform = 'translateX(258px) rotateY(90deg)';
    cropAspectRatio = 17 / 8;
    sizechossed.value = '48x102mm';
});

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
    rc2.style.display = 'block';
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

btnChoose1.addEventListener('click', () => {
    choose1.style.display = 'block';
    choose2.style.opacity = '0';
    setTimeout(function() {
        choose1.style.opacity = '1';
    }, 500);

    if (videoInput.files && videoInput.files[0]) {
        previewContainer.style.display = 'block';
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
    choose2.style.display = 'block';
    choose1.style.opacity = '0';
    setTimeout(function() {
        choose2.style.opacity = '1';
    }, 500);
    previewContainer.style.display = 'none';

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
      previewContainer.style.display = 'inline-block';	
};

const hidePreviewContainer = () => {
      previewContainer.style.display = 'none';	
};

videoInput.addEventListener('change', () => {
      const file = videoInput.files[0];
      if (!file) {
        videoInput.style.background = '#4BB543';
        hidePreviewContainer();
        return;
      }
      if (!file.type.startsWith('video/')) return;
      const url = URL.createObjectURL(file);
      videoPreview.src = url;
      videoInput.style.background = '#FF5757';
      showPreviewContainer();		
});
  
var cropper1;
var originalSrc = document.querySelector('.front-cover').src;
const upload1 = document.getElementById('upload1');
const aboveUpload1 = document.querySelector('.above_upload1');
const openPopup1 = document.querySelector('.open__popup1');
const removeFile1 = document.querySelector('.remove_file1');
const PopupEditor1 = document.querySelector('.popup__background1');
const closePopup1 = document.getElementById('closePopupEditor1');
const cropfileInput1 = document.getElementById('croppedImageInput1');

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
                        document.getElementById('preview1').innerHTML = '';
                        document.getElementById('preview1').appendChild(canvas);
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
        document.querySelector('.front-cover').src = originalSrc;
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
    book.style.transition = 'transform 1s ease';
    book.style.transform = 'rotateY(0deg)';
    PopupEditor1.style.display = 'none';
    closePopup1.style.display = 'flex';
    var croppedImage1 = canvas.toDataURL('image/webp');
    document.getElementById('previewResult1').src = croppedImage1;
    document.querySelector('.front-cover').src = croppedImage1;

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
    document.querySelector('.front-cover').src = originalSrc;
    closePopup1.style.display = 'none';
    aboveUpload1.style.display = 'none';
    cropfileInput1.value = '';
    angleSlider.value = 30;
    book.style.transition = 'transform 1s ease';
    book.style.transform = 'rotateY(30deg)';
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
            document.getElementById('preview1').innerHTML = '';
            document.getElementById('preview1').appendChild(canvas);
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
    document.querySelector('.front-cover').src = originalSrc;
    closePopup1.style.display = 'none';
    aboveUpload1.style.display = 'none';
    cropfileInput1.value = '';
    angleSlider.value = 30;
    book.style.transition = 'transform 1s ease';
    book.style.transform = 'rotateY(30deg)';
});

function updatePreview1() {
    var inputText1 = document.getElementById("input-text1").value;
    document.querySelector(".back-text").textContent = inputText1;
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

var angleSlider = document.getElementById('angle-slider');
var textSlider = document.getElementById("input-text1");

angleSlider.addEventListener('input', function() {
  var newDeg = angleSlider.value;
  book.style.transform = 'rotateY(' + newDeg + 'deg)';
});

textSlider.addEventListener('click', function() {
  angleSlider.value = 180;
  book.style.transition = 'transform 1s ease';
  book.style.transform = 'rotateY(180deg)';
});

book.addEventListener('transitionend', function() {
    book.style.transition = '';
});
