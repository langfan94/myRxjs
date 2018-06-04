'use strict';

var _fromEvent = require('rxjs/observable/fromEvent');

var _operators = require('rxjs/operators');

var _interval = require('rxjs/observable/interval');

//create observable that emits click events
var oBtn = document.getElementById('btn');
var source = (0, _fromEvent.fromEvent)(oBtn, 'click');
//map to string with given event timestamp
var example = source.pipe((0, _operators.map)(function (event) {
  return 'Event time: ' + event.timeStamp;
}));
//output (example): 'Event time: 7276.390000000001'
var subscribe = example.subscribe(function (val) {
  return console.log('KKKKKKKKKKKKKKKk', val);
});

var e = document.createEvent("MouseEvents");
e.initEvent("click", true, true);
oBtn.dispatchEvent(e);
console.log('subscribe', subscribe);

var observable1 = (0, _interval.interval)(400);
var observable2 = (0, _interval.interval)(300);

var subscription = observable1.subscribe(function (x) {
  return console.log('first: ' + x);
});
var childSubscription = observable2.subscribe(function (x) {
  return console.log('second: ' + x);
});

subscription.add(childSubscription);

setTimeout(function () {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 10000);