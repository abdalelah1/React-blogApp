import { useState } from "react"
const Home = () => {
    const [name , setName] = useState('Abdalelah')
    const HandlClick =() =>{
    setName ('Taleb')
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <h2>{name}</h2>
            <button onClick={HandlClick}>Click Me </button>
        </div>
     );
}
 
export default Home;