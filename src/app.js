import {Observable} from 'rxjs';
let numbers = [1,2,3];
let source = Observable.from(numbers);

class MyObserver {
    next(value) {
        console.log(`value: ${value}`);
    }
    error(e) {
        console.log(`error: ${e}`);
    }
    complete() {
        console.log('completed');
    }
}

//source.subscribe(new MyObserver());

source.subscribe(
    (value) => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log('completed')
)

//Creating observer with Observable.create
let numbers2 = [7,8,9];
// let source1 = Observable.create((observer) => {
//     for(let n of numbers2) {
//         if(n == 8) {
//             observer.error('there is an error');
//         }
//         observer.next(n);
//     }
//     observer.complete();
// })

let source1 = Observable.create((observer) => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers2[index++])
        if(index < numbers2.length) {
            setTimeout(produceValue, 1000);
        } else {
            observer.complete();
        }
    }
    produceValue();
});

source1.subscribe(
    (value) => console.log(`value from numbers2: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log('completed')
);