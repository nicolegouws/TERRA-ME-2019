
var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();

const plantProfile = require('./apis/plantProfile');
const myGarden = require('./apis/myGarden');

module.exports = { 
    'getPlantProfile': functions.https.onRequest(plantProfile.get),
    'searchPlantProfile': functions.https.onRequest(plantProfile.search),
    'getMyGarden': functions.https.onRequest(myGarden.get),
    'searchMyGarden': functions.https.onRequest(myGarden.search)
};

const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.doctor = functions.https.onRequest((request, response) => {

const doctor = [
     {"photo" : "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FPlantOverWater.png?1557248207199", 
     "cause" : "Overwatering is one of the more common causes of plant problem. Heavy and poorly drained soils are susceptible to becoming waterlogged. Roots growing in waterlogged soil may die because they cannot absorb the oxygen needed to function normally. The longer the air is cut off, the greater the root damage. The dying roots decay and cannot supply the plants with nutrients and water. Damage caused by over watering is frequently misdiagnosed as pest damage. However, pest damage rarely causes roots to concentrate near the surface of the soil. Plants stressed or injured by waterlogging can become abnormally susceptible to certain fungal pathogens.  Phytophthora spp. for example, cause root rot most often in soils that are periodically waterlogged." , 
     "treatment" : "Water only when necessary. Most plants will normally wilt in hot sun and may recover on their own later in the day as the sun moves. Make sure soil is not too wet based on the needs of particular plants before watering; you may end up by over watering." , 
     "recommendation" : "Additionally, add a water reminder for your plant with our WATER REMINDER CALENDER"},

     {"photo" : "urhttps://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FControl-Mealybugs-on-Indoor-Plants-Step-7-Version-2.jpg?1557248274147", 
     "cause" : "YIKES, looks like you have Aphids. They are tiny, and often nearly invisible to the naked eye. Various species can appear white, black, brown, gray, yellow, light green, or even pink! Some may have a waxy or woolly coating. They have pear-shaped bodies with long antennae; the nymphs look similar to adults. Most species have two short tubes (called cornicles) projecting from their hind end. Nymphs and adults feed on plant juices, attacking leaves, stems, buds, flowers, fruit, and/or roots, depending on the species. Most aphids especially like succulent or new growth. Some, such as the green peach aphid, feed on a variety of plants, while others, such as the rosy apple aphid, focus on one or just a few plant hosts." , 
     "treatment" : "Try spraying cold water on the leaves; sometimes all aphids need is a cool blast to dislodge them. Typically they are unable to find their way back to the same plant. If you have a large aphid invasion, dust plants with flour. It constipates the pests. Neem oil, insecticidal soaps, and horticultural oils are effective against aphids. Be sure to follow the application instructions provided on the packaging. You can often get rid of aphids by wiping or spraying the leaves of the plant with a mild solution of water and a few drops of dish soap. Soapy water should be reapplied every 2-3 days for 2 weeks. One variation of this soap-water mix includes cayenne pepper: Stir together 1 quart water, 1 tsp liquid dish soap, and a pinch of cayenne pepper. Do not dilute before spraying on plants. Diatomaceous earth (DE) is a non-toxic, organic material that will kill aphids. Do not apply DE when plants are in bloom; it is harmful to pollinators, too." , 
     "recommendation" : "Companion planting can be very helpful to keep aphids away from your plants in the first place. For example Garlic and chives repel aphids when planted near lettuce, peas, and rose bushes. Explore the PLANT SEARCH to see how to take care of those plants."},
     ]
    response.send(doctor)
});


exports.userProfile = functions.https.onRequest((request, response) => {
     const userProfile = [
          {"photo" : "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FEllipse.png?1557248700958", 
          "name" : "Emma Garcia", 
          "status" : "If I were a flower I would be a lavender" , 
          "userLocation" : "Saint Michael, Barbados",
          }]
         response.send(userProfile);
     });
     

