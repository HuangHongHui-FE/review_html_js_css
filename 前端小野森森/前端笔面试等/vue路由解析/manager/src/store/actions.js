import { formatRouterTree } from '../libs/utils';
import { getUserRouters } from '../services';

export default{
    async setUserRouters({commit, state}) {
        const userRouters = await getUserRouters(state.uid),
            payload = formatRouterTree(userRouters);
        console.log(payload)

        commit('setUserRouter', payload);
        commit('setAuth', true);
    }
}