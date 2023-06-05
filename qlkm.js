

[rewrite_local]
^https:\/\/(qadx.*\.qinlinad|mall-dsp.*\.qinlinkeji)\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/xcx/qlkm.js

[mitm]
hostname = qadx*.qinlinad.com, mall-dsp*.qinlinkeji.com

*************************************/


var body = $response.body;

body = body.replace(/\"list"./g, delete '\"list"');
body = body.replace(/\"ads"./g, delete '\"ads"');
body = body.replace(/\"newYearSkinBannerUrl":".*?"/g, '\"newYearSkinBannerUrl":""');

body = body.replace(/\"defaultBannerUrl":".*?"/g, '\"defaultBannerUrl":""');

body = body.replace(/\"groupId":"\d+"/g, '\"groupId":"0"');

body = body.replace(/\"mainSwitch":\d+/g, '\"mainSwitch":0');

body = body.replace(/\"slotId":".*?"/g, '\"slotId":""');

body = body.replace(/\"slotModeSort":\d+/g, '\"slotModeSort":0');

$done({body});
