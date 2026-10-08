let form = document.getElementById('form')

let arr = JSON.parse(localStorage.getItem('datas')) || []

window.addEventListener('load',()=>{
    displaytask(arr)
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let task = document.getElementById('task').value
    let priority = document.getElementById('priority').value;

    let data = {
        task,
        priority
    }
    arr.push(data)
    localStorage.setItem("datas",JSON.stringify(arr))
    displaytask(arr)
})


function displaytask(arr)
{
    document.querySelector('tbody').innerHTML = ""
    arr.forEach((el,index)=>{

       
        let row = document.createElement('tr')
        let col1 = document.createElement('td')

        col1.innerText = el.task
        let col2 = document.createElement('td')
        col2.innerText = el.priority
        let col3 = document.createElement('td')
        col3.innerText = "DELETE"

       col3.addEventListener('click',()=>{
        deleteTask(el,index);
       })


        row.append(col1,col2,col3)

        document.querySelector('tbody').append(row)
    })
}


function deleteTask(el,index)
{
    arr.splice(index,1)
    localStorage.setItem("datas",JSON.stringify(arr))
    displaytask(arr)
}




