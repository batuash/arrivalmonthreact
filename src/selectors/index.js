import { defaultUser, type State } from '../reducers/app';

const getEntries = (state: State) => getCurrentUser(state).entries;

const getCurrentUser = ({ users }: State): User => users.find(user => user.id === defaultUser.id);

export { getEntries, getCurrentUser };
