import React from 'react'

class Dropdown extends React.Component{

    state = {
        categorySelect: "9",
        difficultyValue: "easy"
    }

    handleCategory = (event) => {
        this.setState({categorySelect: event.target.value});
      }

    handleDifficulty = (event) => {
        this.setState({difficultyValue: event.target.value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        let num = Number(this.state.categorySelect);
        let diff = this.state.difficultyValue;

        this.props.getQuestions(num,diff)

      }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                    <label>
                    Pick a category:
                    <select value={this.state.value} onChange={this.handleCategory}>
                        <option value="9">General Knowledge</option>
                        <option value="27">Animals</option>
                        <option value="10">Books</option>
                        <option value="26">Celebrities</option>
                        <option value="11">Films</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="12">Music</option>
                        <option value="17">Science / Nature</option>
                        <option value="21">Sports</option>
                    </select>
                    </label>

                    <label>
                    Pick difficulty:
                    <select value={this.state.value} onChange={this.handleDifficulty}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        )
    }
}

export default Dropdown