export const styleOptions = {
  control: (styles) => ({
    ...styles,
    width: '20vw',
    minWidth:'10rem',
    maxWidth: '15rem',
    height: '3rem',
    borderRadius: '5px',
    color: 'black',
    fontSize: '0.9rem',
    lineHeight: '1.75rem',
    backgroundColor: '#8F43EE',
    cursor: 'pointer',
    border: 'none',
    ':hover': {
      color: 'black',
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'white',
  }),
  option: (styles) => {
    return {
      ...styles,
      color: 'black',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
      width: '100%',
      background: '#fff',
      ':hover': {
        backgroundColor: 'rgb(243 244 246)',
        color: '#8F43EE',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: '#000',
      maxWidth: '14rem',
      border: '2px solid #000000',
      borderRadius: '5px',
      boxShadow: '5px 5px 0px 0px rgba(0,0,0);',
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#fff',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
    };
  },
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
};
