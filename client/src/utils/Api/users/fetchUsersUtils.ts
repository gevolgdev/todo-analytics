import { Dispatch } from "redux";
import api from "../../../service";
import { fetchUsers } from "../../../lib/redux/slices/socialSlice";

interface FetchTasksProps {
  token: string;
};

const fetchUsersUtils = async ({ token }: FetchTasksProps, Dispatch: Dispatch) => {
  try {
    const response = await api.get('/users/get-users', {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log('Fetch dos users');
    console.log(response.data.users[0]);
    Dispatch(fetchUsers(response.data.users[0]));
  } catch (err) {
    console.log('Erro no fetchUsersUtils.ts: ', err);
  }
};

export default fetchUsersUtils;