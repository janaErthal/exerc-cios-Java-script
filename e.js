// Ex.01 vari
let nome = "joão"
console.log(nome)


//Ex.02 vari
let soma, a = 10 , b = 5
console.log(soma)
soma = a + b

//Ex.03 vari
   let primeiroNome = "joseva"  , sobrenome = "silva"
   console.log(primeiroNome,sobrenome)

   
   //Ex.04 vari
   let pessoa = {
    nome : "jana",
    idade : 17,
    telefone: 888-888,
    endereco: "jana@gmail88"
   }

   //Ex.04 vt
   let frutas = ["maçã" , "banana" , "açai"]
   frutas[3] = "pera"
   console.log(frutas)
   frutas.push("abacate")
   console.log(frutas)
   frutas[0] = "abacaxi"
   console.log(frutas)

      console.log("o tamanho do vetor é: ", frutas.length)

   for(let i =0;i<5;i++){
      console.log(frutas[i])

   }

   //Ex.05 vt
    let numeros = [1,2,3,4,5]
    console.log(numeros[0],numeros[4]);

    //Ex.06 vt
    let cores = ["vermelho","verde","azul"]
    console.log(cores)

    for(let i =0;i<2;i++){
        console.log(cores[i])
        console.log("cores:",cores)
    }

    //Ex.07 Es.D
    let idade = 18
      if(idade >=18){
        console.log("maior idade",idade)
      }else{
        console.log("menor de idade",idade)
      }

      //Ex.08 Es.C
      let nota = [10]
      console.log("sua nota:",nota)
       if(nota > 7 ) {
        console.log("aprovado");
       }else if( nota >5.7){
        console.log("recuperação");
       }else{
        console.log("reprovado")
       }
       //ex.09 swi.
       let semana = 7
        switch (semana) {
        case 1:
          console.log("domingo");
          break;

         case 2:
          console.log("segunda");
          break;

          case 3:
         console.log("terça");
            break;

          case 4:
            console.log("quarta");
             break;

          case 5:
             console.log("quinta");
              break;

          case 6:
           console.log("sexta");
              break;

           case 7 :
             console.log("sabado");
             break;

           default:
          console.log("não existe esse numero no dia da semana :(")
          break;
       }
       // laço de repetição
       //ex.10
       s = 0
       for(i=1; i<=10;i++){

       }
      
      
      
      
      //conceitos
       //ex.13

       let valores = [10,20,30,40,50]
       let Soma = 0
       for (let i=0; i<valores.length;i++){
            Soma += valores[i]

       }
       console.log("a soma é :", Soma)
       //ex.14
       let vetor = [5,4,6,9,5,2,3,1,15,2,3]
       let maior = 0,n =0
       while(n < vetor.length){
          if(vetor[n]> maior){
            maior = vetor[n]
          }
           n++
       }
       console.log("o maior numero é", maior);
       //ex.15
        let Vetor = [15,20,12,50]
        let menor = 0, N = 0
        while(N< Vetor.length){
          if(Vetor[N]< menor){
              menor = Vetor[N]
          }
          n++
        }
         console.log("o menor numero é",menor)
       //ex.16 fator
       n = 10
       let fatorial = 1
       for(let i=1; i<=n;i++){
        fatorial *=i
       }
       console.log("é", fatorial);

       //ex.17
        n = 10
        for(i=1;i<=10;i++){
          if(i % 2 == 0){
            console.log(i,"par");
          }else{
            console.log(i, " é impar");
          }

          }
          //ex.18



          //ex.19
          let texto = "bilabilu", resultado = ""
          for(i = texto.length-1; i>=0;i--){
            resultado += texto[i]
          }
          console.log("o texto invertido é:",resultado);
    










