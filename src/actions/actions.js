const inputedDigit = (digit) => {

    return {
        type: 'INPUTED_DIGIT',
        payload: digit
    }
}

const inputedMathAction = (mathAction) => {
    return {
        type: 'INPUTED_MATH_ACTION',
        payload: mathAction
    }
}

const showResult = () => {
    return {
        type: 'INPUTED_SHOW_RESULT'
    }
}

const showState = () => {

    return {
        type: 'INPUTED_GET_STATE'
    }
}

const clearAll = () => {
    return {
        type: 'INPUTED_CLEAR_ALL'
    }
}

const setMinisValue = () => {
    return {
        type: 'INPUTED_SET_MINUS_VALUE'
    }
}

export {
    inputedDigit,
    inputedMathAction,
    showResult,
    showState,
    clearAll,
    setMinisValue
};

