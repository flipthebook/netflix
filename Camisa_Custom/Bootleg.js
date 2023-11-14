const OptionCustom = document.querySelectorAll('.OptionCustom');
const CustomizationContainer = document.querySelectorAll('.CustomizationContainer');
const clearIconContainer = document.querySelector('.clearIconContainer');
const imgIconsContainer = document.querySelector('.imgIconsContainer');
const previewContainer = document.querySelector('.previewContainer');
const ImgContainer = document.querySelector('.ImgContainer');
const PreviewBorder = document.querySelector('.PreviewBorder');
const ImgControls = document.querySelector('.ImgControls');
const IconsContainer = document.querySelector('.IconsContainer');
const imageUpload = document.querySelector('.imageUpload');
const UploadImageLabel = document.querySelector('.UploadImageLabel');
const UploadImageLabelP = document.querySelector('.UploadImageLabel p');
const FullUploaded = document.querySelector('.FullUploaded');
const TshirtContainer = document.querySelector('.TshirtContainer');
const ZoomBtn = document.querySelectorAll('.ZoomBtn');
const ImgSelector = document.querySelector('.ImgSelector');
const ImgSizeControl = document.querySelector('.ImgSizeControl');
let ImgMaskContainer = null;
let PreviewImgContainer = null;
let RoundedContainer = null;
let PreviewImg = null;
let BlendModeImg = null;
let ImageIcon = null;
let SelectedImgList = [ImgMaskContainer, PreviewImgContainer, RoundedContainer, PreviewImg, BlendModeImg, ImageIcon];

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

PreviewBorder.addEventListener('click', function() {
    if (previewContainer.classList.contains('border')) {
        previewContainer.classList.remove('border');
    } else {
        previewContainer.classList.add('border');
    }
});

