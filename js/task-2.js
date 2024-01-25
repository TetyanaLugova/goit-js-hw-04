"use strict"

function calcAverageCalories(days) {
    let totalCalories = 0;
    for (const caloriesDay of days) {
        totalCalories += caloriesDay.calories;
    }
    return totalCalories /7;
}

