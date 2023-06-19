/* eslint-disable no-console */
export function isLocalHost(): boolean {
  const url = window.location.href;
  return (
    url.includes('localhost') ||
    url.includes('192.168') ||
    url.includes('169.254') ||
    url.includes('127.0.0.1')
  );
}

export function generateKey(value: string) {
  let sum = 0;

  value.split('').forEach((char) => {
    sum += char.charCodeAt(0);
  });

  return sum;
}

export function generateRandomInt(minParam: number, maxParam: number) {
  const min = Math.ceil(minParam);
  const max = Math.floor(maxParam);
  return Math.floor(Math.random() * (max - min) + min);
}

const lorem =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias enim culpa omnis commodi natus, iste impedit! Eaque reprehenderit laudantium illo aut, perferendis provident quae, qui assumenda at sunt atque voluptas voluptatibus dignissimos porro hic nostrum non tenetur sequi maiores aliquid rem! Voluptate cumque fuga et. Adipisci rem soluta debitis sint voluptatibus omnis nulla ea fugiat eum ad quae temporibus beatae reiciendis illo consectetur ducimus ipsam in fuga quibusdam tempora sequi, dolorem accusamus sed cum. Fugiat placeat nesciunt, ipsum sunt et sint aliquid voluptatem voluptas tempore error eveniet laborum ipsam tempora rerum doloribus cupiditate consectetur nobis, iusto sequi, sit ullam eum!';

/**
 * @param indexInicial o valor da primeira posição
 * @param qtdeCaracteres a quantidade de posições capturadas a partir da primeira posição
 * @return uma porção do lorem
 */
export function generateLorem(
  sentencesAmount: number,
  charsAmount: number,
): string[] {
  const loremArr: string[] = [];

  const lastCharIndex =
    charsAmount <= lorem.length ? charsAmount : lorem.length;

  for (let i = 0; i < sentencesAmount; i += 1) {
    loremArr.push(lorem.substring(0, lastCharIndex));
  }

  return loremArr;
}

export function generateMockArray(size: number): number[] {
  const mockArray = [];

  for (let i = 0; i < size; i += 1) {
    mockArray.push(i);
  }

  return mockArray;
}

export function handleVisitationAnalytics() {
  console.log(`Cookies: ${navigator.cookieEnabled}`);
  console.log(`Browser Language: ${navigator.language}`);
  console.log(`Language: ${navigator.language}`);
  console.log(`Platform: ${navigator.platform}`);
  // console.log(`Connection Speed: ${navigator.}`);
  console.log(`User Agent: ${navigator.userAgent}`);
  console.log(`Webdriver: ${navigator.webdriver}`);
  console.log(`Geolocation: ${navigator.geolocation}`);
}

export function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
