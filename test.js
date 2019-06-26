//exercicio 1
var usuarios = [
  {
    id: 1,
    nome: "Maria"
  },
  {
    id: 2,
    nome: "Andrey"
  },
  {
    id: 3,
    nome: "Vinicius"
  },
  {
    id: 4,
    nome: "Joao"
  },
  {
    id: 5,
    nome: "Thanos"
  },
  {
    id: 6,
    nome: "Daenaerys"
  },
  {
    id: 7,
    nome: "John"
  },
  {
    id: 8,
    nome: "Michael"
  },
  {
    id: 9,
    nome: "Homer"
  },
  {
    id: 10,
    nome: "Rick"
  }
];

const retornaJson = obj => {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
  }
};

retornaJson(usuarios);

//exercicio 2

function converteJSON(array) {
  const resultConvert = JSON.stringify(array);
  console.log(resultConvert);
}

converteJSON(usuarios);

//converte as id em string
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var jsonString = JSON.stringify(usuarios, replacer);

console.log(jsonString);
