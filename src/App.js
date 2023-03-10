import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}













// function  LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>{

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   }, [])
//   return(
//   <div>
//     <h1>Visiting Rest Countries</h1>
//     <h2>Available Countries On API: {countries.length}</h2>
//     <div>
//     {
//       countries.map(country =><p><Country name={country.name.common} population={country.population} area={country.area}></Country></p>)
//     }
//     </div>
//   </div>
//   )
// }

// function Country(props){
//   return(
//     <div className='country'>
//       <h2>Name : {props.name}</h2>
//       <h3>Population: {props.population}</h3>
//       <p>Area : {props.area}</p>
//     </div>
//   )
// }


export default App;
