import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    Trainings : {sessionStorage.getItem('pass')}
                </header>
            </div>
        )
    }
}