import './EditPlayerModal.css';

import { PlayerModel } from '../../utils/interfaces';

interface ModalRowProps {
    initialValue: string;
    field: keyof PlayerModel;
    label: string;
    onChange: (field: keyof PlayerModel, value: string) => void;
    useTextInput?: boolean;
    options?: string[];
}

function ModalRow({
    initialValue,
    field,
    label,
    onChange,
    useTextInput = true,
    options = []
}: ModalRowProps) {
    return (
        <div className="modal-row">
            <label>
                {`${label}:`}
                {useTextInput ? (
                    <input
                        type="text"
                        defaultValue={initialValue}
                        onChange={(e) => onChange(field, e.target.value)}
                    />
                ) : (
                    <select
                        defaultValue={initialValue}
                        onChange={(e) => onChange(field, e.target.value)}
                    >
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                )}
            </label>
        </div>
    );
}

export default ModalRow;
