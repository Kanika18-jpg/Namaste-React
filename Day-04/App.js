import React from "react";
import ReactDOM from "react-dom/client";
// import React from "react";

const Header = () =>{
  return(
    <div className="header">
    <div>
      <img className = "logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="food"/>
    </div>
    <div className="logo-text">
      <h1>FoodMood</h1>
      </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Menu</li>
        <li>Order</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </div>

    </div>
  );
}

const ResturantCard=(props)=>{
  // we can also destructure the resdata object directly in the function parameters. as follows:
  // const ResturantCard=({resdata})=>{
  
  // The props object contains all the properties passed to the component.
  // In this case, it contains the resdata property, which is an object representing a restaurant card.
  // Destructuring the props object to extract the resdata property
  // This allows us to access the data of the restaurant card directly without having to use props.resdata.data.
  const {resdata} = props;
  const{name, image, cuisine, deliveryTime, rating} = resdata?.data;

  return(
    <div className="res-card">
      <img className ="food-img" src={image} />
      <h3>{name}</h3>
      <h4>Cuisines: {cuisine}</h4>
      <h4>ETA: {deliveryTime}</h4>
      <h4>Rating: {rating}</h4>
    </div>
  );
}

// The best way to create a restaurant card is to use a JSON object. This will allow you to easily add, remove, or modify restaurant cards without having to change the code.
// You can also use a JSON object to store the data for each restaurant card, such as the name, image, cuisine, delivery time, and rating. This will make it easy to create a restaurant card using a loop or a map function.
const resObj= [
  {
      "type": "restaurantCard",
      "data": {
        "name": "The Burger Joint",
        "image": "https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg",
        "cuisine": ["American", "Fast Food"],
        "food": ["Classic Cheeseburger", "Fries", "Milkshake"],
        "price": "$10 - $20",
        "deliveryTime": "25-35 mins",
        "rating": 4.7
      }
    }
    ,
    {
      "type": "restaurantCard",
      "data": {
        "name": "Sushi Craft",
        "image": "https://images.pexels.com/photos/670705/pexels-photo-670705.jpeg",
        "cuisine": ["Japanese", "Sushi"],
        "food": ["Salmon Nigiri", "California Roll", "Miso Soup"],
        "price": "$15 - $30",
        "deliveryTime": "30-40 mins",
        "rating": 4.0
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Vegan Delight",
        "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        "cuisine": ["Vegan", "Healthy"],
        "food": ["Quinoa Salad", "Tofu Stir Fry", "Green Smoothie"],
        "price": "$12 - $22",
        "deliveryTime": "20-30 mins",
        "rating": 4.4
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Seafood Shack",
        "image": "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg",
        "cuisine": ["Seafood"],
        "food": ["Grilled Salmon", "Shrimp Cocktail", "Clam Chowder"],
        "price": "$18 - $35",
        "deliveryTime": "35-45 mins",
        "rating": 4.6
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Grill Master",
        "image": "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg",
        "cuisine": ["BBQ", "American"],
        "food": ["BBQ Ribs", "Grilled Chicken", "Cornbread"],
        "price": "$15 - $28",
        "deliveryTime": "30-40 mins",
        "rating": 4.3
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Pasta Palace",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "cuisine": ["Italian"],
        "food": ["Spaghetti Bolognese", "Fettuccine Alfredo", "Tiramisu"],
        "price": "$14 - $26",
        "deliveryTime": "25-35 mins",
        "rating": 4.5
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Taco Fiesta",
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        "cuisine": ["Mexican"],
        "food": ["Beef Tacos", "Guacamole", "Churros"],
        "price": "$10 - $18",
        "deliveryTime": "20-30 mins",
        "rating": 4.2
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Curry Corner",
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        "cuisine": ["Indian"],
        "food": ["Butter Chicken", "Naan", "Biryani"],
        "price": "$12 - $22",
        "deliveryTime": "30-40 mins",
        "rating": 4.6
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Dragon Wok",
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        "cuisine": ["Chinese"],
        "food": ["Kung Pao Chicken", "Spring Rolls", "Fried Rice"],
        "price": "$11 - $20",
        "deliveryTime": "25-35 mins",
        "rating": 4.3
      }
    },
    {
      "type": "restaurantCard",
      "data": {
        "name": "Mediterranean Bites",
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        "cuisine": ["Mediterranean"],
        "food": ["Falafel", "Hummus", "Pita Bread"],
        "price": "$13 - $23",
        "deliveryTime": "20-30 mins",
        "rating": 4.4
      }
    }
  ]

const Body=()=>{
  return(
    <div className="body">
      <div className="search-bar">Search
      </div>
      <div className="res-container">
        {resObj.map((resObj)=><ResturantCard key={resObj?.data?.name} resdata={resObj}/>)}
      </div>
    </div>
  );
}
const MyApp = () =>{
  return(
    <div className="MyApp">
      <Header/>
      <Body/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MyApp/>);