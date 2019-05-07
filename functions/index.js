const functions = require('firebase-functions');

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
     