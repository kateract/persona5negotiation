import { Question, Answer } from './question';
import { AnswerTypes } from './typeDefs';
import { typeofExpr } from '../../node_modules/@angular/compiler/src/output/output_ast';

export const QUESTIONS: Question[] = [
  {
    text: 'But I\'ve been around the block so I know--there\'s something else you want from me, isn\'t there?',
    answers: [
      {
        text: 'I\'m acting on a whim.',
        type: null
      },
      {
        text: 'I love the elderly.',
        type: null
      },
      {
        text: 'I just want you to die happy.',
        type: AnswerTypes.Vague
      }
    ]
  },
  {
    text: 'After confronting me like this... Are you that kind of human too?',
    answers: [
      {
        text: 'That\'s not my style.',
        type: null
      },
      {
        text: 'You\'ve got a point…',
        type: null
      },
      {
        text: 'What\'s wrong with that?',
        type: AnswerTypes.Vague
      }
    ]
  },
  {
    text: 'A bad rep spreads like wildfire. If I were you, I\'d quit this nonsense. What’s the point?',
    answers: [
      {
        text: 'You\'re right.',
        type: null
      },
      {
        text: 'I don\'t care.',
        type: null
      },
      {
        text: 'I don\'t know any other way.',
        type: AnswerTypes.Vague
      }
    ]
  },
  {
    text: 'Hey, sonny, if somethin\'s been botherin\' you, I\'m willin\' ta give you a listen.',
    answers: [
      {
        text: 'My relationships...',
        type: AnswerTypes.Serious
      },
      {
        text: 'My future...',
        type: null
      },
      {
        text: 'I have no worries.',
        type: null
      }
    ]
  }
];