OptionCustom.forEach((button, index) => {
    button.addEventListener('click', () => {
        OptionCustom.forEach(element => {
            element.classList.remove('selected');
        });
        OptionCustom[index].classList.add('selected');

        CustomizationContainer.forEach(element => {
            element.classList.remove('selected');
        });
        CustomizationContainer[index].classList.add('selected');
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

function CenterPosition(element, container) {
    element.style.bottom = (container.offsetHeight - element.offsetHeight) / 2;
    element.style.left = (container.offsetWidth - element.offsetWidth) / 2;
}

function ImgSelectorUpdate() {
    ImgSelector.classList.add('selected');
    ImgSizeControl.classList.add('selected');
    ImgSelector.style.height = PreviewImgContainer.offsetHeight;
    ImgSelector.style.width = PreviewImgContainer.offsetWidth;
    ImgSelector.style.bottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom) - 4;
    ImgSelector.style.left = PreviewImgContainer.offsetLeft - 4;
    ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
    ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
}

        //  ADD IMAGE AND SELECT

function loadImage(input) {
    if (input.files && input.files[0])  {
        var reader = new FileReader();
        // createElement
        ImgMaskContainer = document.createElement('div');
        PreviewImgContainer = document.createElement('div');
        RoundedContainer = document.createElement('div');
        PreviewImg = document.createElement('img');
        BlendModeImg = document.createElement('div');
        ImageIcon = document.createElement('img');
        SelectedImgList = [ImgMaskContainer, PreviewImgContainer, RoundedContainer, PreviewImg, BlendModeImg, ImageIcon];
        
        // className
        ImgMaskContainer.className = 'ImgMaskContainer masked';
        PreviewImgContainer.className = 'PreviewImgContainer';
        RoundedContainer.className = 'RoundedContainer';
        PreviewImg.className = 'PreviewImg';
        BlendModeImg.className = 'BlendModeImg';
        ImageIcon.className = 'ImageIcon';

        // add Selected
        SelectedImgList.forEach(function(element) {
            element.classList.add('selected');
        });

        // appendChild
        ImgContainer.appendChild(ImgMaskContainer);
        ImgMaskContainer.appendChild(PreviewImgContainer);
        PreviewImgContainer.appendChild(RoundedContainer);
        RoundedContainer.appendChild(PreviewImg);
        RoundedContainer.appendChild(BlendModeImg);
        imgIconsContainer.appendChild(ImageIcon);
        
        // Unique Value
        const existingImageIcons = document.querySelectorAll('.imgIconsContainer .ImageIcon');
        const existingValues = Array.from(existingImageIcons).map(icon => parseInt(icon.getAttribute('data-value'), 10));
        const uniqueValue = generateUniqueValue(existingValues);
        SelectedImgList.forEach(function(element) {
            element.setAttribute('data-value', uniqueValue);
        });
        
        ImageIcon.onclick = ImgIconSelected;
        
        // Max Capacite 
        if (existingImageIcons.length + 1 === 8) {
            if (UploadImageLabel) {
                UploadImageLabel.style.display = 'none';
                FullUploaded.style.display = 'flex';
            }
        }
        
        // Styles Changes
        previewContainer.style.cursor = 'move';
        ImgControls.style.display = 'block';
        IconsContainer.style.display = 'flex';
        UploadImageLabelP.style.display = 'none';
        
        // Img File
        reader.onload = function (e) {
            var imageSrc = e.target.result;
            PreviewImg.src = imageSrc;
            ImageIcon.src = imageSrc;
            CenterPosition(PreviewImgContainer, previewContainer);
            updateImgCustomizations();
            ImgSelectorUpdate();
        };
        reader.readAsDataURL(input.files[0]);
        imageUpload.value = '';
    }
}

imageUpload.addEventListener('change', function () {
    SelectedImgList.forEach(function(element) {
        if (element) {
            element.classList.remove('selected');
        }
    });
    loadImage(this);
});

function ImgIconSelected() {
    if (this.classList.contains('selected')) {
        SelectedImgList.forEach(function(element, index) {
            element.classList.remove('selected');
            SelectedImgList[index] = null;
        });
        ImgSelector.classList.remove('selected');
        ImgSizeControl.classList.remove('selected');
        previewContainer.style.cursor = 'unset';
        ImgControls.style.display = 'none';
    } else {
        const AllElements = document.querySelectorAll('.ImgMaskContainer, .PreviewImgContainer, .RoundedContainer, .PreviewImg, .BlendModeImg, .ImageIcon');
        const dataValue = this.getAttribute('data-value');
        AllElements.forEach((element) => {
                if (element.classList.contains('selected')) {
                    element.classList.remove('selected');
                }
                if (element.getAttribute('data-value') === dataValue) {
                    element.classList.add('selected');
                }
        });
        ImgMaskContainer = document.querySelector('.ImgMaskContainer.selected');
        PreviewImgContainer = document.querySelector('.PreviewImgContainer.selected');
        RoundedContainer = document.querySelector('.RoundedContainer.selected');
        PreviewImg = document.querySelector('.PreviewImg.selected');
        BlendModeImg = document.querySelector('.BlendModeImg.selected');
        ImageIcon = document.querySelector('.ImageIcon.selected');
        SelectedImgList = [ImgMaskContainer, PreviewImgContainer, RoundedContainer, PreviewImg, BlendModeImg, ImageIcon];
        previewContainer.style.cursor = 'move';
        ImgControls.style.display = 'block';
        updateImgCustomizations();
        ImgSelectorUpdate();
    }
}

        //  IMG TOUCH POSITION

var startX, startY, offsetX, offsetY;
var PreviewScale = 1;
var TouchMoveGroup = [ImgContainer, ImgSelector];

TouchMoveGroup.forEach((element) => {
    element.addEventListener('mousedown', function (event) {
        if (PreviewImgContainer) {
            startY = event.clientY;
            startX = event.clientX;
            var currentBottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom) * PreviewScale;
            var currentLeft = PreviewImgContainer.offsetLeft * PreviewScale;
            var border = parseFloat(window.getComputedStyle(ImgSelector).border);
            document.onmousemove = function (e) {
                var movimentY = e.clientY - startY;
                var movimentX = e.clientX - startX;
                PreviewImgContainer.style.bottom = ((-movimentY + currentBottom) / PreviewScale) + 'px';
                PreviewImgContainer.style.left = ((movimentX + currentLeft) / PreviewScale) + 'px';
                var bottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom);
                var left = parseFloat(window.getComputedStyle(PreviewImgContainer).left);
                ImgSelector.style.bottom = (bottom - border) +'px';
                ImgSelector.style.left = (left - border) +'px';
                ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
                ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
            };
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            };
            element.ondragstart = function () {
                return false;
            };
        }
    });
    
    element.addEventListener('touchstart', function (event) {
        if (PreviewImgContainer) {
            var touch = event.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            var currentBottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom) * PreviewScale;
            var currentLeft = PreviewImgContainer.offsetLeft * PreviewScale;
            var border = parseFloat(window.getComputedStyle(ImgSelector).border);
            event.preventDefault();
            element.addEventListener('touchmove', function (event) {
                    var touch = event.touches[0];
                    var movimentX = touch.clientX - startX;
                    var movimentY = touch.clientY - startY;
                    PreviewImgContainer.style.bottom = ((-movimentY + currentBottom) / PreviewScale) + 'px';
                    PreviewImgContainer.style.left = ((movimentX + currentLeft) / PreviewScale) + 'px';
                    var bottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom);
                    var left = parseFloat(window.getComputedStyle(PreviewImgContainer).left);
                    ImgSelector.style.bottom = (bottom - border) +'px';
                    ImgSelector.style.left = (left - border) +'px';
                    ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
                    ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
                    event.preventDefault();
            });
        }
    });
});

