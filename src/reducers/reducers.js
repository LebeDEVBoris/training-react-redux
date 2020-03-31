const initialState = {
    inputeddata: '',
    mathAction: null,
    firstArg: null,
    secondArg: null,
    result: ''
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case 'INPUTED_DIGIT':
           
            let data; 
            if (state.result === '') {
                data = state.inputeddata + action.payload;
            }
            if (state.result !== '') {
                data = '' + action.payload;
            }

            return {
                inputeddata: data,
                mathAction: state.mathAction,
                firstArg: state.firstArg,
                secondArg: state.secondArg,
                result: ''
            };

        case 'INPUTED_MATH_ACTION':
            const firstArgument = state.inputeddata;
            
            if ((state.inputeddata === '') || (state.result !== '')) {
                return state;
            }
            return {
                inputeddata: state.inputeddata + ` ${action.payload} `,
                firstArg: firstArgument,
                secondArg: null,
                mathAction: action.payload,
                result: ''
            }
        
        case 'INPUTED_GET_STATE':
            console.log('state = ', state);
            return state;
        
        case 'INPUTED_SHOW_RESULT':
            
            // getting all numbers from string
            const inputedData = state.inputeddata.split("").reverse().join("");
            let secondArgument = '';
            for(let i = 0; i < inputedData.length; i++) {
                if (inputedData[i] !==  ' ') secondArgument += inputedData[i];
                else break;
            }
            secondArgument = secondArgument.split("").reverse().join("");

            let willShowed;

            switch(state.mathAction) {
                case '÷':
                    willShowed = state.firstArg / secondArgument;
                    break;
                
                case 'X':
                    willShowed = state.firstArg * secondArgument;
                    break;

                case '-':
                    willShowed = state.firstArg - secondArgument;
                    break;

                case '+':
                    willShowed = state.firstArg + secondArgument;
                    break;

                default:
                    willShowed = ''
                    break;
            }

            console.log('fa = ', state.firstArg);
            console.log('la = ', secondArgument);
            return {
                inputeddata: state.inputeddata + ' =',
                firstArg: state.firstArg,
                secondArg: secondArgument,
                mathAction: null,
                result: willShowed
            }

        case 'INPUTED_CLEAR_ALL':
            return initialState;

        default: 
            return state;
    }
}

export default reducer