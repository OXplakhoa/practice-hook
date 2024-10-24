export const useInput = (initValue, valid) => {
    const [value, setValue] = useState(initValue);
    const onChange = (e) => {
      const { value } = e.target;
      let willUpdate = true;
      if (typeof(valid) === "function") {
        willUpdate = valid(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  }