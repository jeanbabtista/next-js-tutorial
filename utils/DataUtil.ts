import { IComment } from '../types'
import comments from './comments.json'

class DataUtil {
  private comments: IComment[]

  constructor() {
    this.comments = comments.comments
  }

  getComments() {
    return this.comments
  }
}

export default new DataUtil()
