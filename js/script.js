const settings = {
	async: true,
	crossDomain: true,
	url: 'https://airbnb13.p.rapidapi.com/search-location?location=Miami&checkin=2023-05-15&checkout=2023-05-19&adults=1&children=0&infants=0&pets=0&page=1&currency=USD',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59b5fc3c1cmshbece4f1ce6c8140p13b7dajsn83f03a4e6300',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	var arrays = response.results[0].name;

    console.log(arrays);
});
