const apiUrl = "https://coronavirus-19-api.herokuapp.com/countries";

const error = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const todcas = document.querySelector(".todCas");
const todayDeaths = document.querySelector(".todayDeaths");
const cases = document.querySelector(".cases");
const recovered = document.querySelector(".recovered");
const deaths = document.querySelector(".deaths");
const form = document.querySelector(".formData");
const countName = document.querySelector(".country-name");
const result = document.querySelector(".result");

result.style.display="none";
loading.style.display="none";

const searchCountry = async(countryName)=>{
loading.style.display="block";
error.innerHTML = "";

try{
    const response = await axios.get(`${apiUrl}/${countryName}`);
    if(response.data === "So'rov noto'g'ri!"){
        throw error;
    }
    loading.style.display = "none";

    todcas.innerHTML = response.data.todayCases;
    todayDeaths.innerHTML = response.data.todayDeaths;
    cases.innerHTML = response.data.cases;
    recovered.innerHTML = response.data.recovered;
    deaths.innerHTML = response.data.deaths;

    result.style.display = "block"
}catch (error){
    loading.style.display = "none";
    result.style.display = "none";
    error.innerHTML = "So'rov noto'g'ri!"
}
}

const handleSubmit = async (e) => {

e.preventDefault();
searchCountry(countName.value)

}
form.addEventListener("submit", e => handleSubmit(e))