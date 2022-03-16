export function initIntercom() {
  window.intercomSettings = {
    app_id: 'rmer2hwk'
  };

  let w = window;
  let ic = w.Intercom;
  if (typeof ic === 'function') {
    ic('reattach_activator');
    ic('update', intercomSettings);
  } else {
    let d = document;
    let i = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (args) {
      i.q.push(args);
    };
    w.Intercom = i;

    let s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://widget.intercom.io/widget/rmer2hwk';
    let x = d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);

  }
  Intercom('update', window.intercomSettings);
}

export function showNewMessage() {
  window.Intercom('showNewMessage');
}
