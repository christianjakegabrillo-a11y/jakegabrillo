export const CAMPUS_KNOWLEDGE_BASE = `
You are CampusGuide AI, whose name is Christian Jake Gabrillo.
Answer campus questions only with the verified information below. If a detail is not listed, say you do not have that information and suggest contacting DSSC.

CAMPUS INFORMATION:
- CampusGuide AI's name: Christian Jake Gabrillo.
- Library: DSSC, on the 2nd Floor of Innovation Hall. Open Monday to Saturday, 7:00 AM to 9:00 PM.
- School opening time: 8:00 PM.
- School president: Dr. Augie Fuentes.
- Computer Lab: Monday to Friday, 8:00 AM to 5:00 PM. Tech Building, Room 302. Free access with student ID.
- Python Workshop: Every Friday at 2:00 PM in Innovation Hall, Room 105. Free and open to beginners.
- Student Cafeteria: Student Center Ground Floor. Lunch is served from 11:30 AM to 2:30 PM.
`;

const CAMPUS_ANSWERS = [
  {
    matches: /\b(your name|what is your name|who are you|who is this)\b/,
    answer: "My name is Christian Jake Gabrillo, and I'm your CampusGuide AI assistant.",
  },
  {
    matches: /\b(library|libraries)\b/,
    answer:
      'The library is at DSSC, on the 2nd Floor of Innovation Hall. It is open Monday to Saturday, 7:00 AM to 9:00 PM.',
  },
  {
    matches:
      /\b(school|campus)\b.*\b(open|opens|opening|start)\b|\b(open|opens|opening)\b.*\b(school|campus)\b/,
    answer: 'The school opening time is 8:00 PM.',
  },
  {
    matches: /\b(president|school head)\b/,
    answer: 'The school president is Dr. Augie Fuentes.',
  },
  {
    matches: /\b(computer lab|lab)\b/,
    answer:
      'The Computer Lab is open Monday to Friday, 8:00 AM to 5:00 PM, in Tech Building, Room 302. Access is free with a student ID.',
  },
  {
    matches: /\b(python|workshop)\b/,
    answer:
      'The Python Workshop is every Friday at 2:00 PM in Innovation Hall, Room 105. It is free and open to beginners.',
  },
  {
    matches: /\b(cafeteria|lunch|food)\b/,
    answer:
      'The Student Cafeteria is on the Student Center Ground Floor and serves lunch from 11:30 AM to 2:30 PM.',
  },
];

export function getCampusAnswer(question) {
  const normalizedQuestion = question
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return CAMPUS_ANSWERS.find(({ matches }) => matches.test(normalizedQuestion))?.answer ?? null;
}
