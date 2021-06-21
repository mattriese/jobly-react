import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of all companies
   *
   * accepts a string: searchTerm
   * returns: an array of company objects
   */
  static async getCompanies(searchTerm) {
    let res;
    if (searchTerm === '') {
      res = await this.request(`companies`);
    } else {
      res = await this.request(`companies`, { name: searchTerm });
    }
    return res.companies;
  }

  /** Gets a list of all jobs
   *
   * accepts a string: searchTerm
   * returns: an array of job objects
   */
  static async getJobs(searchTerm) {
    let res;
    if (searchTerm === '') {
      res = await this.request(`jobs`);
    } else {
      res = await this.request(`jobs`, { title: searchTerm });
    }
    return res.jobs;
  }

  /** Login: Send authentication post request to api
   *
   * accepts an object loginData: {username, password}
   * returns token string
   */
  static async login(loginData) {
    let res = await this.request('auth/token', loginData, 'POST');
    return res.token;
  }

  /** Signup: Send post request with new user info to api
   *
   * accepts object signupData: {username, password, firstName, lastName, email}
   * returns token
   */
  static async signup(signupData) {
    let res = await this.request('auth/register', signupData, 'POST');
    return res.token;
  }

  /** getUser: get request for individual user info
   *
   * accepts username
   * returns user object
   */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }

  /** updateUser: patch request to update user info
   *
   * accepts user data object
   * returns
   */
}

// TESTUSER TOKEN: for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export { JoblyApi };
