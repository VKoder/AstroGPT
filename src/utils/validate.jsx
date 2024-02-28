export const checkValidData = (email, password) => {
    // This Validate variables will test and store TRUE / FALSE depends on test()
    const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValidate = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    // const nameValidate = name !== null && name !== undefined;
  
    // If they are false Give Error Message
    // if (!nameValidate) return "Name is not Valid";
    if (!emailValidate) return "Email is not Valid";
    if (!passwordValidate) return "Password is not Valid";

    return null;
  };
  
  export const checkValidData2 = (name, email, password) => {
    // This Validate variables will test and store TRUE / FALSE depends on test()
    const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValidate = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    const nameValidate = name !== "" && name !== undefined;
  
    // If they are false Give Error Message
    if (!nameValidate) return "Name is not Valid";
    if (!emailValidate) return "Email is not Valid";
    if (!passwordValidate) return "Password must contain 6 digits one symbol, one capital letter";

    return null;

  };