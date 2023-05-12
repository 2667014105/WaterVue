import axios from "axios";



let Url = "http://150.158.163.102:8088";

async function wangRequest(url, type, data = {}) {
    let result = {}
    // alert(Url + "/" + url +type+data);
    // 由于axios 后执行完，所以必须加await 来使他先执行完
    await axios({
        method: type,
        url: Url + "/" + url,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        result = resp.data;
    }).catch(function (error) {
        alert(error)
    })
    return result;
}

async function wangRequestNoData(url, type) {
    let result = {};
    await axios({
        method: type,
        url: Url + "/" + url,
        // data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        result = resp;
    })
    return result;
}

async function loginUser(username, password) {
    let url = "http://150.158.163.102:8088/login?username=" + username + "&password=" + password;
    await axios({
        method: "post",
        url: url,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        alert("重新登录成功")
    })
}
export default {
    wangRequest,
    wangRequestNoData,
    loginUser
}
