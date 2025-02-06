window.onload = function () {
    var end = new Date('02/19/2025 10:1 AM');

    timer = setInterval(countdownTimer(end)
        , 100);
}
function countdownTimer(end) {
    var now = new Date();
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('txt_count_down').innerHTML = 'EXPIRED!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('txt_count_down').innerHTML = days + 'days ';
    document.getElementById('txt_count_down').innerHTML += hours + 'hrs ';
    document.getElementById('txt_count_down').innerHTML += minutes + 'mins ';
    document.getElementById('txt_count_down').innerHTML += seconds + 'secs';

}