window.addEventListener("load",function(){
   createContent(); //Uncomment after you have finished writing createContent() function
})

const staffDetails = [
    {
        firstName: "Borris",
        lastName: "Jacobs",
        details: {birthYear:"1996", country:"Russia"},
        interests: ["rowing", "surfing","rugby"]
    },
    {
        firstName: "Sarah",
        lastName: "Cunningham",
        details: {birthYear:"1984", country:"United States of America"},
        interests: ["boxing", "programming","diving","rally racing"]
    },
    {
        firstName: "Andrew",
        lastName: "Masters",
        details: {birthYear:"1987", country:"Australia"},
        interests: ["cooking", "programming","photography","skiing","hiking"]
    },
    {
        firstName: "Alice",
        lastName: "Pickering",
        details: {birthYear:"1980", country:"New Zealand"},
        interests: ["cooking", "programming","photography","skiing","hiking"]
    }
];

//JavaScript code to display the content from the staffDetails JavaScript array within the right div as shown in the image

function createContent(){

    let contentDiv = document.querySelector("#right");

    //  TODO: create a loop through all JavaScript objects in the staffDetails array.
    for(let i =0; i<staffDetails.length; i++ ){
        let name_h3 = document.createElement('h3')
        let interests_h3 = document.createElement('h3')
        
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        let ul1 = document.createElement('ul')

        name_h3.innerText = staffDetails[i].firstName + staffDetails[i].lastName
        li1.innerText = "Birth Year:" + staffDetails[i].details.birthYear
        li2.innerText = "Country:" + staffDetails[i].details.country
        ul1.appendChild(li1)
        ul1.appendChild(li2)


        interests_h3.innerText = "Interests"
        let ol1 = document.createElement('ol')
        for(let j = 0; j<staffDetails[i].interests.length; j++){
            let li3 = document.createElement('li')
            li3.innerText = staffDetails[i].interests[j]
            ol1.appendChild(li3)
        }

        contentDiv.appendChild(name_h3)
        contentDiv.appendChild(ul1)
        contentDiv.appendChild(interests_h3)
        contentDiv.appendChild(ol1)
        
    }
    //  The name of the staff member and Interests: should be h3 elements.
    //  The birth year and country should be displayed with an unordered list
    //  and the interests should be displayed with an ordered list.
    //  Because interests is a nested array of unknown size you will need to use a nested loop
    //  (a loop within a loop) or similar to display the content.


}

