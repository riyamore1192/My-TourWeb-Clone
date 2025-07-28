import {SELECT_TOUR,FETCH_TOURS } from '../Action/Actiontype'; 

const initialState = {
   tours : [],
   selectedTour: null  
};


const tourReducers = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_TOURS : 
        return {
             ...state,
          tours : [...state.tours , action.payload]
        };
        case SELECT_TOUR : 
        return {
            ...state,
            selectedTour : action.payload
        }
    }
}

export default tourReducers;