// The imageCollection is declared in the <head>, so the rest of the page including any scripts further down will know about it.
// There are 11 objects in imageCollection array. Each of these objects has 3 properties: The filename (minus file extension), a
// tooltip string to be displayed when the user hovers over the featured image, and a description to be shown in the descriptionText
// area. The index of each object corresponds to the thumbnail names.
// The contents are at position 0 to 10 not 1 to 11!

window.addEventListener("load", function() {

    // The imageCollection is declared in the <head>, so the rest of the page including any scripts further down will know about it.
    // There are 11 objects in imageCollection array. Each of these objects has 3 properties: The filename (minus file extension), a
    // tooltip string to be displayed when the user hovers over the featured image, and a description to be shown in the descriptionText
    // area. The index of each object corresponds to the thumbnail names.
    // The contents are at position 0 to 10 not 1 to 11!
    const imageCollection = [{
            file_name: "arctic_fox",
            tooltip: "An arctic fox",
            description: "The Arctic fox, also known as the white fox, polar fox, or snow fox, is a small fox native to the Arctic regions of the Northern Hemisphere and common throughout the Arctic tundra biome."
        },
        {
            file_name: "grazing_wombat",
            tooltip: "A Wombat munching on some grass",
            description: "Wombats are short-legged, muscular quadrupedal marsupials that are native to Australia. They are about in length with small, stubby tails. There are three extant species and they are all members of the family Vombatidae."
        },
        {
            file_name: "Himalayan_Pika",
            tooltip: "A Pika peeking out from a rock",
            description: "A pika is a small mammal, with short limbs, very round body, rounded ears, and no external tail. They resemble their close cousin the rabbit, but with shorter ears. They live in mountainous countries in Asia, with two species also in North America. Most pikas prefer rocky slopes."
        },
        {
            file_name: "lynx",
            tooltip: "A Lynx, not to be confused with the deodorant",
            description: "A lynx is any of the four species within the medium-sized wild cat genus Lynx. The name \"lynx\" originated in Middle English via Latin from the Greek word λύγξ, derived from the Indo-European root leuk- in reference to the luminescence of its reflective eyes."
        },
        {
            file_name: "Pallas_Cat",
            tooltip: "A Distracted Pallas cat",
            description: "The Pallas's cat (Otocolobus manul), also called manul, is a small wild cat with a broad but fragmented distribution in the grasslands and montane steppes of Central Asia. It is negatively affected by habitat degradation, prey base decline and hunting, and has therefore been classified as Near Threatened on the IUCN Red List since 2002."
        },
        {
            file_name: "Pallas_Cat2",
            tooltip: "A Pallas cat posing",
            description: "The Pallas's cat (Otocolobus manul), also called manul, is a small wild cat with a broad but fragmented distribution in the grasslands and montane steppes of Central Asia. It is negatively affected by habitat degradation, prey base decline and hunting, and has therefore been classified as Near Threatened on the IUCN Red List since 2002."
        },
        {
            file_name: "pika",
            tooltip: "A majestic Pika",
            description: "A pika is a small mammal, with short limbs, very round body, rounded ears, and no external tail. They resemble their close cousin the rabbit, but with shorter ears. They live in mountainous countries in Asia, with two species also in North America. Most pikas prefer rocky slopes."
        },
        {
            file_name: "quokka",
            tooltip: "Look at the cute Quokka",
            description: "The quokka, the only member of the genus Setonix, is a small macropod about the size of a domestic cat. Like other marsupials in the macropod family, the quokka is herbivorous and mainly nocturnal."
        },
        {
            file_name: "RedPanda",
            tooltip: "Look at its little face",
            description: "The red panda, also called the lesser panda, the red bear-cat, and the red cat-bear, is a mammal native to the eastern Himalayas and southwestern China. It has reddish-brown fur, a long, shaggy tail, and a waddling gait due to its shorter front legs; it is roughly the size of a domestic cat, though with a longer body and somewhat heavier."
        },
        {
            file_name: "wombat2",
            tooltip: "A Wombat",
            description: "Wombats are short-legged, muscular quadrupedal marsupials that are native to Australia. They are about in length with small, stubby tails. There are three extant species and they are all members of the family Vombatidae."
        },
        {
            file_name: "wombats",
            tooltip: "Two Wombats eating",
            description: "Wombats are short-legged, muscular quadrupedal marsupials that are native to Australia. They are about in length with small, stubby tails. There are three extant species and they are all members of the family Vombatidae."
        }
    ];

    var selectedImage = 0; // index of image selected, between 0 and length of array non-inclusive


    function changeImage(numImage) {
        // uses the variable numImage, which is passed in, to access the associated value from the "imageCollection" declared above

        // The object for the chosen image
        const chosenObject = imageCollection[numImage];

        const featuredImage = document.querySelector("#featuredImage");
        const descriptionText = document.querySelector("#descriptionText");

        featuredImage.src = "../images/animals/" + chosenObject.file_name + ".jpg"; // mustn't forget the file extension and the "images/animals/" folder prefix

        selectedImage = numImage; // keep track for next time of what image has been selected

        // TODO: Set the tooltip on the image

        // TODO: Set the description text
    }


    function loadRandomImage() {
        // Generate the random index into the array of images:
        // Math.random returns a random decimal point number between 0 and 1
        // We want a *whole* number (int) between 0 inclusive and the number of images in imageCollection exclusive
        // To get a whole number, use Math.floor() to round down.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        var numImage = Math.floor(Math.random() * (imageCollection.length)); // generates a number between 0 and upto but not including 11: [0, 11).

        // Now we know number of the random image we want to show, so change the featured image using this:
        changeImage(numImage);
    }
});