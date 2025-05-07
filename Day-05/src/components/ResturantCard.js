const ResturantCard=(props)=>{
    // we can also destructure the resdata object directly in the function parameters. as follows:
    // const ResturantCard=({resdata})=>{
    
    // The props object contains all the properties passed to the component.
    // In this case, it contains the resdata property, which is an object representing a restaurant card.
    // Destructuring the props object to extract the resdata property
    // This allows us to access the data of the restaurant card directly without having to use props.resdata.data.
    const {resdata} = props;
    const{name, image, cuisine, deliveryTime, rating} = resdata?.data;
  
    return(
      <div className="res-card">
        <img className ="food-img" src={image} />
        <h3>{name}</h3>
        <h4>Cuisines: {cuisine}</h4>
        <h4>ETA: {deliveryTime}</h4>
        <h4>Rating: {rating}</h4>
      </div>
    );
  }

export default ResturantCard;