const formButton = document.getElementById('formSubmit')


let number = 1

formButton.addEventListener('click', (event) => {
    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let schoolName = document.getElementById('schoolName').value
    let majorName = document.getElementById('majorName').value

    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let schoolNameNode = document.createElement('td')
    schoolNameNode.innerHTML = schoolName
    newTableRow.append(schoolNameNode)

    let majorNameNode = document.createElement('td')
    majorNameNode.innerHTML = majorName
    newTableRow.append(majorNameNode)

    document.getElementById('tBody').appendChild(newTableRow)

    document.getElementById('firstName').value = ' '
    document.getElementById('lastName').value = ' '
    document.getElementById('schoolName').value = ' '
    document.getElementById('majorName').value = ' '



    number++

})