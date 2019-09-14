import { ajax } from './ajax';

 const BASE="http://localhost/duapp/php";

//  首页获取商品详情
 export const reqGoods = () => ajax(BASE+'/goods.php',{},'GET');
 export const reqSwiper = () => ajax(BASE+'/lb.php',{},'GET');
 export const reqNav = () => ajax(BASE+'/nav_fl.php',{},'GET')