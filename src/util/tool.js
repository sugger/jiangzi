import axios from 'axios'
export default {
    clickNum(param,type) {
        axios.get(param.url,{
          params : param.data
        })
          .then(res => {
            if(!type){
              if (res.data.code === 1) {
                window.location.href = param.href
              }
            }
            console.log('send router')
          })
          .catch(function(error){
            console.log(error)
          })
    }
}



