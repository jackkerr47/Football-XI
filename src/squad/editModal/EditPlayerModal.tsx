import '../../main/Main.css';
import './EditPlayerModal.css';

import ModalRow from './ModalRow.tsx';
import { PlayerModel } from '../../utils/interfaces';

interface EditPlayerModalProps {
    player: PlayerModel;
    onModalClose: () => void;
}

function EditPlayerModal({ player, onModalClose }: EditPlayerModalProps) {
    const rowLabels = ['Name', 'Position', 'Club', 'Country'];

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
                            player={player}
                            label={element}
                            key={element}
                        />
                    ))}
                    <button>Hi</button>
                </div>
            </div>
        </div>
    );
}

export default EditPlayerModal;
