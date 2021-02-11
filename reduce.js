let array = [
    { name: 'ned', id: 1, chancesOfSurvival: 0},
    { name: 'jon', id: 2, chancesOfSurvival: 100},
    { name: 'arya', id: 3, chancesOfSurvival: 70}
];

let totalSurvival = array.reduce( (sum, object) => {
    return sum + object.chancesOfSurvival;
}, 0);

console.log(totalSurvival);