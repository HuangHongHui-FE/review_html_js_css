import IndexPage from './pages/index'

import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    // 不用redux时
    // <div className="App">
    //   <IndexPage />
    // </div>

    
    <div>
      {/* store对应src下的store目录 */}
      {/* store里面的东西，Provider里面包括的组件都能接到数据 */}
      <Provider store={store}>
        <IndexPage />
      </Provider>
    </div>
  );
}

export default App;
