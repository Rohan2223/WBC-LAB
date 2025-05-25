let data=[];
const fetchmovies=async () => {
let response= await fetch("https://api.jikan.moe/v4/anime");
data= await response.json();

data=data.data;
makeDiv(data);
} ;
fetchmovies();

 const MovieSearch=()=>{
    let search=document.getElementById("search");
    let searchValue=search.value.toLowerCase();
    const moviesearch=data.filter((movie)=>
    movie.title.toLowerCase().includes(searchValue));


 makeDiv(moviesearch);
};

const sortasc=()=>{
    let arr=data;
    arr.sort((a,b)=>a.score-b.score);
    makeDiv(arr);
}
const sortdsc=()=>{
    let arr=data;
    arr.sort((a,b)=>b.score-a.score);
    makeDiv(arr);
}


const makeDiv=(data) =>{
    const moviesdiv=document.getElementById("movies");
console.log(data);
moviesdiv.innerHTML="";
const movieslist=data
.map((movie) => {
    return `
    <div class="movies">
    <img 
    src="${movie.images.jpg.image_url}" alt="No_image"/>
    <h2 id="tit">${movie.title}</h2>
    <h2 >Score:${movie.score}</h2>
    </div>`
    ;}).join("");
moviesdiv.innerHTML=movieslist;
};