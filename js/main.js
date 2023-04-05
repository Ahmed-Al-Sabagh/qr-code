// Start Code Typescript ... 
// ES6 Modules or TypeScript
// get the elements ... 
// img.
var imgQr = document.querySelector('img'), 
// input text.
inputText = document.querySelector('input'), 
// button. 
btnGenerate = document.querySelector('button'), 
// get api Link ... 
api = 'https://api.qrserver.com/v1/', 
// create qr-code ... 
apiCreate = 'create-qr-code/?size=150x150&data=';
// event ...
btnGenerate === null || btnGenerate === void 0 ? void 0 : btnGenerate.addEventListener('click', function () {
    // check ... 
    if ((inputText === null || inputText === void 0 ? void 0 : inputText.value) !== '') {
        imgQr.src = "".concat(api).concat(apiCreate).concat(inputText === null || inputText === void 0 ? void 0 : inputText.value);
        inputText.value = '';
    }
    else {
        alert('Please Fill Filed ... !');
    }
});
// 
// End   Code Typescript ... 
// ----------------------------------------------------------
// ----------------------------------------------------------
