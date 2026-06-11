const calculatescore = (car, preferences) => {
    let score = 0;

    //budget
    if (car.price <= preferences.budget) {
        score += 30;
    }
    else{
        score-=10;
    }
    //Fuel Preference
    if (car.fuel===preferences.fuel) {
        score += 20;
    }

    //family size
    if(car.seats >= Number(preferences.familySize)){
        score +=10;
    }

    //priority weighting
    switch(preferences.priority){
        case "safety":
            score += car.safety *10;
            break;
            case "Mileage":
            score += car.mileage;
            break;
            case "Features":
                score +=20;
                break;

                case"performance":
                score+=car.safety *5;
                break;
                default:
                    break;
    }
    return score;
    const generateReason = (car, priority) => {
        switch(priority){
            case "safety":
                return 'Strong safety rating of ${car.safety}/5 and ideal family protection.';

                case "Mileage":
                    return 'Excellent fuel efficiency of ${car.mileage} km/l mileage.';

                    case "Features":
                        return'well-balanced package with modern features and comfort.';

                        case "performance":
                            return 'offers a confident driving experience with strong road presence.';

                            default:
                                return'Good overall match.';

        }
    }
};
const getRecommendations = (cars, preferences) => {
    return cars.map((car) => ({
        ...car,
        score: calculatescore(car, preferences),
        reason: generateReason(car, preferences.priority)
        })).sort((a, b) => b.score - a.score).slice(0, 3);
    };
    module.exports = {
        getRecommendations
    };