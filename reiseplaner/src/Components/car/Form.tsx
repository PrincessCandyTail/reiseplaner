import {useState} from "react";

export type Service = {
    name: string;
    type: "Small" | "Big";
    brand: string;
    numberplate: string;
    effort: number;
    urgency: boolean;
};

export type ServiceFormProps = {
    onSave: (service: Service) => void;
};

export function Form({onSave}: ServiceFormProps) {
    const [name, setName] = useState('');
    const [type, setType] = useState<'Small' | 'Big'>('Small');
    const [brand, setBrand] = useState('');
    const [numberplate, setNumberplate] = useState('');
    const [effort, setEffort] = useState(0);
    const [urgency, setUrgency] = useState(false);

    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    onSave({name, type, brand, numberplate, effort, urgency});
                }}
            >
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Type:
                    <select value={type} onChange={(e) => setType(e.target.value as 'Small' | 'Big')}>
                        <option value="Small">Small</option>
                        <option value="Big">Big</option>
                    </select>
                </label>
                <label>
                    Brand:
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                </label>
                <label>
                    Numberplate:
                    <input type="text" value={numberplate} onChange={(e) => setNumberplate(e.target.value)}/>
                </label>
                <label>
                    Effort in hours:
                    <input type="number" value={effort} onChange={(e) => setEffort(Number(e.target.value))}/>
                </label>
                <label>
                    Urgency:
                    <input type="checkbox" checked={urgency} onChange={(e) => setUrgency(e.target.checked)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );

}

