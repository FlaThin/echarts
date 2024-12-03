import { useEffect, useState } from "react"
import { usePerMonth } from "../../hooks/content/perMonth";
import { BarGraph } from "../graph/bar-graph";

export function Overview () {
    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            const data = await usePerMonth();
            setData(data);
        }

        getData();
    }, []);
    
    return (
        <div>
            <h1>Overview Atendimentos</h1>
            <BarGraph data={data}/>
        </div>
    )
}