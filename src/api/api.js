import {post} from "api/fetch/fetch";

export default {
  /**
   *
   * @param param
   * @returns {*}
   * @constructor
   */
  Register(param){
    return post('/users/api/register')
  }

}
