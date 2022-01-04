import cuid from "cuid";

const rejectionSlice = 'rejection';
const initialState = [];
const QUESTION_STATUSES = ['Unanswered', 'Accepted', 'Rejected'];

const hydrateQuestions = (state = []) => ({
    type: hydrateQuestions.type,
    payload: state
});
hydrateQuestions.type = 'rejection/hydrateQuestions';

const getQuestions = state => state[rejectionSlice];

const getQuestionsGroupedByStatus = state => {
    const grouped = {};

    QUESTION_STATUSES.forEach(status => {
        grouped[status] = state[rejectionSlice].filter(questions => questions.status === status);
    });
    return grouped;
};

const getTotalScore = (state) => state[rejectionSlice].reduce((score, question) => 
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
        case hydrateQuestions.type:
            return [...state, ...payload];
        case createQuestion.type:
            return [...state, payload];
        default:
            return state;
    }
};

export { 
    rejectionReducer,
    rejectionSlice,
    hydrateQuestions,
    createQuestion,
    getQuestions,
    getQuestionsGroupedByStatus,
    getTotalScore
}; 
