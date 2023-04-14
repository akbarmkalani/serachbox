 const hoverIcon = document.querySelectorAll('.hover_icon')
 const boxImg = document.querySelectorAll('.box-img')
const _li = document.querySelectorAll('._li>li')
const _star = document.querySelectorAll('.bi-star-fill')
 /* //const search =  document.getElementById('box-search')
 document.getElementById('box-search').style.opacity = '0' */
 





 
/* _li.forEach(li   => {
    li.addEventListener('click', () => { 
        txt = li.innerText
          console.log(txt);
        for(let i = 0; i<boxImg.length; i  ++ ){
            temp = boxImg[i].getAttribute('data-car')
            if(txt=='allt'){
             boxImg[i].style.display = 'flex'
            }else{
             if(txt == temp){
                 boxImg[i].style.display = 'flex'
               
                }else{
                 boxImg[i].style.display = 'flex'
                }
            }
         }
    });
  }); */
 


  function para(e){
     
    txt = e.innerText

    for (i = 0; i<boxImg.length; i++) {
        temp = boxImg[i].getAttribute('data-veg')
            console.log(temp);
        if (txt == 'allt') {
            boxImg[i].classList.add('show')
            boxImg[i].classList.remove('hid')

        } else {
            if (
                txt == temp
            ) {
                boxImg[i].classList.add('show')
                boxImg[i].classList.remove('hid')
            } else {
                boxImg[i].classList.add('hide')
                boxImg[i].classList.remove('show')
            }
        }
    }
  }






 
  document.getElementById('search').addEventListener('input', function(){
    let val = this.value 
     //console.log(val);

     if(val == '' || val == null){
        for(i=0; i<boxImg.length; i++){
            boxImg[i].style.display = 'none'
        }
     } else{

        for(let i=0; i<boxImg.length; i++){
            temp =   boxImg[i].getAttribute('data-data')
           
          temp = temp.substring(0, val.length)
         
   
           if(temp == val){
               boxImg[i].style.display= 'flex'
           }else{
               boxImg[i].style.display = 'none'
           }
        }
     }
     
 })
  

 for(let i = 0; i<boxImg.length; i++){
        
     boxImg[i].addEventListener("mouseover", ()=>{
        hoverIcon[i].style.transform = "translateX(0)"
        boxImg[i].style.border = "1px solid  green";
     })
     boxImg[i].addEventListener("mouseleave", ()=>{
        hoverIcon[i].style.transform = "translateX(100%)"
        boxImg[i].style.border = "0px solid  green";

     })
 }



 document.querySelector('.bi-search').addEventListener('mouseenter',()=> {
    document.getElementById('box-search').style.opacity = '1'
 } )
 document.querySelector('.bi-search').addEventListener('click',()=> {
    document.getElementById('box-search').style.opacity = '0'
 } )

 for(let i = 0; i<_star.length; i++){
           _star[i].addEventListener('click', function(){
            _star[i].classList.toggle('_star-bg')
           })
 }