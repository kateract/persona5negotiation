import { QuestionFilterPipe } from './question-filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new QuestionFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
