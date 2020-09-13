import axios from 'axios';
// const fs = require('fs');
const https = require('https');

/*const httpsAgent = new https.Agent({
  ca: fs.readFileSync("src/utils/cert/client.csr"),
  key: fs.readFileSync('src/utils/cert/client-key.pem'),
  cert: fs.readFileSync('src/utils/cert/client-cert.pem')
})*/


/*interface FormattedError {
  retriable: boolean,
  message: string
}*/

const errorFormatter = (error) => {
  return error.message;

  /*let formattedError: FormattedError = {
    retriable: undefined,
    message: ''
  };

  console.log(`error in interceptor`, error);

  if (error.response) {
    // Request made and server responded
    formattedError = error.response.data.error;
    formattedError.retriable = false;
  } else if (error.request) {
    // The request was made but no response was received
    formattedError.message = error.request;
    formattedError.retriable = true;
  } else {
    // Something happened in setting up the request that triggered an Error
    formattedError.message = error.message;
  }

  return formattedError;*/
};

const get1 = async (url, token) => axios
  .get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    },
  })
  .then((response) => response.data)
  .catch((error) => {
    throw (errorFormatter(error));
  });

const get = async (url, token) =>
  axios({
    url: url,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Host: "mockbin.org",
    },
    responseType: 'json',
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw errorFormatter(error)
    });

const post = async (url, body, token) => axios
  .post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Host: "mockbin.org",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    },
  })
  .then((response) => response.data)
  .catch((error) => {
    throw (errorFormatter(error));
  });

const put = async (url, id, body, token) => {
  const putUrl = `${url}/${id}`;

  return axios
    .put(putUrl, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        agent: new https.Agent({ rejectUnauthorized: false }),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw (error.message);
    });
};

export {
  get,
  post,
  put,
  get1,
};
