//Task 1.1
const remove = document.querySelectorAll('.remove');

remove.forEach(link => {
    link.addEventListener('click', function handleClick(event) {
      link.style.display = 'none'
    });
});


//Task 1.2
const keep = document.querySelectorAll('.keep');

keep.forEach(link => {
  link.addEventListener('click', function handleClick(event) {
    link.style.backgroundColor = 'blue'
  });
});

//Task 1.3
const form = document.querySelector('.form')
const resultArea = document.querySelector('#result')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = {}

    formData.forEach((value, key) => {
    data[key] = value
    })

    const element = document.createElement('p')
    element.innerHTML = `Movie Name: ${data.name}<br>Released Year: ${data.year}`

    resultArea.appendChild(element)
})
 













//Task 2
function repeatBackLater(string){
    setTimeout(() => {
        console.log(string)
    }, 2000)
}

repeatBackLater('hello')

//Task 2.2
function multiplyNumber(num, callback){
    setTimeout(() => {  
        callback(num * num)
    }, 1000)
}

multiplyNumber(12, (num)=> {
    console.log(num)
})

//Task 2.3
function getTheSum(number1, number2){
    return new Promise ((resolve, reject) => {
        resolve(number1 + number2)
    })
}

getTheSum(16, 4).then((result)=> {
    console.log(result)
})

//Task 2.4
function getTheSum(number1, number2){
    return new Promise ((resolve, reject) => {
        if(number1 < 0 || number2 < 0){
            reject('Negative numbers are not allowed.')
        }
        resolve(number1 + number2)
    })
}

getTheSum(16, 2).then((result)=> {
    console.log(result)
})