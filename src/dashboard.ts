type Dashboard = {
  troubleId: number;
  trStatus: string;
  estHours: number;
};

// Simulate getting the data
function apiEndpoint(): Dashboard[] {
  let ret: Dashboard[] = [
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

export function main() {
  let troubles: Dashboard[] = apiEndpoint();

  widget1(troubles);
  widget2(troubles);
}

function widget1(troubles: Dashboard[]) {
  console.log("-----Widget 1-----");
  console.table(troubles.filter((tr) => tr.trStatus === "In Progress"));
  console.table(troubles.filter((tr) => tr.assignedButNoHours));
  console.log("------------------");
}

function widget2(troubles: Dashboard[]) {
  type widget2Trouble = Dashboard & {
    assignedButNoHours: boolean;
  };
  let newTroubles = troubles as widget2Trouble[];
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
