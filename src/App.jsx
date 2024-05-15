import {useForm} from "react-hook-form";
import man from "./assets/man.png";
import woman from "./assets/woman.png";
import {useState} from "react";
import again from "./assets/reload.png";
function App() {
  const [isBMIScreen, setBMIScreen] = useState(false);
  const [BMIResult, setBMIResult] = useState("");
  const [BMI, setBMI] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const calBMI = (height, weight) => {
    const BMI = (weight / (height * height)).toFixed(2);
    console.log(BMI);
    setBMI(BMI);
    let result = "";
    if (BMI < 18.5) {
      result = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.99) {
      result = "Normal weight";
    } else if (BMI >= 25 && BMI <= 29.99) {
      result = "Overweight";
    } else if (BMI >= 30 && BMI <= 35) {
      result = "Obese";
    } else {
      result = "Morbid obesity";
    }
    setBMIResult(result);
  };
  const onSubmit = (data) => {
    console.log(data, "data");
    const h = parseFloat(data.height);
    const w = parseFloat(data.weight);
    calBMI(h, w);
    setBMIScreen(true);
  };
  const handleAgain = () => {
    setBMIScreen(false);
  };
  return (
    <>
      <div className=" flex bg-slate-300 dark:bg-gray-800 h-screen mx-auto">
        <div className="flex flex-col bg-app-bg dark:bg-app-black w-full mx-auto md:my-10 md:w-1/3 items-center md:rounded-md dark:drop-shadow-[0_0_80px_rgba(255,255,255,0.35)] drop-shadow-lg p-2 text-app-text">
          {isBMIScreen ? (
            <div className="flex justify-center items-center flex-col h-full w-full p-5 md:p-0">
              <div className="flex flex-col h-1/3 md:w-1/2 w-full p-2 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:shadow-[0_0_10px_rgba(255,255,255,0.35)]  justify-around items-center">
                <h1>Your BMI is</h1>
                <h2 className="text-3xl font-bold text-cyan-500 dark:text-cyan-400">
                  {BMI}
                </h2>
                <h3>
                  kg/m<sup>2</sup>
                </h3>
                <p>
                  Your weight is{" "}
                  <span className="font-bold text-cyan-500 dark:text-cyan-400">
                    {" "}
                    {BMIResult}
                  </span>
                </p>
              </div>
              <div className="flex p-2 w-full px-5 m-5 ">
                <p>
                  A BMI of 25.0 or more is overweight, while the healthy range
                  is 18.5 to 24.9. BMI applies to most adults 18-65 years.
                </p>
              </div>
              <div
                className="mt-5 cursor-pointer drop-shadow-[0_0_20px_rgba(6,181,211,0.6)] dark:drop-shadow-[0_0_20px_rgba(0,0,255,0.80)]"
                onClick={handleAgain}
              >
                <img src={again} className=" h-14" />
              </div>
            </div>
          ) : (
            <>
              <div className="flex  font-medium w-full text-2xl px-2">
                <h2>
                  <span className=" text-cyan-500 ">BMI</span> Calculator
                </h2>
              </div>
              {/* Info */}
              <div className="flex w-full px-2  font-medium">
                <p>
                  Body mass index (BMI) is a screening tool that estimates body
                  fat and a person's weight category.
                </p>
              </div>
              {/* Male / female */}
              <div className="flex w-full justify-evenly items-center  h-1/5 mt-5 mb-0">
                {/* Male  */}
                <div className="flex flex-col items-center h-full gap-4 ">
                  <img
                    src={man}
                    className="h-2/3 drop-shadow-lg dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)] "
                    alt="man img"
                  />
                  <p className=" text-md font-semibold">Male</p>
                </div>
                {/* Female */}
                <div className="flex flex-col items-center h-full gap-4 ">
                  <img
                    src={woman}
                    className="h-2/3 drop-shadow-lg dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]"
                    alt="woman img"
                  />
                  <p className=" text-md font-semibold">Female</p>
                </div>
              </div>
              {/* Form */}
              <form
                className="w-full flex flex-col h-full justify-evenly"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* height */}
                <div className="flex gap-3 justify-between items-center shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:shadow-[0_0_10px_rgba(255,255,255,0.35)]  w-full rounded-md p-2">
                  <label htmlFor="" className="p-2 font-semibold text-xl">
                    Height
                  </label>
                  <input
                    className="w-full text-2xl p-2 rounded-lg text-center bg-transparent border focus:outline-white placeholder:text-sm"
                    type="number"
                    placeholder="in m."
                    step="0.01"
                    {...register("height", {
                      required: {value: true, message: "Height is required!!"},
                      min: {
                        value: 0.1,
                        message: "Minimum height should be 0.1 m.",
                      },
                      max: {value: 3, message: "Maximum height should be 3 m"},
                    })}
                  />
                </div>
                {/* Errors fro height */}
                {errors.height && (
                  <div className=" text-red-500 text-sm px-2 flex justify-center">
                    {errors.height.message}
                  </div>
                )}
                {/* weight */}
                <div className="flex gap-3 justify-between items-center shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:shadow-[0_0_10px_rgba(255,255,255,0.35)]  w-full rounded-md p-2 mb-0">
                  <label htmlFor="" className="p-2 font-semibold text-xl">
                    Weight
                  </label>
                  <input
                    className="w-full text-2xl p-2 rounded-lg text-center bg-transparent border focus:outline-white placeholder:text-sm"
                    type="number"
                    placeholder="in kg."
                    {...register("weight", {
                      required: {value: true, message: "Weight is required!!"},
                      min: {
                        value: 1,
                        message: "Minimum weight should be 5 kg.",
                      },
                      max: {
                        value: 1000,
                        message: "Maximum weight should be 1000 kg.",
                      },
                    })}
                  />
                </div>
                {/* Errors for weight */}
                {errors.weight && (
                  <div className=" text-red-500 text-sm px-2 flex justify-center">
                    {errors.weight.message}
                  </div>
                )}
                {/* Submit */}

                <button
                  className="text-white dark:text-black text-xl p-2  mx-20 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-lg px-5 py-2.5 text-center disabled:cursor-not-allowed"
                  type="submit"
                >
                  Calculate BMI
                </button>
              </form>
            </>
          )}
          {/* heading */}
        </div>
      </div>
    </>
  );
}

export default App;
