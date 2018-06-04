import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval'

//create observable that emits click events
let oBtn = document.getElementById('btn');
const source = fromEvent(oBtn, 'click');
//map to string with given event timestamp
const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
//output (example): 'Event time: 7276.390000000001'
const subscribe = example.subscribe(val => console.log('KKKKKKKKKKKKKKKk', val));


var e = document.createEvent("MouseEvents");
e.initEvent("click", true, true);　
oBtn.dispatchEvent(e);
console.log('subscribe', subscribe)




var observable1 = interval(400);
var observable2 = interval(300);

var subscription = observable1.subscribe(x => console.log('first: ' + x));
var childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {
// Unsubscribes BOTH subscription and childSubscription
subscription.unsubscribe();
}, 10000);