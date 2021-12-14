window.addEventListener("load", function() {

    // TODO: Your code here
    let page = document.querySelectorAll(".page")

    console.log(page)

    // 清除延迟效果
    for(let i = 0; i < page.length; i++){
        page[i].style.animationDelay = null;  // 动画属性名设置为none
        // page[i].className = 'pageAnimation'

        // page[i].addEventListener('click', function(e){
        //     console.log(e)
        //     e.target.style.animationDelay = 0 + 's'
        // })
    }





    
});