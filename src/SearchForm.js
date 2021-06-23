import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchForm.css';

/**
 * SearchForm component
 *
 * Props: handleSearch (function)
 * 				initialSearchTerm (string)
 *
 * State: searchTerm
 *
 * CompanyList / JobList -> SearchForm
 */
function SearchForm({ initialSearchTerm, handleSearch }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  /** controls form input element */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /** calls handleSearc in parent component */
  function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('searchTerm in handlesubmit= ', searchTerm);
    evt.preventDefault();
    handleSearch(searchTerm);
  }

  return (
    <div class="SearchForm">
      <Form inline onSubmit={handleSubmit}>
        <Form.Group class="FormInput">
          <Form.Label htmlFor="searchBox"></Form.Label>
          <Form.Control
            value={searchTerm}
            id="searchBox"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="dark" className="SearchForm-Button">
          search
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
