import { useReducer } from "react";
import Category from "../models/category.model";
import { SateModel } from "./state";


export enum categoryAction {
    LOAD_CATEGORY = 'loadCategory',
    LOAD_CATEGORY_SUCCESS = 'loadCategorySuccess',
    LOAD_CATEGORY_FAIL = 'loadCategoryFail',
    ADD_CATEGORY = 'addCategory',
    ADD_CATEGORY_SUCCESS = 'addCategorySuccess',
    ADD_CATEGORY_FAIL = 'addCategoryFail',
    UPDATE_CATEGORY = 'updateCategory',
    UPDATE_CATEGORY_SUCCESS = 'updateCategorySuccess',
    UPDATE_CATEGORY_FAIL = 'updateCategoryFail',
    DELETE_CATEGORY = 'deletCategory',
    DELETE_CATEGORY_SUCCESS = 'deletCategorySuccess',
    DELETE_CATEGORY_FAIL = 'deletCategoryFail'
}


const categoryReducer = (state: SateModel<Category>, action: any | { type: string, payload: any }) => {

    switch (action.type) {
        case categoryAction.LOAD_CATEGORY, categoryAction.ADD_CATEGORY, categoryAction.UPDATE_CATEGORY, categoryAction.DELETE_CATEGORY: return {
            ... state,
            isLoading:true
        };
        case categoryAction.ADD_CATEGORY_SUCCESS: return {
            ...state,
            isLoading:false,
            data: [...state.data, action.payload],
        };
        case categoryAction.UPDATE_CATEGORY_SUCCESS: return {
            ...state,
            isLoading:false,
            data: state.data.map((category) =>
                category.id === action.payload.id ? action.payload : category
            ),
        };
        case categoryAction.DELETE_CATEGORY_SUCCESS: {
            return {
                ...state,
                isLoading:false,
                data: state.data.filter(data => data != action.payload)

            };
        }
        case categoryAction.LOAD_CATEGORY_FAIL, categoryAction.ADD_CATEGORY_FAIL, categoryAction.UPDATE_CATEGORY_FAIL, categoryAction.DELETE_CATEGORY_FAIL: return {
            ... state,
            isLoading:false,
            errors : action.payload
        };

        default:
            return state;
    }
}

export const useCategory = () => {

    const [state, dispatch] = useReducer(categoryReducer, {
        isLoading: false,
        data: [],
        totalElements: 0,
        totalPages: 0,
        size: 10
    });

    return {
        isLoading: state.isLoading,
        data: state.data,
        totalElements: state.totalElements,
        totalPages: state.totalPages,
        size: state.size,
        [categoryAction.LOAD_CATEGORY]: (categories: Category[]) => dispatch({ type: categoryAction.LOAD_CATEGORY, payload: categories }),
        [categoryAction.ADD_CATEGORY]: (category: Category) => dispatch({ type: categoryAction.ADD_CATEGORY, payload: category }),
        [categoryAction.UPDATE_CATEGORY]: (category: Category) => dispatch({ type: categoryAction.UPDATE_CATEGORY, payload: category }),
        [categoryAction.DELETE_CATEGORY]: (category: Category) => dispatch({ type: categoryAction.DELETE_CATEGORY, payload: category })
    }
}