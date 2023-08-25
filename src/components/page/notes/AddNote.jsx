import React from "react";
import { useForm } from "react-hook-form";
import useNote from "../../hooks/useNote";

const AddNote = ({setAddNote}) => {
  const {addNewNote} = useNote()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSub = (_bodyData) => {
    addNewNote(_bodyData)
    reset()
    setAddNote(false)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSub)}>
        <div className="bg-gradient-to-br from-sky-300 to-indigo-700 justify-center items-center w-full px-10 py-8 rounded-xl shadow-md">
          <div className="space-y-4">
            <h1 className="text-center text-[1.7em] font-semibold text-blue-700">
             Add Note
            </h1>
              <textarea
                {...register("information", {
                  required: { value: true, message: "information required..." },
                  minLength: {value: 3 , message:"information required..."},
                })}
                rows="5"
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-black text-[1.1em]"
              />
              {errors.information && (
                <p className=" text-red-500">{errors.information.message}</p>
              )}
            
          </div>
          <div className="flex gap-5">
            <button type="submit" className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
              Add
            </button>
            <button
              onClick={() => reset()}
              className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
