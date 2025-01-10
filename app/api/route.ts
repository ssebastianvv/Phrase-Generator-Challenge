// arrays 


const subjects    = ["The dog", "The turtle", "My friend", "Sebastian"];

const predicates  = ["runs fast", "is very wise", "loves coding", "sings poorly"];

function create (subjects,predicates){
    if (subjects.length>8){
        subjects+="inteligente"
    }

    if (predicates.includes("coding")){
        predicates+= "!"
    }
    
    return subjects+predicates
}
for (let i = 0; i < sujetos.length; i++) {
    const sujeto = sujetos[i];
    const predicado = predicados[i];
    console.log(crearOracion(sujeto, predicado));
  }