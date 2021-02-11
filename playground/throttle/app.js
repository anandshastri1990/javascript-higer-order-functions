let callBackendApi = function (value) {
    console.log(value);
}

const throttle = function (fn, delay) {
    let timerExpired = true;
    return function (value) {
        if (timerExpired === true) {
            timerExpired = false;
            fn(value);
            setTimeout(() => {
                timerExpired = true;
            }, delay)
        }
    }
}

let getData = throttle(callBackendApi, 1000);