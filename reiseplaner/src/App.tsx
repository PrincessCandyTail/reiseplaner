
import './App.css'
import {TravelForm} from "./Components/TravelForm.tsx";
import {Gepaeck, TravelData} from "./Components/types.d.tsx";
import ListForm from "./Components/ListForm.tsx";
import {useState} from "react";

function App() {

    const [gepaeck , setGepaeck]  = useState< Gepaeck | undefined>();
    const saveHandler = (formData: TravelData) => {


        const newGepaeck: Gepaeck = {
            type: formData.type,
            name: formData.name,
            underwear: calculateHygine(formData.hygiene,formData.date),
            destination: formData.destination,
            allergie: formData.allergie,
            medicine: formData.medicine,
            hosen: "",
            skiJacken: "",
            skiHosen: "",
            skies: "",
            thermoClothes: ""

        };

        setGepaeck(newGepaeck);
    };
    const calculateHygine = (hygiene: number, date: number): number => {
        if (hygiene === 0) {
            return 0;
        } else if (hygiene === 1) {
            return date;
        } else if (hygiene === 2) {
            return (date + 1);
        } else {
            return date + 2;
        }
    }
    return (
        <>
            <div>
                <h1>Reisegepäck-Planer</h1>
            </div>
            <div>
                <TravelForm onSave={saveHandler}/>
            </div>
            <ListForm data={gepaeck}/>
        </>
    )
}

export default App
