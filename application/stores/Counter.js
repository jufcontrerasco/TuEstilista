import {observable, action} from 'mobx';

export default class Counter {
    @observable count = 0;

    @action increment () {
        console.log('increment counter');
        this.count += 1;
    }

    @action decrement () {
        console.log('decrement counter');
        this.count -= 1;
    }
}