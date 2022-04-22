import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import classes from './ListPanel.module.scss';

class ListPanel extends Component {

    render() {
        return (
            <div className={classes.container}>
                {this.props.list.length === 0 ?
                    <div className={classes.empty}>"List is empty"</div> :
                    <ul className={classes.customList}>
                        {this.props.list.map(item => {
                            return <li
                                className={item.isChecked == true ?
                                    classes.isNotDone :
                                    classes.isDone}
                                key={item.id}>
                                <ListItem
                                    id={item.id}
                                    itemText={item.value}
                                    isChecked={item.isChecked}
                                    onItemChecked={this.props.onItemChecked}
                                    onRemoveClicked={this.props.onRemoveClicked}
                                />
                            </li>
                        })}
                    </ul>
                }
            </div>
        );
    }
}

export default ListPanel;