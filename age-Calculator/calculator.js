document.getElementById('Btn').addEventListener('click', function () {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const yearInValue = document.getElementById('yearsIn');
    const monthInValue = document.getElementById('monthIn');
    const dateInValue = document.getElementById('dateIn');

    const years = document.getElementById('years');
    const month = document.getElementById('month');
    const date = document.getElementById('date');

    const yearInValueNumber = yearInValue.value;
    const monthInValueNumber = monthInValue.value;
    const dateInValueNumber = dateInValue.value;

    // Get current date
    const NowDate = new Date();

    let NowYear = NowDate.getFullYear();
    let NowMonth = 1 + NowDate.getMonth();
    let NowDay = NowDate.getDate();

    if (dateInValue.value > NowDay) {
        NowDay = NowDay + months[NowMonth - 1];
        NowMonth = NowMonth - 1
    }

    if (monthInValue.value > NowMonth) {
        NowMonth = NowMonth + 12;
        NowYear = NowYear - 1
    }

    const myYears = NowYear - yearInValue.value;
    const MyMonth = NowMonth - monthInValue.value;
    const MyDate = NowDay - dateInValue.value;

    years.innerText = myYears;
    month.innerText = MyMonth;
    date.innerText = MyDate

});
//  i finded that projects
// hkjhk

// tomoro

// last fack commit
