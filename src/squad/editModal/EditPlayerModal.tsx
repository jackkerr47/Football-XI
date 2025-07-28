import '../../main/Main.css';
import './EditPlayerModal.css';

import Button from '../../general/Button.tsx';
import ModalRow from './ModalRow.tsx';
import { PlayerModel } from '../../utils/interfaces';
import { useState } from 'react';

interface EditPlayerModalProps {
    player: PlayerModel;
    onModalClose: () => void;
    onPlayerChange: (updatedPlayer: PlayerModel) => void;
}

function EditPlayerModal({
    player,
    onModalClose,
    onPlayerChange
}: EditPlayerModalProps) {
    const [editedPlayer, setEditedPlayer] = useState<PlayerModel>(player);
    const rowLabels = ['Name', 'Position', 'Club', 'Country'];

    const handleFieldChange = (field: keyof PlayerModel, value: string) => {
        setEditedPlayer((prev) => ({
            ...prev,
            [field.toLowerCase()]: value
        }));
    };

    const handleSave = () => {
        onPlayerChange(editedPlayer);
        onModalClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                Edit player
                <button className="modal-close" onClick={onModalClose}>
                    &times;
                </button>
                <div className="modal-body">
                    {rowLabels.map((element) => (
                        <ModalRow
                            initialValue={editedPlayer[element.toLowerCase()]}
                            field={element.toLowerCase() as keyof PlayerModel}
                            label={element}
                            key={element}
                            onChange={handleFieldChange}
                        />
                    ))}
                    <Button label={'Save'} onClick={handleSave} />
                </div>
            </div>
        </div>
    );
}

export default EditPlayerModal;
