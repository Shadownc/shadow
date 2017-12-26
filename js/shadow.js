var shadow = {
    /**
     * 
     * @desc   url参数转对象
     * @param  {String} url  default: window.location.href
     * @return {Object} 
     */
    parseQueryString: function (url) {
        url = url == null ? window.location.href : url
        var search = url.substring(url.lastIndexOf('?') + 1)
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    },
    /**
     * 
     * @desc   对象序列化
     * @param  {Object} obj 
     * @return {String} default:"a=1&b=2"
     */
    stringfyQueryString: function (obj) {
        if (!obj) return '';
        var pairs = [];

        for (var key in obj) {
            var value = obj[key];

            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }

            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }

        return pairs.join('&');
    },
    /**
     * 
     * 
     * @class formatDateTime
     */
    formatDateTime: class formatDateTime {
        constructor(date, type) {
            //this.date = date ? data : new Date()
            this.date = !date ? new Date() : (typeof date == 'number' ? new Date(date) : date)
            this.type = type
        }

        toSet() {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            var minute = date.getMinutes();
            var s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            minute = minute < 10 ? ('0' + minute) : minute;
            if (this.type == 'hm') {
                return h + ':' + minute
            } else if (this.type == 'mdhm') {
                return m + '-' + d + ' ' + h + ':' + minute
            } if (this.type = 'ymd') {
                return y + '-' + m + '-' + d
            } else {
                return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + s
            }
        }
    }
}
