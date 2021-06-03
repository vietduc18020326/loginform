export default useValidate = () => {
  const validateInput = (text, props) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    let errorText = '';
    if (props.email && !emailRegex.test(text.trim().toLowerCase())) {
      isValid = false;
      errorText = 'Invalid email';
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
      errorText = 'At least 5 characters';
    }
    if (props.required && text.trim().length === 0) {
      isValid = false;
      errorText = 'Please enter a valid';
    }
    return {isValid, errorText};
  };
  return {validateInput};
};
