// How would you get the value of queries and params in the following examples?

Note: 
// Params:
// - is everything after the ':'
// - can be accessed by req.params

// Query:
// - is everything after the '?'
// - can be accessed by req.query


// PARAMS:
// 1: http://locahost/albums/fakealbum
app.get('/albums/:albumId', (req, res) => {
     //How would you get the value of albumId
    console.log( req.params.albumId)
})

// 2:http://locahost/students/Marta
app.get('/students/:name', (req, res) => {
     //How would you get the value of the students name
    console.log( req.params.name)
})

// 3: http://locahost/png/300/bwie123
app.get('/:imageType/:imageSize/:id', (req, res) => {
     //How would you get the image type, size and id 
    console.log( req.params.imageType)
    console.log(req.params.imageSize) 
    console.log(req.params.id) 
})


// QUERIES:
// 4: https://localhost/?category=coffee

app.get('/', (req, res) => {
     ///How would you get the value of category
    console.log(req.query.category)
})

// 5: https://localhost/marketplace?category=code-review&type=apps
app.get('/marketplace', (req, res) => {
    ///How would you get the value of category and type ?
    console.log( req.query.category) //cpode-review
    console.log( req.query.type) //app
})

// 6: https://localhost/search?city=barcelona&accomodation=hotel&transport=public

app.get('/search', (req, res) => {
     ///How would you get the value of the transport type ?
    console.log(req.query.transport) //public
})

// 7: https://localhost/products/toys?prodID=123
app.get('/products/:category', (req, res) => {
     ///How would you get the value of category and the prodID ?
    console.log(req.params.category) //toys
    console.log(req.query.prodID) //123
})