import ExchangeRate from "./ExchangeRate";
function App() {

  return ( 
    <div className="ExchangeRate">
    <ExchangeRate from="USD" to="KGS" />
    <ExchangeRate from="EUR" to="KGS" />
</div>
   );
}

export default App;