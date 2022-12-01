const inputSubject = document.getElementById('iSubImp')
const inputDescription = document.getElementById('iDesImp')
const inputSeverity = document.getElementById('iSevInp')
const inputResponsible = document.getElementById('iResImp')
const inputId = chance.guid()
const ticketList = document.getElementById('issue-list')
let tStatus = 'Open'
// let statusColor = tStatus == 'Open' ? 'warning' : 'success'

const fetchTickets = () => {
  const tickets = JSON.parse(localStorage.getItem('tickets'))

  // ticketList.innerHTML = ''

  for (let i = 0; i < tickets.length; i++) {
    const id = tickets[i].id
    const subject = tickets[i].subject
    const description = tickets[i].description
    const severity = tickets[i].severity
    const assignetTo = tickets[i].assignetTo
    const ticketStatus = tickets[i].ticketStatus
    let statusColor = ticketStatus == 'Open' ? 'warning' : 'success'

    // const statusColor = 'success'

    const content = `<div class="container-sm bg-dark bg-opacity-50 p-4 my-2 rounded-3 ">
              <h6> issue id:${id}</h6>
              <span class="badge bg-${statusColor}">${ticketStatus}</span>
              <h3>${subject}</h3>
              <p>${description} </p>
              <p><i class="bi bi-clock-history">${severity}</i> <i class="bi bi-person-circle"> ${assignetTo}</i> </p>
              <button type="submit" class="btn btn-warning" onclick="setStatusClosed('${id}')">Close</button>
              </div>`
    // <button type="submit" class="btn btn-danger" onclick="deleteIssue(${id})">Delete</button>
    ticketList.insertAdjacentHTML('beforeend', content)
  }
}

const saveTicket = (e) => {
  const ticket = {
    id: inputId,
    subject: inputSubject.value,
    description: inputDescription.value,
    severity: inputSeverity.value,
    assignetTo: inputResponsible.value,
    ticketStatus: tStatus,
  }
  // console.log(ticket)

  if (localStorage.getItem('tickets') === null) {
    let tickets = []
    tickets.push(ticket)
    localStorage.setItem('tickets', JSON.stringify(tickets))
  } else {
    let tickets = JSON.parse(localStorage.getItem('tickets'))
    tickets.push(ticket)
    localStorage.setItem('tickets', JSON.stringify(tickets))
  }

  document.getElementById('ticketInputForm').reset()
  fetchTickets()

  e.preventDefault()
}

const loadTickets = () => {
  if (localStorage.getItem('tickets') !== null) {
    fetchTickets()
  }
}

const setStatusClosed = (id) => {
  const tickets = JSON.parse(localStorage.getItem('tickets'))
  tickets.forEach((ticket) => {
    // console.log(ticket)
    if (ticket.id === id) ticket.ticketStatus = 'Closed'
    localStorage.setItem('tickets', JSON.stringify(tickets))
  })
  fetchTickets()
}

const deleteIssue = (id) => {
  const tickets = JSON.parse(localStorage.getItem('tickets'))
  tickets.filter((ticket) => ticket.id !== id)
}

loadTickets()

document
  .getElementById('ticketInputForm')
  .addEventListener('submit', saveTicket)
