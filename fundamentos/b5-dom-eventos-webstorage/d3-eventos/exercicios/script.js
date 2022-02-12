function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
// colocar dias no calendário e sinalizar os dias de feriado e sexta feira
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let daysList = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = dezDaysList[i];
        let numberOfDays = document.createElement('li');
        if (day === 24 || day === 31) {
            numberOfDays.className = 'day holiday'
            numberOfDays.innerHTML = day;
            daysList.appendChild(numberOfDays);

        } else if (day === 4 || day === 11 || day === 18) {
            numberOfDays.className = 'day friday'
            numberOfDays.innerHTML = day;
            daysList.appendChild(numberOfDays)

        } else if (day === 25) {
            numberOfDays.className = 'day friday holiday'
            numberOfDays.innerHTML = day;
            daysList.appendChild(numberOfDays)
        } else {
            numberOfDays.className = 'day';
            numberOfDays.innerHTML = day;
            daysList.appendChild(numberOfDays);
        }
    };
};
createDaysOfTheMonth();


// criar um botao para exibir os feriados

function createHolidayButton(buttonName) {
    let buttonPosition = document.querySelector('.buttons-container')
    let button = document.createElement('button')
    let buttonID = 'btn-holiday'

    button.id = buttonID
    button.innerHTML = buttonName
    buttonPosition.appendChild(button)
}

createHolidayButton('Feriados')





//


function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'cyan';

    getHolidayButton.addEventListener('click', function () {
        for (let i = 0; i < getHolidays.length; i += 1) {
            if (getHolidays[i].style.backgroundColor === setNewColor) {
                getHolidays[i].style.backgroundColor = backgroundColor;
            } else {
                getHolidays[i].style.backgroundColor = setNewColor;
            }
        }
    })
};

displayHolidays();

//


function createFridayButton(buttonName) {
    let buttonPosition = document.querySelector('.buttons-container')
    let button = document.createElement('button')
    let buttonID = 'btn-friday'

    button.id = buttonID
    button.innerHTML = buttonName
    buttonPosition.appendChild(button)
}

createFridayButton('Sextou')


function displayFriday() {
    let getFridayButton = document.querySelector('#btn-friday')
    let getFriday = document.querySelectorAll('.friday')
    let backgroundColor = 'rgb(238,238,238)';
    let newColor = 'red';

    getFridayButton.addEventListener('click', function() {
        for (let i = 0; i < getFriday.length; i += 1) {
            if (getFriday[i].style.backgroundColor === newColor) {
                getFriday[i].style.backgroundColor = backgroundColor;
            } else {
                getFriday[i].style.backgroundColor = newColor;
            }
        }
    })
};
displayFriday()