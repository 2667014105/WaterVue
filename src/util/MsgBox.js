import {ElMessage, ElMessageBox} from "element-plus";


export default function open(msg,title){
  ElMessageBox.alert(msg, title).then(r => {})
}
