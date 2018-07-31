import { Question, Answer } from './question';
import { AnswerTypes } from './typeDefs';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'But I\'ve been around the block so I know--there\'s something else you want from me, isn\'t there?',
    answers: [
      { id: 1, text: 'I\'m acting on a whim.', type: null },
      { id: 2, text: 'I love the elderly.', type: null },
      { id: 3, text: 'I just want you to die happy.', type: AnswerTypes.Vague }
    ]
  },
  {
    id: 2,
    text: 'After confronting me like this... Are you that kind of human too?',
    answers: [
      { id: 1, text: 'That\'s not my style.', type: null },
      { id: 2, text: 'You\'ve got a point…', type: null },
      { id: 3, text: 'What\'s wrong with that?', type: AnswerTypes.Vague }
    ]
  },
  {
    id: 3,
    text: 'A bad rep spreads like wildfire. If I were you, I\'d quit this nonsense. What’s the point?',
    answers: [
      { id: 1, text: 'You\'re right.', type: null },
      { id: 2, text: 'I don\'t care.', type: null },
      { id: 3, text: 'I don\'t know any other way.', type: AnswerTypes.Vague }
    ]
  },
  {
    id: 4,
    text: 'Hey, sonny, if somethin\'s been botherin\' you, I\'m willin\' ta give you a listen.',
    answers: [
      { id: 1, text: 'My relationships...', type: AnswerTypes.Serious },
      { id: 2, text: 'My future...', type: null },
      { id: 3, text: 'I have no worries.', type: null }
    ]
  },
  {
    id: 5,
    text: '...You’ve come from some other company to scout me-hee out. There’s no mistaking it, ho!',
    answers: [
      { id: 1, text: 'You got me', type: null },
      { id: 2, text: 'It’s a misunderstanding.', type: null },
      { id: 3, text: 'I’ve come to finish you off.', type: null }
    ]
  },
  {
    id: 6,
    text: 'How can you do such terrible things to a cute hee-ho like me!?',
    answers: [
      { id: 1, text: 'I’m sorry.', type: null },
      { id: 2, text: 'Now that you mention it… ♪', type: null },
      { id: 3, text: '...Cute?', type: null }
    ]
  },
  {
    id: 7,
    text: 'You new? Did you just get hee-hired, ho?',
    answers: [
      { id: 1, text: 'No.', type: null },
      { id: 2, text: 'I’m a transfer student.', type: null },
      { id: 3, text: 'Yeah! Nice to meetcha!', type: null }
    ]
  },
  {
    id: 8,
    text: 'Maybe I should try something new! I don’t want to fall into mediocrity, ho...',
    answers: [
      { id: 1, text: 'You’re fine as is.', type: null },
      { id: 2, text: 'Your act is a bit stale...', type: null },
      { id: 3, text: 'Time for a makeover.', type: null }
    ]
  },
  {
    id: 9,
    text: 'Which is it, ho?',
    answers: [
      { id: 1, text: 'I want an autograph.', type: null },
      { id: 2, text: 'I want a photo.', type: null },
      { id: 3, text: 'Give me your credit card.', type: null }
    ]
  },
  {
    id: 10,
    text: 'My chest is beating so fast. What is this feeling?',
    answers: [
      { id: 1, text: 'Are you alright?', type: null },
      { id: 2, text: 'You’re making it up.', type: null },
      { id: 3, text: 'It’s love.', type: null }
    ]
  },
  {
    id: 11,
    text: 'A mascot\'s life isn’t hee-easy. Are you sure you could handle all the adversity, ho?',
    answers: [
      { id: 1, text: 'I’m ready for it', type: null },
      { id: 2, text: 'What kind of adversity?', type: null },
      { id: 3, text: 'You’re a mascot?', type: null }
    ]
  },
  {
    id: 12,
    text: 'Where should I go? I want something yummy, ho!',
    answers: [
      { id: 1, text: 'A place with no wait', type: null },
      { id: 2, text: 'A place with western toilets', type: null },
      { id: 3, text: 'You won’t survive', type: null }
    ]
  },
  {
    id: 13,
    text: '...You’ve come from some other company to scout me-hee out. There’s no mistaking it, ho!',
    answers: [
      { id: 1, text: 'You got me', type: null },
      { id: 2, text: 'It’s a misunderstanding.', type: null },
      { id: 3, text: 'I’ve come to finish you off.', type: null }
    ]
  },
  {
    id: 14,
    text: 'I can’t sadden my fans, ho. You catch my drift, don’t you?',
    answers: [
      { id: 1, text: 'I’m rooting for you.', type: null },
      { id: 2, text: 'Tell me.', type: null },
      { id: 3, text: 'You have no fans.', type: null }
    ]
  },
  {
    id: 15,
    text: 'How did you find out about me, ho?',
    answers: [
      { id: 1, text: 'Some flyers', type: null },
      { id: 2, text: 'A specialty site', type: null },
      { id: 3, text: 'Word of mouth', type: null }
    ]
  },
  {
    id: 16,
    text: 'I’m busy, ho. It’s tough being so popular.',
    answers: [
      { id: 1, text: 'You do sound busy.', type: null },
      { id: 2, text: 'Your popularity won’t last.', type: null },
      { id: 3, text: 'Who cares?', type: null }
    ]
  },
  {
    id: 17,
    text: 'Humans always want either an autograph or selfie, ho. Which one is it, ho?',
    answers: [
      { id: 1, text: 'I want an autograph', type: null },
      { id: 2, text: 'I want a photo', type: null },
      { id: 3, text: 'Give me your credit card', type: null }
    ]
  },
  {
    id: 18,
    text: 'My only choice now… is to retire, ho.',
    answers: [
      { id: 1, text: 'That’s too far.', type: null },
      { id: 2, text: 'What are your plans?', type: null },
      { id: 3, text: 'You had a good run…', type: null }
    ]
  },
  {
    id: 19,
    text: 'You’re showing off your strength to me, aren’t you? I total-hee read your mind, ho',
    answers: [
      { id: 1, text: 'You’re misunderstanding', type: null },
      { id: 2, text: 'The hell are you saying?', type: null },
      { id: 3, text: 'Make me you apprentice', type: null }
    ]
  },
  {
    id: 20,
    text: 'Hey, how about this? If you don’t shoot me, then I’ll kiss you. Not a bad deal, right?',
    answers: [
      { id: 1, text: 'Not a bad idea.', type: null },
      { id: 2, text: 'I don’t want a kiss.', type: null },
      { id: 3, text: 'Have some self-respect.', type: null }
    ]
  },
  {
    id: 21,
    text: 'My horoscope said I was going to have relationship troubles today.',
    answers: [
      { id: 1, text: 'Looks like it came true', type: null },
      { id: 2, text: 'It’s just a horoscope', type: null },
      { id: 3, text: 'How is your luck in romance?', type: null }
    ]
  },
  {
    id: 22,
    text: 'Is it because I’m not acting mature enough? Like, what the heck makes someone mature, anyway?',
    answers: [
      { id: 1, text: 'Being old enough to drink.', type: null },
      { id: 2, text: 'Paying your own rent.', type: null },
      { id: 3, text: 'Questioning maturity.', type: null }
    ]
  },
  {
    id: 23,
    text: '[…] Under your mask… you’re actually handsome.',
    answers: [
      { id: 1, text: 'Not at all.', type: null },
      { id: 2, text: 'How did you know?', type: null },
      { id: 3, text: 'I look OK, I guess.', type: null }
    ]
  },
  {
    id: 24,
    text: 'It’s no fun going home when only my annoying mom and dad are there.',
    answers: [
      { id: 1, text: 'Parents are annoying.', type: null },
      { id: 2, text: 'You should love your parents.', type: null },
      { id: 3, text: 'Make sure you go home.', type: null }
    ]
  },
  {
    id: 25,
    text: 'Ooh, what if this leaves a scar and it’s permanent?',
    answers: [
      { id: 1, text: 'Sorry…', type: null },
      { id: 2, text: 'Just get plastic surgery.', type: null },
      { id: 3, text: 'I’ll take responsibility.', type: null }
    ]
  },
  {
    id: 26,
    text: 'We’ll just say you win. So can we stop this?',
    answers: [
      { id: 1, text: 'I feel bad.', type: null },
      { id: 2, text: 'I don’t agree with this.', type: null },
      { id: 3, text: 'We can say you won.', type: null }
    ]
  },
  {
    id: 27,
    text: 'Hey mister, if I grew up, what do you think the future me would’ve been like?',
    answers: [
      { id: 1, text: 'A fashionable older woman.', type: null },
      { id: 2, text: 'A wealthy housewife.', type: null },
      { id: 3, text: 'Living in darkness.', type: null }
    ]
  },
  {
    id: 28,
    text: 'Do you have a lot of friends? Ever feel like things they do are annoying?',
    answers: [
      { id: 1, text: 'Sometimes.', type: null },
      { id: 2, text: 'No.', type: null },
      { id: 3, text: 'I have no friends.', type: null }
    ]
  },
  {
    id: 29,
    text: 'Can we take a break and go eat somewhere?',
    answers: [
      { id: 1, text: 'What do you want to eat?', type: null },
      { id: 2, text: 'If we split the cost.', type: null },
      { id: 3, text: 'I’m on a diet.', type: null }
    ]
  },
  {
    id: 30,
    text: 'Are there only men’s? Where did you get it?',
    answers: [
      { id: 1, text: 'A thrift shop', type: null },
      { id: 2, text: 'Internet shopping', type: null },
      { id: 3, text: 'It’s not available for sale', type: null }
    ]
  },
  {
    id: 31,
    text: 'What should I wear?',
    answers: [
      { id: 1, text: 'A High School Outfit', type: null },
      { id: 2, text: 'A Kimono', type: null },
      { id: 3, text: 'Don’t wear anything', type: null }
    ]
  },
  // {
  //   text: '',
  //   answers: [
  //     { text: '', type: null },
  //     { text: '', type: null },
  //     { text: '', type: null }
  //   ]
  // },
];
