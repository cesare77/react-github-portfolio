import { useNavigate } from "react-router-dom";

function Search({userName, setUserName}) {
  const navigate = useNavigate();

  return (
    <div className="user-name-form">
      <h2>Search by github username</h2>
      <input value={userName} onChange={e => setUserName(e.target.value)}/>
      <div>
        <button style={{marginTop: "16px"}} onClick={() => {navigate('/')}}>Search</button>
      </div>
    </div>
  );
}

export default Search;