document
  .getElementById('ticketInputForm')
  .addEventListener('submit', saveTicket)

const inputSubject = document.getElementById('iSubImp')
const inputDescription = document.getElementById('iDesImp')
const inputSeverity = document.getElementById('iSevImp')
const inputResponsible = document.getElementById('iResImp')
const inputId = chance.guid()
const ticketList = document.getElementById('issue-ist')
let tStatus = 'Open'

const fetchTickets = () => {
  const tickets = JSON.parse(localStorage.getItem('tickets'))

  ticketList.innerHTML = ''

  for (i = 0; i < ticketList.length; i++) {
    id = ticketList[i].id
    subject = ticketList[i].subject
    description = ticketList[i].description
    severity = ticketList[i].severity
    assignetTo = ticketList[i].assignetTo
    ticketStatus = ticketList[i].ticketStatus
    // statusColor = ticketList[i].statusColor

    ticketList.innerHTML = `
    <div class="container-sm bg-dark bg-opacity-50 p-4 my-2 rounded-3 ">
              <h6> issue id:${id}</h6>
              <span class="badge text-bg-${statusColor}">${ticketStatus}</span>
              <h3>${subject}</h3>
              <p>${description} </p>
              <p><i class="bi bi-clock-history">${severity}</i> <i class="bi bi-person-circle"> ${assignetTo}</i> </p>
              <button type="submit" class="btn btn-warning">Close</button>
              <button type="submit" class="btn btn-success">Delete</button>
              
    </div>`
  }
}

const saveTicket = (e) => {
  const ticket = {
    id: inputId.value,
    subject: inputSubject.value,
    description: inputDescription.value,
    severity: inputSeverity.value,
    assignetTo: inputResponsible.value,
    ticketStatus: tStatus.value,
  }
  console.log(ticket)
  e.preventDefault()
}
