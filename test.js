//var {MongoClient} = require('mongodb');
var main = require('./tutorial.js')
async function createListing(client, newListing){
  var newListing = {

  name: newListing.name,
  summary: newListing.summary,
  bedrooms: newListing.bedrooms,
  bathrooms: newListing.bathrooms
}

  var result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(result, newListing);
}

//main.main().catch(console.err);
exports.createListing = createListing;
