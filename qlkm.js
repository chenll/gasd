

[rewrite_local]
^https?:\/\/(qadx.*\.qinlinad|mall-dsp.*\.qinlinkeji)\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/xcx/qlkm.js

[mitm]
hostname = qadx*.qinlinad.com, mall-dsp*.qinlinkeji.com

*************************************/

let obj=JSON.parse($response.body);
/*京喜APP*/
if (/^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show/.test($request.url)) { 
    obj.data.materialList.startTime=3667476800000;
    obj.data.materialList.endTime  =3667908800000;
}
$done({body:JSON.stringify(obj)});
