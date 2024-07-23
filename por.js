// let html=`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Portfolio-Ratish Kapoor</title>
//     <link rel="stylesheet" href="por.css">
// </head>
// <body>
//     <div class="container">
//         <nav class="sidebar sidebarGo">
//             <ul>
//                 <li><a href="Home.html">Home</li></a>
//                 <li><a href="about.html">About Me</li></a>
//                 <li><a href="cv.html">CV</li></a>
//                 <li><a href="pro.html">Projects</li></a>
//             </ul>
//         </nav>
//         <div class="main3" id="ee">
//             <div class="hamburger">
//                 <img src="ham.png" alt="" class="ham">
//             </div>
            
          
//             <h1 id="vv">SKILLS</h1> 
            
//             <div class="op">
//                 <label for="opp">Edu</label>
//                 <input type="radio" name="option" id="opp">
//                 <label for="opp2">Skill</label>
//                 <input type="radio" name="option" id="opp2">
                
//             </div>
//             <div class="skills1">
//                     <div class="ski"><img src="html.svg" alt="">HTML</div>
//                     <div class="ski"><img src="css.svg" alt="">&ensp;CSS</div>
//                     <div class="ski"><img src="js.svg" alt="">Javascript</div>
//                     <div class="ski"><img src="py.svg" alt="">Python</div>
//                     </div>
                    
//                     <div class="skills2">
//                     <div class="ski"><span id="oo">C</span></div>
//                     <div class="ski"><img src="c++.svg"  alt="">C++</div>
//                     <div class="ski">Express<img src="js.svg" alt=""></div>
//                     <div class="ski "><span id="dd">Web Development</span></div>
//                 </div>
            
            
                
            
//         </div>
//     </div>
//     <script src="por.js"></script>
// </body>
// </html>`
// let html2=`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Portfolio-Ratish Kapoor</title>
//     <link rel="stylesheet" href="por.css">
// </head>
// <body>
//     <div class="container">
//         <nav class="sidebar sidebarGo">
//             <ul>
//                 <li><a href="Home.html">Home</li></a>
//                 <li><a href="about.html">About Me</li></a>
//                 <li><a href="cv.html">CV</li></a>
//                 <li><a href="pro.html">Projects</li></a>
//             </ul>
//         </nav>
//         <div class="main3" id="ee">
//             <div class="hamburger">
//                 <img src="ham.png" alt="" class="ham">
//             </div>
            
//             <div class="ed">
//             <h1>Education</h1>
//             <div class="op">
//                 <label for="opp">Edu</label>
//                 <input type="radio" name="option" id="opp">
//                 <label for="opp2">Skill</label>
//                 <input type="radio" name="option" id="opp2">
                
//             </div>
//             <div class="edu">
  
//                 <div class="col">
//                    <img src="images.png" alt=""> 
//                    <div class="v">Vellore Institute of Technology</div>
//                    <div class="v">B.Tech: 2023-2027</div>
//                 </div>
//                 <div class="sc">
//                     <img src="nn.png" alt="">
//                     <div class="b">Delhi Public School</div>
//                     <div class="b">Till: 12th grade(2023)</div>
//                 </div>
//             </div>
              
            
            
            
                
            
//         </div>
//     </div>
//     <script src="por.js"></script>
// </body>
// </html>`



// const switch1 = document.getElementById("opp");
// const switch2 = document.getElementById("opp2");

// switch1.addEventListener("click", ()=>{
//     document.getElementById("ee").innerHTML = html2;
// })
// switch2.addEventListener("click", ()=>{
//     document.getElementById("ee").innerHTML = innerHTML;
// })

// const buttons= document.getElementById("switch-round");

// const search=document.getElementById("ee");
// function change(){
//     search.innerHTML=html;
// }


// buttons.addEventListener("click", change);

// document.querySelector(".cross").style.display='none';

document.querySelector(".ham").addEventListener("click",()=>{
        document.querySelector(".sidebar").classList.toggle("sidebarGo");
        document.querySelector(".hamburger").classList.toggle("hamm");
        document.querySelector(".hamm").classList.toggle("hammm");
        document.querySelector(".hamburger2").classList.toggle("hamm2");
        document.querySelector(".hamm2").classList.toggle("hammm");
        
        
        
        
        // if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        //         document.querySelector(".cross").style.display='none';
        //         document.querySelector(".nn").style.display='inline';
        // }
        // else{
        //         document.querySelector(".nn").style.display='none';
        //         document.querySelector(".cross").style.display='inline';
        // }
        // document.querySelector(".cross").addEventListener("click",()=>{
        //         document.querySelector(".sidebar").classList.toggle("sidebarGo");
        //         if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        //                 document.querySelector(".cross").style.display='none';
        //                 document.querySelector(".nn").style.display='inline';
                        
        //         }
        //         else{
        //                 document.querySelector(".nn").style.display='none';
        //                 document.querySelector(".cross").style.display='inline';

        //         }

        // })
        
})




