import {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function SearchForm({handleSearch}) {
	const [formData, setFormData] = useState({});

	function handleChange(evt) {
		setFormData(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		handleSearch(formData);
	}

	return(
		// <form className="SearchForm" onSubmit={handleSubmit}>
		// 	<label></label>
		// 	<input ></input>
		// 	<button></button>
		// </form>
		<Form inline onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label htmlFor="searchBox">Search</Form.Label>
				<Form.Control className="mb-2 mr-sm-2" id="searchBox" type="text" placeholder="Search" onChange={handleChange}/>
			</Form.Group>
			<Button>search</Button>
		</Form>
	)
}

export default SearchForm;
