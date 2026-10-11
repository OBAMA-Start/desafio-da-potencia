const QUESTION_BANK = {
  facil: [
    { question: "Quanto é 2²?", options: ["2", "4", "6", "8"], answer: "4" },
    { question: "Qual é o valor de 3²?", options: ["6", "7", "9", "12"], answer: "9" },
    { question: "Quanto é 5²?", options: ["10", "20", "25", "30"], answer: "25" },
    { question: "Quanto é 10¹?", options: ["1", "10", "100", "0"], answer: "10" },
    { question: "Qual representa 2 × 2?", options: ["2²", "2³", "2¹", "2⁴"], answer: "2²" },
    { question: "Qual o valor de 1²?", options: ["1", "0", "2", "3"], answer: "1" },
    { question: "Quanto é 4²?", options: ["8", "16", "12", "20"], answer: "16" },
    { question: "Quanto é 6¹?", options: ["6", "1", "36", "12"], answer: "6" },
    { question: "Quanto é 7²?", options: ["49", "14", "21", "42"], answer: "49" },
    { question: "Qual é o valor de 9²?", options: ["81", "72", "90", "18"], answer: "81" },
    { question: "Quanto é 8¹?", options: ["8", "1", "64", "16"], answer: "8" },
    { question: "Qual é o valor de 11¹?", options: ["11", "1", "121", "22"], answer: "11" },
    { question: "Quanto é 3¹?", options: ["3", "1", "9", "6"], answer: "3" },
    { question: "Quanto é 12¹?", options: ["12", "24", "144", "36"], answer: "12" },
    { question: "Quanto é 13¹?", options: ["13", "169", "26", "39"], answer: "13" }
  ],
  medio: [
    { question: "Qual o valor de 3³?", options: ["9", "18", "27", "30"], answer: "27" },
    { question: "Qual representa 4 × 4 × 4?", options: ["4³", "44", "16", "4⁴"], answer: "4³" },
    { question: "Quanto é 6²?", options: ["12", "36", "18", "30"], answer: "36" },
    { question: "5 × 5 × 5 = ?", options: ["100", "50", "150", "125"], answer: "125" },
    { question: "Qual é a base de 7³?", options: ["3", "7", "21", "49"], answer: "7" },
    { question: "Quanto é 8³?", options: ["512", "64", "128", "256"], answer: "512" },
    { question: "Quanto é 9²?", options: ["18", "81", "72", "90"], answer: "81" },
    { question: "Qual o valor de 10²?", options: ["100", "20", "10", "200"], answer: "100" },
    { question: "Quanto é 11²?", options: ["121", "112", "111", "211"], answer: "121" },
    { question: "Quanto é 12²?", options: ["144", "124", "132", "142"], answer: "144" },
    { question: "Quanto é 13²?", options: ["169", "196", "179", "158"], answer: "169" },
    { question: "Qual o valor de 14²?", options: ["196", "184", "174", "154"], answer: "196" },
    { question: "Quanto é 15²?", options: ["225", "215", "235", "245"], answer: "225" },
    { question: "Quanto é 16²?", options: ["256", "216", "266", "236"], answer: "256" },
    { question: "Qual o valor de 17²?", options: ["289", "279", "299", "269"], answer: "289" }
  ],
  dificil: [
    { question: "Qual o valor de 2⁵?", options: ["25", "30", "32", "64"], answer: "32" },
    { question: "8² é igual a:", options: ["64", "16", "32", "48"], answer: "64" },
    { question: "9 × 9 × 9 = ?", options: ["81", "729", "243", "999"], answer: "729" },
    { question: "Quanto é 10³?", options: ["1000", "100", "300", "30"], answer: "1000" },
    { question: "Qual potência representa 2 × 2 × 2 × 2 × 2?", options: ["2⁵", "5²", "2³", "4²"], answer: "2⁵" },
    { question: "Qual o valor de 3⁴?", options: ["81", "64", "54", "72"], answer: "81" },
    { question: "Quanto é 5⁴?", options: ["625", "6250", "500", "125"], answer: "625" },
    { question: "Quanto é 7³?", options: ["343", "49", "147", "210"], answer: "343" },
    { question: "Qual o valor de 6³?", options: ["216", "36", "126", "180"], answer: "216" },
    { question: "Quanto é 4⁴?", options: ["256", "128", "64", "512"], answer: "256" },
    { question: "Quanto é 2⁶?", options: ["64", "32", "48", "128"], answer: "64" },
    { question: "Qual o valor de 3⁵?", options: ["243", "125", "225", "275"], answer: "243" },
    { question: "Quanto é 10⁴?", options: ["10000", "1000", "100", "100000"], answer: "10000" },
    { question: "Quanto é 11³?", options: ["1331", "121", "111", "1431"], answer: "1331" },
    { question: "Qual o valor de 12³?", options: ["1728", "144", "1584", "1968"], answer: "1728" }
  ]
};

const LEVELS = [
  { name: "Fácil", key: "facil", count: 5 },
  { name: "Médio", key: "medio", count: 5 },
  { name: "Difícil", key: "dificil", count: 5 }
];

const POINTS_PER_QUESTION = 10;
const FEEDBACK_DELAY = 1500;

export { QUESTION_BANK, LEVELS, POINTS_PER_QUESTION, FEEDBACK_DELAY };
