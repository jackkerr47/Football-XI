import './EditPlayerModal.css';

import { PlayerModel } from "../../utils/interfaces";

interface ModalRowProps {
    player: PlayerModel;
    label: string;
}

function ModalRow({ player, label }: ModalRowProps) {
    return (
        <div className="modal-row">
            <label>
                {`${label}:`}
                <input type="text" defaultValue={player.name} />
            </label>
        </div>
    )
}

export default ModalRow;