// components/SearchForm.js
import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(registrationNumber);
  };

  return (
    <form className="flex justify-center items-center mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border p-2 rounded-l"
        placeholder="Registration Number"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-700">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
