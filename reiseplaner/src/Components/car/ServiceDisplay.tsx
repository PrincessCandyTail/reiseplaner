import { Service } from "./types.d.tsx";

type ServiceDisplayProp = {
    data: Service[];
    onDelete: (id: string) => void;
    onUpdate: (id: string) => void;
}

export function ServiceDisplay(props: ServiceDisplayProp) {
    return <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Marke</th>
            <th>Aufwand in Stunden</th>
            <th>Serviceart</th>
            <th>Autonummer</th>
            <th>Dringlichkeit</th>
            <th>Aktionen</th>
        </tr>
        </thead>
        <tbody>
        {props.data.map((service) => <tr key={service.numberplate}>
            <td>{service.name}</td>
            <td>{service.brand}</td>
            <td>{service.expense}</td>
            <td>{service.type}</td>
            <td>{service.numberplate}</td>
            <td>{service.important ? "✅" : "❌"}</td>
            <td>
                <button onClick={() => props.onUpdate(service.id)}>Edit</button>
                <button onClick={() => props.onDelete(service.id)}>Delete</button>
            </td>
        </tr>)}
        </tbody>
    </table>
}