import React from "react";
import {Gepaeck} from "./types.d.tsx";

type props = {
    data: Gepaeck | undefined;

}
export default function ListForm({data}: props) {

    const SkiItems = (type: string | undefined) => {
        if (type === "Skiing") {
            return (
                <>
                    <label>{data?.skiJacken}</label><br />
                    <label>{data?.skiHosen}</label><br />
                    <label>{data?.skies}</label><br />
                    <label>{data?.thermoClothes}</label><br />
                </>
            );
        }
    };
    return (
        <>
            <div>
                <h1>Die Packliste von {data?.name}</h1>
                <p>Die Reise nach: {data?.destination}</p>

                <input type="checkbox" />
                <label>{data?.medicine}</label>
                <label>Unterhosen: {data?.underwear}</label><br/>
                <label>{SkiItems}</label>


            </div>
        </>

    );

}