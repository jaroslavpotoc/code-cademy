const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 8;
            break;
        case 'Tuesday':
            return 8;
            break;
        case 'Wednesday':
            return 8;
            break;
        case 'Thursday':
            return 8;
            break;
        case 'Friday':
            return 12.5;
            break;
        case 'Saturday':
            return 8;
            break;
        case 'Sunday':
            return 8;
            break;
        default:
            return 'Error!';
            break;
    }
};

const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = (idealHours) =>
    idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
        console.log('You actualy got: ' + (idealSleepHours - actualSleepHours) + ' hour(s)User got the perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You actualy got: ' + (idealSleepHours - actualSleepHours) + ' hour(s) User got more sleep than needed.')
    } else {
        console.log('You actualy got: ' + (idealSleepHours - actualSleepHours) + ' hour(s)User get more sleep!')
    }
};

calculateSleepDebt()