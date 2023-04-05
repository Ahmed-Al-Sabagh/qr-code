// Start Code Typescript ... 
// ES6 Modules or TypeScript
// get the elements ... 
// img.
const imgQr = <HTMLImageElement> document.querySelector('img'),
// input text.
inputText = document.querySelector('input'),
// button. 
btnGenerate = document.querySelector('button'),

// get api Link ... 
api = 'https://api.qrserver.com/v1/',
// create qr-code ... 
apiCreate = 'create-qr-code/?size=150x150&data=';


// event ...
btnGenerate?.addEventListener('click',()=>{
    // check ... 
    if(inputText?.value !== '') {

        imgQr.src = `${api}${apiCreate}${inputText?.value}`;
        inputText.value = '';
    }else {

        alert('Please Fill Filed ... !');
        
    }
})



// 

// End   Code Typescript ... 

// ----------------------------------------------------------
// ----------------------------------------------------------
