class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rujected';
    constructor(fun) {
        this.PromiseStatus = myPromise.PEDDING
        this.PromiseResult = null
        fun(this.resolve.bind(this),this.reject.bind(this))
    }
    resolve(result) {
        if(this.PromiseStatus = myPromise.PEDDING) {
            this.PromiseStatus = myPromise.FULFILLED
            this.PromiseResult = result
        }
    }
    reject(reason) {
        if(this.PromiseStatus = myPromise.REJECTED) {
            this.PromiseStatus = myPromise.REJECTED
            this.PromiseResult = reason
        }
    }
    then(onFulfiled,onRejcted) {
        if(this.PromiseState  === myPromise.FULFILLED) {
            onFulfiled(this.PromiseResult)
        }
        if(this.PromiseState  === myPromise.REJECTED) {
            onRejcted(this.PromiseResult)
        }
    }
}