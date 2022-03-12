import x from './x.js'
import png from './assets/1.png'
console.log(png)
const div = document.getElementById('app')

div.innerHTML = `
    <img src="${png}">
`

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')//你加载一个东西是异步的，直接等于拿不到，所以得到的是一个promise延迟对象
    promise.then((module) => {
        const fn = module.default()
        fn()
    }, ()=>{})
}
div.appendChild(button)