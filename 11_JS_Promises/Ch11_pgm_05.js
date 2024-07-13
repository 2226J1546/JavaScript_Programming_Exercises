const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// Fetch data from the REST Countries API
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    // Iterate through each country
    data.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${country.population.toLocaleString('en-US')}`);
      console.log(`Area: ${country.area} square km`);
      console.log('---'); // Separator between countries
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.
