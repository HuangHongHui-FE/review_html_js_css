window.addEventListener("load", function() {

    // TODO: your code for both tasks here
    const run = document.querySelector("#run")
    const rst = document.querySelector("#rst")

    const clock_face = document.querySelector("#clock_face")

    const date_face = document.querySelector("#date_face")
    
    const timer_face = document.querySelector("#timer_face")
    
    run.addEventListener("click", function(){
        if(run.innerText == "Start"){
            run.innerText = "Stop"
        }else{
            run.innerText = "Start"
        }


        setInterval(() => {

        })

        setTimeout(() => {
            
        })
    })

    rst.addEventListener("click", function(){

    })


    

});