ImgSizeControl.addEventListener('mousedown', function (event) {
    if (PreviewImgContainer) {
        startY = event.clientY;
        var currentHeight = PreviewImgContainer.offsetHeight * PreviewScale;
        document.onmousemove = function (e) {
            var moviment = e.clientY - startY;
            PreviewImgContainer.style.height = ((-moviment + currentHeight) / PreviewScale) + 'px';
            ImgSelector.style.height = PreviewImgContainer.offsetHeight;
            ImgSelector.style.width = PreviewImgContainer.offsetWidth;
            var bottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom);
            var left = PreviewImgContainer.offsetLeft;
            ImgSelector.style.bottom = (bottom - 4) +'px';
            ImgSelector.style.left = (left - 4) +'px';
            ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
            ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        ImgSizeControl.ondragstart = function () {
            return false;
        };
    }
});

ImgSizeControl.addEventListener('touchstart', function (event) {
    if (PreviewImgContainer) {
        var touch = event.touches[0];
        startY = touch.clientY;
        var currentHeight = PreviewImgContainer.offsetHeight * PreviewScale;
        event.preventDefault();
        ImgSizeControl.addEventListener('touchmove', function (event) {
            var touch = event.touches[0];
            var moviment = touch.clientY - startY;
            PreviewImgContainer.style.height = ((-moviment + currentHeight) / PreviewScale) + 'px';
            ImgSelector.style.height = PreviewImgContainer.offsetHeight;
            ImgSelector.style.width = PreviewImgContainer.offsetWidth;
            var bottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom);
            var left = PreviewImgContainer.offsetLeft;
            ImgSelector.style.bottom = (bottom - 4) +'px';
            ImgSelector.style.left = (left - 4) +'px';
            ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
            ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
            event.preventDefault();
        });
    }
});

        //  CLEAR IMG

clearIconContainer.addEventListener('click', function() {
    if (PreviewImg) {
        ImgMaskContainer.remove();
        ImageIcon.remove();
        ImgControls.style.display = 'none';
        UploadImageLabel.style.display = 'flex';
        FullUploaded.style.display = 'none';
        ImgSelector.classList.remove('selected');
        ImgSizeControl.classList.remove('selected');
    }
    if (imgIconsContainer.childElementCount === 0) {
        IconsContainer.style.display = 'none';
        UploadImageLabelP.style.display = 'block';
    }
});

const BtnsChooseControlsImg = document.querySelectorAll('.BtnsChooseControlsImg');
const ControlImgContainer = document.querySelectorAll('.ControlImgContainer');

        //  IMG CONSTROLS

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


