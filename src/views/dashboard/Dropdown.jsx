import React, { useEffect, useState, useRef } from 'react';
import './style.css';

const defaultValue = {
  id: 0,
  value: '',
};
const options = [
  {
    id: 1,
    value: 'cat',
  },
  {
    id: 2,
    value: 'Dog',
  },
  {
    id: 3,
    value: 'Animal',
  },
  {
    id: 4,
    value: 'fdsfds',
  },
  {
    id: 5,
    value: 'eelepheant',
  },
  {
    id: 6,
    value: 'cramel',
  },
];
export  function App() {
  // value, options, onSelect, onChange
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="select-box-container">
      <SelectBox
        options={options}
        selectedOption={selectedOption}
        onSelect={handleChange}
      />
    </div>
  );
}

function SelectBox(props) {
  const { selectedOption, options, onSelect, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    if (term.length) {
      setFilteredOptions(
        options.filter((o) => o.value.toLowerCase().includes(term))
      );
    } else {
      setFilteredOptions(options);
    }
  }, [term]);

  useEffect(() => {
    debugger;
    setTerm(selectedOption.value);
    setIsOpen((prev) => false);
  }, [selectedOption]);

  const handleSelect = (option) => {
    console.log(option);
    onSelect(option);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleClear = (event) => {
    setTerm('');
  };

  return (
    <main onBlur={() => setIsOpen(false)} onFocus={() => setIsOpen(true)}>
      <div className="dropdown">
        <input
          placeholder="Type anything...."
          type="text"
          value={term}
          onChange={handleChange}
        />{' '}
        <span onClick={handleClear}> X</span>
        <span className="border-right"> </span>
      </div>

      {isOpen && filteredOptions.length ? (
        <div className="suggestions">
          {filteredOptions.map((o) => (
            <div
              className="option"
              key={o.id}
              onMouseDown={() => handleSelect(o)}
            >
              {' '}
              {o.value}{' '}
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}

export default SelectBox;