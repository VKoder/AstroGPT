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

  export const kundlicheck = (name, dob, time, gender, place, district, state, nation)=>{

    const nameValidate = name !== "" && name !== undefined
    const dobValidate = dob !== "" && dob !== undefined
    const timeValidate = time !== "" && time !== undefined
    const genderValidate = gender !== "" && gender !== undefined
    const placeValidate = place !== "" && place !== undefined
    const districtValidate = district !== "" && district !== undefined
    const stateValidate = state !== "" && state !== undefined
    const nationValidate = nation !== "" && nation !== undefined

    if (!nameValidate) {
      return "Please Enter a Valid Name"
    }
    if (!dobValidate) {
      return "Please Enter a Valid Date of Birth"
    } if (!timeValidate) {
      return "Please Enter a Valid Time"
    }
    if (!placeValidate) {
      return "Please Enter a Valid Place"
    }

    if (!genderValidate) {
      return "Please Enter a Valid Gender"
    }
    if (!districtValidate) {
      return "Please Enter a Valid District"
    }
    if (!stateValidate) {
      return "Please Enter a Valid State"
    }
    if (!nationValidate) {
      return "Please Enter a Valid Nation"
    }
    return null;
    
  }