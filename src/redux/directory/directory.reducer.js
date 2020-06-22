const INITIAL_STATE = {
  sections: [
    {
      title: "Pizza",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg",
      id: 1,
      linkUrl: "shop/pizza",
    },
    {
      title: "Burgers",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 2,
      linkUrl: "shop/burgers",
    },
    {
      title: "salads",
      imageUrl:
        "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 3,
      linkUrl: "shop/salads",
    },
    {
      title: "snacks",
      imageUrl:
        "https://images.unsplash.com/photo-1575549595260-623d27ba5e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 4,
      linkUrl: "shop/snacks",
    },
    {
      title: "cakes",
      imageUrl:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 5,
      linkUrl: "shop/cakes",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
