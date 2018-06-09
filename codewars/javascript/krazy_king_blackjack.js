function krazyKingBlackjack(cards, kingValue) {
    var sum = 0;
    var acesCount = 0;
    
    cards.forEach(el => {
        switch(el) {
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': 
                sum += parseInt(el);
                break;
            
            case 'J':
            case 'Q':
                sum += 10;
                break;
            
            case 'A':
                acesCount++;
                break;

            case 'K':
                sum += kingValue;
        }
    });

    
}

console.log(krazyKingBlackjack(['9', '9', 'K', 'A'], 3));