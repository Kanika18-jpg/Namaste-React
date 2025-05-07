import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useState} from "react";
const Body=()=>{

  // useState hook here is used to create a state variable called filteredData and a function setFilteredData to update it. The initial value of filteredData is set to resObj, which is imported from the mockData file.
    // The useState hook is a built-in React hook that allows functional components to manage state. It returns an array with two elements: the current state value and a function to update that value.
    // In this case, filteredData will hold the data of restaurants, and setFilteredData will be used to update that data when the filter button is clicked.
  // here array destructuring is used to extract the two elements from the array returned by useState. The first element filteredData is the current state value, and the second element setFilteredData is a function that can be used to update the state.
    const [filteredData, setFilteredData] = useState(resObj);

  
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
             const filterData =  resObj.filter((resObj)=>(resObj.data.rating>=4.5));

             //when state changes, the component re-renders and the new value of filteredData is used to display the filtered list of restaurants.
              setFilteredData(filterData);
            
          }}>
          Top Rated Resturants</button>
        </div>
        <div className="res-container">
          {filteredData.map((filteredData)=><ResturantCard key={filteredData?.data?.name} resdata={filteredData}/>)}
        </div>
      </div>
    );
  }

export default Body;