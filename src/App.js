import "./App.css";
import { useState, useEffect } from "react";
import Yes from "./Yes";
import No from "./No";

const App = (props) => {
  const [age, setAge] = useState("");
  const [showHome, setShowHome] = useState(false);
  const [showYes, setShowYes] = useState(false);
  const [showNo, setShowNo] = useState(false);
  const [checkedNo, setCheckedNo] = useState(false);
  const [checkedYes, setCheckedYes] = useState(false);
  const hour = new Date().getHours();
  const day = new Date().getDay();
  console.log(hour);
  console.log(day);
  useEffect(() => {
    setShowHome(true);
  }, []);
  function check() {
    setShowHome(false);
    // 65 yaş ve üstü normal zamanlar ve hafta sonu 
    if (age >= 65 && hour > 10 && hour < 20 && checkedNo === true) {  
      setShowNo(true);
    }
    if (age >= 65 && hour > 10 && hour < 20 && checkedYes === true) {
      setShowYes(true);
    }
    // 20 yaş ve altı normal zamanlar ve hafta sonu
    if (age < 20 && hour > 10 && hour < 20 && checkedNo === true) {
      setShowNo(true);
    }
    if (age < 20 && hour > 10 && hour < 20 && checkedYes === true) {
      setShowNo(true);
    }
    // haftasonu aktif kesim
    if (age > 20 && age < 65 && hour < 10 && hour >= 20 && day === 7 && checkedNo === true) { // PAZAR
      setShowNo(true);
    }
    if (age > 20 && age < 65 && hour < 10 && hour >= 20 && day === 6 && checkedYes === true) { // CUMARTESİ
      setShowNo(true);
    }
    // normal zamanlar aktif kesim
    if (age > 20 && age < 65 && checkedYes === true) {
      setShowYes(true);
    }
    if (age > 20 && age < 65 && checkedNo === true) {
      setShowYes(true);
    }
    
    if (age === "") {
      alert("alanı boş bırakmayınız.");
      window.location.reload();
    }
  }
  return (
    <div className="App">
      {showHome && (
        <div className="container">
          <div>Şuan Dışarı Çıkabilir Miyim ?</div>
          <input
            type="number"
            placeholder="Yaşınızı Giriniz"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required="required"
          ></input>
          <div>Çalışıyor musunuz?</div>
          <div className="buttons">
            <label>
              <input
                type="checkbox"
                checked={checkedYes}
                onChange={() => setCheckedYes(!checkedYes)}
              />
              Evet
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNo}
                onChange={() => setCheckedNo(!checkedNo)}
              />
              Hayır
            </label>
          </div>
          <button onClick={check}>Kontrol Et!</button>
        </div>
      )}

      <Yes showYes={showYes} />
      <No showNo={showNo} />
    </div>
  );
};

export default App;
