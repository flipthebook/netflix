const OptionCustom = document.querySelectorAll('.OptionCustom');
const CustumizationContainer = document.querySelectorAll('.CustumizationContainer');
const clearIconContainer = document.querySelector('.clearIconContainer');
const imgIconsContainer = document.querySelector('.imgIconsContainer');
const previewContainer = document.querySelector('.previewContainer');
const ImgControls = document.querySelector('.ImgControls');
const IconsContainer = document.querySelector('.IconsContainer');
const imageUpload = document.querySelector('.imageUpload');
const UploadImageLabel = document.querySelector('.UploadImageLabel');
const UploadImageLabelP = document.querySelector('.UploadImageLabel p');
const FullUploaded = document.querySelector('.FullUploaded');
const TshirtContainer = document.querySelector('.TshirtContainer');
const ZoomBtn =document.querySelectorAll('.ZoomBtn');

function ZoomInLayout(button) {
    TshirtContainer.classList.add('Zoom');
    previewContainer.classList.add('Zoom');
    ZoomBtn.forEach((icon) => {
        icon.classList.remove('selected');
    });
    button.classList.add('selected');
    PreviewScale = 1.88;
}

function ZoomOutLayout(button) {
    TshirtContainer.classList.remove('Zoom');
    previewContainer.classList.remove('Zoom');
    ZoomBtn.forEach((icon) => {
        icon.classList.remove('selected');
    });
    button.classList.add('selected');
    PreviewScale = 1;
}

OptionCustom.forEach((button, index) => {
    button.addEventListener('click', () => {
        OptionCustom.forEach(element => {
            element.classList.remove('selected');
        });
        OptionCustom[index].classList.add('selected');

        CustumizationContainer.forEach(element => {
            element.classList.remove('selected');
        });
        CustumizationContainer[index].classList.add('selected');
    });
});

function generateUniqueValue(existingValues) {
    // Gere um número aleatório de 1 a 8
    const newValue = Math.floor(Math.random() * 8) + 1;
    // Verifique se o valor já existe nos elementos existentes
    if (!existingValues.includes(newValue)) {
        return newValue;
    } else {
        // Se o valor já existe, gere um novo de forma recursiva
        return generateUniqueValue(existingValues);
    }
}

function loadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var newImagePreview = document.createElement('img');
        var ImageIcon = document.createElement('img');
        newImagePreview.className = 'PreviewImg';
        ImageIcon.className = 'ImageIcon';
        newImagePreview.style = 'top: 0px; left: 0px';
        ImageIcon.onclick = ImgIconSelected;
        const existingImageIcons = document.querySelectorAll('.imgIconsContainer .ImageIcon');
        const existingValues = Array.from(existingImageIcons).map(icon => parseInt(icon.getAttribute('data-value'), 10));
        const uniqueValue = generateUniqueValue(existingValues);
        ImageIcon.setAttribute('data-value', uniqueValue);
        newImagePreview.setAttribute('data-value', uniqueValue);
        previewContainer.style.cursor = 'move';
        ImgControls.style.display = 'block';
        reader.onload = function (e) {
            newImagePreview.src = e.target.result;
            ImageIcon.src = e.target.result;
            previewContainer.appendChild(newImagePreview);
            imgIconsContainer.appendChild(ImageIcon);
            if (existingImageIcons.length + 1 === 8) {
                if (UploadImageLabel) {
                    UploadImageLabel.style.display = 'none';
                    FullUploaded.style.display = 'flex';
                }
            }
            UploadImageLabelP.style.display = 'none';
        };
        ImageIcon.classList.add('selected');
        newImagePreview.classList.add('selected');
        PreviewImgSelected = newImagePreview
        imageIconsSelected = ImageIcon
        reader.readAsDataURL(input.files[0]);
        imageUpload.value = '';
        IconsContainer.style.display = 'flex';
    }
}

imageUpload.addEventListener('change', function () {
    if (document.querySelector('.PreviewImg.selected')) {
        PreviewImgSelected.classList.remove('selected');
        imageIconsSelected.classList.remove('selected');
    }
    loadImage(this);
});

let PreviewImgSelected = null;
let imageIconsSelected = null;

