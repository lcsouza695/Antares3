const enderecoForm = document.querySelector(".form-body");
const cepInput = document.querySelector("#cep");
const ruaInput = document.querySelector("#rua");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const estadoInput = document.querySelector("#estado");

cepInput.addEventListener("Keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const tecla = String.fromCharCode(e.keycode);
    if(!onlyNumbers.test(tecla)){
        e.preventDefault();
        return;
    }
});

cepInput.addEventListener("Keyup", (e) =>{
  const inputValue = e.target.value;
  if(inputValue.length === 8){
      getEndereco(inputvalue);
      //fazer alguma coisa - rodar a aplicação
    }
});

const getEndereco = async (cep) => {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

}