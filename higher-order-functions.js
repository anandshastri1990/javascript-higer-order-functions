let data = "ned rickon dead, ned bran king, ned arya assassin, ned sansa queen, ned jon 404" +
    ", cersei tommen dead, cersei myrcella dead, cersei joffrey dead";


let structuredData = data.split(', ')
    .map((line) => { return line.split(' ') })
    .reduce((item, line) => {
        item[line[0]] = item[line[0]] || [];
        item[line[0]].push( {
            child: line[1],
            status: line[2]
        })
        return item;
    }, {});


console.log(JSON.stringify(structuredData, null, 2));