window.addEventListener("load", function() {

    // TODO: Your code here

    // 背景
    let input1 = document.querySelector("#radio-background1")
    let input2 = document.querySelector("#radio-background2")
    let input3 = document.querySelector("#radio-background3")
    let input4 = document.querySelector("#radio-background4")
    let input5 = document.querySelector("#radio-background5")
    let input6 = document.querySelector("#radio-background6")

    let background = document.getElementById("background")

    input1.addEventListener("click", function(){
        background.src = "../images/dolphins/background1.jpg"
    })

    input2.addEventListener("click", function(){
        background.src = "../images/dolphins/background2.jpg"
    })
    input3.addEventListener("click", function(){
        background.src = "../images/dolphins/background3.jpg"
    })
    input4.addEventListener("click", function(){
        background.src = "../images/dolphins/background4.jpg"
    })
    input5.addEventListener("click", function(){
        background.src = "../images/dolphins/background5.jpg"
    })
    input6.addEventListener("click", function(){
        background.src = "../images/dolphins/background6.gif"
    })




    // 海豚多选框
    
    // 模板字符串
    // let i = 0
    // 'ashfuash' + i + 'fua'

    // `ashfuash${i}fua`
    // 'ashfuashifua'

    for(let i = 1; i < 9; i++){
        let img_input = document.getElementById("check-dolphin" + i.toString())
        let img = document.getElementById("dolphin" + i.toString())

        // 刚开始如果没被选中隐藏
        if(!img_input.checked){
            img.style.display = "none"
        }
        // 为每个多选框添加点击事件
        img_input.addEventListener("click", function(){
            // 属性为true这让他显示
            if(img_input.checked){
                img.style.display = "block"
            }else{
                img.style.display = "none"
            }
        })
    }




    // 滑块
    
    let vertical = document.getElementById('vertical-control')
    let horizontal = document.getElementById('horizontal-control')
    let size = document.getElementById('size-control')

    const img1 = document.getElementById("dolphin1")
    const img2 = document.getElementById("dolphin2")
    const img3 = document.getElementById("dolphin3")
    const img4 = document.getElementById("dolphin4")
    const img5 = document.getElementById("dolphin5")
    const img6 = document.getElementById("dolphin6")
    const img7 = document.getElementById("dolphin7")
    const img8 = document.getElementById("dolphin8")
    let index = img1


    img1.addEventListener("click", function(){ index = img1;})
    img2.addEventListener("click", function(){ index = img2;})
    img3.addEventListener("click", function(){ index = img3;})
    img4.addEventListener("click", function(){ index = img4;})
    img5.addEventListener("click", function(){ index = img5;})
    img6.addEventListener("click", function(){ index = img6;})
    img7.addEventListener("click", function(){ index = img7;})
    img8.addEventListener("click", function(){ index = img8;})

    // 上下移动
    vertical.addEventListener("change", function(e){
        // console.log(e.target.value)
        // transform: translateY(45px);
        index.style.transform = `translateY(${e.target.value + 'px'})`
    })

    // 左右移动
    horizontal.addEventListener("change", function(e){
        index.style.transform = `translateX(${e.target.value + 'px'})`
    })

    // 大小控制
    size.addEventListener("change", function(e){
        index.style.transform = `scale(${e.target.value / 10})`
    })
});