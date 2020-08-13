const express = require('express');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let movies = [{
    
    
            id: "1",
            title: "inception",
            director: "chistopher nolan",
            release_date: "2010-08-23"
        },
        {
            id: "2",
            title: "Dil bechara",
            director: "sushanth",
            release_date: "2020-08-23"
        }
    
];
// get the movie lists
app.get('/movie',(req,res) => {
    res.json(movies);
});
   //adding the movie details 
app.post("/movie",(req,res) => {
    const movie=req.body;

    console.log(movie);
    movies.push(movie);
    res.send("movie is added to the list!");
});
//updating the movie details
app.patch("/movie",(req,res) => {
    if(req.movie_id && req.movie_id!=req.movie){
    delete req.movie_id
	req.collection.updateById(req.params.id)
        console.log(movie);
    }
    res.send("movie is updated to the list!");
});

//search for the movie details
app.get("/movie/:id",(req,res)=>{
        const id=req.acceptsCharsets.id

        for (let movie of movies){
            if(movie.id === id) {
                res.json(movie)
                return
            }
        }
        res.status(404).send("movie not found")
    });
//removing movie details
app.delete("/movie/:id",(req,res) => {
    const id = req.params.id;

    movies=movies.filter(movie => {
        if(movie.id !== id) {
            return true;

        }
        return false;
    })
    res.send("movie is deleted");
});
// set the server to the listen at port
app.listen(port,() => console.log("server listening at port ${3000}"));



