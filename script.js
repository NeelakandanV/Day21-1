let parEle = document.querySelector('.parent')

let API_key ='live_MBjhldn2xPJRHLfdXr7HkbjoS83IIbPM8QDtLqtJGKAod3kpRIDbjdF95It1b1pl'

let imageNum = document.querySelector('[placeholder*="max-limit:100"]')

let breedSel = document.querySelector('.breeds')

let imageTime = document.querySelector('.image-order')

let formData = document.querySelector('#form')

let PicNum=20;
let breedInfo =0;
let imageUpload ='RAND';

async function dog(){
    let dogFet = fetch(`https://api.thedogapi.com/v1/images/search?limit=${PicNum}&has_breeds=${breedInfo}&order=RAND&api_key=${API_key}`)
    let dogOut1 = await dogFet;
    let prom1 = dogOut1.json();
    let dogOut2 = await prom1
    console.log(dogOut2)

    for(let dogie of dogOut2){
        let dogPic = document.createElement('img')
        dogPic.setAttribute('src',dogie.url)
        parEle.append(dogPic)
        }
}
dog()

formData.addEventListener('submit',(e)=>{
    e.preventDefault()
    parEle.innerHTML ='';
    PicNum = imageNum.value;
    breedInfo = breedSel.value;
    imageUpload = imageTime.value;
    dog()
    imageNum.value='';
})


