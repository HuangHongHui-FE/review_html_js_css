window.addEventListener("load", function() {

    fetchPerson();

    // handle Random
    fetchRandom();

    // This function asynchronously fetches our person from our /gimmeJSON endpoint.
    async function fetchPerson() {
        const response = await fetch("./gimmeJSON");
        const json = await response.json();
        displayPerson(json);
    }

    // This function displays the given person in our HTML.
    function displayPerson(person) {
        document.querySelector("#person-name").innerHTML = person.name;
        document.querySelector("#person-address").innerHTML = person.address;
        document.querySelector("#person-number").innerHTML = person.number;
        document.querySelector("#person-age").innerHTML = person.age;
    }



    // handle Random
    async function fetchRandom() {
        const response = await fetch("./randomNumber");
        const json = await response.json();
        displayRandom(json);
    }

    function displayRandom(json) {
        const Generate = document.getElementById('generate-random')
        const GenerateShow = document.getElementById('random-number')
        
        Generate.addEventListener('click', function(e){
            GenerateShow.innerText = json.number
        })
    }

    // add click
    
    // console.log(Generate)
    

});