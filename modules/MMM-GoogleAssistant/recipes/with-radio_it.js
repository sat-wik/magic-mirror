/**  Radio italiane   **/
/** aggiornate al giorno 09/05/20 **/
/**  @di-ma  **/

var recipe = {
  transcriptionHooks: {
    "kisskiss": {
      pattern: "metti radio kiss kiss",
      command: "kisskiss"
    },
    "radio101": {
      pattern: "metti radio 101",
      command: "radio101"
    },
    "radioitalia": {
      pattern: "metti radio italia",
      command: "radioitalia"
    },
    "radio1": {
      pattern: "metti radio 1",
      command: "radio1"
    },
    "radioanni90": {
      pattern: "metti radio anni 90",
      command: "radioanni90"
    },
    "radio105": {
      pattern: "metti radio 105",
      command: "radio105"
    },
    "rds": {
      pattern: "metti rds",
      command: "rds"
    },
    "rtl1025": {
      pattern: "metti rtl",
      command: "rtl1025"
    },
    "radiodj": {
      pattern: "metti radio dj",
      command: "radiodj"
    },
  },

  commands: {
    "kisskiss": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "http://www.di-ma.info/radio/kisskiss.png",
            link: "http://ice07.fluidstream.net:8080/KissKiss.mp3"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
   "radio101": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "http://www.di-ma.info/radio/101.png",
            link: "http://icecast.unitedradio.it/r101"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
   "radioitalia": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "https://www.di-ma.info/radio/radioitalia.jpg",
            link: "http://stream1.rds.it:8000/rds64k"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "radio1": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "https://www.di-ma.info/radio/radio1.png",
            link: "http://icestreaming.rai.it/1.mp3"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "radioanni90": {// a voir
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "https://www.di-ma.info/radio/r90.jpg",
            link: "http://mp3.hitradiort1.c.nmdn.net/rt190swl/livestream.mp3"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "radio105": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "https://www.di-ma.info/radio/r105.jpg",
            link: "http://icecast.unitedradio.it/Radio105.mp3"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "rds": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "https://www.di-ma.info/radio/rds.png",
            link: "https://icstream.rds.radio/rds"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "rtl1025": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "https://www.di-ma.info/radio/rtl1025.png",
            link: "https://streamingv2.shoutcast.com/rtl-1025"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    "radiodj": {
      notificationExec: {
        notification: "A2D_RADIO",
        payload: (params) => {
          return {
            img: "https://www.di-ma.info/radio/radiodj.png",
            link: "http://radiodeejay-lh.akamaihd.net/i/RadioDeejay_Live_1@189857/master.m3u8"
          }
        }
      },
      soundExec: {
        chime: "open"
      }
    },
  }
}
exports.recipe = recipe
