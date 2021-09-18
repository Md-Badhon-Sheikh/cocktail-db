const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

// document.getElementById('search-result').style.display = 'none';

const searchCocktail = () => {
    const searchField = document.getElementById('search-field');
    //display spinner
    toggleSpinner('block');
    document.getElementById('search-result').style.display = 'none';
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.drinks));
}

const displaySearchResult = drinks => {
    // console.log(drinks);
    const searchResult = document.getElementById('search-result');

    searchResult.innerHTML = '';
    drinks.forEach(drink => {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col-md-4');

        div.innerHTML = `
            <div class="card h-100 p-2">
            <img src="${drink.strDrinkThumb}" class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center mt-2">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions.slice(0, 150)}</p>
            </div>
            <div class="card-footer mx-auto">
                <small class=" text-center">Drink id: ${drink.idDrink}</small>
            </div>
        </div>
        `
        searchResult.appendChild(div);
        document.getElementById('search-result').style.display = 'block';
    })
    toggleSpinner('none');

}