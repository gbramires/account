import { IPlanProps } from 'global/types';
import {
  codeExist,
  findHighestChildCode,
  getNextcodeFather,
  isValidCode,
  suggestNextCode,
} from './accountPlanLogic';
describe('codeExist', () => {
  const accounts: IPlanProps[] = [
    {
      codeFather: '1',
      code: '1.1',
      description: 'description',
      type: 'in',
      acceptType: true,
    },
    {
      codeFather: '2',
      code: '2.1',
      description: '',
      type: '',
      acceptType: false,
    },
    {
      codeFather: '1',
      code: '1.2',
      description: '',
      type: '',
      acceptType: true,
    },
    {
      codeFather: '1',
      code: '1.3',
      description: '',
      type: '',
      acceptType: true,
    },
  ];

  it('should return true if code exists in accounts', () => {
    expect(codeExist('1.2', accounts)).toBe(true);
    expect(codeExist('1.3', accounts)).toBe(true);
  });

  it('should return false if code does not exist in accounts', () => {
    expect(codeExist('3.1', accounts)).toBe(false);
    expect(codeExist('2.2', accounts)).toBe(false);
  });
});

describe('isValidCode', () => {
  it('should return false for empty code', () => {
    expect(isValidCode('')).toBe(false);
  });

  it('should return false for invalid codes', () => {
    expect(isValidCode('1.1000')).toBe(false);
    expect(isValidCode('1.-1')).toBe(false);
    expect(isValidCode('1.abc')).toBe(false);
  });

  it('should return true for valid codes', () => {
    expect(isValidCode('1.1')).toBe(true);
    expect(isValidCode('2.10')).toBe(true);
    expect(isValidCode('3')).toBe(true);
  });
});

describe('findHighestChildCode', () => {
  const accounts: IPlanProps[] = [
    {
      codeFather: '1',
      code: '1.1',
      description: 'description',
      type: 'in',
      acceptType: true,
    },
    {
      codeFather: '2',
      code: '2.1',
      description: '',
      type: '',
      acceptType: false,
    },
    {
      codeFather: '1',
      code: '1.2',
      description: '',
      type: '',
      acceptType: true,
    },
    {
      codeFather: '1',
      code: '1.3',
      description: '',
      type: '',
      acceptType: true,
    },
  ];

  it('should return the highest child code', () => {
    expect(findHighestChildCode(accounts)).toBe('2.1');
  });
});

describe('getNextcodeFather', () => {
  const accounts: IPlanProps[] = [
    {
      codeFather: '1',
      code: '1.1',
      description: 'description',
      type: 'in',
      acceptType: true,
    },
    {
      codeFather: '2',
      code: '2.1',
      description: '',
      type: '',
      acceptType: false,
    },
    {
      codeFather: '1',
      code: '1.2',
      description: '',
      type: '',
      acceptType: true,
    },
    {
      codeFather: '1',
      code: '1.3',
      description: '',
      type: '',
      acceptType: true,
    },
  ];

  it('should return the next valid code father', () => {
    expect(getNextcodeFather('1', accounts)).toBe('2');
    expect(getNextcodeFather('1.1', accounts)).toBe('1.4');
    expect(getNextcodeFather('2', accounts)).toBe('3');
  });
});

describe('suggestNextCode', () => {
  const accounts: IPlanProps[] = [
    {
      codeFather: '1',
      code: '1',
      description: 'description',
      type: 'in',
      acceptType: true,
    },
    {
      codeFather: '1',
      code: '1.1',
      description: 'description',
      type: 'in',
      acceptType: true,
    },
    {
      codeFather: '',
      code: '2',
      description: '',
      type: '',
      acceptType: false,
    },
    {
      codeFather: '2',
      code: '2.1',
      description: '',
      type: '',
      acceptType: false,
    },
    {
      codeFather: '1',
      code: '1.2',
      description: '',
      type: '',
      acceptType: true,
    },
    {
      codeFather: '1',
      code: '1.3',
      description: '',
      type: '',
      acceptType: true,
    },
  ];

  it('should suggest the next valid code when no code father is provided', () => {
    const suggestion = suggestNextCode('', accounts);
    expect(isValidCode(suggestion.codeSuggest)).toBe(true);
    expect(suggestion.codeFatherSuggest).toBe('');
  });

  it('should suggest the next valid code when code father has no siblings', () => {
    const suggestion = suggestNextCode('2', accounts);
    expect(isValidCode(suggestion.codeSuggest)).toBe(true);
    expect(suggestion.codeFatherSuggest).toBe('2');
  });

  it('should suggest the next valid code when code father has siblings', () => {
    const suggestion = suggestNextCode('1', accounts);
    expect(isValidCode(suggestion.codeSuggest)).toBe(true);
    expect(suggestion.codeFatherSuggest).toBe('1');
  });

  it('should suggest the next valid code when code father has reached the maximum number of children', () => {
    accounts.push({codeFather: '9.9.999', code: '9.9.999.998', description: 'test', type: 'in', acceptType: true});
    accounts.push({codeFather: '9.9.999', code: '9.9.999.999', description: 'test', type: 'in', acceptType: true});
    accounts.push({codeFather: '9', code: '9.10', description: 'test', type: 'in', acceptType: true});
    const suggestion = suggestNextCode('9.9.999', accounts);
    expect(isValidCode(suggestion.codeSuggest)).toBe(true);
    expect(suggestion.codeSuggest).toBe('9.11');
    expect(isValidCode(suggestion.codeFatherSuggest)).toBe(true);
    expect(suggestion.codeFatherSuggest).toBe('9');
  });
});
