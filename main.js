const Images = [
  'pic1.jpg', 
  'pic2.jpg',
  'pic3.jpg', 
  'pic4.jpg', 
  'pic5.jpg',
  'pic6.jpg',
  'pic7.jpg',
  'pic8.jpg',
  'pic9.jpg',
  'pic10.jpg',
  'pic11.png',
  'pic12.jpg',
  'pic13.jpg',
  'pic14.jpg',
  'pic15.jpg', 
  'pic16.png', 
  'pic17.jpg',
  'pic18.jpg',
  'pic19.jpg',
  'pic20.jpg',
  'pic21.jpg',
  'pic22.jpg',
  'pic23.jpg',
  'pic24.jpg',
  'pic25.jpg',
  'pic26.jpg',
  'pic27.jpg',
  'pic28.jpg',
  'pic29.jpg',
  'pic30.jpg'
];
let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
 let randomNum = Math.floor(Math.random() * Images.length);
  document.querySelector('html').style.backgroundImage = `url(${Images[randomNum]})`;
});