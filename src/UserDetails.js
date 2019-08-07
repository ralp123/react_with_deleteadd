import React, { Component } from 'react'

class UserDetails extends Component {
    render() {
        const { characterData } = this.props
        
        const UserD = props => {
            const details = props.characterData.map((row, index) => {
                return (   
                    <>               
                        <>{row.email}</>
                    </>
                )
            })
          
            return <>{details}</>
        }

        return (
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="float-left"><a href="#about"><UserD characterData={characterData} /> </a></li>
            </ul>
            
        )
    }
}

export default UserDetails