function ImgIconSelected() {
    const imageIcons = document.querySelectorAll('.ImageIcon');
    const PreviewImg = document.querySelectorAll('.PreviewImg');
    const dataValue = this.getAttribute('data-value');

    if (this.classList.contains('selected')) {
        document.querySelector('.PreviewImg.selected').classList.remove('selected');
        document.querySelector('.ImageIcon.selected').classList.remove('selected');
        PreviewImgSelected = null;
        imageIconsSelected = null;
        previewContainer.style.cursor = 'unset';
        ImgControls.style.display = 'none';
    } else {
        PreviewImg.forEach((icon) => {
            if (icon.classList.contains('selected')) {
                icon.classList.remove('selected');
            }
            if (icon.getAttribute('data-value') === dataValue) {
                icon.classList.add('selected');
            }
        });
        imageIcons.forEach((icon) => {
            if (icon.classList.contains('selected')) {
                icon.classList.remove('selected');
            }
            if (icon.getAttribute('data-value') === dataValue) {
                icon.classList.add('selected');
            }
        });
        PreviewImgSelected = document.querySelector('.PreviewImg.selected');
        imageIconsSelected = document.querySelector('.imageIcon.selected');
        previewContainer.style.cursor = 'move';
        ImgControls.style.display = 'block';
    }
}

var startX, startY, offsetX, offsetY;
var PreviewScale = 1;

