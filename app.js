const likePost = document.querySelector("#likePost");
const postClick= document.querySelector('#postClick');
const postLiked=document.querySelector('#scaleLike');
const likeCount=document.querySelector('#likeCount');
const bookMark=document.querySelector('#bookmark');
const addComment=document.querySelector('.addcmt');

let check = 0; // Move check variable outside the event listener




likePost.addEventListener('click', () => {
    if (check === 0) {
        likePost.style.color = "red";
       
        likePost.style.opacity='1';
         check = 1;
 
         likeCount.innerHTML='3485';






    } else {
        likePost.style.color = "black";
        likePost.style.opacity='0.3';

        check = 0; // Toggle check value
        likeCount.innerHTML='3484';


    }







});


postClick.addEventListener('dblclick',()=>{
    console.log('dbl clicked');

postLiked.style.transform='translate(-50%,-50%) scale(1)'

setTimeout(() => {
    
    postLiked.style.transform='translate(-50%,-50%) scale(0)'

}, 1000);

likePost.style.color = "#FF0000";
likePost.style.opacity='1';


likeCount.innerHTML='3485';

})

let flag=0;
bookMark.addEventListener('click',()=>{


if (flag==0) {
    bookMark.style.color='red';
bookMark.style.opacity='1';
flag=1;
} else {
    bookMark.style.color='black';
bookMark.style.opacity='0.3';
flag=0;

}


});



