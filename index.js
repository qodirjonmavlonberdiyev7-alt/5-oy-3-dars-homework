
use Bookstore


//createCollections

db.createCollection("books")
db.createCollection("authors")
db.createCollection("members")
db.createCollection("orders")


//add documents


db.books.insertOne({author: "Abdulla Qodiriy",bookName: "O'tgan kunlar", janr: "Roman", year: "1925-1926",nusxa:6})
db.books.insertOne({author: "Asqad Muxtor",bookName:"Chinor",janr:"Roman",year:"1973",nusxa:45})
db.books.insertOne({author: "Cho'lpon",bookName:"Kecha va kunduz",janr:" Tarixiy Roman",year:"1936",nusxa:25})
db.books.insertOne({author: "Odil Yoqubov",bookName:"Ulug‘bek xazinasi",janr:"Tarixiy Roman",year:"1973",nusxa:36})


db.authors.insertOne({name: "Cho'lpon",birthday:1897,janr: "She'riyat,nasr,roman"})
db.authors.insertOne({name: "Abdulla Qodiriy",birthday:1894,janr: "Roman,hikoya"})
db.authors.insertOne({name: "G'afur G'ulom",birthday:1903,janr: "She'riyat,hikoya"})
db.authors.insertOne({name: "Odil Yoqubov",birthday:1926,janr: "Roman,drama"})



