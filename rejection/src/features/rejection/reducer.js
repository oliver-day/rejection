import cuid from "cuid";

const rejectionSlice = 'rejection';
const QUESTION_STATUSES = [
    'Unanswered',
    'Accepted',
    'Rejected'
];

const initialState = {
    questions: [],
    isLoading: false
};

const hydrateQuestionsFromLocalState = () => ({
    type: hydrateQuestionsFromLocalState.type,
});
hydrateQuestionsFromLocalState.type = 'rejection/hydrateQuestionsFromLocalState';

const hydrateQuestionsSucceeded = (state = []) => ({
    type: hydrateQuestionsSucceeded.type,
    payload: state
});
hydrateQuestionsSucceeded.type = 'rejection/hydrateQuestionsSucceeded';

const getQuestions = state => state[rejectionSlice].questions;

const getIsLoading = state => state[rejectionSlice].isLoading;

const getQuestionsGroupedByStatus = state => {
    const grouped = {};

    QUESTION_STATUSES.forEach(status => {
        grouped[status] = state[rejectionSlice].questions.filter(questions => questions.status === status);
    });
    return grouped;
};

const getTotalScore = (state) => state[rejectionSlice].questions.reduce((score, question) => 
    question.status === 'Accepted' ? score + 1 :
    question.status === 'Rejected' ? score + 10 :
    score, 0);


const createQuestion = ({
    question,
    askee,
    status,
    id = cuid(),
    timestamp = (new Date()).toUTCString()
} = {}) => {
    return {
        type: createQuestion.type,
        payload: {
            question,
            askee,
            status,
            id,
            timestamp
        }
    }
};
createQuestion.type = 'rejection/createQuestion';


const rejectionReducer = (state = initialState, {type, payload} = {}) => {
    switch (type) {
        case hydrateQuestionsFromLocalState.type: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case hydrateQuestionsSucceeded.type: {
            return {
                ...state,
                questions: [...payload],
                isLoading: false
            }
        }
        case createQuestion.type: {
            return Object.assign(
                {},
                state,
                { questions: [
                    ...state.questions, 
                    payload
                  ]
                }
            );
        }
        default: {
            return state;
        }
    }
};

export { 
    rejectionReducer,
    rejectionSlice,
    hydrateQuestionsFromLocalState,
    hydrateQuestionsSucceeded,
    createQuestion,
    getIsLoading,
    getQuestions,
    getQuestionsGroupedByStatus,
    getTotalScore
}; 