exports.plantProfile = functions.https.onRequest((request, response) => {
 const plants=
 [
    {"plantID": "001",
  "name": "Daisy",
  "photo": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2Fdaisy1_janice-gill-461332-unsplash.jpg?1556903527908",
  "sun": "Full sun", 
  "sunIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FSun%20Icon%2C%20full.svg?1556904548318",
  "water": "Water every 3 days", 
  "waterIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FWatering%20Icon.svg?1556904933010",
  "location": "outdoors in temperate climates.", 
  "locationIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FGrow%20Icon.svg?1556904953308",
  "type": "In your zone, daisies are annuals and bloom only for a single season.",
  "companion": "Ideal companion plants, such as iris and sage, also love the same warm and dry conditions and provide contrast in color and shape.",
   "food": "Some daisies are edible. Try them in your salad.",
    "homeopathy": "People drink wild daisy tea to treat coughs, bronchitis, and inflammation."
 } ]

 [ {"plantID" : "002", 
 "name": "Aloe",
  "photo": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2Faloe_silvia-agrasar-227575-unsplash.jpg?1556903794562",
  "sun": "Partial sun",
  "sunIcon":"https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FSun%20Icon%2C%20partial.svg?1557150534935",
  "water": "Water every 3 weeks", 
  "waterIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FWatering%20Icon.svg?1556904933010",
  "location":"indoors in non-desert climates", 
  "locationIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FGrow%20Icon.svg?1556904953308",
  "type": "Aloe is an evergreen perennial succulent that does well as a houseplant.",
  "companion" :"Ideal companion plants include other succulents, such as cacti, that do well with dry conditions.",
  "food": "Do not eat the gel from the aloe plant. It can cause nausea.",
  "homeopathy": "Aloe vera has antimicrobial, pain-reducing, anti-oxidant, and anti-inflammatory properties. You can use the gel from the aloe leaves to relieve pain from scrapes and burns when applied topically."

  }]

 [{
"plantID" : "003",  
"name": "Basil",  
"photo": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2Fbasil_lavi-perchik-1055165-unsplash.jpg?1556903769562",
"sun": "Full sun",
"sunIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FSun%20Icon%2C%20full.svg?1556904548318",
  "water": "Water every 2 days", 
   "waterIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FWatering%20Icon.svg?1556904933010",
  "location": "outdoor in most climates",
   "locationIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FGrow%20Icon.svg?1556904953308",
   "type": "Basil is an annual herb that only lasts until the first frost and must be replanted every season.",
   "companion": "Ideal companion plants include asparagus, beans, beets, cabbage, chili and bell peppers, eggplant, marigolds, oregano, potatoes and tomatoes.",
  "food": "Basil is fragrant herb that tastes great in Italian dishes such as pesto! Basil can be used fresh in salads or sandwiches. Basil can be dried or frozen for use after harvest.",
   "homeopathy": "Basil is rich in essential oils that work like aspirin and ibuprofen in combating inflammation and have proved effective in treating rheumatoid arthritis and inflammatory bowel conditions."
 }]
   
[{ 
"plantID" : "004", 
"name": "Cactus",
"photo": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FCactus_Canva%20-%20Green%20Cactus%20on%20Beige%20Pot.jpg?1556903599716",
"sun":"Full sun",
"sunIcon":"https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FSun%20Icon%2C%20full.svg?1556904548318",
"water" : "Water every week when blooming. Water every 3 weeks when dormant.", 
"waterIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FWatering%20Icon.svg?1556904933010",
"location": "Indoors in non-desert climates.", 
"locationIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FGrow%20Icon.svg?1556904953308",
"type": "The cactus is a perennial succulent that does well as a houseplant.",
"companion": "Ideal companion plants include other succulents such as agave, yucca, and aloe.",
"food": "The pads of the nopal cactus are often eaten as a vegetable. They can can be cooked or eaten raw.",
"homeopathy": "The insides of a prickly cactus can be used for anti-aging remedies such as preventing and restoring moisture in skin."
}]


[{
"plantID" : "005",  
"name": "Daffodil",
"photo": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2Fdaffodil_beautiful-bloom-blooming-1021906.jpg?1556903721013",   
"sun" : "Full sun",
  "sunIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FSun%20Icon%2C%20full.svg?1556904548318",
  "water": "Water twice a week when blooming. Stop watering two weeks after they stopped blooming. The bulbs make their next year’s bloom after flowering.", 
  "waterIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FWatering%20Icon.svg?1556904933010",
  "location": "Outdoors in moderate climates",
  "locationIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FGrow%20Icon.svg?1556904953308",
  "type":"Daffodils are a hardy and easy perennial that grows in most regions of North America, except in the hottest, wettest areas, such as South Florida.",
  "companion": "Ideal companion plants include Violets, Primrose, and lilies.",
  "food": "Do not eat Daffodils. It can cause vomiting.",
  "homeopathy": "Despite serious safety concerns, people take daffodil for whooping cough, colds, and asthma. They also take it to cause vomiting. Some people apply a piece of cloth spread with a daffodil bulb preparation (plaster) to the skin to treat wounds, burns, strains, and joint pain."
   }]
  
  [{
  "plantID" : "006",  
"name": "Fern",
"photo": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2Ffern_Canva%20-%20Photography%20of%20Plants.jpg?1556903762853",
"sun": "Partial sun",
"sunIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FSun%20Icon%2C%20partial.svg?155715053493",
"water": "Water once a week.", 
"waterIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FWatering%20Icon.svg?1556904933010",
"location": "Indoors or Outdoors in moderate climates", 
"locationIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FGrow%20Icon.svg?1556904953308",
"type": "Ferns are an ancient family of plants—which lived BEFORE dinosaurs walked the earth. They are very popular and grow in central and eastern North America. Ferns require liquid water to reproduce, so you’ll often find them near streams and moist, forested areas.",
"companion": "When choosing companion plants, begin with favorites heuchera (pronounced HUE-kerr-uh) and hardy ferns. These two perennials enjoy the same light conditions as hosta – bright morning sun and cool afternoon shade.",
"food": "Many readers say it tastes like a cross between asparagus, baby spinach, and artichoke. It has a grassy, spring-y flavor with a touch of nuttiness. Fiddleheads are a very healthy green tonic, packed with antioxidants, omega acids, iron, and fiber.",
 "homeopathy": "Historically, ferns have been an important source of medicine for various ailments, especially for ancient tribes."
  }]
    
[{
  "plantID" : "007",  
"name":"Orchid",
   "photo": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2Forchid-blooming-blossom-459283.jpg?1556903742712",
 "sun": "Partial sun",
  "sunIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FSun%20Icon%2C%20partial.svg?1557150534935",
  "water": "Water once a week.", 
  "waterIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FWatering%20Icon.svg?1556904933010",
  "location": "Grows well indoors",
  "locationIcon": "https://cdn.glitch.com/aa28c2ef-2bff-4cec-8226-342e27098f01%2FGrow%20Icon.svg?1556904953308",
  
  "type": "The orchid family is one of the largest in the realm of flowering plants: More than 25,000 species grow naturally, on every continent except Antarctica. ",   
  "companion": "Foliage plants are usually the first addition to the area as these plants can sit in the corner and don’t compete with the pretentious orchid for flower power.",
  "food": "The blooms of all orchids are considered safe for consumption, but some species can irritate the stomach. The vanilla bean or pod is considered the world's only edible fruit-bearing orchid.",
  "homeopathy": "There is some evidence to show that the ancient Greeks used orchids for their medicinal properties as well as an aphrodisiac. Even to this day, orchids are used in several types of complementary or herbal remedies, particularly in traditional Chinese medicine."
    }]
    
    
response.send (plants);
});

