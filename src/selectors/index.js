import { defaultUser, type State } from '../reducers/app';

const getTimeStamps = ({ timeStamps }) => timeStamps;

const getCurrentUser = ({ users }: State): User => users.find(user => user.id === defaultUser.id);

export { getTimeStamps, getCurrentUser };
