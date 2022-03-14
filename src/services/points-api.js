import { points } from "./points"
import { users } from "./users"

//returns list of objects:
//id: 1
// name: "Noah Turillo"
// points: 10
// userName: "Italian Stallion"
// weight: 138

export const getUsers = () => {
    return users.map(user => {
        let sum = 0;
        let results = points.filter(el => el.id === user.id);
        results.forEach(result => {
            sum += result.points;
        })
        user.points = sum;
        return user;
    }).sort((a, b) => b.points - a.points);
}