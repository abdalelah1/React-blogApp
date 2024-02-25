const Home = () => {
    const HandlClick = () => {
        alert('hello , ')
    }
    const HandlClickAgain = (name) => {
        alert('hello , ' + name)
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={HandlClick}>Click Me </button>
            <button onClick={() =>
                HandlClickAgain('Abdalelah')}> Again </button>
        </div>
     );
}
 
export default Home;