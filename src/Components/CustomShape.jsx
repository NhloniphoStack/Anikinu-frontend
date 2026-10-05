import { Sector } from "recharts";


export default function CustomShape(props){
    const Colors = ['#8b5ff6', '#22c553', '#3b82f6', '#ef5666']
    return (
        <Sector {...props} fill={Colors[props.index % Colors.length]} />
    )
}