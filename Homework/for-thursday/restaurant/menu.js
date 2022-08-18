/*
Create A Restaurant Site -[HTML,CSS,JS]
Create the Following Objects:
MENU [Brunch, Lunch, Dinner,Desert, Beverages Entrees,Appetizers]
--> Each menu item must have MINIMUM 6items with at least 4attributes/properties..
*/

// menu items and descriptions taken from various recipe websites
const Menu = {
  brunch: {
    bananaPancakes: {
      title: "Banana Pancakes",
      description: "These banana pancakes are soft, well-spiced, and full of delicious banana flavor. Made with a blend of whole wheat pastry flour and oat flour, so they’re healthier than your average pancake, and they also happen to be vegan!",
      calories: 2500,
      hot: true,
      price: 14.99,
      options: [
        "strawberries",
        "powered sugar",
        "coconut syrup"
      ]
    },
    eggsBenedict: {
      title: "Caprese Eggs Benedict with Hollandaise",
      description: "Hollandaise over soft poached eggs, sliced tomato, and fresh basil",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    tomatoFrittata: {
      title: "Burst Tomato Frittata with Fontina and Basil Oil",
      description: "This flavorful, sunning frittata can handle that task. Baked until golden-brown perfection with gooey fontina cheese and burst tomatoes—this basil-oil drizzled breakfast dish is a morning masterpiece.",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    strawberryBread: {
      title: "Fresh Strawberry Bread",
      description: "Nothing but powdered sugar, melted butter, strawberries, lemon juice, and milk.",
      calories: 1700,
      hot: false,
      price: 12.99,
      options: ['whipped cream', 'extra fork']
    },
    tomatoFrittata: {
      title: "English Muffin Salmon Sliders",
      description: "An English muffin has never looked so good! Salmon, herbs, eggs, and a perfectly toasted base with those pockets for holding in flavor - you couldn't ask for a better addition.",
      calories: 900,
      hot: true,
      price: 18.99,
      options: []
    },
    cheesyGrits: {
      title: "Three Cheese Creamy Grits",
      description: "Derrick never fails to impress. This recipe for grits is far from ordinary.",
      calories: 1100,
      hot: true,
      price: 9.99,
      options: []
    }
    
  },
  lunch: {
    bananaPancakes: {
      title: "",
      description: "These banana pancakes are soft, well-spiced, and full of delicious banana flavor. Made with a blend of whole wheat pastry flour and oat flour, so they’re healthier than your average pancake, and they also happen to be vegan!",
      calories: 2500,
      hot: true,
      price: 14.99,
      options: [
        "strawberries",
        "powered sugar",
        "coconut syrup"
      ]
    },
    eggsBenedict: {
      title: "Caprese Eggs Benedict with Hollandaise",
      description: "Hollandaise over soft poached eggs, sliced tomato, and fresh basil",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    tomatoFrittata: {
      title: "Burst Tomato Frittata with Fontina and Basil Oil",
      description: "This flavorful, sunning frittata can handle that task. Baked until golden-brown perfection with gooey fontina cheese and burst tomatoes—this basil-oil drizzled breakfast dish is a morning masterpiece.",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    strawberryBread: {
      title: "Fresh Strawberry Bread",
      description: "Nothing but powdered sugar, melted butter, strawberries, lemon juice, and milk.",
      calories: 1700,
      hot: false,
      price: 12.99,
      options: ['whipped cream', 'extra fork']
    },
    tomatoFrittata: {
      title: "English Muffin Salmon Sliders",
      description: "An English muffin has never looked so good! Salmon, herbs, eggs, and a perfectly toasted base with those pockets for holding in flavor - you couldn't ask for a better addition.",
      calories: 900,
      hot: true,
      price: 18.99,
      options: []
    },
    cheesyGrits: {
      title: "Three Cheese Creamy Grits",
      description: "Derrick never fails to impress. This recipe for grits is far from ordinary.",
      calories: 1100,
      hot: true,
      price: 9.99,
      options: []
    }
  },
  dinner: {
    bananaPancakes: {
      title: "",
      description: "These banana pancakes are soft, well-spiced, and full of delicious banana flavor. Made with a blend of whole wheat pastry flour and oat flour, so they’re healthier than your average pancake, and they also happen to be vegan!",
      calories: 2500,
      hot: true,
      price: 14.99,
      options: [
        "strawberries",
        "powered sugar",
        "coconut syrup"
      ]
    },
    eggsBenedict: {
      title: "Caprese Eggs Benedict with Hollandaise",
      description: "Hollandaise over soft poached eggs, sliced tomato, and fresh basil",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    tomatoFrittata: {
      title: "Burst Tomato Frittata with Fontina and Basil Oil",
      description: "This flavorful, sunning frittata can handle that task. Baked until golden-brown perfection with gooey fontina cheese and burst tomatoes—this basil-oil drizzled breakfast dish is a morning masterpiece.",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    strawberryBread: {
      title: "Fresh Strawberry Bread",
      description: "Nothing but powdered sugar, melted butter, strawberries, lemon juice, and milk.",
      calories: 1700,
      hot: false,
      price: 12.99,
      options: ['whipped cream', 'extra fork']
    },
    tomatoFrittata: {
      title: "English Muffin Salmon Sliders",
      description: "An English muffin has never looked so good! Salmon, herbs, eggs, and a perfectly toasted base with those pockets for holding in flavor - you couldn't ask for a better addition.",
      calories: 900,
      hot: true,
      price: 18.99,
      options: []
    },
    cheesyGrits: {
      title: "Three Cheese Creamy Grits",
      description: "Derrick never fails to impress. This recipe for grits is far from ordinary.",
      calories: 1100,
      hot: true,
      price: 9.99,
      options: []
    }
  },
  beverages: {
    bananaPancakes: {
      title: "",
      description: "These banana pancakes are soft, well-spiced, and full of delicious banana flavor. Made with a blend of whole wheat pastry flour and oat flour, so they’re healthier than your average pancake, and they also happen to be vegan!",
      calories: 2500,
      hot: true,
      price: 14.99,
      options: [
        "strawberries",
        "powered sugar",
        "coconut syrup"
      ]
    },
    eggsBenedict: {
      title: "Caprese Eggs Benedict with Hollandaise",
      description: "Hollandaise over soft poached eggs, sliced tomato, and fresh basil",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    tomatoFrittata: {
      title: "Burst Tomato Frittata with Fontina and Basil Oil",
      description: "This flavorful, sunning frittata can handle that task. Baked until golden-brown perfection with gooey fontina cheese and burst tomatoes—this basil-oil drizzled breakfast dish is a morning masterpiece.",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    strawberryBread: {
      title: "Fresh Strawberry Bread",
      description: "Nothing but powdered sugar, melted butter, strawberries, lemon juice, and milk.",
      calories: 1700,
      hot: false,
      price: 12.99,
      options: ['whipped cream', 'extra fork']
    },
    tomatoFrittata: {
      title: "English Muffin Salmon Sliders",
      description: "An English muffin has never looked so good! Salmon, herbs, eggs, and a perfectly toasted base with those pockets for holding in flavor - you couldn't ask for a better addition.",
      calories: 900,
      hot: true,
      price: 18.99,
      options: []
    },
    cheesyGrits: {
      title: "Three Cheese Creamy Grits",
      description: "Derrick never fails to impress. This recipe for grits is far from ordinary.",
      calories: 1100,
      hot: true,
      price: 9.99,
      options: []
    }
  },
  entrees: {
    bananaPancakes: {
      title: "",
      description: "These banana pancakes are soft, well-spiced, and full of delicious banana flavor. Made with a blend of whole wheat pastry flour and oat flour, so they’re healthier than your average pancake, and they also happen to be vegan!",
      calories: 2500,
      hot: true,
      price: 14.99,
      options: [
        "strawberries",
        "powered sugar",
        "coconut syrup"
      ]
    },
    eggsBenedict: {
      title: "Caprese Eggs Benedict with Hollandaise",
      description: "Hollandaise over soft poached eggs, sliced tomato, and fresh basil",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    tomatoFrittata: {
      title: "Burst Tomato Frittata with Fontina and Basil Oil",
      description: "This flavorful, sunning frittata can handle that task. Baked until golden-brown perfection with gooey fontina cheese and burst tomatoes—this basil-oil drizzled breakfast dish is a morning masterpiece.",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    strawberryBread: {
      title: "Fresh Strawberry Bread",
      description: "Nothing but powdered sugar, melted butter, strawberries, lemon juice, and milk.",
      calories: 1700,
      hot: false,
      price: 12.99,
      options: ['whipped cream', 'extra fork']
    },
    tomatoFrittata: {
      title: "English Muffin Salmon Sliders",
      description: "An English muffin has never looked so good! Salmon, herbs, eggs, and a perfectly toasted base with those pockets for holding in flavor - you couldn't ask for a better addition.",
      calories: 900,
      hot: true,
      price: 18.99,
      options: []
    },
    cheesyGrits: {
      title: "Three Cheese Creamy Grits",
      description: "Derrick never fails to impress. This recipe for grits is far from ordinary.",
      calories: 1100,
      hot: true,
      price: 9.99,
      options: []
    }
  },
  appetizers: {
    bananaPancakes: {
      title: "",
      description: "These banana pancakes are soft, well-spiced, and full of delicious banana flavor. Made with a blend of whole wheat pastry flour and oat flour, so they’re healthier than your average pancake, and they also happen to be vegan!",
      calories: 2500,
      hot: true,
      price: 14.99,
      options: [
        "strawberries",
        "powered sugar",
        "coconut syrup"
      ]
    },
    eggsBenedict: {
      title: "Caprese Eggs Benedict with Hollandaise",
      description: "Hollandaise over soft poached eggs, sliced tomato, and fresh basil",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    tomatoFrittata: {
      title: "Burst Tomato Frittata with Fontina and Basil Oil",
      description: "This flavorful, sunning frittata can handle that task. Baked until golden-brown perfection with gooey fontina cheese and burst tomatoes—this basil-oil drizzled breakfast dish is a morning masterpiece.",
      calories: 2100,
      hot: true,
      price: 18.99,
      options: []
    },
    strawberryBread: {
      title: "Fresh Strawberry Bread",
      description: "Nothing but powdered sugar, melted butter, strawberries, lemon juice, and milk.",
      calories: 1700,
      hot: false,
      price: 12.99,
      options: ['whipped cream', 'extra fork']
    },
    tomatoFrittata: {
      title: "English Muffin Salmon Sliders",
      description: "An English muffin has never looked so good! Salmon, herbs, eggs, and a perfectly toasted base with those pockets for holding in flavor - you couldn't ask for a better addition.",
      calories: 900,
      hot: true,
      price: 18.99,
      options: []
    },
    cheesyGrits: {
      title: "Three Cheese Creamy Grits",
      description: "Derrick never fails to impress. This recipe for grits is far from ordinary.",
      calories: 1100,
      hot: true,
      price: 9.99,
      options: []
    }
  }

}

export default Menu;