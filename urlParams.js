const getParams = url => {
  if (!url) url = window.location.href;
  var opts = {},
    name,
    value,
    i;
  url = url.split('#')[0];
  var idx = url.indexOf('?'),
    search = idx > -1 ? url.substr(idx + 1) : '',
    arrtmp = search.split('&');
  for (var i = 0; i < arrtmp.length; i++) {
    var paramCount = arrtmp[i].indexOf('=');
    if (paramCount > 0) {
      name = arrtmp[i].substring(0, paramCount);
      value = arrtmp[i].substr(paramCount + 1);
      try {
        if (value.indexOf('+') > -1) {
          value = value.replace(/\+/g, ' ');
        }
        opts[name] = decodeURIComponent(value);
      } catch (exp) {}
    }
  }
  return opts;
};

const addParam = (url, param, value) => {
  if (!url) url = window.location.href;
  var re = new RegExp('([&\\?])' + param + '=[^& ]*', 'g');
  url = url.replace(re, function(a, b) {
    return b == '?' ? '?' : '';
  });
  var idx = url.indexOf('?');
  var hashIndex = url.indexOf('#');
  if (hashIndex < 0) {
    url = (idx > -1 ? (idx + 1 != url.length ? url + '&' : url + '') : url + '?') + param + '=' + value;
  }
  return url;
};

const removeParam = (url, pnm) => {
  var reg1 = new RegExp('\\?' + pnm + '(=[^&]*)?'),
    reg2 = new RegExp('\\&' + pnm + '(=[^&]*)?');

  return url
    .replace(reg1, '?')
    .replace(reg2, '')
    .replace(/\?&/, '?')
    .replace(/\?$/, '');
};

export { addParam, getParams, removeParam };
