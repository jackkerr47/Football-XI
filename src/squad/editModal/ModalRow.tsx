import './EditPlayerModal.css';

import { PlayerModel } from '../../utils/interfaces';

interface ModalRowProps {
    initialValue: string;
    field: keyof PlayerModel;
    label: string;
    onChange: (field: keyof PlayerModel, value: string) => void;
}

function ModalRow({ initialValue, field, label, onChange }: ModalRowProps) {
    return (
        <div className="modal-row">
            <label>
                {`${label}:`}
                <input
                    type="text"
                    defaultValue={initialValue}
                    onChange={(e) => onChange(field, e.target.value)}
                />
            </label>
        </div>
    );
}

export default ModalRow;
