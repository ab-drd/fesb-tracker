export const data = {
  labels: ["Dolasci", "Izostanci", "Neodržano"],
  datasets: [
    {
      label: "Prisutnost",
      data: [6, 5, 2],
      backgroundColor: ["#28b6f6", "#ff5353", "#2e2951"],
      hoverOffset: 4,
      borderWidth: 0,
    },
  ],
  options: {
    plugins: {
      datalabels: {
        display: true,
        color: "#fff",
        align: "center",
        borderRadius: 3,
        font: {
          size: 12,
        },
      },
    },
  },
};
