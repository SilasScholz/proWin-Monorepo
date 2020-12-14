import /* Add Types Here */ './types';
import { useDispatch } from 'react-redux';
import { createAction } from 'redux-actions';
import * as API from './api';

const getExampleAction = createAction(GET_EXAMPLE);

export const useActions = () => {
  const dispatch = useDispatch();

  return {
    //Articles

    GetExampleAction: async () => {
      let response, error;
      try {
        response = await API.getExampleAction();
        dispatch(getExampleAction({ articles: response.data }));
      } catch (e) {
        error = e;
      }
      return { response, error };
    },
  };
};
