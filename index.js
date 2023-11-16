const freelancers = [
  { name: "Luigi", price: 25, occupation: "gardener" },
  { name: "Mike", price: 51, occupation: "programmer" },
  { name: "Joseph", price: 43, occupation: "teacher" },
];

const namesContainer = document.querySelector("#name");
const occupationContainer = document.querySelector("#occupation");
const priceContainer = document.querySelector("#price");
const headingText = document.querySelector("#heading-text");

const createListItems = (dataList, property) => {
  const ul = document.createElement("ul");

  for (let i = 0; i < dataList.length; i++) {
    const li = document.createElement("li");
    li.textContent = dataList[i][property];
    ul.appendChild(li);
  }

  return ul;
};

const averagePrice = (avePrice) => {
  let pricesTotal = 0;

  for (let i = 0; i < avePrice.length; i++) {
    pricesTotal += avePrice[i].price;
  }

  return Math.floor(pricesTotal / avePrice.length);
};

const displayData = (freelancers) => {
  namesContainer.appendChild(createListItems(freelancers, "name"));
  occupationContainer.appendChild(createListItems(freelancers, "occupation"));
  priceContainer.appendChild(createListItems(freelancers, "price"));

  const avg = averagePrice(freelancers);
  headingText.textContent = `The average price for freelancers is ${avg}`;
};

displayData(freelancers);

// const freelancers = [
//   { name: "Luigi", price: 25, occupation: "gardener" },
//   { name: "Mike", price: 51, occupation: "programmer" },
//   { name: "Joseph", price: 43, occupation: "teacher" },
// ];
// // creating containers
// const namesContainer = document.querySelector("#name");
// const occupationContainer = document.querySelector("#occupation");
// const priceContainer = document.querySelector("#price");
// const headingText = document.querySelect("#heading-text");

// // creating elements for names
// const createNames = (nameList) => {
//   const namesUl = document.createElement("ul");

//   const namesLi = document.createElement("li");
//   namesLi.textContent = nameList.name;

//   namesUl.append(namesLi);

//   return namesUl;
// };

// // create list of names
// const createNameList = (allNames) => {
//   let names = [];

//   for (let i = 0; i < allNames.length; i++) {
//     const currentName = allNames[i];

//     names.push(createNames(currentName));
//   }
//   return names;
// };

// // creating elements for occupation

// const createOccupation = (occupationList) => {
//   const occupationUl = document.createElement("ul");

//   const occupationLi = document.createElement("li");
//   occupationLi.textContent = occupationList.occupation;

//   occupationUl.append(occupationLi);

//   return occupationUl;
// };

// // create list of names
// const createOccupationList = (allOccupation) => {
//   let occupation = [];

//   for (let i = 0; i < allOccupation.length; i++) {
//     const currentOccupation = allOccupation[i];

//     occupation.push(createOccupation(currentOccupation));
//   }
//   return occupation;
// };

// // creating list of prices

// const createPrices = (pricesList) => {
//   const pricesUl = document.createElement("ul");

//   const pricesLi = document.createElement("li");
//   pricesLi.textContent = pricesList.price;

//   pricesUl.append(pricesLi);

//   return pricesUl;
// };

// // create list of names
// const createPriceList = (allPrices) => {
//   let prices = [];

//   for (let i = 0; i < allPrices.length; i++) {
//     const currentPrice = allPrices[i];

//     prices.push(createPrices(currentPrice));
//   }
//   return prices;
// };

// // creatin average price..

// const averagePrice = (avePrice) => {
//   let prices = 0;

//   for (let i = 0; i < avePrice.length; i++) {
//     const currentPrice = avePrice[i].price;
//     console.log(currentPrice);
//     prices += currentPrice;
//   }
//   return Math.floor(prices / avePrice.length);
// };

// const averageText = (freelancers) => {
//   const avg = averagePrice(freelancers);
//   headingText.textContent = `The average price for freelancers is ${avg}`;

//   return averageP;
// };

// namesContainer.append(...createNameList(freelancers));

// occupationContainer.append(...createOccupationList(freelancers));

// priceContainer.append(...createPriceList(freelancers));

// headingText.append(averageText(freelancers));
