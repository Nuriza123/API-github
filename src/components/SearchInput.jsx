import { debounce } from 'lodash';
import React from 'react';
import { Form } from 'react-bootstrap';

const SearchInput = ({ handleChange }) => { // Убираем типизацию
  return (
    <div>
      <Form className='search_input'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>API GitHub Search</Form.Label>
          <Form.Control onChange={debounce(handleChange)} type="search" placeholder="Search" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchInput;
