var customers = [
    { "name" : "Peter Jackson", "gender" : "male", "year_born" : 1961, "joined" : "1997", "num_hires" : 17000 },    
    { "name" : "Jane Campion", "gender" : "female", "year_born" : 1954, "joined" : "1980", "num_hires" : 30000 }, 
    { "name" : "Roger Donaldson", "gender" : "male", "year_born" : 1945, "joined" : "1980", "num_hires" : 12000 },  
    { "name" : "Temuera Morrison", "gender" : "male", "year_born" : 1960, "joined" : "1995", "num_hires" : 15500 },    
    { "name" : "Russell Crowe", "gender" : "male", "year_born" : 1964, "joined" : "1990", "num_hires" : 10000 },    
    { "name" : "Lucy Lawless", "gender" : "female", "year_born" : 1968, "joined" : "1995", "num_hires" : 5000 },            
    { "name" : "Michael Hurst", "gender" : "male", "year_born" : 1957, "joined" : "2000", "num_hires" : 15000 },        
    { "name" : "Andrew Niccol", "gender" : "male", "year_born" : 1964, "joined" : "1997", "num_hires" : 3500 },     
    { "name" : "Kiri Te Kanawa", "gender" : "female", "year_born" : 1944, "joined" : "1997", "num_hires" : 500 },       
    { "name" : "Lorde", "gender" : "female", "year_born" : 1996, "joined" : "2010", "num_hires" : 1000 },       
    { "name" : "Scribe", "gender" : "male", "year_born" : 1979, "joined" : "2000", "num_hires" : 5000 },
    { "name" : "Kimbra", "gender" : "female", "year_born" : 1990, "joined" : "2005", "num_hires" : 7000 },    
    { "name" : "Neil Finn", "gender" : "male", "year_born" : 1958, "joined" : "1985", "num_hires" : 6000 },     
    { "name" : "Anika Moa", "gender" : "female", "year_born" : 1980, "joined" : "2000", "num_hires" : 700 },    
    { "name" : "Bic Runga", "gender" : "female", "year_born" : 1976, "joined" : "1995", "num_hires" : 5000 },    
    { "name" : "Ernest Rutherford", "gender" : "male", "year_born" : 1871, "joined" : "1930", "num_hires" : 4200 },    
    { "name" : "Kate Sheppard", "gender" : "female", "year_born" : 1847, "joined" : "1930", "num_hires" : 1000 },    
    { "name" : "Apirana Turupa Ngata", "gender" : "male", "year_born" : 1874, "joined" : "1920", "num_hires" : 3500 },    
    { "name" : "Edmund Hillary", "gender" : "male", "year_born" : 1919, "joined" : "1955", "num_hires" : 10000 },    
    { "name" : "Katherine Mansfield", "gender" : "female", "year_born" : 1888, "joined" : "1920", "num_hires" : 2000 },    
    { "name" : "Margaret Mahy", "gender" : "female", "year_born" : 1936, "joined" : "1985", "num_hires" : 5000 },    
    { "name" : "John Key", "gender" : "male", "year_born" : 1961, "joined" : "1990", "num_hires" : 20000 },    
    { "name" : "Sonny Bill Williams", "gender" : "male", "year_born" : 1985, "joined" : "1995", "num_hires" : 15000 },    
    { "name" : "Dan Carter", "gender" : "male", "year_born" : 1982, "joined" : "1990", "num_hires" : 20000 },    
    { "name" : "Bernice Mene", "gender" : "female", "year_born" : 1975, "joined" : "1990", "num_hires" : 30000 }    
];
for(let i of customers){
    console.log('(' + '\'' + i.name +'\'' + ',' + '\'' +i.gender + '\'' + ',' + i.year_born + ',' +'\''+ i.joined +'\''+ ',' + i.num_hires + ')')
}