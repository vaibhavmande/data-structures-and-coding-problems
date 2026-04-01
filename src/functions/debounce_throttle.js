console.clear()

function debounce(fn) {
    let timeout = undefined

    return function fun() {
        if(timeout) {
            clearTimeout(timeout)
        } 
        timeout = setTimeout(fn, 3000)
    }
}

const a = () => console.log('Debounce')
const b = debounce(a)
b()
b()
b()

function throttle(tfn) {
    let interval = undefined

    return function f() {
        if(interval) {
            clearInterval(interval)
        }
        interval = setInterval(tfn, 3000)
    }
}

const c = () => console.log('Throttle')
const t = throttle(c)
t()
t()
t()