import React, { Component } from 'react';
import { v4 } from 'uuid';
import classes from './ListControls.module.scss';

class ListControls extends Component {
    constructor(props) {
        super(props);
       
        this.onClickButtonHandler = this.onClickButtonHandler.bind(this);
        this.onChangeNewTaskLine = this.onChangeNewTaskLine.bind(this);
    }

    onChangeNewTaskLine(e) {
        this.props.onChangeNewTaskLine(e.target.value);
    }

    onClickButtonHandler(e) {
        e.preventDefault();

        if (this.props.value === "") {
            return;
        }

        this.props.onClickButtonHandler({
            id: v4(),
            value: this.props.value,
            isChecked: false,
        });
    }

    render() {
        return (
            <div>
                <h2 className={classes.header}>Todo list. Items: {this.props.count}</h2>
                <div>
                    <input className={classes.addInput} type="text" onChange={this.onChangeNewTaskLine} value={this.props.value} />
                    <button className={classes.addButton}  onClick={this.onClickButtonHandler}>Add task</button>
                </div>
            </div>
        );
    }
}

export default ListControls;