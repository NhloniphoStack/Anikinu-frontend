import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts"
import CustomShape from "./CustomShape.jsx"

export default function MyChart({data}){
    
    const planned = () => data?.filter(a => a.status === 'PLANNING')
    const completed = () => data?.filter(a => a.status === 'COMPLETED')
    const dropped = () => data?.filter(a => a.status === 'DROPPED')
    const watching = () => data?.filter(a => a.status === 'WATCHING')
    console.log(planned().length)
    const dataValue = [
        {name: "Plan to watch", value: planned()?.length},
         {name: "Completed", value: completed()?.length},
          {name: "Dropped", value: dropped()?.length},
          {name: "Watching", value: watching()?.length},
    ]
    return(
        <PieChart width={250} height={250}>
            <Pie
            
            data={dataValue}
            dataKey="value"
            nameKey="name"
            cx="50%"
            
            cy="50%"
            shape={CustomShape}
            outerRadius={100}
            />
            <Tooltip />
           
        </PieChart>
    )
}