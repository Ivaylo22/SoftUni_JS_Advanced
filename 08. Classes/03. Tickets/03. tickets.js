function solve(tickets, criteria){
    let res = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    for(const ticket of tickets){
        let args = ticket.split('|');
        let destination = args[0];
        let price = Number(args[1]);
        let status = args[2];

        let currentTicket = new Ticket(destination, price, status);

        res.push(currentTicket);
    }
    switch(criteria){
        case 'destination':
            res.sort((a,b) => {return a.destination.localeCompare(b.destination)});
            break;
        
        case 'status':
            res.sort((a,b) => {return a.status.localeCompare(b.status)});
            break;

        case 'price':
            res.sort((a,b) => {Number(a) - Number(b)});
            break;
    }
    return res;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))