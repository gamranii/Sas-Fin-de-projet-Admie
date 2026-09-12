const trips = [
  {
    id: 1,
    departure: "Safi",
    destination: "Youssoufia",
    departureTime: "07:30",
    arrivalTime: "08:30",
    price: 25,
    availableSeats: 50,
  },
  {
    id: 2,
    departure: "Safi",
    destination: "Marrakech",
    departureTime: "08:00",
    arrivalTime: "10:30",
    price: 90,
    availableSeats: 50,
  },
  {
    id: 3,
    departure: "Safi",
    destination: "Casablanca",
    departureTime: "09:00",
    arrivalTime: "13:00",
    price: 140,
    availableSeats: 50,
  },
  {
    id: 4,
    departure: "Youssoufia",
    destination: "Marrakech",
    departureTime: "09:15",
    arrivalTime: "11:00",
    price: 65,
    availableSeats: 50,
  },
  {
    id: 5,
    departure: "Youssoufia",
    destination: "Casablanca",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 110,
    availableSeats: 50,
  },
  {
    id: 6,
    departure: "Marrakech",
    destination: "Casablanca",
    departureTime: "11:30",
    arrivalTime: "14:30",
    price: 120,
    availableSeats: 50,
  },
  {
    id: 7,
    departure: "Marrakech",
    destination: "Rabat",
    departureTime: "12:00",
    arrivalTime: "16:00",
    price: 150,
    availableSeats: 50,
  },
  {
    id: 8,
    departure: "Casablanca",
    destination: "Rabat",
    departureTime: "14:00",
    arrivalTime: "15:15",
    price: 40,
    availableSeats: 50,
  },
  {
    id: 9,
    departure: "Casablanca",
    destination: "Kenitra",
    departureTime: "15:00",
    arrivalTime: "16:45",
    price: 55,
    availableSeats: 50,
  },
  {
    id: 10,
    departure: "Rabat",
    destination: "Kenitra",
    departureTime: "16:00",
    arrivalTime: "16:45",
    price: 30,
    availableSeats: 50,
  },
  {
    id: 11,
    departure: "Rabat",
    destination: "Fes",
    departureTime: "17:00",
    arrivalTime: "19:30",
    price: 95,
    availableSeats: 50,
  },
  {
    id: 12,
    departure: "Kenitra",
    destination: "Fes",
    departureTime: "17:30",
    arrivalTime: "20:00",
    price: 85,
    availableSeats: 50,
  },
  {
    id: 13,
    departure: "Fes",
    destination: "Meknes",
    departureTime: "08:30",
    arrivalTime: "09:20",
    price: 35,
    availableSeats: 50,
  },
  {
    id: 14,
    departure: "Fes",
    destination: "Oujda",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 130,
    availableSeats: 50,
  },
  {
    id: 15,
    departure: "Meknes",
    destination: "Rabat",
    departureTime: "11:00",
    arrivalTime: "13:30",
    price: 80,
    availableSeats: 50,
  },
  {
    id: 16,
    departure: "Meknes",
    destination: "Casablanca",
    departureTime: "12:00",
    arrivalTime: "15:00",
    price: 105,
    availableSeats: 50,
  },
  {
    id: 17,
    departure: "Casablanca",
    destination: "El Jadida",
    departureTime: "16:30",
    arrivalTime: "18:00",
    price: 50,
    availableSeats: 50,
  },
  {
    id: 18,
    departure: "El Jadida",
    destination: "Safi",
    departureTime: "18:30",
    arrivalTime: "20:30",
    price: 60,
    availableSeats: 50,
  },
  {
    id: 19,
    departure: "Marrakech",
    destination: "Agadir",
    departureTime: "15:00",
    arrivalTime: "18:30",
    price: 100,
    availableSeats: 50,
  },
  {
    id: 20,
    departure: "Agadir",
    destination: "Safi",
    departureTime: "19:00",
    arrivalTime: "22:00",
    price: 95,
    availableSeats: 50,
  },
];
const prompt = require("prompt-sync")();
let tickets = [];
let ticketId = 1;

function menuPrincipal() {
  let choix;

  do {
    console.log(`
=================================
        RAILWAY MANAGER
=================================

1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
8. Nombre total de tickets vendus
9. Chiffre d'affaires total
0. Quitter
`);

    choix = Number(prompt("Choisissez une option : "));

    switch (choix) {
      case 1:
        Afichage();
        break;
      case 2:
        buyTicket();
        break;
      case 3:
        afficherTickets();
        break;
      case 4:
        annulationTicket();
        break;
      case 5:
        rechercherTicket();
        break;
      case 6:
        filtrerTrajets();
        break;
      case 7:
        trierTrajet();
        break;
      case 8:
        nombreTotaleTicket();
        break;
      case 9:
        chiffreAffaire();
        break;
      case 0:
        console.log("quite succeful!");
        break;
      default:
        console.log("\nvotre choix né pas trouver!");
        break;
    }
  } while (choix !== 0);
}

