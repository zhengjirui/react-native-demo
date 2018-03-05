/**
 * Created by zheng on 2017/11/11.
 */
//http://blog.csdn.net/sinat_17775997/article/details/71425722
import constants from './constants';
const {HTTP_TIME_OUT, HOST} = constants
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

function fetchRequest(url, method, params = {}) {
    let header = {
        'Accept': 'application/json',
        "Content-Type": "application/json;charset=UTF-8",
        //'Authorization': 'Bearer ' + (window.token || '') //可以携带用户身份
        //"accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };
    console.log('request url:', url, params);  //打印请求参数
    return new Promise(function (resolve, reject) {
        let isServerOk = true;
        let httpStatus = 200;
        let errorReq = {
            code: 'C-0002',
            message: '网络超时'
        };
        //超时优化
        let httpTimeout = setTimeout(() => {
            reject(errorReq);
        }, 1000 * HTTP_TIME_OUT);


        //网络请求的开始
        fetch(HOST + url, {
            method: method,
            headers: header,
            body: JSON.stringify(params)
            //body参数，通常需要转换成字符串后服务器才能解析
        }).then((response) => {
            //清除网络超时
            clearTimeout(httpTimeout);
            //当前的http的状态
            httpStatus = response.status;
            //判断server是不是异常状态404，500等
            isServerOk = !!(response.status >= 200 && response.status < 300);
            return response.json()
        }).then((responseData) => {
            if (isServerOk) {
                console.log('res:', url, responseData);   //网络请求成功返回的数据
                resolve(responseData);
            } else {
                console.log('网络请求有问题：errorCode' + httpStatus);
                errorReq.code = httpStatus;
                errorReq.message = responseData;
                reject(errorReq);
            }

        }).catch((err) => {
            //清除网络超时
            clearTimeout(httpTimeout);
            console.log('err:', url, err);   //网络请求失败返回的数据
            reject(err);
        });
    });

}