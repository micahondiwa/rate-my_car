const categories = document.querySelectorAll(".category");
const carList = document.getElementById("carList");

const carsData = {
  "Crossover & SUVs": [
    {
      image: "images/car2.png",
      name: "Car 1",
      price: 25000,
      rating: 4.5,
    },
    {
      image: "images/car2.png",
      name: "Car 2",
      price: 28000,
      rating: 4.2,
    },
    {
      image: "images/car2.png",
      name: "Car 3",
      price: 32000,
      rating: 4.7,
    },
    {
      image: "images/car2.png",
      name: "Car 4",
      price: 27000,
      rating: 4.4,
    },
  ],
  Hybrid: [
    {
      image: "images/car2.png",
      name: "Car 5",
      price: 30000,
      rating: 4.8,
    },
    {
      image: "images/car2.png",
      name: "Car 6",
      price: 32000,
      rating: 4.6,
    },
    {
      image: "images/car2.png",
      name: "Car 7",
      price: 35000,
      rating: 4.7,
    },
    {
      image: "images/car2.png",
      name: "Car 8",
      price: 29000,
      rating: 4.3,
    },
  ],
  Electric: [
    {
      image: "images/car2.png",
      name: "Car 9",
      price: 40000,
      rating: 4.9,
    },
    {
      image: "images/car2.png",
      name: "Car 10",
      price: 42000,
      rating: 4.8,
    },
    {
      image: "images/car2.png",
      name: "Car 11",
      price: 46000,
      rating: 4.7,
    },
    {
      image: "images/car2.png",
      name: "Car 12",
      price: 39000,
      rating: 4.4,
    },
  ],
  "Sport Cars": [
    {
      image: "images/car2.png",
      name: "Car 13",
      price: 55000,
      rating: 4.6,
    },
    {
      image: "images/car2.png",
      name: "Car 14",
      price: 58000,
      rating: 4.7,
    },
    {
      image: "images/car2.png",
      name: "Car 15",
      price: 62000,
      rating: 4.8,
    },
    {
      image: "images/car2.png",
      name: "Car 16",
      price: 57000,
      rating: 4.5,
    },
  ],
};

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const categoryName = category.textContent;
    displayCars(categoryName);
  });
});

function displayCars(categoryName) {
  carList.innerHTML = "";

  const cars = carsData[categoryName];

  cars.forEach((car) => {
    const carElement = document.createElement("div");
    carElement.classList.add("car");

    const carImage = document.createElement("img");
    carImage.src = car.image;
    carElement.appendChild(carImage);

    const carName = document.createElement("div");
    carName.classList.add("car-name");
    carName.textContent = car.name;
    carElement.appendChild(carName);

    const carPrice = document.createElement("div");
    carPrice.classList.add("car-price");
    carPrice.textContent = `Price: $${car.price}`;
    carElement.appendChild(carPrice);

    const carRating = document.createElement("div");
    carRating.classList.add("car-rating");
    carRating.textContent = `Rating: ${car.rating}/5`;
    carElement.appendChild(carRating);

    carList.appendChild(carElement);
  });
}

// Initially, display cars from the first category
displayCars(categories[0].textContent);
