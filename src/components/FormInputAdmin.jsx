const FormInputAdmin = ({ labelName, value, onChange }) => {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {labelName}
      </label>
      <input
        type="text"
        id="large-input"
        value={value}
        onChange={onChange}
        className="bg-[#3EB489] border border-[#3EB489]  text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black font-bold"
      />
    </div>
  );
};

export default FormInputAdmin;
