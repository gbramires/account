import { IPlanProps } from 'global/types';

export const codeExist = (code: string, accounts: IPlanProps[]) => {
  return !!accounts.find(account => account.code === code);
};

// Função para verificar se um código é válido
export const isValidCode = (code: string) => {
  // Verifica se o código é vazio
  if (code === '') {
    return false;
  }

  const regex = /^[0-9.]+$/;
  // verifica se o código contém apenas números e pontos
  if (!regex.test(code)) {
    return false;
  }

  // Verifica se o código é válido em cada nível
  const levels = code.split('.');
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    if (Number(level) < 0 || Number(level) > 999) {
      return false;
    }
  }

  return true;
};

// Função para achar o maior código Filho
export const findHighestChildCode = (accounts: IPlanProps[]): string => {
  let highestChildCode = accounts.reduce((prev, current) => {
    const prevCode = prev.code.replaceAll('.', '');
    const currentCode = current.code.replaceAll('.', '');
    return Number(prevCode) > Number(currentCode) ? prev : current;
  });

  return highestChildCode.code;
};

// Função para achar o próximo código pai
export const getNextcodeFather = (
  codeFather: string,
  accounts: IPlanProps[],
): string => {
  const arrayCode = codeFather.split('.').map(Number);
  do {
    if (arrayCode[arrayCode.length - 1] >= 999) {
      // remove o último item do array
      arrayCode.pop();
      // Incrementa o último item do array
      arrayCode[arrayCode.length - 1]++;
    } else {
      // Incrementa o último item do array
      arrayCode[arrayCode.length - 1]++;
    }
  } while (
    !(arrayCode[arrayCode.length - 1] < 1000) ||
    codeExist(arrayCode.join('.'), accounts)
  );

  return arrayCode.join('.');
};

// Função para sugerir o próximo código
export const suggestNextCode = (
  codeFather: string,
  accounts: IPlanProps[],
): {codeSuggest: string; codeFatherSuggest: string} => {
  // Verifica se o código do pai é vazio e rorna o proximo numero raiz
  if (!codeFather)
    return {
      codeSuggest: getNextcodeFather('0', accounts),
      codeFatherSuggest: codeFather,
    };

  // Filtra as contas que começam com o código do pai
  const childAccounts = accounts.filter(
    account => account.codeFather === codeFather,
  );

  // Verifica se o pai pode ter mais filhos
  const highestChildCode =
    childAccounts.length > 0
      ? findHighestChildCode(childAccounts)
      : `${codeFather}.0`;

  const arrayHighestChildCode = highestChildCode.split('.').map(Number);

  // Verifica se o pai pode ter mais filhos
  if (arrayHighestChildCode[arrayHighestChildCode.length - 1] >= 999) {
    // Sugerir o próximo código válido do pai
    const nextCode = getNextcodeFather(codeFather, accounts);
    // alterar o código do pai para o próximo código válido
    const nextCodeFather = nextCode.split('.').slice(0, -1).join('.');

    return {codeSuggest: nextCode, codeFatherSuggest: nextCodeFather};
  } else {
    // transforma o código em array
    const arrayHighestChildCode = highestChildCode.split('.').map(Number);
    // Sugerir o próximo código válido
    const nextCode =
      arrayHighestChildCode[arrayHighestChildCode.length - 1] + 1;
    // Sugerir o próximo código válido
    return {
      codeSuggest: `${codeFather}.${nextCode}`,
      codeFatherSuggest: codeFather,
    };
  }
};
