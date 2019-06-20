var list = document.querySelector('ul');



const updateExch = () => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(res=>{
    return res.json()
}).then(res=>{
    console.log('gggdf')
    var li = document.createElement('h6')
    li.innerHTML = 'Date' +  new Date();
    li.className = 'green  lighten-2 heading'

    list.appendChild(li)
    res.map(row=>{

        var li = document.createElement('li')
        li.innerHTML = row.ccy + ' => Buy: '+row.buy + '; Sale: '+row.sale 
        list.appendChild(li)
    })
    
})
}
updateExch()
setInterval(updateExch,3000)




