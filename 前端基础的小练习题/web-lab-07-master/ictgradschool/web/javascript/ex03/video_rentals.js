window.addEventListener("load", function() {
    // Note: the data within the 'customerdb.js' file will be within scope
    // for code in this file because it is loaded into the browser document
    // import "./customerdb.js"
    // Console log demo to show how to access fields within the JavaScript object
    console.log(`Customer #${2} details --> Name: ${customers[2].name}  Gender: ${customers[2].gender}`);

    // This array has the names of the header rows for the tables
    const headerNames = ["Name", "Gender", "Year born", "Year Joined", "Number of Rentals"];

    // These nested JavaScript objects can be used to store
    // the statistics you calculate for the table
    const summaryStatistics = {
        numMales: {
            name: "Number of males",
            value: 0
        },
        numFemales: {
            name: "Number of females",
            value: 0
        },
        thirty_or_younger: {
            name: "0-30 yrs",
            value: 0
        },
        under_65: {
            name: "< 65yrs",
            value: 0
        },
        on_or_over_65: {
            name: "65 <=",
            value: 0
        },
        num_gold: {
            name: "Gold members",
            value: 0
        },
        num_silver: {
            name: "Silver members",
            value: 0
        },
        num_bronze: {
            name: "Bronze members",
            value: 0
        }
    };

    /* TODO: Your code here */
    const details = document.getElementById("details")

    // thead
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")

    for(let i = 0; i < headerNames.length; i++){
        let th = document.createElement("th")
        th.innerText = headerNames[i]

        tr.appendChild(th)
        thead.appendChild(tr)
    }

    details.appendChild(thead)


    // tbody
    const tbody = document.createElement("tbody")

    for(let i = 0; i < customers.length; i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        td1.innerText = customers[i].name
        td2.innerText = customers[i].gender
        td3.innerText = customers[i].year_born
        td4.innerText = customers[i].joined
        td5.innerText = customers[i].num_hires

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tbody.appendChild(tr)
    }

    details.appendChild(tbody)

    // for(customers.length)...



    const statistics = document.getElementById("statistics")

    const thead1 = document.createElement("thead")
    const tr1 = document.createElement("tr")
    let th1 = document.createElement("th")
    th1.innerText = "summary Statistics"
    tr1.appendChild(th1)
    thead1.appendChild(tr1)
    statistics.appendChild(thead1)

    // 统计数据
    let year = new Date().getFullYear()  // 获取现在的年份
    
    // console.log(year)  // 2021
    for(let i = 0; i < customers.length; i++){
        if(customers[i].gender == 'male'){
            summaryStatistics.numMales.value = summaryStatistics.numMales.value + 1
        }
        if(customers[i].gender == 'female'){
            summaryStatistics.numFemales.value = summaryStatistics.numFemales.value + 1
        }
        if(year - customers[i].year_born >= 0 && year - customers[i].year_born <= 30){
            summaryStatistics.thirty_or_younger.value = summaryStatistics.thirty_or_younger.value + 1
        }
        if(year - customers[i].year_born >= 31 && year - customers[i].year_born <= 64){
            summaryStatistics.under_65.value = summaryStatistics.under_65.value + 1
        }
        if(year - customers[i].year_born > 65){
            summaryStatistics.on_or_over_65.value = summaryStatistics.on_or_over_65.value + 1
        }

        // 每周平均借视频次数
        let ava = customers[i].num_hires / ((year - customers[i].joined) * 364 / 7)

        if(ava > 4){
            summaryStatistics.num_gold.value = summaryStatistics.num_gold.value + 1
        }
        if(ava <= 4 && ava >= 1){
            summaryStatistics.num_silver.value = summaryStatistics.num_silver.value + 1
        }
        if(ava < 1){
            summaryStatistics.num_bronze.value = summaryStatistics.num_bronze.value + 1
        }
    }


    // 展示到页面上
    const tbody1 = document.createElement("tbody")

    // 取所有的keys
    const keys1 = Object.keys(summaryStatistics)
    
    // const values1 = Object.values(summaryStatistics)
    
    // 控制台输出
    // console.log(keys1)
    
    // console.log(values1)


    for(let i = 0; i < keys1.length; i++){
        console.log(keys1[i])
        let tr2 = document.createElement("tr")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        td2.innerText = summaryStatistics[keys1[i]].name
        td3.innerText = summaryStatistics[keys1[i]].value
        tr2.appendChild(td2)
        tr2.appendChild(td3)
        tbody1.appendChild(tr2)
    }

    statistics.appendChild(tbody1)
});