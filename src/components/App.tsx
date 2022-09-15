import 'bulmaswatch/superhero/bulmaswatch.min.css'
import { Provider } from 'react-redux';
import { store } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';


const App = () => {

    return (
        <Provider store={store}>
            <div>
                {/* <CodeCell /> */}
                <TextEditor />
            </div>
        </Provider>
        )
};

export default App