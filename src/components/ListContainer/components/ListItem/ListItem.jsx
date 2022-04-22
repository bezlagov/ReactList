import React, { Component } from 'react';
import classes from './ListItem.module.scss';

class ListItem extends Component {

    constructor(props) {
        super(props);

        this.onItemChecked = this.onItemChecked.bind(this);
        this.onRemoveClicked = this.onRemoveClicked.bind(this);
    }

    onItemChecked(e) {
        this.props.onItemChecked({
            key: this.props.id,
            value: e.target.checked,
        });
    }

    onRemoveClicked(e) {
        e.preventDefault();
        this.props.onRemoveClicked(this.props.id);
    }

    render() {
        return (
            <div className={classes.customListItem} key={this.props.id}>
                <input
                    className={classes.itemCheckbox}
                    type="checkbox"
                    checked={this.props.isChecked}
                    onChange={this.onItemChecked} />

                <p
                    className={this.props.isChecked == true ?
                        classes.itemTextDone :
                        classes.itemText}>
                    {this.props.itemText}
                </p>

                <button
                    className={classes.itemButton}
                    onClick={this.onRemoveClicked}
                >Remove</button>
            </div>
        );
    }
}

export default ListItem;