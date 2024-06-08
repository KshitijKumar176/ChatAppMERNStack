import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setloading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    console.log(success);
    if (!success) return false;

    setloading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      // localStorage save
      localStorage.setItem("chat-user", JSON.stringify(data));
      // context
      setAuthUser(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setloading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputError({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (
    fullName == "" ||
    username == "" ||
    password == "" ||
    confirmPassword == "" ||
    gender == ""
  ) {
    console.log("in if 1");
    toast.error("Please fill in all the fields.");
    return false;
  }

  if (password !== confirmPassword) {
    console.log(password + "~" + confirmPassword);
    console.log("in if 2");
    toast.error("Password do not match.");
    return false;
  }

  if (password.length < 6) {
    console.log("in if 3");
    toast.error("Password must be atleast 6 characters.");
    return false;
  }

  return true;
}
