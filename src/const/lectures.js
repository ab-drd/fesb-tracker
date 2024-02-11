//za svakog studenta oznaceno koje predmete ima taj dan, koje nema
//0 znaci da nema, 1 da ima

export const schedule = [
  {
    id: 1,
    name: "multimedijski sustavi",
    time: "17:00-19:00",
    classroom: "A101",
    type: "predavanja",
    presence: false,
  },
  {
    id: 2,
    name: "multimedijski sustavi",
    time: "12:00-13:30",
    classroom: "B420",
    type: "labovi",
    presence: true,
  },
  {
    id: 3,
    name: "grid računalni sustavi",
    time: "16:00-17:00",
    classroom: "A102",
    type: "auditorne",
    presence: false,
  },
  {
    id: 4,
    name: "medicinski uređaji",
    time: "14:00-16:00",
    classroom: "B301",
    type: "predavanja",
    presence: true,
  },
];

// export const schedule = [
//   {
//     id_studenta: 1,
//     multimedijski_sustavi: 1,
//     ugradbeni_racunalni_sustavi: 0,
//     poslovni_inf_sust: 1,
//     grid_sustavi: 0,
//   },
// {
//   id_studenta: 2,
//   multimedijski_sustavi: 1,
//   ugradbeni_racunalni_sustavi: 0,
//   poslovni_inf_sust: 1,
//   grid_sustavi: 1,
// },
// {
//   id_studenta: 3,
//   multimedijski_sustavi: 1,
//   ugradbeni_racunalni_sustavi: 0,
//   poslovni_inf_sust: 1,
//   grid_sustavi: 0,
// },
// {
//   id_studenta: 4,
//   multimedijski_sustavi: 1,
//   ugradbeni_racunalni_sustavi: 0,
//   poslovni_inf_sust: 1,
//   grid_sustavi: 1,
// },
// {
//   id_studenta: 5,
//   multimedijski_sustavi: 1,
//   ugradbeni_racunalni_sustavi: 0,
//   poslovni_inf_sust: 1,
//   grid_sustavi: 1,
// },
// ];

export const subjects = [
  {
    id: 1,
    name: "Poslovni informacijski sustavi",
  },
  {
    id: 2,
    name: "Paralelno programiranje",
  },
  {
    id: 3,
    name: "Medicinski elektronički uređaji",
  },
  {
    id: 4,
    name: "Multimedijski sustavi",
  },
  {
    id: 5,
    name: "Ugradbeni računalni sustavi",
  },
  {
    id: 6,
    name: "Grid računalni sustavi",
  },
];

export const presence = [
  {
    id: 1,
    subjectId: 1,
    type: "Predavanja",
    present: 4,
    notPresent: 5,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 2,
    subjectId: 1,
    type: "Laboratorijske Vježbe",
    present: 6,
    notPresent: 1,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 3,
    subjectId: 2,
    type: "Predavanja",
    present: 4,
    notPresent: 5,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 4,
    subjectId: 2,
    type: "Laboratorijske Vježbe",
    present: 6,
    notPresent: 1,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 5,
    subjectId: 3,
    type: "Predavanja",
    present: 4,
    notPresent: 5,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 6,
    subjectId: 3,
    type: "Laboratorijske Vježbe",
    present: 6,
    notPresent: 1,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 7,
    subjectId: 4,
    type: "Predavanja",
    present: 4,
    notPresent: 5,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 8,
    subjectId: 4,
    type: "Laboratorijske Vježbe",
    present: 6,
    notPresent: 1,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 9,
    subjectId: 5,
    type: "Predavanja",
    present: 4,
    notPresent: 5,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 10,
    subjectId: 6,
    type: "Predavanja",
    present: 6,
    notPresent: 1,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 11,
    subjectId: 6,
    type: "Auditorne Vježbe",
    present: 4,
    notPresent: 5,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
  {
    id: 12,
    subjectId: 6,
    type: "Laboratorijske Vježbe",
    present: 6,
    notPresent: 1,
    haventHappendYet() {
      return 13 - (this.present + this.notPresent);
    },
  },
];
