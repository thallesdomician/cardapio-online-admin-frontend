import produce from "immer";

const INITIAL_STATE = {
	profile: null,
};

export default function user(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "@user/REQUEST":
			return produce(state, (draft) => {
				draft.profile = action.payload.profile;
			});
		default:
			return state;
	}
}
