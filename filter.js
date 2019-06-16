let array = [
    {name: 'ned', id: 1},
    {name: 'jon', id: 2},
    {name: 'arya', id: 3}
];

let filterById = (object) => {
    return object.id === 1;
}

let filteredObject = array.filter(filterById);

console.log(filteredObject);
