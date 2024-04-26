export type TravelData = {
    name: string;
    gender: "Men" | "Women" | "Divers";
    date: number;
    type: "Hike" | "Sightseeing" | "Beach" | "Skiing" ;
    destination: string;
    transport: "Plane" | "Car" | "Öv" | "By foot" | "By Bycicle";
    hygiene: number;
    allergie: boolean;
    medicine: string;

};

export type Gepaeck = {
    type: string;
    name: string;
    underwear: number;
    destination: string;
    allergie: boolean;
    medicine: string;
    hosen:string;
    skiJacken:string;
    skiHosen:string;
    skies:string;
    thermoClothes:string;

}