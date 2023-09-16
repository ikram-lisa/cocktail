const getAllCocktails = async () => {
  // zoek naar api endpoint dat alle cocktails opvraagt
  //   fetch met .then
  //   fetch met async/await
  //   www.thecocktaildb.com/api/json/v1/1/search.php?f=a
  // fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.drinks.map((drink) => drink.strDrink)));
  // .catch((error) => console.log(error));
  const response = await fetch(
    "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=i"
  );
  const data = await response.json();
  console.log(data.drinks.map((drink) => drink.strDrink));
};
getAllCocktails();
