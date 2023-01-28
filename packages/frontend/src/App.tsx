import { Input } from '@primitives';
import { useAppDispatch } from '@hooks';
import { addToast } from '@store';
import { ToastStack } from '@components/toast';

//TODO: clean the component from test elements
function App() {
  const dispatch = useAppDispatch();
  const addToastHandler = () => {
    dispatch(
      addToast({
        description: 'some test',
        level: 'success',
      }),
    );
  };

  return (
    <div className="App">
      <Input />

      <button onClick={addToastHandler}>Add Toast</button>

      <ToastStack />
    </div>
  );
}

export default App;
