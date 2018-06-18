import React from "react";


const interns = [{  id : 1,
                    name: "Bari"
                }, 
                {
                    id: 2,
                    name: "Jayanthi"
            }, {
                id: 3,
                name: "Karthikey"
            }, 
            {
                id: 4,
                name: "Karthik"
            }, 
            {
                id: 5,
                name: "Deepanshu"
            }, 
            {
                id: 6,
                name: "Angel"
            }];
            
class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            searchResults: [],
            searchQuery: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event){
        const searchQuery = event.target.value;
        this.setState({ searchQuery });
        this.setState({ searchResults: interns.filter((intern) => intern.name.startsWith(searchQuery))});
    }

    renderSearchResults() {
        const { searchResults, searchQuery} = this.state;
        if(!searchQuery) {
            return '';
        }
        if (searchResults.length > 0){
            return(
            <div className="Search-result">
                {searchResults.map(result => (
                    <div key={result.id}>
                        {result.name}
                    </div>
                    ))}
                </div>
            );
        } else {
            return '';
        }
    }

    render() {
        return(
            <div className="searchDiv">
                <input
                    className="Search-input"
                    type="text"
                    placeholder="Intern Name"
                    onChange={this.handleChange}
                    value={this.searchQuery}
                />
                { this.renderSearchResults() }
            </div>
        );
    }
}

export default Search;