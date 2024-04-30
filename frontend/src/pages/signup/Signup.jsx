import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-brown-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-2xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">Chat App</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="='text-base label-text">Full Name</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Full Name" />
            </label>
          </div>
          <div>
            <label className="label p-2">
              <span className="='text-base label-text">Username</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
          </div>

          <div>
            <label className="label p-2">
              <span className="='text-base label-text">Password</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>
          <div>
            <label className="label p-2">
              <span className="='text-base label-text"> Confirm Password</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
              />
            </label>
          </div>
          <div className="flex mt-2">
            <label className="label p-2">
              <span className="='text-base label-text"> Male</span>
            </label>
            <input
              type="radio"
              name="radio-1"
              className="radio radio-sm radio-info mt-2"
            />
            <label className="label p-2">
              <span className="='text-base label-text"> Female</span>
            </label>
            <input
              type="radio"
              name="radio-1"
              className="radio radio-sm radio-error mt-2"
            />
            <label className="label p-2">
              <span className="='text-base label-text"> Others</span>
            </label>
            <input
              type="radio"
              name="radio-1"
              className="radio radio-sm radio-accent mt-2"
            />
          </div>
          <a href="/signup" className="link link-hover">
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
