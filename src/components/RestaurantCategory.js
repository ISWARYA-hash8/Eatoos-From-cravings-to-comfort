import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
   // const [showItems,setShowItems] = useState(false);

    const handleClick = () =>{
    //     setShowItems(!showItems);
    setShowIndex();
    
    }
    console.log( data);
    return(
    <div>
        <div className="w-6/12 mx-auto  my-4 bg-gray-60 shadow-lg p-4 " >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className=" font-serif text-lg font-semibold">{
               data?.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            
            { showItems && <ItemList  items = {data.itemCards}/>}
        </div>

    </div>
    )
}

export default RestaurantCategory;