let count = 0;

const callServer = function ($event) {
    console.log('server was called ' + count++ + ' time with value: ' + $event)
}

const debounce = function (fn, debounceTime) {
    let timer;
    return function (data) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(data), debounceTime);
    }
}

const getData = debounce(callServer, 300);