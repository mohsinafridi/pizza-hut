const SHOP_DATA = {
  pizza: {
    id: 1,
    title: "Pizza",
    routeName: "pizza",
    items: [
      {
        id: 1,
        title: "Chicken Tikka BBQ",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg",
      },
      {
        id: 2,
        title: "Grilled Pizza",
        price: 17,
        imageUrl:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        title: "Onion Pizza",
        price: 11,
        imageUrl:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        title: "Pissy Pizza",
        price: 9,
        imageUrl:
          "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        title: "Roll Pizza",
        price: 10,
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/08/13/14/food-712667__340.jpg",
      },
      {
        id: 6,
        title: "Vege Pizza",
        price: 5,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/01/19/18/01/pizza-1150031__340.jpg",
      },
      {
        id: 7,
        title: "Italian Piza",
        price: 17,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/03/05/21/45/pizza-1239077__340.jpg",
      },
      {
        id: 8,
        title: "Tomato mushroom pizza",
        price: 17,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/09/22/19/48/tomato-2776824__340.jpg",
      },
      {
        id: 9,
        title: "Pizza Stone oven",
        price: 20,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720__340.jpg",
      },
    ],
  },
  burgers: {
    id: 2,
    title: "burgers",
    routeName: "burgers",
    items: [
      {
        id: 10,
        title: "Mamo burger",
        imageUrl: "https://cdn.pixabay.com/photo/2016/03/05/22/55/barbeque-1239407__340.jpg",
        price: 4,
      },
      {
        id: 11,
        title: "Bacon burger",
        imageUrl: "https://st2.depositphotos.com/3957801/5642/i/950/depositphotos_56423065-stock-photo-bacon-burger.jpg",
        price: 5,
      },
      {
        id: 12,
        title: "ham burger",
        imageUrl: "https://static3.depositphotos.com/1007955/233/i/950/depositphotos_2338049-stock-photo-hamburger.jpg",
        price: 3,
      },
      {
        id: 13,
        title: "Litos burger",
        imageUrl: "https://static3.depositphotos.com/1007955/233/i/950/depositphotos_2337965-stock-photo-hamburger.jpg",
        price: 7,
      },
      {
        id: 14,
        title: "Fish burger",
        imageUrl: "https://static3.depositphotos.com/1007955/233/i/950/depositphotos_2337965-stock-photo-hamburger.jpg",
        price: 8,
      },
      {
        id: 15,
        title: "Brin burger",
        imageUrl: "https://st2.depositphotos.com/4665275/10940/i/950/depositphotos_109406128-stock-photo-fast-food-set-big-hamburger.jpg",
        price: 12,
      },
      {
        id: 16,
        title: "gammurger",
        imageUrl: "https://st.depositphotos.com/1748549/2435/i/950/depositphotos_24354293-stock-photo-gammurger-and-potatoes.jpg",
        price: 20,
      },
      {
        id: 17,
        title: "Potato & burger",
        imageUrl: "https://st2.depositphotos.com/3559259/5858/i/950/depositphotos_58582999-stock-photo-potatoes-fries-with-tasty-fresh.jpg",
        price: 17
      },
    ],
  },
  salads: {
    id: 3,
    title: "Salads",
    routeName: "salads",
    items: [
      {
        id: 18,
        title: "Russian Salad",
        imageUrl: "https://media.istockphoto.com/photos/salad-olivier-picture-id180837538?b=1&k=6&m=180837538&s=170667a&w=0&h=Pw3gW27mEYal6-SBYZhVn7tW7E-rengHDTMiBvezTL0=",
        price: 125
      },
      {
        id: 19,
        title: "Cucumber Salad",
        imageUrl: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
        price: 125,
      },
      {
        id: 20,
        title: "Fruit Salad",
        imageUrl: "https://cdn.pixabay.com/photo/2017/05/11/19/44/fruit-2305192__340.jpg",
        price: 125,
      },
      {
        id: 21,
        title: "Fig & cheese Salad",
        imageUrl: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505__340.jpg",
        price: 125,
      },
      {
        id: 22,
        title: "Nato Salad",
        imageUrl: "https://cdn.pixabay.com/photo/2016/02/19/10/56/food-1209503__340.jpg",
        price: 125,
      },
    ],
  },
  snacks: {
    id: 4,
    title: "Snacks",
    routeName: "snacks",
    items: [
      {
        id: 23,
        title: "Donuts",
        imageUrl: "https://static8.depositphotos.com/1434772/1048/i/450/depositphotos_10485695-stock-photo-unhealthy-snacks.jpg",
        price: 10,
      },
      {
        id: 24,
        title: "Dry Donuts",
        imageUrl: "https://st2.depositphotos.com/1005573/6741/i/450/depositphotos_67417543-stock-photo-snack-food.jpg",
        price: 15,
      },
      {
        id: 25,
        title: "Nuts",
        imageUrl: "https://static8.depositphotos.com/1000604/984/i/450/depositphotos_9843401-stock-photo-dried-fruits-and-nuts.jpg",
        price: 25,
      }        
    ],
  },
  cakes: {
    id: 5,
    title: "Cakes",
    routeName: "cakes",
    items: [
      {
        id: 30,
        title: "Honey Cake",
        imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 35,
      },
      {
        id: 31,
        title: "Pasta Cake",
        imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 45,
      },
      {
        id: 32,
        title: "Cup Cake",
        imageUrl: "https://images.unsplash.com/photo-1514056052883-d017fddd0426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 27,
      },
      {
        id: 33,
        title: "Honey Cake",
        imageUrl: "https://images.unsplash.com/photo-1464347744102-11db6282f854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
    ],
  },
};

export default SHOP_DATA;
