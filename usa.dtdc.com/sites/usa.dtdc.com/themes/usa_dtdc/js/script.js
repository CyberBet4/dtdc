setTimeout(function(){
    document.getElementById('history').classList.remove('d-none');
    document.getElementById('loader').classList.add('d-none');
    console.log('got here');
}, 1000)    

document.getElementById('history').style.display = 'visible';

let emptyState = '<p style="opacity: .5;">Not Received <br> Yet</p>';
// document.getElementById('stageOne').innerHTML = emptyState;
document.getElementById('stageTwo').innerHTML = emptyState;
document.getElementById('stageThree').innerHTML = emptyState;
document.getElementById('stageFour').innerHTML = emptyState;

// make each stage transparent
document.getElementById('stageFour').parentElement.style.opacity = 0;
document.getElementById('stageThree').parentElement.style.opacity = 0;
document.getElementById('stageTwo').parentElement.style.opacity = 0;
// document.getElementById('stageOne').parentElement.style.opacity = 0.15;

// get date time
var dateone = new Date(document.getElementById('dateone').value);
var datetwo = new Date(document.getElementById('datetwo').value);
var datethree = new Date(document.getElementById('datethree').value);
var datefour = new Date(document.getElementById('datefour').value);
console.log(dateone);

if(datefour != 'Invalid Date'){
    console.log('not invalid');
}else{
    console.log('invalid');
}

let codeDate = document.getElementById('codeDate').value
var deliveryStatus = document.getElementById('status');
let timestamp = new Date(codeDate);
let counts = document.getElementById('counts');

console.log(counts.value)

// array for months
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// array for 24 hour time
let hours = [0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

// console.log(timestamp.getDate(), months[timestamp.getMonth()], timestamp.getFullYear());
// console.log(timestamp.getHours(), ':', timestamp.getMinutes());

let neg = hours.indexOf(3);

console.log(typeof(neg));


var hold = document.getElementById('hold');

var date = new Date();

// get timestamped date
let dateValue = new Date(document.getElementById('codeDate').value);

console.log(dateValue.getUTCFullYear());
console.log(timestamp.getHours());

console.log('hello there');


if(dateone != 'Invalid Date'){
    // set stage one time and date
    deliveryStatus.innerHTML = '<p>RECEIVED AT HUB</p>';
    document.getElementById('stageOne').innerHTML = '<p class="text-right mb-0">' + months[dateone.getMonth()] + ' ' + dateone.getDate() + ',' +  ' ' + dateone.getFullYear() + '</p>'
    + '<p class="text-right text-right">' + String(hours.indexOf(dateone.getHours()) > 0 ? hours.indexOf(dateone.getHours()) : dateone.getHours()).padStart(2, '0') + ':' + String(dateone.getMinutes()).padStart(2, '0') + (hours.indexOf(dateone.getHours()) < 0 ? 'am' : 'pm' ) + '</p>';
    document.getElementById('stageOne').parentElement.style.opacity = 1;
}


if(datetwo != 'Invalid Date'){
    // set stage two time and date
    deliveryStatus.innerHTML = '<p style="text-transform: uppercase;">Out for delivery </p>';
    document.getElementById('stageTwo').innerHTML = '<p class="text-right mb-0">' + months[datetwo.getMonth()] + ' ' + datetwo.getDate() + ',' +  ' ' + datetwo.getFullYear() + '</p>'
    + '<p class="text-right text-right">' + String(hours.indexOf(datetwo.getHours()) > 0 ? hours.indexOf(datetwo.getHours()) : datetwo.getHours()).padStart(2, '0') + ':' + String(datetwo.getMinutes()).padStart(2, '0') + (hours.indexOf(datetwo.getHours()) < 0 ? 'am' : 'pm' ) + '</p>';
    document.getElementById('stageTwo').parentElement.style.opacity = 1;
}

if(datethree != 'Invalid Date'){
    // set stage three time and date
    deliveryStatus.innerHTML = '<p style="text-transform: uppercase;">In Transit </p>';
    document.getElementById('stageThree').innerHTML = '<p class="text-right mb-0">' + months[datethree.getMonth()] + ' ' + datethree.getDate() + ',' +  ' ' + datethree.getFullYear() + '</p>'
    + '<p class="text-right text-right">' + String(hours.indexOf(datethree.getHours()) > 0 ? hours.indexOf(datethree.getHours()) : datethree.getHours()).padStart(2, '0') + ':' + String(datethree.getMinutes()).padStart(2, '0') + (hours.indexOf(datethree.getHours()) < 0 ? 'am' : 'pm' ) + '</p>';
    document.getElementById('stageThree').parentElement.style.opacity = 1;
}
if(datefour != 'Invalid Date'){
    // set stage four time and date
    deliveryStatus.innerHTML = '<p style="text-transform: uppercase;">Shipment On Hold</p>';
    document.getElementById('stageFour').innerHTML = '<p class="text-right mb-0">' + months[datefour.getMonth()] + ' ' + datefour.getDate() + ',' +  ' ' + datefour.getFullYear() + '</p>'
    + '<p class="text-right text-right">' + String(hours.indexOf(datefour.getHours()) > 0 ? hours.indexOf(datefour.getHours()) : datefour.getHours()).padStart(2, '0') + ':' + String(datefour.getMinutes()).padStart(2, '0')+ (hours.indexOf(datefour.getHours()) < 0 ? 'am' : 'pm' ) + '</p>';
    hold.innerHTML = '<p class="text-right mb-0">Shipment on Hold <span class="badge">DTDC USA</span> </p>'
    document.getElementById('hold-logo').innerHTML = '<svg width="24" height="24" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '<circle cx="43" cy="43" r="43" fill="#FF521B"/>'+
    '<path d="M43.4999 61.4166C53.395 61.4166 61.4166 53.395 61.4166 43.4999C61.4166 33.6048 53.395 25.5833 43.4999 25.5833C33.6048 25.5833 25.5833 33.6048 25.5833 43.4999C25.5833 53.395 33.6048 61.4166 43.4999 61.4166Z" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<path d="M30.833 30.833L56.1672 56.1672" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'+
    '</svg>'+'<div class="vertical-line ml-2 mr-3" >'+ '<p style="opacity: 0;">line here</p> </div>    ';
    
    document.getElementById('stageFour').parentElement.style.opacity = 1;
}


