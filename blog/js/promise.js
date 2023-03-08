class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(fun) {
        this.PromiseStatus = myPromise.PENDING
        this.PromiseResult = null
        this.onFulfiledCallback = []
        this.onRejectedCallback = []
        fun(this.resolve.bind(this), this.reject.bind(this))

    }
    resolve(result) {
        if (this.PromiseStatus = myPromise.PENDING) {
            this.PromiseStatus = myPromise.FULFILLED
            this.PromiseResult = result
            this.onFulfiledCallback.forEach(callback => {
                callback(result)
            })
        }
    }
    reject(reason) {
        if (this.PromiseStatus = myPromise.PENDING) {
            this.PromiseStatus = myPromise.REJECTED
            this.PromiseResult = reason
            this.onRejectedCallback.forEach(callback => {
                callback(reason)
            })
        }
    }
    then(onFulfilled, onRejected) {
        // 链式调用，多个.then需返回一个新的promise供.then调用
        const promise2 = new Promise((resolve,reject) => {
            if (this.PromiseStatus === myPromise.PENDING) {
                this.onFulfiledCallback.push(() => {
                    queueMicrotask(() => {
                        if (typeof onFulfilled !== 'function') {
                            onFulfilled(this.PromiseResult);
                         
                        } else {
                            let x = onFulfilled(this.PromiseResult);
                            resolvePromise(promise2,x,resolve,reject)
                        }
                    });
                })
                this.onRejectedCallback.push(() => {
                    queueMicrotask(() => {
                        onRejected(this.PromiseResult)
                    })
                })
            }
            if (this.PromiseStatus === myPromise.FULFILLED) {
                queueMicrotask(() => {
                    onFulfilled(this.PromiseResult)
                })
            }
            if (this.PromiseState === myPromise.REJECTED) {
                queueMicrotask(() => {
                    onRejected(this.PromiseResult)
                })
            }
        })

        return promise2
    }
}

function resolvePromise(promise, x, resolve, reject) {
    return resolve(x)
}

// test code
// let promise1 = new myPromise((resolve, reject) => {
//     console.log(1)
//     setTimeout(() => {
//         resolve(2)
//     }, 2000)

// })


// console.log(3)
// promise1.then(res => {
//     console.log(res)
//    return 4
// }).then(res => {
//     console.log(res)
// })

let promise2 = new myPromise((resolve, reject) => {
    console.log(1)
    reject()
    console.log(2)
    resolve()
    console.log(3)
})

promise2.then(() => {
    console.log(4)
}).then(() => {
    console.log(5)
})