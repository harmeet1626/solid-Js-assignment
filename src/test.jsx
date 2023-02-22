import { createEffect, createSignal } from 'solid-js';

function test() {

    
  const localStorageKey = 'myKey';
  const [localStorageValue, setLocalStorageValue] = createSignal(localStorage.getItem(localStorageKey));

  createEffect(() => {
    // Update the value of the localStorage item whenever localStorageValue changes
    localStorage.setItem(localStorageKey, localStorageValue());
  });

  function handleChange(event) {
    setLocalStorageValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={localStorageValue()} onInput={handleChange} />
      <p>{localStorageValue()}</p>
    </div>
  );
}
export default test