//prancipal functions

function Afichage() {
  console.log("\n=== TRAJETS DISPONIBLES ===\n");
  for (let i = 0; i < trips.length; i++) {
    console.log(`#${trips[i].id} ${trips[i].departure} -> ${trips[i].destination}
           Départ : ${trips[i].departureTime} 
           Arrivée : ${trips[i].arrivalTime}
           Prix :${trips[i].price}DH
           Places disponibles :${trips[i].availableSeats} \n`);
    console.log("--------------------------------------------------");
  }
}

function buyTicket(inputId, passengerName) {
  inputId = Number(prompt("entrer votre id de votre trajet: "));
  passengerName = prompt("entrer vortre nom: ");
  let trip = checkTrip(inputId);
  if (trip == false) {
    console.log("Trajet introuvable.");
    return;
  }

  let seat = checkSeat(inputId);
  if (seat == false) {
    console.log("Train complet.");
    return;
  }
  let ticket = creatingTicket(trip, passengerName);
  console.log(`\n Ticket acheté avec succès ! 
        Ticket # ${tickets.length - 1 + 1}
        Passager : ${passengerName}
        Trajet : ${trip.departure} -> ${trip.destination}
        Place : ${ticket.seatNumber}
        prix : ${ticket.price} \n`);
}

function afficherTickets() {
  console.log("         ===TICKETs===\n");
  if (tickets.length === 0) {
    console.log("Aucun ticket enregistré.\n");
    return;
  }
  for (let ticket of tickets) {
    let trip = checkTrip(ticket.tripId);
    console.log(`
            Ticket #: ${ticket.id}
            Passager :${ticket.passangerName}
            trajet: ${trip.departure} -> ${trip.destination}
            place: ${ticket.seatNumber}
            prix : ${trip.price} DH`);
  }
}

function annulationTicket() {
  let idIAnnul = Number(
    prompt("Entrer le ID de votre ticket pour votre suprimation: "),
  );
  let trip;
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].id === idIAnnul) {
      trip = checkTrip(tickets[i].tripId);
      if (trip) {
        trip.availableSeats++;
      }
      tickets.splice(i, 1);

      console.log(`\n
            Ticket annulé avec succès.!`);
      return;
    }
  }
  console.log("\nvotre ticket nè pas dans notre archive");
}

function rechercherTicket() {
  let nomDePassage = prompt("entrer votre nom: ");
  let ticket = false;
  let trip;
  for (let i = 0; i < tickets.length; i++) {
    trip = checkTrip(tickets[i].tripId);
    if (tickets[i].passangerName === nomDePassage.toLowerCase()) {
      console.log(`
                ticket# ${tickets[i].id}
                Passage: ${tickets[i].passangerName}
                trajet: ${trip.departure} -> ${trip.destination}
                Place : ${tickets[i].seatNumber}
                prix : ${trip.price}
            `);
      ticket = true;
    }
  }
  if (ticket == false) {
    console.log("\nAucun ticket trouvé pour ce passager. ");
  }
}

function filtrerTrajets() {
  let ville = prompt("Enter votre ville de depart : ");
  let trip = false;
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].departure.toLowerCase() == ville.toLowerCase()) {
      console.log(
        `${trips[i].departure} -> ${trips[i].destination}: ${trips[i].price}DH`,
      );
      trip = true;
    }
  }
  if (trip == false) {
    console.log("\ncette ville introuvable.");
  }
}

function trierTrajet() {
  let trier;
  for (let i = 0; i < trips.length; i++) {
    for (let j = 0; j < trips.length - 1; j++) {
      if (trips[j].price > trips[j + 1].price) {
        trier = trips[j];
        trips[j] = trips[j + 1];
        trips[j + 1] = trier;
      }
    }
  }
  Afichage();
}
function nombreTotaleTicket() {
  console.log(`Nombre total de tickets : ${tickets.length}`);
}
function chiffreAffaire() {
  let price = 0;
  for (let i = 0; i < tickets.length; i++) {
    price += tickets[i].price;
  }
  console.log(`\nChiffre d'affaires total : ${price} DH`);
}

//helper functions

function checkTrip(inputId) {
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == inputId) {
      return trips[i];
    }
  }
  return false;
}

function checkSeat(inputId) {
  let trip = checkTrip(inputId);
  if (!trip) {
    return false;
  }
  if (trip.availableSeats > 0) {
    return true;
  }
  return false;
}

function creatingTicket(trip, passengerName) {
  let lastSeatNumber;
  if (tickets.length == 0) {
    lastSeatNumber = 0;
  } else {
    lastSeatNumber = tickets[tickets.length - 1].seatNumber;
  }

  let newTicket = {
    id: ticketId++,
    passangerName: passengerName.toLowerCase(),
    seatNumber: lastSeatNumber + 1,
    tripId: trip.id,
    price: trip.price,
  };
  trip.availableSeats--;
  tickets.push(newTicket);
  return newTicket;
}

menuPrincipal();
