import React from 'react';
import { iconsDefs } from '../../assets/icons';
import classes from './Icon.module.scss'

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const icon = iconsDefs[this.props.type];
 
        const { className, color, size, ...rest } = this.props;
        const style = { color, fontSize: size };

        return (
            <svg
                className={className}
                height={icon.height}
                width={icon.width}
                viewBox={icon.viewBox}
                style={style}
                {...rest}

            >
                {icon.body}
            </svg>
        );

    }
}

export default Icon;