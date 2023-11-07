const tellimus = {
  tellimuseKaubad: [
    { nimi: "Toode 1", kogus: 2, hind: 15.99 },
    { nimi: "Toode 2", kogus: 1, hind: 29.99 },
    { nimi: "Toode 3", kogus: 3, hind: 9.99 }
  ]
};

function printTellimus(tellimus) {
  let kogusumma = 0;

  tellimus.tellimuseKaubad.forEach((kaup, index) => {
    const summa = kaup.kogus * kaup.hind;
    kogusumma += summa;

    console.log(`Kaubanimi: ${kaup.nimi}`);
    console.log(`Kogus: ${kaup.kogus}`);
    console.log(`Hind ühe tüki kohta: ${kaup.hind}`);
    console.log(`Summa: ${summa}`);
    console.log('\n'); 
  });

  console.log(`Tellimuse kogusumma: ${kogusumma}`);
}


printTellimus(tellimus);
