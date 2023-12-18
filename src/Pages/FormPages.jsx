import { useState } from 'react';
import axios from 'axios';
import FormInputAdmin from '../components/FormInputAdmin';

const FormPages = () => {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [option, setOption] = useState('');

  const handleForm = async (ev) => {
    ev.preventDefault();
    try {
      const formData = {
        category,
        productName,
        price,
        description,
        image,
      };

      // Send the form data to the backend
      await axios.post('https://jardin-api.vercel.app/products', formData);
      alert('Success add product');
      // console.log(formData);

      // Reset form fields after successful submission
      setCategory('');
      setProductName('');
      setPrice('');
      setDescription('');
      setImage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add product');
    }
  };

  return (
    <div className=" bg-[#F6F4EB] min-h-screen pb-5">
      <div className="min-h-screen flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-xl flex justify-center mt-3">
          Jardin Admin Page Add Product
        </h1>
        <form className="w-[40%] " onSubmit={handleForm}>
          <FormInputAdmin
            labelName={'Category'}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <FormInputAdmin
            labelName={'Product Name'}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <FormInputAdmin
            labelName={'Price'}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <FormInputAdmin
            labelName={'Description'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormInputAdmin
            labelName={'Images'}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <FormInputAdmin
            labelName={'Quantity'}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <FormInputAdmin
            labelName={'Option'}
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#3EB489] border border-[#D0E7D2]  text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPages;
