var Paris = window.Paris || {};

Paris.locales = {
  fr: {
    'share.facebook': 'Partager sur Facebook',
    'share.twitter': 'Partager sur Twitter',
    'share.email': 'Partager par email'
  },
  en: {
    'share.facebook': 'Share on Facebook',
    'share.twitter': 'Share on Twitter',
    'share.email': 'Share by email'
  },
  es: {
    'share.facebook': 'Compartir en Facebook',
    'share.twitter': 'Compartir en Twitter',
    'share.email': 'Compartir por correo electrónico'
  }
}

Paris.t = function translate(key) {
  return Paris.locales[$('html').attr('lang')][key];
}
