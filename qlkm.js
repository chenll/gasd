

[rewrite_local]
^https?:\/\/(qadx.*\.qinlinad|mall-dsp.*\.qinlinkeji)\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/xcx/qlkm.js

[mitm]
hostname = qadx*.qinlinad.com, mall-dsp*.qinlinkeji.com

*************************************/

var body = $response.body
delete body.result.ads;
$done({ body: JSON.stringify(obj) });
