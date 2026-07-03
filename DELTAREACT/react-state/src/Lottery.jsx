import { useState } from "react";

export default function Lottery() {

  function genTicket() {
    return Math.floor(100 + Math.random() * 900);
  }

  function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  }

  const [ticket, setTicket] = useState(genTicket());

  function getNewTicket() {
    setTicket(genTicket());
  }

  const isWinning = sumOfDigits(ticket) === 15;

  return (
    <div>
      <h1>Lottery</h1>

      {isWinning && (
        <h2 style={{ color: "green" }}>
          Congratulations, you won!
        </h2>
      )}

      <h2>Lottery Ticket = {ticket}</h2>

      <button onClick={getNewTicket}>
        Get New Ticket
      </button>
    </div>
  );
}