import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Dev',
                gender: 'Male',
                nationality: 'Filipino'
            },
            {
                name: 'Charlie',
                job: 'Dev',
                gender: 'Male',
                nationality: 'Filipino'
            }
        ]
    }
    removeCharacter = index => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
    }

    handleSubmit1 = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state   

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit1} />
            </div>
        )
    }
}

export default App