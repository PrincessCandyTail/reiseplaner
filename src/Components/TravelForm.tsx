import {ChangeEvent, FormEvent, useState} from "react";
import {TravelData} from "./types.d.tsx";



export type FormProps = {
    onSave: (travelData: TravelData) => void;
};

export function TravelForm({onSave}: FormProps) {
    const defaultTravelData: TravelData = {
        gender: "Men", // or any other appropriate default value
        name: "",
        type: "Skiing", // or any other appropriate default value
        date: 0,
        destination: "",
        transport: "Car",
        hygiene: 0,
        allergie: false,
        medicine: ""
    };


    const [travelData, setTravelData] = useState<TravelData>(defaultTravelData);
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave(travelData);
        setTravelData(travelData);
        event.currentTarget.reset();

    };
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target;
        const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setTravelData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input type="text" value={travelData.name} required onChange={handleChange} name="name"/>
                </label><br/>
                <label>
                    Geschlecht:
                    <select value={travelData.gender} required onChange={handleChange} name="gender">
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Divers">Divers</option>
                    </select>
                </label><br/>
                <label>
                    Art des Urlaubs:
                    <select value={travelData.type} required onChange={handleChange} name="type">
                        <option value="Skie">Skiing</option>
                        <option value="Hike">Hiking</option>
                        <option value="Sighseeing">Sighseeing</option>
                        <option value="Beach">Beach</option>

                    </select>
                </label><br/>
                <label>
                    Anzahl Tage:
                    <input type="number" value={travelData.date} required onChange={handleChange} name="date"/>
                </label><br/>
                <label>
                    Wo geht die Reise Hin?:
                    <input type="text" value={travelData.destination} required onChange={handleChange}
                           name="destination"/>
                </label><br/>
                <label>
                    Transport:
                    <select value={travelData.transport} required onChange={handleChange} name="transport">
                        <option value="Plane">Plane</option>
                        <option value="Car">Car</option>
                        <option value="By foot">By foot</option>
                        <option value="Öv">Öv</option>
                        <option value="By Bycicle">By Bycicle</option>
                    </select>
                </label><br/>

                <label>
                    Hygiene status: {travelData.hygiene}
                    <input id="HygieneLevel" type="range" min="0" max="3" value={travelData.hygiene} required
                           onChange={handleChange} name="hygiene"/>
                </label><br/>
                <label>
                    Allergien:
                    <input type="checkbox" checked={travelData.allergie}  onChange={handleChange}
                           name="allergie"/>
                </label>
                <label><br/>
                    Medikamente:
                    <input type="text" value={travelData.medicine}  onChange={handleChange} name="medicine"/>
                </label><br/>
                <button type="submit">Submit</button>

            </form>


        </>
    );
}