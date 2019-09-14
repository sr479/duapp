import axios from 'axios';
export function ajax(url,data={},type='GET'){
    return new Promise( (resolve,reject) =>{
        let promise;
        if(type=='GET'){
            // get请求
            let dataStr='';//准备url query参数数据 数据拼接字符串
            Object.keys(data).forEach( key =>{
                dataStr +=key+'='+data[key]+'&'
            })//输出示例：name=1&age=23;
            if(dataStr!==''){

                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            promise = axios.get(url);
        }
        else if(type=='POST'){
            // POST请求
            promise = axios.post(url, data);
        }
        promise.then( (res) => {
            resolve(res);
        }).catch( (err) =>{
            reject(err)
        })
    })
}