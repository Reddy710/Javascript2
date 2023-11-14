const addBtn = document.querySelector(".add-btn")
const taskCreatorCont = document.querySelector(".task-creator")
const priorityColorBox = document.querySelectorAll(".priority-colors")
const textArea = document.querySelector('.textArea-cont')
const main_cont = document.querySelector('.main-cont')

let addTaskFlag = false

addBtn.addEventListener('click', function(){

    addTaskFlag = !addTaskFlag
    if(addTaskFlag)
    {
        taskCreatorCont.style.display = 'flex'
    }
    else{
        taskCreatorCont.style.display = 'none'
    }

})

// for(let i = 0; i < priorityColorBox.length; i++ )
// {
//     priorityColorBox[i].addEventListener('click', function()
//     {
//         for(let j = 0; j< priorityColorBox.length; j++)
//         {
//             priorityColorBox[j].classList.remove('active')
//         }
//         priorityColorBox[i].classList.add('active')
//     })
// }

priorityColorBox.forEach(function(aPrioBox)
{
    aPrioBox.addEventListener('click', function()
    {
        priorityColorBox.forEach(function(anElement)
        {
            anElement.classList.remove('active')
        })
        aPrioBox.classList.add('active')
    })
})


textArea.addEventListener('keydown', function(e)
{
    if(e.key === 'Shift')
    {
        createTicket()

        textArea.value=""
        addTaskFlag = !addTaskFlag
        taskCreatorCont.style.display = 'none'
        

    }
})

function createTicket()
{
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')

    ticketCont.innerHTML=`<div class="ticket-prio"></div>
                          <div class="ticket-id"></div>
                          <div class="task-area"></div>`

    main_cont.append(ticketCont)
}