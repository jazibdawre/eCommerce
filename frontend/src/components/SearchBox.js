import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      inline
      style={{ width: '70%', justifyContent: 'center' }}
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
        style={{ width: '60%', borderRadius: 6 }}
      />
      <Button
        type="submit"
        variant="outline-success"
        className="p-2"
        style={{ borderRadius: 6 }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
