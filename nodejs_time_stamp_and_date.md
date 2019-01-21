### **获取当前时间戳, 单位为ms**
```
var timeStamp = Date.parse(new Date());
timeStamp = timeStamp / 1000;
```

### **获取时间格式的时间戳**
```
var stringTime = "2014-01-01 10:00:00";
var timeStamp = Date.parse(new Date(stringTime));
timeStamp = timeStamp / 1000;
```

### **将当前时间转为格式字符串**
```
var timeStamp = 1403058804;
var newDate = new Date();
newDate.setTime(timeStamp * 1000);

Wed Jun 18 2014
newDate.toDateString();

Wed, 18 Jun 2014 02:33:00 GMT
newDate.toGMTString();

2014-06-18T02:33:00.000Z
newDate.toISOString();

2014-06-18T02:33:00.000Z
newDate.toJSON();

2014年6月18日
newDate.toLocalDateString();

2014年6月18日 上午10:33:24
newDate.toLocalString();

上午10:33:24
newDate.toLocalTimeString();

Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
newDate.toString();

Wed, 18 Jun 2014 02:33:24 GMT
newDate.toUTCString();
```