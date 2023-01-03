import request from '../config/request'

export const savaRecord = async (contact) => {
    await request.post("survey-api/records",contact).then(res =>{
        console.log(res.data)
      })
}