previewContainer.addEventListener('mousedown', function (event) {
    if (PreviewImgSelected) {
        startX = event.clientX;
        startY = event.clientY;
        offsetX = PreviewImgSelected.offsetLeft * PreviewScale;
        offsetY = PreviewImgSelected.offsetTop * PreviewScale;
        document.onmousemove = function (e) {
            var left = e.clientX - startX + offsetX;
            var top = e.clientY - startY + offsetY;
            PreviewImgSelected.style.left = (left / PreviewScale) + 'px';
            PreviewImgSelected.style.top = (top / PreviewScale) + 'px';
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        previewContainer.ondragstart = function () {
            return false;
        };
    }
});

previewContainer.addEventListener('touchstart', function (event) {
    if (PreviewImgSelected) {
        var touch = event.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        offsetX = PreviewImgSelected.offsetLeft * PreviewScale;
        offsetY = PreviewImgSelected.offsetTop * PreviewScale;
        event.preventDefault();
    }
});

previewContainer.addEventListener('touchmove', function (event) {
    if (PreviewImgSelected) {
        var touch = event.touches[0];
        var left = touch.clientX - startX + offsetX;
        var top = touch.clientY - startY + offsetY;
        PreviewImgSelected.style.left = (left / PreviewScale) + 'px';
        PreviewImgSelected.style.top = (top / PreviewScale) + 'px';
        
        event.preventDefault();
    }
});

clearIconContainer.addEventListener('click', function() {
    if (PreviewImgSelected) {
        PreviewImgSelected.remove();
        imageIconsSelected.remove();
        ImgControls.style.display = 'none';
        UploadImageLabel.style.display = 'flex';
        FullUploaded.style.display = 'none';
    }
    if (imgIconsContainer.childElementCount === 0) {
        IconsContainer.style.display = 'none';
        UploadImageLabelP.style.display = 'block';
    }
});

const BtnsChooseControlsImg = document.querySelectorAll('.BtnsChooseControlsImg');
const ControlImgContainer = document.querySelectorAll('.ControlImgContainer');

BtnsChooseControlsImg.forEach((button, index) => {
    button.addEventListener('click', () => {
        BtnsChooseControlsImg.forEach(element => {
            element.classList.remove('selected');
        });
        BtnsChooseControlsImg[index].classList.add('selected');

        ControlImgContainer.forEach(element => {
            element.classList.remove('selected');
        });
        ControlImgContainer[index].classList.add('selected');
    });
});

const step = 1;
const BtnImgUp = document.querySelector('.ImgUp');
const BtnImgDown = document.querySelector('.ImgDown');
const BtnImgLeft = document.querySelector('.ImgLeft');
const BtnImgRight = document.querySelector('.ImgRight');
const Scale = 0.01;
const sizeLess = document.querySelector('.SizeLess');
const sizePlus = document.querySelector('.SizePlus');
const SizeLessLess = document.querySelector('.SizeLessLess');
const SizePlusPlus = document.querySelector('.SizePlusPlus');

function updateScale(Scale) {
    const currentScale = parseFloat(window.getComputedStyle(PreviewImgSelected).getPropertyValue('transform').split(',')[3]);
    PreviewImgSelected.style.transform = `scale(${currentScale + Scale})`;
    ImgSizeRange.value = (currentScale + Scale) * 100;
}

function addTouchHoldListener(element, action) {
    let isInteracting = false;
    let timer = null;

    function startMoving() {
        if (isInteracting) {
            action();
            timer = setTimeout(startMoving, 100); // Repete a função a cada 0.5 segundos
        }
    }

    function stopMoving() {
        isInteracting = false;
        clearTimeout(timer);
    }

    element.addEventListener('mousedown', () => {
        isInteracting = true;
        startMoving();
    });

    element.addEventListener('mouseup', stopMoving);
    element.addEventListener('mouseleave', stopMoving);

    element.addEventListener('touchstart', (event) => {
        event.preventDefault();
        isInteracting = true;
        startMoving();
    });

    element.addEventListener('touchend', stopMoving);
    element.addEventListener('touchcancel', stopMoving);
}

function moveUp() {
    PreviewImgSelected.style.top = (parseInt(PreviewImgSelected.style.top) - step) + 'px';
}

function moveDown() {
    PreviewImgSelected.style.top = (parseInt(PreviewImgSelected.style.top) + step) + 'px';
}

function moveLeft() {
    PreviewImgSelected.style.left = (parseInt(PreviewImgSelected.style.left) - step) + 'px';
}

function moveRight() {
    PreviewImgSelected.style.left = (parseInt(PreviewImgSelected.style.left) + step) + 'px';
}

function LessLessSize() {
    updateScale(-Scale * 2);
}

function LessSize() {
    updateScale(-Scale);
}

function PlusSize() {
    updateScale(Scale);
}

function PlusPlusSize() {
    updateScale(Scale * 2);
}

addTouchHoldListener(BtnImgUp, moveUp);
addTouchHoldListener(BtnImgDown, moveDown);
addTouchHoldListener(BtnImgLeft, moveLeft);
addTouchHoldListener(BtnImgRight, moveRight);
addTouchHoldListener(sizeLess, LessSize);
addTouchHoldListener(sizePlus, PlusSize);
addTouchHoldListener(SizeLessLess, LessLessSize);
addTouchHoldListener(SizePlusPlus, PlusPlusSize);

const botaoSubir = document.querySelector('.LayerUp');
const botaoDescer = document.querySelector('.LayerDown');

botaoDescer.addEventListener('click', () => {
    const pai = PreviewImgSelected.parentNode;
    const irmaoAnterior = PreviewImgSelected.previousElementSibling;

    if (irmaoAnterior) {
        pai.insertBefore(PreviewImgSelected, irmaoAnterior);
    }
});

botaoSubir.addEventListener('click', () => {
    const pai = PreviewImgSelected.parentNode;
    const irmaoSeguinte = PreviewImgSelected.nextElementSibling;

    if (irmaoSeguinte) {
        pai.insertBefore(irmaoSeguinte, PreviewImgSelected);
    }
});

const ImgSizeRange = document.querySelector('.ImgSizeRange');

ImgSizeRange.addEventListener('input', function() {
    PreviewImgSelected.style.transform = 'scale('+ (ImgSizeRange.value / 100) +')';
});

const BtnImgEffect = document.querySelectorAll('.BtnImgEffect');
const ImgEffect = document.querySelectorAll('.ImgEffect');

BtnImgEffect.forEach((button, index) => {
    button.addEventListener('click', () => {
        BtnImgEffect.forEach(element => {
            element.classList.remove('selected');
        });
        BtnImgEffect[index].classList.add('selected');

        ImgEffect.forEach(element => {
            element.classList.remove('selected');
        });
        ImgEffect[index].classList.add('selected');
    });
});

const ImgShadow = document.querySelector('.ImgShadow');
let ImgShadowValue = null;

ImgShadow.addEventListener('input', function() {
    ImgShadowValue = ImgShadow.value;
    PreviewImgSelected.style.filter = 'drop-shadow(0px 0px '+ ImgShadowValue +'px white)';
});

const ImgGradient = document.querySelectorAll('.ImgGradient');

ImgGradient.forEach((element) => {
    element.addEventListener('click', function() {
        if (this.classList.contains('With')) {
            PreviewImgSelected.style.webkitMaskImage = 'linear-gradient(to top, transparent 2%, black 30%)';
        } else {
            PreviewImgSelected.style.webkitMaskImage = 'unset';
        }
    });
});

const TextInput = document.querySelector('.TextInput');
const TextPreview = document.querySelector('.TextPreview');

function TextScaleX () {
    if (TextPreview.offsetWidth > previewContainer.offsetWidth) {
        const scale = previewContainer.offsetWidth / TextPreview.offsetWidth;
        TextPreview.style.transform = `scaleX(${scale})`;
    } else {
        TextPreview.style.transform = 'scaleX(1)';
    }
}

TextInput.addEventListener('input', function() {
    TextPreview.textContent = TextInput.value;
    TextScaleX();
});

const FontSize = document.querySelector('.FontSize');
var currentSize = parseFloat(window.getComputedStyle(TextPreview).fontSize);

FontSize.addEventListener('input', function() {
    var percentageChange = parseFloat(FontSize.value);
    var newSize = currentSize + (currentSize * (percentageChange / 100));
    TextPreview.style.fontSize = newSize + 'px';
    TextScaleX();
});

