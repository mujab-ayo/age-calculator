var calender = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const calculate = document.getElementById('calculate');




function isLeap(year) {
    if(year % 4 == 0 || 
    (year % 100 == 0 && year % 400 == 0)) {
        calender[1] = 29;
        return;
    }

    calender[1] = 28;
}

function insertDetails(a, b, c) {
    const year = document.getElementById('year');
    const month = document.getElementById('month');
    const day = document.getElementById('day');

    year.textContent = `${a}`;
    month.textContent = `${b}`;
    day.textContent = `${c}`;
}



calculate.addEventListener('click', () => {
    const birthDate = new Date(document.getElementById('input-date').value);
    const currentDate = new Date();


    const birthDateDetails = {
        year: birthDate.getFullYear(),
        month: birthDate.getMonth() + 1,
        day: birthDate.getDate()
    }

    const currentDateDetails = {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        day: currentDate.getDate()
    }



    if(isNaN(birthDate.getTime())) {
        alert('please enter birth details');
        return;
    }


    let birthDay, birthMonth, birthYear;

    isLeap(birthDateDetails.year);


    if((birthDateDetails.year > currentDateDetails.year) || 
        ((birthDateDetails.year == currentDateDetails.year) && 
        (birthDateDetails.month > currentDateDetails.month)) ||
        ((birthDateDetails.year == currentDateDetails.year) && 
        (birthDateDetails.month == currentDateDetails.month) && 
        (birthDateDetails.day > currentDateDetails.day))
        ) {
            alert('wrong date not yet born');
            return;
        }

    

        birthYear = currentDateDetails.year - birthDateDetails.year;

        if(currentDateDetails.month >= birthDateDetails.month) {
            birthMonth = currentDateDetails.month - birthDateDetails.month;
        } else {
            birthYear--;
            birthMonth = 12 + (currentDateDetails.month - birthDateDetails.month);
        }

        if (currentDateDetails.day >= birthDateDetails.day) {
            birthDay = currentDateDetails.day - birthDateDetails.day
        } else {
            birthMonth--;
            let day = calender[currentDateDetails.month - 2];
            birthDay = day + currentDateDetails.day - birthDateDetails.day;

            if(birthMonth < 0) {
                birthMonth = 11;
                birthYear--;
            }

        }

        console.log(birthYear, birthMonth, birthDay)

        insertDetails(birthYear, birthMonth, birthDay);
    })
