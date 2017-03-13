import React, { Component } from 'react';
function getName(name) {
    return name.firstName + '' + name.lastName
}

const name = {
    firstName: "chen",
    lastName: "chuan"
}
function change () {
        console.log(1)
    };
const haha = [1, 2, 3, 4, 5, 6]

class Hello extends Component {

    render() {
        return (
            <div>
                {
                    haha.map(function (item) {
                        return item + ';'
                    })
                }
                {name.lastName}
                {getName(name)}
                {this.props.color}
                <button onClick={change}>click</button>
            </div>

        );
    }
}

export default Hello;