    const addBtn = document.querySelector(".add-btn");
    const taskCreatorCont = document.querySelector(".textArea-cont");
    const priorityColorBox = document.querySelectorAll(".box");
    const textArea = document.querySelector('.textArea-cont textarea');
    const main_cont = document.querySelector('.main-cont');
    const rmBtn = document.querySelector('.remove-btn');
    let ticketArray = [];
    let colorArray = ["lightpink", "lightgreen", "lightblue", "black"];
    let addTaskFlag = false;
    let deleteTaskFlag = false;
    let taskColor = 'lightpink';

    if (localStorage.getItem('ticketArray')) {
      ticketArray = JSON.parse(localStorage.getItem('ticketArray'));
      ticketArray.forEach(function (ticketdetails) {
        createTicket(ticketdetails.taskPrio, ticketdetails.taskContent, ticketdetails.taskId);
      });
    }

    rmBtn.addEventListener('click', function () {
      deleteTaskFlag = !deleteTaskFlag;
      if (deleteTaskFlag) {
        alert('Are you sure? Do you want to delete this ticket');
        rmBtn.style.color = 'Red';
      } else {
        rmBtn.style.color = 'white';
      }
      updateLocalStorage();
    });

    addBtn.addEventListener('click', function () {
      addTaskFlag = !addTaskFlag;
      if (addTaskFlag) {
        taskCreatorCont.style.display = 'flex';
      } else {
        taskCreatorCont.style.display = 'none';
      }
    });

    priorityColorBox.forEach(function (aPrioBox) {
      aPrioBox.addEventListener('click', function () {
        priorityColorBox.forEach(function (anElement) {
          anElement.classList.remove('active');
        })
        aPrioBox.classList.add('active');
        taskColor = aPrioBox.classList[1];
        console.log(taskColor);
      })
    });

    textArea.addEventListener('keydown', function (e) {
      if (e.key === 'Shift') {
        createTicket(taskColor, textArea.value, shortid.generate());
        textArea.value = "";
        addTaskFlag = !addTaskFlag;
        taskCreatorCont.style.display = 'none';
        updateLocalStorage();
      }
    });

    function getIndex(taskId) {
      let index = -1;
      index = ticketArray.findIndex(function (element) {
        return element.taskId === taskId;
      });
      return index;
    }

    function createTicket(taskPrio, taskContent, taskId) {
      let ticketCont = document.createElement('div');
      ticketCont.setAttribute('class', 'ticket-cont');

      ticketCont.innerHTML = `<div class="ticket-prio ${taskPrio}"></div>
                            <div class="ticket-id"> ${taskId} </div>
                            <div class="task-area"> ${taskContent} </div>
                            <div class="lock-parent"> <i class="lock-icon fa-solid fa-lock"></i> </div>`;

      main_cont.append(ticketCont);
      handleDeleteticket(ticketCont);
      handleLock(ticketCont);
      handlePrioColorstate(ticketCont);

      let index = getIndex(taskId);
      if (index === -1) {
        ticketArray.push({ taskPrio, taskContent, taskId });
        updateLocalStorage();
      }
    }

    function handlePrioColorstate(ticketCont) {
      let prioColorCont = ticketCont.querySelector(".ticket-prio");
      prioColorCont.addEventListener('click', function (e) {
        let currentcolor = prioColorCont.classList[1];
        let index = -1;
        index = colorArray.findIndex(function (element) {
          return currentcolor === element;
        });
        index++;
        index = index % 4;

        let nextcolor = colorArray[index];
        prioColorCont.classList.remove(currentcolor);
        prioColorCont.classList.add(nextcolor);

        updateLocalStorage();
      });
    }

    function handleDeleteticket(ticket) {
      ticket.addEventListener('click', function () {
        if (deleteTaskFlag)
          ticket.remove();
        updateLocalStorage();
      });
    }

    function handleLock(ticketCont) {
      let icon_lock = ticketCont.querySelector('.lock-parent .lock-icon');
      let taskArea = ticketCont.querySelector('.task-area');

      icon_lock.addEventListener('click', function () {
        if (icon_lock.classList[2] == "fa-lock") {
          icon_lock.classList.remove("fa-lock");
          icon_lock.classList.add("fa-lock-open");
          taskArea.setAttribute('contenteditable', 'true');
        } else {
          icon_lock.classList.remove("fa-lock-open");
          icon_lock.classList.add("fa-lock");
          taskArea.setAttribute('contenteditable', 'false');
        }

        updateLocalStorage();
      });
    }

    function updateLocalStorage() {
      localStorage.setItem('ticketArray', JSON.stringify(ticketArray));
    }

    // ... (your existing code)

    allPrioColorsboxlist.forEach(function (element) {

      element.addEventListener('click', function (e) {
        let current_color = element.classList[0];
        let tickets = document.querySelectorAll(".ticket-cont");

        for (let i = 0; i < tickets.length; i++) {
          let currentticketprioColor = tickets[i].querySelector('.ticket-prio').classList[1];
          if (currentticketprioColor === current_color) {
            tickets[i].style.display = "block";
          } else {
            tickets[i].style.display = "none";
          }
        }
        updateLocalStorage();
      });
    })
 