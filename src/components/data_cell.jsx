import React, { Fragment } from 'react';
import classnames from 'classnames';

const DataCell = ({ cellID, x, y, selectedPositions }) => {
    const isSelected = selectedPositions.find(position => position && position.x == x && position.y == y);
    const direction = isSelected && isSelected.direction;
    return(
        <td
            className={classnames({
                [direction]: direction,
            })}
        >
            <Fragment>
                {cellID}
            </Fragment>
        </td>
    )
}

export default DataCell;
