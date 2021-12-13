import { PlantListItem } from "./PlantListItem"

export const PlantList = ({ plants }) => {
    return (
        <div className="plant-list">
            {plants.map((plantObj) => <PlantListItem key={plantObj.id} plant={plantObj}/>)}
        </div>
    )
}