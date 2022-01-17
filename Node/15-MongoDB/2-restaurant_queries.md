* 1.1 - db.restaurants.find()
* 1.2 - db.restaurants.find({cuisine:"asian"})
* 1.3 - db.restaurants.find({kosher:true})
* 1.4 - db.restaurants.find({"address.city" : "Holon"})
* 1.5 - db.restaurants.findOne({"name" : "Chili's"}, {address:1, _id:0})
* 1.6 - db.restaurants.findOne({"name" : "Chili's"}, {"address.coordinates":1, _id:0})
* 1.7 - db.restaurants.find().sort( { name: 1 } )
* 1.8 - db.restaurants.find().sort( { "address.city": 1 } ).pretty()
* 1.9 - db.restaurants.update({name : "coconut jam"}, {$set: {name: "coconut jelly"}})
* 1.10 - db.restaurants.update({name : "coconut jelly"}, {$push: {reviews: {date: new Date("2022-01-17"), score: 3}}})
* 1.11 - db.restaurants.updateMany({}, {$set: {kosher: true}})
* 1.12 - db.restaurants.deleteOne({name : "coconut jelly"})
* 1.13 - db.restaurants.deleteMany({})


* 2.1 - db.restaurants.find().forEach(function(e){print(`${e.name}`)})
* 2.2 - db.restaurants.find().forEach(function(e){print(`${e.address.city}`)})
* 2.3 - db.restaurants.find().forEach(function(e){print(`${e.address.coordinates}`)})


* 3.1 - db.restaurants.find({name: {$regex: /^c/}})
* 3.2 - db.restaurants.find().count()
* 3.3 - db.restaurants.find({"reviews.date": ISODate("2019-01-01T00:00:00Z")})


* 4.1 - db.restaurants.aggregate([{$unwind:"$reviews"},{$group:{_id:"$name", avg:{$avg:"$reviews.score"}}}])
* 4.2 - db.restaurants.aggregate([{$match: {_id: ObjectId("61e5677f260c68d0b7cd45e8")}},{$unwind:"$reviews"},{$group:{_id:"$name", avg:{$avg:"$reviews.score"}}}])
