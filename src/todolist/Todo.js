import Button from '@atlaskit/button/new';
import Trash from '@atlaskit/icon/glyph/trash';
import '../index.css';
import React from 'react';

const TrashIcon = ({value,onTrashBtnClick}) => (
    <span className='trash-icon' onClick={() => onTrashBtnClick(value.Id)}>
        <Trash />
    </span>
);

const ButtonStyled = ({ value, onTrashBtnClick }) => {
    const style = { textDecoration: value.isDeleted ? 'line-through' : 'none' };
    return (
        <div className="button-styled" style={style}  >
            <Button
                shouldFitContainer
                iconAfter={() => <TrashIcon value = {value} onTrashBtnClick={onTrashBtnClick} />}     
            >
                {value.name}
            </Button>
            <br />
        </div>
    );
};

export default function Todo({ todo, onTrashBtnClick }) {
    return <ButtonStyled value={todo} onTrashBtnClick={onTrashBtnClick} />;
}