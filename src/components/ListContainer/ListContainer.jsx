import React, { Component } from 'react';
import ListControls from './components/ListControls/ListControls';
import ListPanel from './components/ListPanel/ListPanel';
import classes from './ListContainer.module.scss';

class ListContainer extends Component {
    state = {
        list: [],
        addString: ""
    }

    constructor(props) {
        super(props);

        this.onChangeNewTaskLine = this.onChangeNewTaskLine.bind(this);
        this.onClickButtonHandler = this.onClickButtonHandler.bind(this);
        this.onItemChecked = this.onItemChecked.bind(this);
        this.onRemoveClicked = this.onRemoveClicked.bind(this);
    }

    onChangeNewTaskLine(newString) {
        this.setState({
            addString: newString
        });
    }

    onClickButtonHandler(newItem) {
        this.setState({
            list: this.state.list.concat(newItem),
            addString: "",
        });
    }

    onItemChecked(data) {
        let target = this.state.list.find(item => item.id === data.key);
        target.isChecked = data.value;

        this.setState({
            list: this.state.list,
        });
    }

    onRemoveClicked(id) {
        this.setState({
            list: this.state.list.filter(item => item.id !== id),
        });
    }

    render() {
        return (
            <div className={classes.container}>
                <ListControls
                    count={this.state.list.length}
                    value={this.state.addString}
                    onChangeNewTaskLine={this.onChangeNewTaskLine}
                    onClickButtonHandler={this.onClickButtonHandler}
                />
                <hr />
                <ListPanel
                    list={this.state.list}
                    onItemChecked={this.onItemChecked}
                    onRemoveClicked={this.onRemoveClicked}
                />
            </div>
        );
    }
}

export default ListContainer;