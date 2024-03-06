import React from 'react'
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';
import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';

const MainRight = () => {

  // window.onload = function(e){
  //   const secondaryImages = document.querySelectionAll("secondary-img")
  //   const primaryImage = document.getElementById("primary-img")

  //   secondaryImages.forEach((image) => {
  //     image.addEventListener("click", function() {
  //       const backupSrc = primaryImage.src = image.src
  //       image.src = backupSrc
  //     })
  //   }
  //   )
  // }
  // function setImage(e) {
  //   var clicksource = e.target.id;

  //   switch (clicksource) {

  //     case "TNone":
  //           document.getElementById('MainImage').style.background = product1;
  //           break;
  //     case "TNtwo":
  //          document.getElementById('MainImage').style.background = product2;
  //          break;     
  //   }
    
  //   window.onload = function () {
  //     document.getElementById('TNone').addEventListener('click', function (e){
  //       setImage(e);
  //     }, false);

  //     document.getElementById('TNtwo').addEventListener('click', function (e){
  //       setImage(e);
  //     }, false);

  //   }

  // var MainImg = document.getElementById("MainImg");
  // var smallImg = document.getElementsById("smallimg");


  // smallImg[0].onclick = function(){
  //   MainImg.src = smallImg[0].src;
  // }
  // smallImg[1].onclick = function (){
  //   MainImg.src = smallImg[1].src;
  // }
  // smallImg[2].onclick = function (){
  //   MainImg.src = smallImg[2].src;
  // }
  // smallImg[3].onclick = function (){
  //   MainImg.src = smallImg[3].src;
  // }

  const frame1 = document.getElementById("MainImg1");
  const frame2 = document.getElementById("MainImg2");
  const frame3 = document.getElementById("MainImg3");
  const frame4 = document.getElementById("MainImg4");

  const display frame1 = () {
    frame1.className.add('show')
  }

  return (

    <section class="mainright">
      <div class="mainright-pro-image">
        <img src={product1} width="100%" id="MainImg1" alt="" />
        <img src={product2} width="100%" id="MainImg2" alt="" />
        <img src={product3} width="100%" id="MainImg3" alt="" />
        <img src={product4} width="100%" id="MainImg4" alt="" />
      </div>
      <div class="mainright-small-img">
        <div>
          <img src={thumb1} width="100%" id="smallimg1" className="mainright-small-img-thumb" alt="" />
        </div>
        <div>
          <img src={thumb2} width="100%" id="smallimg2" className="mainright-small-img-thumb" alt="" />
        </div>
        <div>
          <img src={thumb3} width="100%" id="smallimg3" className="mainright-small-img-thumb" alt="" />
        </div>
        <div>
          <img src={thumb4} width="100%" id="smallimg4" className="mainright-small-img-thumb" alt="" />
        </div>
      </div>
    </section>
//  <div class = 'row'>
//   <div class = 'col-sm-6'>
//       <div class = 'product-images' >
//         <div class='product-main-img'>
//           <img id='primary-img' src={product1} alt="" />
//         </div>
//         <div class='Product-galllery' >
//           <img id='secondary-img' src={thumb1} alt="" />
//           <img id='secondary-img' src={thumb2} alt="" />
//           <img id='secondary-img' src={thumb3} alt="" />
//           <img id='secondary-img' src={thumb4} alt="" />
//         </div>
//       </div>
//     </div>
//  </div>


/* <div id='MainContainer' >
  <div id='MainImage'></div>
  <div id='TNBodyContainer' >
    <img id='TNone' src={thumb1} alt="" />
    <img id='TNtwo' src={thumb2} alt="" />
    <img id='TNthree' src={thumb3} alt="" />
    <img id='TNfour' src={thumb4} alt="" />
  </div>
  </div> */
  
  )
}

export default MainRight