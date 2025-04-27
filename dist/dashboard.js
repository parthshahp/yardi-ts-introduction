"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
// Simulate getting the data
function apiEndpoint() {
    let ret = [
        {
            troubleId: 0,
            trStatus: "In Progress",
            estHours: 5,
        },
        {
            troubleId: 1,
            trStatus: "Assigned To Dev",
            estHours: 0,
        },
        {
            troubleId: 2,
            trStatus: "In Progress",
            estHours: 2,
        },
        {
            troubleId: 3,
            trStatus: "Assigned To Dev",
            estHours: 8,
        },
    ];
    return ret;
}
function main() {
    let troubles = apiEndpoint();
    widget1(troubles);
    widget2(troubles);
}
function widget1(troubles) {
    console.log("-----Widget 1-----");
    console.table(troubles.filter((tr) => tr.trStatus === "In Progress"));
    console.table(troubles.filter((tr) => tr.assignedButNoHours));
    console.log("------------------");
}
function widget2(troubles) {
    let newTroubles = troubles;
    newTroubles.forEach((tr) => {
        if (tr.trStatus === "Assigned To Dev" && tr.estHours <= 0) {
            tr.assignedButNoHours = true;
        }
    });
    console.log("-----Widget 2-----");
    console.table(newTroubles.filter((tr) => tr.trStatus === "Assigned To Dev"));
    console.table(newTroubles.filter((tr) => tr.assignedButNoHours));
    console.log("------------------");
}
