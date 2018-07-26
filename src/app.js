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

source.subscribe(new MyObserver());

source.subscribe(
    (value) => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log('completed')
)