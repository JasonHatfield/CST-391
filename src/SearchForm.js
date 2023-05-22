import React from "react";

class SearchForm extends React.Component
{
    state = { inputText: "" };

    handleChangeInput = (event) =>
    {
        this.setState( {inputText: event.target.value} );
        console.log(this.state.inputText);
    }

    handleFormSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onSubmit(this.state.inputText);
    }

    render()
    {
          return (
               <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your search here" onChange={ this.handleChangeInput }/>
                        </div>
                    </form>
               </div> )
    }
}

export default SearchForm;