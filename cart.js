let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Twix Caramel Chocolate Cookie Candy Bar, Share Size - 3.02 oz',
        image: 'twix.png',
        price: 2.12
    },

    {
        id: 2,
        name: 'Minute Maid Fruit Punch Real Fruit Juice Drink, 59 fl oz Carton',
        image: 'minutemaid.png',
        price: 1.68 
    },

    {
        id: 3,
        name: 'OREO Chocolate Sandwich Cookies Party Size, 25.5 oz',
        image: 'oreos.png',
        price: 4.98
    },

    {
        id: 4,
        name: 'SUNNYD Tangy Original Orange Juice Drink, 1 Gallon Bottle',
        image: 'sunnyd.png',
        price: 3.38 
    },

    {
        id: 5,
        name: '100 Grand, Crispy Milk Chocolate with Caramel, Candy Bar 1.5 oz',
        image: '100grand.png',
        price: 1.24

    },

    {
        id: 6,
        name: 'AriZona Green Tea with Ginseng and Honey, 128 fl oz',
        image: 'arizona.png',
        price: 3.48
    },


    {
        id: 7,
        name: 'Crunch Individually Wrapped Candy Bar, 2.7oz',
        image: 'crunch.png',
        price: 2.12
    },

    {
        id: 8,
        name: 'Fiji Water, 33.8 Fl. Oz.',
        image: 'fiji.png',
        price: 2.48 
    },

    {
        id: 9,
        name: 'CHIPS AHOY! Chocolate Chip Cookies, 13 oz',
        image: 'chipsahoy.png',
        price: 3.88
    },

    {
        id: 10,
        name: 'Ito En Oi Ocha Unsweetened Green Tea, 16.9 fl oz. (12-Pack)',
        image: 'ocha.png',
        price: 17.48 
    },

    {
        id: 11,
        name: 'Nutter Butter Family Size Peanut Butter Sandwich Cookies, 16 oz',
        image: 'nutterbutter.png',
        price: 4.68

    },

    {
        id: 12,
        name: 'Gold Peak Real Brewed Tea Unsweetened, 16.9 fl oz, 6 Bottles',
        image: 'goldpeak.png',
        price: 7.18
    },

    {
        id: 13,
        name: 'Nerds Rainbow Theater Box Candy, 5 oz',
        image: 'nerds.png',
        price: 1.24

    },

    {
        id: 14,
        name: 'POLAND SPRING Brand 100% Natural Spring Water, (Pack of 12)',
        image: 'poland.png',
        price: 3.68 
    },

    {
        id: 15,
        name: 'Jelly Belly BeanBoozled Jelly Beans Spinner, 3.5 Ounce (Pack of 1)',
        image: 'beanbooze.png',
        price: 14.95
    },

    {
        id: 16,
        name: 'Snapple Lemon Tea, 64 fl oz bottle',
        image: 'snapplelemon.png',
        price: 2.48 
    },

    {
        id: 17,
        name: 'ROLD GOLD Tiny Pretzel Twists, 16 Oz',
        image: 'pretz.png',
        price: 3.98

    },

    {
        id: 18,
        name: '4C Raspberry Iced Tea Mix, 66.1 oz, 1 Ct',
        image: '4c.png',
        price: 6.22 
    },

    {
        id: 19 ,
        name: 'Slim Jim Original Smoked Snack Sticks, 0.28 Oz, 14 Ct',
        image: 'slimjim.png',
        price: 3.98 
    },

    {
        id: 20 ,
        name: 'Wonderberry Cranberry Mors, 33.81 oz / 1 liter',
        image: 'wonderberry.png',
        price: 7.99
    },

    {
        id: 21 ,
        name: 'Smartfood White Cheddar Popcorn, 6.75 oz Bag',
        image: 'whitecheddar.png',
        price: 3.98
    },

    {
        id: 22 ,
        name: 'Carnation Breakfast Essentials Nutritional Drink, 12 - 8 fl oz Cartons',
        image: 'carnationbreakfast.png',
        price: 13.88
    },

    {
        id: 23 ,
        name: 'Rice Krispies Treats Marshmallow Cereal Bars, 0.75 oz, 16 Count',
        image: 'ricekrispy.png',
        price: 4.82

    },

    {
        id: 24 ,
         name: 'V8 Splash Fruit Medley Flavored Juice Blend, 64 FL OZ Bottle',
         image: 'v8splash.png',
         price: 8.99 
       
    },

    {
        id: 25 ,
        name: 'Snickers Full Size Chocolate Candy Bar - 1.86 oz Bar',
        image: 'snickers.png',
        price: 1.24 
    },

    {
        id: 26 ,
        name: 'Suja Organic Cold-Pressed Uber Greens, 46 oz.',
        image: 'suja.png',
        price: 9.28 
    },


    {
        id: 27 ,
        name: 'HERSHEY\'S Milk Chocolate Candy Bar Full Size, 1.55 oz Bar',
        image: 'hersheys.png',
        price: 1.24 
    },

    {
        id: 28 ,
        name: 'Oasis Summer Fruits',
        image: 'oasis.png',
        price: 3.39 
    },







    {
        id: 29,
        name: 'Trolli Sour Bursting Crawlers Gummy Candy, 4.25oz',
        image: 'trolli.png',
        price: 1.98 
    },

    {
        id: 30 ,
        name: 'Banana Flavored Milk Drink 6.8oz(200ml) 6 Packs',
        image: 'banana.png',
        price: 9.99 
    },






    {
        id: 31 ,
        name: 'Haribo Goldbears Original Gummy Bears Bag, 4 oz',
        image: 'haribo.png',
        price: 1.24 
    },

    {
        id: 32 ,
        name: 'LaCroix Sparkling Water, Lime 8Pk/12Oz',
        image: 'lacroix.png',
        price: 3.72 
    },



    {
        id: 33 ,
        name: 'SWEDISH FISH Soft & Chewy Candy, Easter Candy, 3.1 oz Box',
        image: 'swedishfish.png',
        price: 1.24
    },

    {
        id: 34 ,
        name: 'Coconut Jelly Juice Mango Flavor 10.82 fl.oz(320ml)',
        image: 'jellyjuice.png',
        price: 2.49 
    },


    {
        id: 35 ,
        name: 'RITZ Fresh Stacks Original Crackers, 8 Count, 11.8 oz',
        image: 'ritz.png',
        price: 2.98 
    },

    {
        id: 36 ,
        name: 'Robinsons No Added Sugar Orange Squash',
        image: 'robinson.png',
        price: 6.83
 
    },


    {
        id: 37 ,
        name: 'Pocky Chocolate Cream Covered Biscuit Sticks, 1.41 oz',
        image: 'pocky.png',
        price: 1.23
    },

    {
        id: 38  ,
        name: 'Folgers Classic Roast Ground Coffee, 40.3-Ounce',
        image: 'folgers.png',
        price: 12.98 
    },


    {
        id: 39 ,
        name: 'McCoys Flame Grilled Steak 6 Pack',
        image: 'mccoy.png',
        price: 13.50 
    },

    {
        id: 40 ,
        name: 'Liquid Death 100% Mountain Water, 16.9 Fl Oz, Quantity of 12 Count Cans',
        image: 'liquiddeath.png',
        price: 16.14 
    },



    {
        id: 41 ,
        name: 'SunChips Original Multigrain Snacks, 7 Ounce',
        image: 'sunchips.png',
        price: 3.50

    },

    {
        id: 42 ,
        name: 'Swiss Miss Classics Milk Chocolate Hot Cocoa Mix Envelopes, 30 Packets',
        image: 'swissmiss.png',
        price: 6.92 
    },


    {
        id: 43 ,
        name: 'Ferrero Rocher Premium Gourmet Milk Chocolate Hazelnut, Individually Wrapped Candy  42 Count',
        image: 'rocher.png',
        price: 21.00
    },

    {
        id: 44 ,
        name: 'DASANI Purified Enhanced Mineral Water, 16.9 fl oz, 24 Count Bottles',
        image: 'dasani.png',
        price: 20.25 
    },


    {
        id: 45 ,
        name: 'Little Debbie Swiss Rolls, 12 Cake Rolls (Twin Wrapped) - 4 Pack',
        image: 'swissrolls.png',
        price: 2.58

    },

    {
        id: 46 ,
        name: 'Nestle Milo Tin',
        image: 'milo.png',
        price: 4.98 
    },


    {
        id: 47 ,
        name: 'Entenmann\s Soft\'ees Assorted With Frosted Donuts, 12 count',
        image: 'softees.png',
        price: 4.98 
    },

    {
        id: 48 ,
        name: 'BODYARMOR Sports Drink, Fruit Punch, 16 fl oz , 1 count',
        image: 'BODYARMOR.png',
        price: 1.44 
    },


    {
        id: 49 ,
        name: 'belVita Cinnamon Brown Sugar Breakfast Biscuits, 5 Packs (4 Biscuits Per Pack)',
        image: 'belvita.png',
        price: 3.88
    },

     {
        id: 50 ,
        name: 'Little HUG Fruit Barrels, Original, Kids Drinks Variety Pack, 20 Count, 8 FL OZ Bottles',
        image: 'hugs.png',
        price: 3.98
 
    },

    {
        id: 51 ,
        name: 'Maltesers Maltesers Stand up Pouch, 5.8 Oz',
        image: 'maltesers.png',
        price: 12.99
    },

    {
        id: 52 ,
        name: 'Yoo-hoo Chocolate Drink, 11 fl oz cans, 12 pack',
        image: 'yoohoo.png',
        price: 6.38 
    },

    {
        id: 53 ,
        name: 'Kellogg\'s SCOOBY-DOO! Cinnamon Baked Graham Cracker Snacks, 12 oz, 12 Count',
        image: 'scoobydoo.png',
        price: 6.52
    },

    {
        id: 54 ,
        name: 'Kool Aid Jammers Variety Pack with Tropical Punch, Grape & Cherry Kids Drink 0% Juice Box Pouches, 30 Ct Box, 6 fl oz Pouches',
        image: 'koolaidvariety.png',
        price: 6.98 
    },

    {
        id: 55 ,
        name: 'Cheetos Flavored Snacks, Crunchy Cheese, 1.13 Ounce (Pack of 12)',
        image: 'cheetos.png',
        price: 3.98

    },

    {
        id: 56 ,
        name: 'Capri Sun Variety Pack with Fruit Punch, Strawberry Kiwi & Pacific Cooler Juice Box Pouches, 30 ct Box, 6 fl oz Pouches',
        image: 'caprisun.png',
        price: 8.98
 
    },

    {
        id: 57 ,
        name: 'Meiji Takenoko no Sato Biscuits - Chocolate',
        image: 'takenoko.png',
        price: 4.65 
    },

    {
        id: 58 ,
        name: 'Ocean Spray Cranberry Juice Cocktail - 64 fl oz Bottle',
        image: 'oceanspray.png',
        price: 3.24 
    },



    {
        id: 59 ,
        name: 'ROLO Chocolate Caramel Creamy and Rich,Candy Bulk Party Bag, 35.6 oz',
        image: 'rolo.png',
        price: 11.98 
    }, 

    {
        id: 60 ,
        name: '(12 Cans) Reign Total Body Fuel Energy Drink, Melon Mania, 16 fl oz',
        image: 'reign.png',
        price: 39.24 
    },

    {
        id: 61,
        name: 'Pringles Original Potato Crisps Chips 5.2 oz, Can',
        image: 'pringles.png',
        price: 2.24
    },

    {
        id: 62 ,
        name: 'Naked Juice, Strawberry Banana, 15.2 fl oz',
        image: 'naked.png',
        price: 3.34 
    },


    {
        id: 63,
        name: 'Doritos Nacho Cheese Flavored Tortilla Chips, Party Size, 14.5 oz Bag',
        image: 'doritos.png',
        price: 5.38
    },



    {
        id: 64 ,
        name: 'Martinelli\'s Gold Medal Apple Juice with 100% Pure Apple Juice, 128 fl oz, 1 Gallon',
        image: 'martinelli.png',
        price: 10.37
 
    },



    {
        id: 65,
        name: 'Lay\'s Classic Potato Chips, 8 oz Bag',
        image: 'lays.png',
        price: 3.68
    },

    {
        id: 66 ,
        name: 'Gatorade Lemon Lime Thirst Quencher Sports Drink, 12 oz, 12 Pack Bottles',
        image: 'gatorade.png',
        price: 7.54 
    },





    {
        id: 67,
        name: 'Airheads Candy Variety Gravity Feed Box, Individually Wrapped Assorted Fruit Bar, 0.55 oz, 60 Count',
        image: 'airheads.png',
        price: 7.98
    },

    {
        id: 68 ,
        name: 'JUMEX, NECTAR STRWBRY BANANA, 11.3 OZ',
        image: 'jumex.png',
        price: 0.68 
    },



    {
        id: 69,
        name: 'Quaker Chewy Granola Bars, Chocolate Chip, 36 Pack',
        image: 'quaker.png',
        price: 8.27
    },

    {
        id: 70 ,
        name: 'Perrier Carbonated Mineral Water, 11.2 Fl Oz, 8 Count Bottles',
        image: 'perrier.png',
        price: 8.27 
    },




    {
        id: 71,
        name: 'Fruit by the Foot, Fruit Snacks, Variety Pack, 9 oz',
        image: 'fruitby.png',
        price: 5.68
    },

     {
        id: 72 ,
        name: 'Rico Bubble Milk Tea Brown Sugar Drink',
        image: 'bubbletea.png',
        price: 1.00 
    },



    {
        id: 73,
        name: 'Paqui One Chip Challenge',
        image: 'onechip.png',
        price: 22.99
    },

    {
         id: 74 ,
        name: 'Mountain Dew Code Red Cherry Flavored Soda Pop, 12 fl oz, 12 Pack Cans',
        image: 'codered.png',
        price: 19.75 
     },

    {
        id: 75,
        name: '0.8 oz WELCH\'S Fruit Snacks Mixed Fruit 90 count',
        image: 'welchs.png',
        price: 23.84
    },

    {
        id: 76 ,
        name: 'smartwater vapor distilled premium water, 1.5 liter, bottle',
        image: 'smartwater.png',
        price: 2.38 
    },

    {
        id: 77 ,
        name: 'Cheez-It Original Baked Cheese Crackers, 21 oz',
        image: 'cheezit.png',
        price: 5.78
    },

    {
        id: 78 ,
        name: 'Hawaiian Punch Fruit Juicy Red Juice Drink, 1 Gallon Bottle',
        image: 'hawaiian.png',
        price: 2.78 
    },

    {
        id: 79 ,
       name: 'Kit Kat, Chocolate Candy Bar, 1.5oz',
        image: 'kitkat.png',
        price: 1.24
    },

    {
        id: 80 ,
        name: 'Hi-C Orange Lavaburst Fruit Juice, 6 fl oz, 8 Juice Boxes',
        image: 'hic.png',
        price: 2.18 
    },

    {
        id: 81 ,
        name: 'Orville Redenbacher\'s Movie Theater Butter Microwave Popcorn, 3.29 Oz, 12 Ct',
        image: 'orville.png',
        price: 6.36 
    }

];

	
	let listCards  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <a href='javascript:;' onclick="addToCard(${key})">Add To Card</a>`;
        list.appendChild(newDiv);
    })
}


initApp();
function addToCard(key){
    if(listCards[key] == null){
       
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>\$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}




function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}