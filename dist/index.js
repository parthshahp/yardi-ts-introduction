"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_1 = require("./dashboard");
// What is a type?
// A type is a "kind" of data a variable can hold
// It is ONLY a static, compile time check
// There are no memory implications
// function statusString(): void {
//   let testString: string = "";
//   let testNum: string = 8; // Incorrect type
// }
// type Status = string;
// function statusString(): void {
//   let testString: Status = "";
//   let testNum: Status = 8; // Incorrect type
// }
// type Status = "Assigned To Dev" | "In Progress" | "Completed";
// function statusString(): void {
//   let currTaskStatus: Status = "Assigned To Dev";
//   let fakeTaskStatus: Status = "Test"; // Incorrect type (even though it's a string!)
// }
// type Task = {
//   taskId: number;
//   status: string;
//   requiresPeerReview: boolean;
// };
//
// function task(): void {
//   let newTask: Task = {
//     taskId: 1,
//     status: "Assigned To Dev",
//     requiresPeerReview: true,
//   };
//
//   let fakeTask: Task = {
//     taskId: "1",
//     status: "Assigned To Dev",
//     requiresPeerReview: true,
//   };
//
//   let fakeTask2: Task = {
//     status: "Assigned To Dev",
//     requiresPeerReview: true,
//   };
// }
// type Status = "Assigned To Dev" | "In Progress" | "Completed";
// type Task = {
//   taskId: number;
//   status: Status;
//   requiresPeerReview: boolean;
// };
//
// function task(): void {
//   let newTask: Task = {
//     taskId: 1,
//     status: "Assigned To Dev",
//     requiresPeerReview: true,
//   };
//
//   let fakeTask: Task = {
//     taskId: 1,
//     status: "Not Done Yet",
//     requiresPeerReview: true,
//   };
// }
// // Null Type and Nullable Operator
// type Task = {
//   taskId: number;
//   status: string;
//   requiresPeerReview: boolean;
//   assignedDate: Date;
// };
//
// function task(): void {
//   let newTask: Task = {
//     taskId: 1,
//     status: "In Progress",
//     requiresPeerReview: true,
//     assignedDate: new Date(),
//   };
//
//   newTask.assignedDate.getDay();
//
//   let newTask2: Task = {
//     taskId: 1,
//     status: "In Progress",
//     requiresPeerReview: true,
//     assignedDate: null,
//   };
// }
// // Type Narrowing
// type TroubleId = string | number;
// function addOne(t: TroubleId): TroubleId {
//   if (typeof t === "number") {
//     return t + 1;
//   } else {
//     console.log(t);
//     throw Error("TroubleId isn't a number!");
//   }
// }
// console.log(addOne("hi"));
// Union Type
// type Task = {
//   taskId: number;
//   status: string;
//   requiresPeerReview: boolean;
// };
//
// type GranularTask = Task & {
//   assignedDate: Date;
// };
//
// function task(t: Task): void {
//   t.assignedDate;
// }
(0, dashboard_1.main)();
