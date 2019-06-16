let array = [
    { name: 'ned', id: 1 },
    { name: 'jon', id: 2 },
    { name: 'arya', id: 3 }
];

let output = array.map((object) => {
    return "Name is " + object.name  + " and id is " + object.id;
});

console.log(output);