function addTouchHoldListener(element, action) {
    let isInteracting = false;
    let timer = null;
    
    function startMoving() {
        element.style.boxShadow = '0px 0px 30px red';
        function ContinueAction() {
            action();
            timer = setTimeout(ContinueAction, 100);
        }
        if (isInteracting) {
            action();
            timer = setTimeout(ContinueAction, 400);
        }
    }
    
    function stopMoving() {
        isInteracting = false;
        clearTimeout(timer);
        element.style.boxShadow = '';
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
    PreviewImgContainer.style.bottom = (parseInt(PreviewImgContainer.style.bottom) + step) + 'px';
    ImgSelector.style.bottom = (parseInt(ImgSelector.style.bottom) + step) + 'px';
    ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
}

function moveDown() {
    PreviewImgContainer.style.bottom = (parseInt(PreviewImgContainer.style.bottom) - step) + 'px';
    ImgSelector.style.bottom = (parseInt(ImgSelector.style.bottom) - step) + 'px';
    ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
}

function moveLeft() {
    PreviewImgContainer.style.left = (parseInt(PreviewImgContainer.style.left) - step) + 'px';
    ImgSelector.style.left = (parseInt(ImgSelector.style.left) - step) + 'px';
    ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
}

function moveRight() {
    PreviewImgContainer.style.left = (parseInt(PreviewImgContainer.style.left) + step) + 'px';
    ImgSelector.style.left = (parseInt(ImgSelector.style.left) + step) + 'px';
    ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
}

addTouchHoldListener(BtnImgUp, moveUp);
addTouchHoldListener(BtnImgDown, moveDown);
addTouchHoldListener(BtnImgLeft, moveLeft);
addTouchHoldListener(BtnImgRight, moveRight);

const Scale = 1;
const sizeLess = document.querySelector('.SizeLess');
const sizePlus = document.querySelector('.SizePlus');
const SizeLessLess = document.querySelector('.SizeLessLess');
const SizePlusPlus = document.querySelector('.SizePlusPlus');

function updateScale(Scale) {
    var currentHeight = PreviewImgContainer.offsetHeight;
    PreviewImgContainer.style.height = currentHeight + Scale + 'px';
    var bottom = parseFloat(window.getComputedStyle(PreviewImgContainer).bottom);
    var left = PreviewImgContainer.offsetLeft;
    ImgSelector.style.height = PreviewImgContainer.offsetHeight;
    ImgSelector.style.width = PreviewImgContainer.offsetWidth;
    ImgSelector.style.bottom = (bottom - 4) +'px';
    ImgSelector.style.left = (left - 4) +'px';
    ImgSizeControl.style.left = ImgSelector.offsetLeft + ImgSelector.offsetWidth;
    ImgSizeControl.style.top = ImgSelector.offsetTop - ImgSizeControl.offsetHeight;
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

addTouchHoldListener(sizeLess, LessSize);
addTouchHoldListener(sizePlus, PlusSize);
addTouchHoldListener(SizeLessLess, LessLessSize);
addTouchHoldListener(SizePlusPlus, PlusPlusSize);

        //  LAYER BUTTONS

const botaoSubir = document.querySelector('.LayerUp');
const botaoDescer = document.querySelector('.LayerDown');

botaoDescer.addEventListener('click', () => {
    const pai = PreviewImgContainer.parentNode;
    const paipai = pai.parentNode;
    const irmaoAnterior = pai.previousElementSibling;

    if (irmaoAnterior) {
        paipai.insertBefore(pai, irmaoAnterior);
    }
});

botaoSubir.addEventListener('click', () => {
    const pai = PreviewImgContainer.parentNode;
    const paipai = pai.parentNode;
    const irmaoSeguinte = pai.nextElementSibling;

    if (irmaoSeguinte) {
        paipai.insertBefore(irmaoSeguinte, pai);
    }
});

        //  IMG MASK SELECTOR

const MaskImgFalse = document.querySelector('.MaskImgFalse');
const MaskImgTrue = document.querySelector('.MaskImgTrue');

MaskImgFalse.addEventListener('click', () => {
    PreviewImgContainer.parentNode.classList.remove('masked');
});

MaskImgTrue.addEventListener('click', () => {
    PreviewImgContainer.parentNode.classList.add('masked');
});

        //  IMG EFFECTS

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

        //  UPDATE IMG CUSTOMIZATION

function updateImgCustomizations() {
    actualImgFilter();
    actualImgColor();
    actualRoundedStyle();
}

        //  ALL INPUT RANGE FUNCTION

function InputRangeFunction(InputRange, Attribute, update) {
    InputRange.addEventListener('input', function() {
        NewValue = InputRange.value;
        PreviewImg.setAttribute(Attribute, NewValue);
        update();
    });
}


        //  COPY AND PASTE FUNCTIONS

const CopyColorBtn = document.querySelectorAll('.CopyColorBtn');
const PasteColorBtn = document.querySelectorAll('.PasteColorBtn');

CopyColorBtn.forEach(function(CopyBtn) {
    CopyBtn.addEventListener('click', function() {
        if (this) {
            var value = this.previousElementSibling.getAttribute('data-current-color');
            PasteColorBtn.forEach(function(PasteBtn) {
                PasteBtn.style.background = value;
                PasteBtn.setAttribute('color', value);
            });
        }
    });
});

function PastColor(button, inputColor) {
    var color = button.getAttribute('color');
    changeInputColor(inputColor, color);
}

        //  ALL JSCOLOR INPUT FUNCTION

jscolor.presets.default = {
    width:600, height:330, closeButton:true, closeText:'', sliderSize:40
};

function updateJSColor(picker, selector) {
    document.querySelector(selector).style.background = picker.toBackground();
}

function InputJsColorFunction(InputJsColor, getSelectedElement, Attribute, update) {
    InputJsColor.addEventListener('input', function() {
        NewValue = InputJsColor.value;
        const SelectedElement = getSelectedElement();
        SelectedElement.setAttribute(Attribute, NewValue);
        update(NewValue);
    });
}

function changeInputColor(InputColor, color) {
    InputColor.value = color;
    var event = new Event('input', {
        bubbles: true,
        cancelable: true
    });
    InputColor.dispatchEvent(event);
}

        //  DROP-SHADOW IMG EFFECT

const ImgShadow = document.querySelector('.ImgShadow');
const InputImgShadowColor = document.querySelector('.InputImgShadowColor');

InputRangeFunction(ImgShadow,'dropshadowvalue', updateImgDropShadow);
InputJsColorFunction(InputImgShadowColor, () => PreviewImg, 'DropShadowColor', updateImgDropShadow);

function updateImgDropShadow() {
    ImgShadowValue = PreviewImg.getAttribute('DropShadowValue');
    ImgShadowColorValue = PreviewImg.getAttribute('DropShadowColor');
    PreviewImg.style.filter = 'drop-shadow('+ ImgShadowColorValue +' 0px 0px '+ ImgShadowValue +'px)';
}

function actualImgFilter() {
    if (PreviewImg.getAttribute('DropShadowValue')) {
        ImgShadow.value = PreviewImg.getAttribute('DropShadowValue');
    } else {
        PreviewImg.setAttribute('DropShadowValue', 0)
        ImgShadow.value = 0;
    }
    if (PreviewImg.getAttribute('DropShadowColor')) {
        var DropShadowColor = PreviewImg.getAttribute('DropShadowColor');
        changeInputColor(InputImgShadowColor, DropShadowColor);
    } else {
        PreviewImg.getAttribute('DropShadowColor', '#FFFFFF')
        changeInputColor(InputImgShadowColor, '#FFFFFF');
    }
}

        //  GRADIENT IMG EFFECT  

const ImgGradient = document.querySelectorAll('.ImgGradient');

ImgGradient.forEach((element) => {
    element.addEventListener('click', function() {
        if (this.classList.contains('With')) {
            PreviewImg.classList.add('gradient');
            updateImgColor();
        } else {
            PreviewImg.classList.remove('gradient');
            updateImgColor();
        }
    });
});

        //  COLOR IMG EFFECT

const OptionImgColorEffect = document.querySelectorAll('.OptionImgColorEffect');
const ImgColorEffectContainer = document.querySelector('.ImgColorEffectContainer');
const InputImgColor = document.querySelector('.InputImgColor');
const BlendModeColor = '#7fffd4';
const BlendModeStyle = 'hue';

OptionImgColorEffect.forEach((element) => {
    element.addEventListener('click', function() {
        if (this.classList.contains('With')) {
            if (!BlendModeImg.classList.contains('blended')) {
                BlendModeImg.classList.add('blended');
                BlendModeImg.style.webkitMaskImage = `url(${PreviewImg.src})`;
                BlendModeImg.style.maskImage = `url(${PreviewImg.src})`;
                updateImgColor();
                ImgColorEffectContainer.classList.add('selected');
                OptionImgColorEffect[0].classList.remove('selected');
                OptionImgColorEffect[1].classList.add('selected');
            }
        } else {
            if (BlendModeImg.classList.contains('blended')) {
                BlendModeImg.classList.remove('blended')
                ImgColorEffectContainer.classList.remove('selected');
                OptionImgColorEffect[0].classList.add('selected');
                OptionImgColorEffect[1].classList.remove('selected');
            }
        }
    });
});

InputJsColorFunction(InputImgColor, () => PreviewImg, 'BlendModeColor', updateImgColor);

function updateImgColor() {
    if (BlendModeImg) {
        var Color = PreviewImg.getAttribute('BlendModeColor');
        var Style = PreviewImg.getAttribute('BlendModeStyle');
        if (PreviewImg.classList.contains('gradient')) {
            BlendModeImg.style.background = 'linear-gradient(to top, transparent 10%, '+Color+' 30%)';
        } else {
            BlendModeImg.style.background = Color;
        }
        BlendModeImg.style.mixBlendMode = Style;
    }
}

function actualImgColor() {
    if (BlendModeImg.classList.contains('blended')) {
        var Color = PreviewImg.getAttribute('BlendModeColor');
        changeInputColor(InputImgColor, Color);
        ImgColorEffectContainer.classList.add('selected');
        OptionImgColorEffect[0].classList.remove('selected');
        OptionImgColorEffect[1].classList.add('selected');
    } else {
        if (!PreviewImg.getAttribute('BlendModeColor')) {
            PreviewImg.setAttribute('BlendModeColor', BlendModeColor);
            PreviewImg.setAttribute('BlendModeStyle', BlendModeStyle);
        }
        var Color = PreviewImg.getAttribute('BlendModeColor');
        changeInputColor(InputImgColor, Color);
        ImgColorEffectContainer.classList.remove('selected');
        OptionImgColorEffect[0].classList.add('selected');
        OptionImgColorEffect[1].classList.remove('selected');
    }
}

        //  ROUDENDED IMG EFFECT

const RoundedSelector = document.querySelector('.RoundedSelector');
const RoundedEffectOptions = document.querySelector('.RoundedEffectOptions');
const RoundedOptions = document.querySelectorAll('.RoundedOptions');
const RoundedCustomContainer = document.querySelectorAll('.RoundedCustomContainer');
const InputRoundedBorderColor = document.querySelector('.InputRoundedBorderColor');
const InputRoundedBGColor = document.querySelector('.InputRoundedBGColor');

RoundedSelector.addEventListener('click', function() {
    if (RoundedSelector.classList.contains('selected')) {
        RoundedSelector.classList.remove('selected');
        var RoundedSelected = PreviewImg.parentNode;
        RoundedSelected.classList.remove('rounded');
        PreviewImg.classList.remove('rounded');
        RoundedEffectOptions.classList.remove('selected');
        RoundedOptions.forEach(element => {
            element.classList.remove('selected');
        });
        RoundedCustomContainer.forEach(element => {
            element.classList.remove('selected');
        });
        const Childrens = RoundedSelected.children;
        for (let i = 0; i < Childrens.length; i++) {
            Childrens[i].style.borderRadius = '';
        }
        updateRounded();
        ImgSelectorUpdate();
    } else {
        RoundedSelector.classList.add('selected');
        var RoundedSelected = PreviewImg.parentNode;
        RoundedSelected.classList.add('rounded');
        PreviewImg.classList.add('rounded');
        RoundedEffectOptions.classList.add('selected');
        RoundedOptions[0].classList.add('selected');
        RoundedCustomContainer[0].classList.add('selected');
        var width = RoundedSelected.offsetWidth;
        const Childrens = RoundedSelected.children;
        for (let i = 0; i < Childrens.length; i++) {
            Childrens[i].style.borderRadius = '50%';
        }
        updateRounded();
        ImgSelectorUpdate();
    }
});

RoundedOptions.forEach((button, index) => {
    button.addEventListener('click', () => {
        RoundedOptions.forEach(element => {
            element.classList.remove('selected');
        });
        RoundedOptions[index].classList.add('selected');

        RoundedCustomContainer.forEach(element => {
            element.classList.remove('selected');
        });
        RoundedCustomContainer[index].classList.add('selected');
    });
});

InputJsColorFunction(InputRoundedBorderColor, () => PreviewImg, 'RoundedBorder', updateRounded);
InputJsColorFunction(InputRoundedBGColor, () => PreviewImg, 'RoundedBG', updateRounded);
let DefaultRoundedBorder = '#ffd700';
let DefaultRoundedBG = '#000000';


function updateRounded() {
    var RoundedContainer = PreviewImg.parentNode;
    var background = PreviewImg.getAttribute('RoundedBG');
    var Border = PreviewImg.getAttribute('RoundedBorder');
    if (RoundedContainer.classList.contains('rounded')) {
        RoundedContainer.style.borderColor = Border;
        RoundedContainer.style.background = background;
    } else {
        RoundedContainer.style.borderColor = '';
        RoundedContainer.style.background = '';
    }
}

function actualRoundedStyle() {
    if (PreviewImg.getAttribute('RoundedBorder')) {
        var ActualValueBorder = PreviewImg.getAttribute('RoundedBorder');
        changeInputColor(InputRoundedBorderColor, ActualValueBorder);
        var ActualValueBG = PreviewImg.getAttribute('RoundedBG');
        changeInputColor(InputRoundedBGColor, ActualValueBG);
    } else {
        PreviewImg.setAttribute('RoundedBorder', DefaultRoundedBorder);
        changeInputColor(InputRoundedBorderColor, DefaultRoundedBorder);
        PreviewImg.setAttribute('RoundedBG', DefaultRoundedBG);
        changeInputColor(InputRoundedBGColor, DefaultRoundedBG);
    }
    if (!PreviewImg.classList.contains('rounded')) {
        RoundedSelector.classList.remove('selected');
        RoundedEffectOptions.classList.remove('selected');
        RoundedOptions.forEach(element => {
            element.classList.remove('selected');
        });
        RoundedCustomContainer.forEach(element => {
            element.classList.remove('selected');
        });
    } else {
        RoundedSelector.classList.add('selected');
        RoundedEffectOptions.classList.add('selected');
    }
}

        //  TEXT CUSTOMIZATION 

const btnOptionText = document.querySelectorAll('.btnOptionText');
const OptionTextContainer = document.querySelectorAll('.OptionTextContainer');

btnOptionText.forEach((button, index) => {
    button.addEventListener('click', () => {
        btnOptionText.forEach(element => {
            element.classList.remove('selected');
        });
        btnOptionText[index].classList.add('selected');

        OptionTextContainer.forEach(element => {
            element.classList.remove('selected');
        });
        OptionTextContainer[index].classList.add('selected');
    });
});

const TextInput = document.querySelector('.TextInput');
const TextPreview = document.querySelector('.TextPreview');
let minLeft = null; 
let minRight = null;

function TextScaleX () {
    var fontSize = parseFloat(window.getComputedStyle(TextPreview).fontSize);
    if (!minLeft == 0) {
        TextPreview.style.paddingLeft = fontSize * minLeft + "px";
    }
    
    if (!minRight == 0) {
        TextPreview.style.paddingRight = fontSize * minRight + "px";
    }    

    if (TextPreview.offsetWidth > ImgContainer.offsetWidth) {
        const scale = ImgContainer.offsetWidth / TextPreview.offsetWidth;
        TextPreview.style.transform = `scaleX(${scale})`;
    } else {
        TextPreview.style.transform = 'scaleX(1)';
    }
}

TextInput.addEventListener('input', function() {
    TextPreview.textContent = TextInput.value;
    TextScaleX();
});

const FontSizeValue = 1;
const TextSize2xLess = document.querySelector('.TextSize2xLess');
const TextSizeLess = document.querySelector('.TextSizeLess');
const TextSizePlus = document.querySelector('.TextSizePlus');
const TextSize2xPlus = document.querySelector('.TextSize2xPlus');

function textSize(scale) {
    var SizeNow = parseFloat(window.getComputedStyle(TextPreview).fontSize);
    TextPreview.style.fontSize = SizeNow + scale +'px';
    TextScaleX();
}

function Size2xLessText() {
    textSize(-FontSizeValue * 2);
}

function SizeLessText() {
    textSize(-FontSizeValue);
}

function SizePlusText() {
    textSize(FontSizeValue);
}

function Size2xPlusText() {
    textSize(FontSizeValue * 2);
}

addTouchHoldListener(TextSize2xLess, Size2xLessText);
addTouchHoldListener(TextSizeLess, SizeLessText);
addTouchHoldListener(TextSizePlus, SizePlusText);
addTouchHoldListener(TextSize2xPlus, Size2xPlusText);

const LessLetterSpacing = document.querySelector('.LessLetterSpacing');
const MoreLetterSpacing = document.querySelector('.MoreLetterSpacing');
const LetterSpacingValue = 1;

function LetterSpacing(Spacing) {
    var SpacingNow = parseFloat(window.getComputedStyle(TextPreview).letterSpacing);
    var newSpacing = SpacingNow + Spacing;
    if (newSpacing < LetterSpacingValue) {
        newSpacing = LetterSpacingValue;
    }
    TextPreview.style.letterSpacing = newSpacing + 'px';
    TextPreview.style.marginRight = -newSpacing + 'px';
    TextScaleX();
}

function LetterSpacingLess() {
    LetterSpacing(-LetterSpacingValue);
}

function LetterSpacingMore() {
    LetterSpacing(LetterSpacingValue);
}

addTouchHoldListener(LessLetterSpacing, LetterSpacingLess);
addTouchHoldListener(MoreLetterSpacing, LetterSpacingMore);

const TextUp = document.querySelector('.TextUp');
const TextDown = document.querySelector('.TextDown');
const stepText = 1;

function TextMoveUp() { 
    var TextTopValue = parseFloat(window.getComputedStyle(TextPreview).top);
    TextPreview.style.top = TextTopValue - stepText + 'px';
}

function TextMoveDown() {
    var TextTopValue = parseFloat(window.getComputedStyle(TextPreview).top);
    TextPreview.style.top = TextTopValue + stepText + 'px';
}

addTouchHoldListener(TextUp, TextMoveUp);
addTouchHoldListener(TextDown, TextMoveDown);

let BackgroundEffect = null;
const btnBackgroundText = document.querySelectorAll('.btnBackgroundText');
const TextPreviewBackground = document.querySelectorAll('.TextPreviewBackground');

btnBackgroundText.forEach((button, index) => {
    button.addEventListener('click', () => {
        btnBackgroundText.forEach(element => {
            element.classList.remove('selected');
        });
        btnBackgroundText[index].classList.add('selected');
        var BtnStyle = btnBackgroundText[index];
        TextPreview.style.backgroundImage = BtnStyle.style.backgroundImage;
    });
});

const FontFamilySelector = document.querySelectorAll('.FontFamilySelector');

FontFamilySelector.forEach((button, index) => {
    button.addEventListener('click', () => {
        FontFamilySelector.forEach(element => {
            element.classList.remove('selected');
        });
        FontFamilySelector[index].classList.add('selected');
        var BtnStyle = FontFamilySelector[index];
        TextPreview.style.fontFamily = BtnStyle.style.fontFamily;
        minLeft = BtnStyle.getAttribute('min-left');
        minRight = BtnStyle.getAttribute('min-right');
        TextPreview.setAttribute('min-left', minLeft);
        TextPreview.setAttribute('min-right', minRight);
        TextScaleX();
    });
});


        //  BACKGROUND CUSTOMIZATION

const InputBgColor = document.querySelector('.InputBgColor');
const ImgContainerMasked = document.querySelector('.ImgContainerMasked');
const ImgContainerColor = document.querySelector('.ImgContainerColor');
const BgOptionMask = document.querySelectorAll('.BgOption.Mask');
const BgOptionTexture = document.querySelectorAll('.BgOption.Texture');

InputJsColorFunction(InputBgColor, () => ImgContainerColor, 'BgColor', updateBgColor);

function updateBgColor() {
    ImgContainerColor.style.backgroundColor = NewValue;
}
const maskLinks = [
    'Background/5-Soft-Grunge-Textures/1.png',
    'Background/5-Soft-Grunge-Textures/2.png',
    'Background/5-Soft-Grunge-Textures/3.png',
    'Background/5-Soft-Grunge-Textures/4.png',
    'Background/5-Soft-Grunge-Textures/5.png',
    '',
    '',
    '',
    '',
    '',
];

BgOptionMask.forEach((element, index) => {
    element.style.maskImage = `url(${maskLinks[index]})`;
    element.style.webkitMaskImage = `url(${maskLinks[index]})`;
});

BgOptionMask.forEach((button, index) => {
    button.addEventListener('click', function() {
        var Mask = `url(${maskLinks[index]})`;
        document.documentElement.style.setProperty('--mask-image', Mask);
    });
});

const TextureLinks = [
    'https://i.pinimg.com/236x/1b/c2/78/1bc278fa51bee2cf5b0c31d7661ed213.jpg',
    'https://i.pinimg.com/236x/c6/a7/1d/c6a71d1e0b407796e21ced5e9ca035da.jpg',
    'https://i.pinimg.com/originals/b3/35/8e/b3358eaf5e1972467a502edd2a367f40.jpg',
    'Background/Textures/1.jpg',
    'Background/Textures/2.jpg',
    'Background/Textures/3.jpg',
    'Background/Textures/4.jpg',
    'Background/Textures/5.jpg',
    'Background/Textures/6.jpg',
    'Background/Textures/7.jpg',
    '',
];

BgOptionTexture.forEach((element, index) => {
    element.style.backgroundImage = `url(${TextureLinks[index]})`;
});

BgOptionTexture.forEach((button, index) => {
    button.addEventListener('click', function() {
        ImgContainerMasked.style.backgroundImage = `url(${TextureLinks[index]})`;
    });
});