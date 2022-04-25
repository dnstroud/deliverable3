let min = -500;
let max = 500;

function isIntegerInRange(input) {
    if (!isNaN(input)) {
        if (input >= min && input <= max) {
            return true;
        }
    }
    else {
        return false;
    }
}

function isFloatInRange(input) {
    if (!isNaN(input)) {
        if (input >= min && input <= max) {
            return true;
        }
    }
    else {
        return false;
    }
}