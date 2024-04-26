import {ChangeEvent, FormEvent, useEffect, useState} from "react"
import {NewService, Service} from "./types.d.tsx"

type ServiceFormProps = {
    onSave: (service: Service | NewService) => void,
    edit?: Service
}

const defaultService: Service = {
    brand: "",
    "expense": 0,
    id: "",
    important: false,
    name: "",
    numberplate: "",
    type: "small"
};

export function ServiceForm(props: ServiceFormProps) {
    const [service, setService] = useState<Service>(
        {brand: "", expense: 0, id: "", important: false, name: "", numberplate: "", type: "small"}
    );
    const [hour] = useState<string>();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (service) {
            event.preventDefault();
            props.onSave(service);
            setService(defaultService);
            event.currentTarget.reset();
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        if (validate()) {
            setService((prev) => {
                let value: string | number | boolean = event.target.value;
                if (event.target.name === "expense") {
                    value = parseInt(value);
                }
                if (event.target.name === "important") {
                    value = !service.important;
                }
                return {...prev, [event.target.name]: value}
            });
        }
    }

    function validate() {
        return checkHours() ;
    }

    function checkHours() {
        if (hour >= 20) {
            return false;
        } else if (hour < 1) {
            return false;
        }

        return true;
    }


    useEffect(() => {
        if (props.edit) {
            setService(props.edit);
        }
    }, [props.edit]);

    return <form onSubmit={onSubmit}>
        <label>Name<input type="text" name="name" required onChange={handleChange} value={service?.name}/></label>

        <label>Marke<input type="text" name="brand" required onChange={handleChange} value={service?.brand}/></label>

        <label>Aufwand in Stunden<input type="number" name="expense" required onChange={handleChange}
                                        value={service?.expense || ""}/></label>

        <label>Serviceart<select name="type" required onChange={handleChange} value={service?.type}>
            <option value="small">Klein</option>
            <option value="big">Gross</option>
        </select>

        </label>

        <label>Autonummer<input type="text" name="numberplate" required onChange={handleChange}
                                value={service?.numberplate}/></label>
        <label>Dringlichkeit<input type="checkbox" name="important" onChange={handleChange}
                                   checked={service.important}/></label>

        <button type="submit">Eintragen</button>
    </form>
}