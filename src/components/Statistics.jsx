import React from "react";
const Statistics = ({title,stats}) => {
    return(
    <section>
    <h2 className="h2-stat">{title}</h2>
    <ul className="ul-statistics">
    {stats.map((state,index) => (
        <li className="li-stat" key={index}>
            <span>{state.label}</span>
            <span>{state.percentage}%</span>
        </li>
    ))}
    </ul>
    </section>
    )
}
export default Statistics