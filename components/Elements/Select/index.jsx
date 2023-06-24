import React, { useEffect, useState } from 'react'

const Select = (props) => {

  const { options, defaultValue, onChange } = props;

  const [selectActive, setSelectActive] = useState(false);

  const optionSelected = (item) => {
    onChange(item);
    setSelectActive(false);
  }

  useEffect(() => {
    const specifiedElement = document.getElementsByClassName('theme-select-wrapper')[0];

    document.addEventListener('click', (event) => {
      const isClickInside = specifiedElement.contains(event.target);

      if (!isClickInside) {
        setSelectActive(false);
      }
    })
  }, []);

  return (<>
    <div className={`theme-select-wrapper ${selectActive ? 'active' : ''}`}>
      <button
        className={`theme-select-button theme-select-button-main ${defaultValue.length === 0 ? 'not-selected' : ''}`}
        type='button'
        onClick={() => setSelectActive(!selectActive)}
      >
        {defaultValue.length === 0 ? 'Please Select' : defaultValue}
        <img src='/images/icons/chevron-down-black.png' alt='icon button' className="theme-select-button-icon"/>
      </button>
      <ul className='theme-select-list'>
        {options.map((item, key) => <li className='theme-select-list-item' key={`select-key-${key}`}>
          <button
            className={`theme-select-button ${defaultValue === item ? 'active' : ''}`}
            type='button'
            onClick={() => optionSelected(item)}
          >
            {item}
          </button>
        </li>)}
      </ul>
    </div>
  </>)
}

export default Select
