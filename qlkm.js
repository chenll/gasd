var body = $response.body;
body = body.replace(/\"list"./g, delete '\"list"');
body = body.replace(/\"newYearSkinBannerUrl":".*?"/g, '\"newYearSkinBannerUrl":""');
body = body.replace(/\"defaultBannerUrl":".*?"/g, '\"defaultBannerUrl":""');
body = body.replace(/\"groupId":"\d+"/g, '\"groupId":"0"');
body = body.replace(/\"mainSwitch":\d+/g, '\"mainSwitch":0');
body = body.replace(/\"slotId":".*?"/g, '\"slotId":""');
body = body.replace(/\"slotModeSort":\d+/g, '\"slotModeSort":0');
$done({body});
