// Функция willItRain получает строку JSON от API погоды. Завершите функцию, чтобы она возвращала значение true, когда прогноз погоды показывает, что будет дождь.

/**
 * @param {string} weatherApiResponse
 */
const willItRain = (weatherApiResponse) => {
  const objJson = JSON.parse(weatherApiResponse);
  return objJson.now.rainExpected;
};

// Sample usage - do not modify
willItRain('{"now":{"temperature":18,"humidity":"30%","rainExpected":true}}'); // true
willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":false}}'); // false

// Функция `prepareStatus` вызывается перед отправкой статуса пользователя в социальной сети. Завершите функцию, чтобы она возвращала строку содержащую `userId`, `status` и `location`, из объекта `data`.

/**
 * @param {string} status
 * @param {string} location
 */
const prepareStatus = (status, location) => {
  const userId = 42;
  const data = {
    userId,
    status,
    location,
  };

  const strJson = JSON.stringify(data);
  return strJson;
};

// Sample usage - do not modify
prepareStatus("My first post!", "Amsterdam");
// '{"userId":42,"status":"My first post!","location":"Amsterdam"}'

prepareStatus("Hello World!", "Berlin");
// '{"userId":42,"status":"Hello World!","location":"Berlin"}'
