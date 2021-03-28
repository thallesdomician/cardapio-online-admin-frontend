import produce from 'immer';

const INITIAL_STATE = {
  active_sidebar: false,
};

export default function template(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@template/TOGGLE_SIDEBAR':
        draft.active_sidebar = action.payload.active_sidebar;
        break;

      default:
    }
  });
}
