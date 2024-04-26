import { useState } from "react"
import { ServiceDisplay } from "./ServiceDisplay.tsx"
import { NewService, Service } from "./types.d.tsx"
import {ServiceForm} from "./ServiceForm.tsx";

export function ServicePage() {
    const [services, setServices] = useState<Service[]>([
        { id: crypto.randomUUID(), name: "Lucy Fernandez", brand: "Lada", expense: 3, type: "small", numberplate: "ZH30294", important: false },
        { id: crypto.randomUUID(), name: "John Smith", brand: "Toyota", expense: 5, type: "big", numberplate: "ABC123", important: true },
        { id: crypto.randomUUID(), name: "Emily Johnson", brand: "Honda", expense: 4, type: "small", numberplate: "XYZ987", important: false },
        { id: crypto.randomUUID(), name: "Michael Williams", brand: "Ford", expense: 6, type: "small", numberplate: "DEF456", important: true },
        { id: crypto.randomUUID(), name: "Sophia Brown", brand: "Chevrolet", expense: 4, type: "small", numberplate: "GHI789", important: false },
        { id: crypto.randomUUID(), name: "Daniel Miller", brand: "Volkswagen", expense: 7, type: "small", numberplate: "JKL321", important: true },
        { id: crypto.randomUUID(), name: "Olivia Martinez", brand: "Nissan", expense: 5, type: "small", numberplate: "MNO654", important: false },
        { id: crypto.randomUUID(), name: "James Taylor", brand: "BMW", expense: 8, type: "big", numberplate: "PQR987", important: true },
        { id: crypto.randomUUID(), name: "Ava Garcia", brand: "Mercedes-Benz", expense: 7, type: "small", numberplate: "STU246", important: false },
        { id: crypto.randomUUID(), name: "Ethan Anderson", brand: "Audi", expense: 6, type: "small", numberplate: "VWX135", important: true }
    ]);
    const [editService, setEditService] = useState<Service>();
    const onSave = (service: Service | NewService) => {
        if (!("id" in service)) {
            setServices((prev) => [
                ...prev,
                {...service, id: crypto.randomUUID()}
            ]);
        } else {
            setServices((prev) => prev.map((s) => s.id === service.id ? service : s))
        }
    }

    const onDelete = (id: string) => {
        setServices(services.filter((service) => service.id !== id));
    }

    const onUpdate = (id: string) => {
        setEditService(services.find((service) => service.id === id));
    }

    return <main>
        <h2>Services</h2>
        <ServiceDisplay data={services} onUpdate={onUpdate} onDelete={onDelete} />
        <ServiceForm onSave={onSave} edit={editService} />
    </main>
}