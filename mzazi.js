/* Everything you need is here.*/
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const fs = require('fs');
const util = require("util");
global.axios = require("axios")["default"];
const chalk = require("chalk");
const speed = require('performance-now');
const yts = require('yt-search');
const {
  DateTime
} = require("luxon");
const uploadtoimgur = require('./lib/imgur');
const advice = require('badadvice');
const {
  c,
  cpp,
  node,
  python,
  java
} = require("compile-run");
const acrcloud = require("acrcloud");
const ytdl = require("ytdl-core");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require('./lib/mzaziupload');
const {
  Configuration,
  OpenAI
} = require("openai");
const {
  menu,
  autoread,
  mode,
  appname,
  herokuapi,
  gptdm,
  botname,
  antibot,
  prefix,
  author,
  packname,
  mycode,
  admin,
  botAdmin,
  dev,
  group,
  bad,
  DevMzazi,
  NotOwner,
  antilink,
  antilinkall,
  wapresence,
  badwordkick
} = require('./set.js');
const {
  smsg,
  runtime,
  fetchUrl,
  isUrl,
  processTime,
  formatp,
  tanggal,
  formatDate,
  getTime,
  sleep,
  generateProfilePicture,
  clockString,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom
} = require("./lib/mzazifunc");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
module.exports = mzazi = async (_0x5e9ccc, _0x4be48e, _0x5990ad, _0x4ebbbb) => {
  try {
    var _0x89371b = _0x4be48e.mtype === 'conversation' ? _0x4be48e.message.conversation : _0x4be48e.mtype == "imageMessage" ? _0x4be48e.message.imageMessage.caption : _0x4be48e.mtype == "videoMessage" ? _0x4be48e.message.videoMessage.caption : _0x4be48e.mtype == 'extendedTextMessage' ? _0x4be48e.message.extendedTextMessage.text : _0x4be48e.mtype == "buttonsResponseMessage" ? _0x4be48e.message.buttonsResponseMessage.selectedButtonId : _0x4be48e.mtype == "listResponseMessage" ? _0x4be48e.message.listResponseMessage.singleSelectReply.selectedRowId : _0x4be48e.mtype == "templateButtonReplyMessage" ? _0x4be48e.message.templateButtonReplyMessage.selectedId : _0x4be48e.mtype === "messageContextInfo" ? _0x4be48e.message.buttonsResponseMessage?.["selectedButtonId"] || _0x4be48e.message.listResponseMessage?.["singleSelectReply"]['selectedRowId'] || _0x4be48e.text : '';
    var _0xf2d9fe = typeof _0x4be48e.text == "string" ? _0x4be48e.text : '';
    var _0x407fff = _0x4be48e.message.extendedTextMessage?.["contextInfo"]?.['quotedMessage'];
    const _0x19d270 = require("heroku-client");
    const _0x312252 = _0x89371b.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const _0x56b0d7 = _0x89371b.trim().split(/ +/).slice(0x1);
    const _0x12ae39 = _0x4be48e.pushName || "No Name";
    const _0x4c4853 = await _0x5e9ccc.decodeJid(_0x5e9ccc.user.id);
    const _0x49d16f = !!(_0x4be48e.sender == _0x4c4853);
    let _0x1d9323 = q = _0x56b0d7.join(" ");
    _0x4be48e.isBaileys = _0x4be48e.id.startsWith('BAE5') && _0x4be48e.id.length === 0x10;
    const _0x9a8608 = _0x4be48e.chat;
    const _0x4edf32 = _0x4be48e.reply;
    const _0x215567 = _0x4be48e.sender;
    const _0x21e26f = _0x5990ad.messages[0x0];
    const _0xd7c87b = _0x3c8592 => {
      let _0x11e9e0 = [];
      for (let _0x5fb1c0 of _0x3c8592) {
        if (_0x5fb1c0.admin === "superadmin") {
          _0x11e9e0.push(_0x5fb1c0.id);
        } else if (_0x5fb1c0.admin === "admin") {
          _0x11e9e0.push(_0x5fb1c0.id);
        } else {
          '';
        }
      }
      return _0x11e9e0 || [];
    };
    const _0x5c6a0e = _0x4be48e.quoted || _0x4be48e;
    const _0x465c5b = _0x5c6a0e.mtype == "buttonsMessage" ? _0x5c6a0e[Object.keys(_0x5c6a0e)[0x1]] : _0x5c6a0e.mtype == "templateMessage" ? _0x5c6a0e.hydratedTemplate[Object.keys(_0x5c6a0e.hydratedTemplate)[0x1]] : _0x5c6a0e.mtype == "product" ? _0x5c6a0e[Object.keys(_0x5c6a0e)[0x0]] : _0x4be48e.quoted ? _0x4be48e.quoted : _0x4be48e;
    const _0x57d5c5 = (_0x465c5b.msg || _0x465c5b).mimetype || '';
    const _0x1a8173 = _0x465c5b.msg || _0x465c5b;
    const _0x1f45f8 = _0x89371b.startsWith(prefix);
    const _0x4e3da1 = bad.split(',');
    const _0x112338 = DevMzazi.map(_0x5268ec => _0x5268ec.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x4be48e.sender);
    const _0x493d67 = _0x4be48e.isGroup ? await _0x5e9ccc.groupMetadata(_0x4be48e.chat)["catch"](_0x231c42 => {}) : '';
    const _0x358311 = _0x4be48e.isGroup && _0x493d67 ? await _0x493d67.subject : '';
    const _0x5ccf6b = _0x4be48e.isGroup && _0x493d67 ? await _0x493d67.participants : '';
    const _0x42d81a = _0x4be48e.isGroup ? await _0xd7c87b(_0x5ccf6b) : '';
    const _0x11d5f0 = _0x4be48e.isGroup ? _0x42d81a.includes(_0x4c4853) : false;
    const _0x3038a9 = _0x4be48e.isGroup ? _0x42d81a.includes(_0x4be48e.sender) : false;
    const _0x2f24d1 = "254741388986".split(',');
    const _0x43e1be = new Date();
    const _0x12853c = speed();
    const _0x1a4a1a = speed() - _0x12853c;
    let _0x372e98 = _0xf2d9fe.length > 0x1e ? q.substring(0x0, 0x1e) + "..." : _0xf2d9fe;
    const _0x202628 = _0x21e26f.key.remoteJid;
    if (wapresence === "online") {
      _0x5e9ccc.sendPresenceUpdate('available', _0x202628);
    } else {
      if (wapresence === 'typing') {
        _0x5e9ccc.sendPresenceUpdate("composing", _0x202628);
      } else if (wapresence === "recording") {
        _0x5e9ccc.sendPresenceUpdate("recording", _0x202628);
      } else {
        _0x5e9ccc.sendPresenceUpdate('unavailable', _0x202628);
      }
    }
    if (_0x1f45f8 && mode === "PRIVATE" && !_0x49d16f && !_0x112338 && _0x4be48e.sender !== "254114660061") {
      return;
    }
    if (autoread === "TRUE" && !_0x4be48e.isGroup) {
      _0x5e9ccc.readMessages([_0x4be48e.key]);
    }
    if (_0x49d16f && _0x21e26f.key.id.startsWith('BAE5') && _0x21e26f.key.id.length === 0x10 && !_0x4be48e.isGroup) {
      return;
    }
    _0x5e9ccc.sendContact = async (_0x2fe81b, _0x1ae0cd, _0x5bc057 = '', _0x4f0de9 = {}) => {
      let _0x3f1a13 = [];
      for (let _0x5f1844 of _0x1ae0cd) {
        _0x3f1a13.push({
          'displayName': "MZAZI DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: MZAZI DEV\nFN:MZAZI DEV\nitem1.TEL;waid=" + _0x5f1844 + ':' + _0x5f1844 + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/nick_hunter9\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      _0x5e9ccc.sendMessage(_0x2fe81b, {
        'contacts': {
          'displayName': "MZAZI DEV",
          'contacts': _0x3f1a13
        },
        ..._0x4f0de9
      }, {
        'quoted': _0x5bc057
      });
    };
    if (antibot === "TRUE" && _0x21e26f.key.id.startsWith("BAE5") && _0x4be48e.isGroup && !_0x3038a9 && _0x11d5f0 && _0x21e26f.key.id.length === 16) {
      kidts = _0x4be48e.sender;
      _0x5e9ccc.sendMessage(_0x4be48e.chat, {
        'text': "𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by MZAZI to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': _0x4be48e
      });
      await _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, [kidts], "remove");
    }
    if (_0xf2d9fe.startsWith('>')) {
      if (!_0x112338) {
        return _0x4edf32("Only owner can evaluate bailey codes");
      }
      try {
        let _0xfbdfe9 = await eval(_0xf2d9fe.slice(0x2));
        if (typeof _0xfbdfe9 !== "string") {
          _0xfbdfe9 = require("util").inspect(_0xfbdfe9);
        }
        await _0x4edf32(_0xfbdfe9);
      } catch (_0x463e0e) {
        await _0x4edf32(String(_0x463e0e));
      }
    }
    async function _0x5cdd14() {}
    if (gptdm === 'TRUE' && _0x4be48e.chat.endsWith("@s.whatsapp.net")) {
      let _0x185b1d = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x1d9323);
      if (!_0x185b1d.BK9) {
        return _0x4edf32("An error occurred while fetching the AI chatbot response. Please try again later.");
      } else {
        _0x4edf32(_0x185b1d.BK9);
      }
    }
    async function _0x1265da() {
      var _0xe98e7e = ['🖤', '🤬', '❤', '✅', "𝗣𝗶𝗻𝗴𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"];
      let {
        key: _0x22d001
      } = await _0x5e9ccc.sendMessage(_0x9a8608, {
        'text': "𝗣𝗼𝗻𝗴"
      });
      for (let _0x32409e = 0x0; _0x32409e < _0xe98e7e.length; _0x32409e++) {
        await _0x5e9ccc.sendMessage(_0x9a8608, {
          'text': _0xe98e7e[_0x32409e],
          'edit': _0x22d001
        });
      }
    }
    const _0x427fe5 = () => {
      const _0x5442cb = DateTime.now().setZone("Africa/Nairobi").hour;
      if (_0x5442cb >= 0x5 && _0x5442cb < 0xc) {
        return "𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅";
      } else {
        if (_0x5442cb >= 0xc && _0x5442cb < 0x10) {
          return "𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️";
        } else {
          return _0x5442cb >= 0x10 && _0x5442cb < 0x14 ? "𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇" : "𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴";
        }
      }
    };
    if (badwordkick === "TRUE" && _0x11d5f0 && !_0x3038a9 && _0x89371b && new RegExp("\\b" + _0x4e3da1.join("\\b|\\b") + "\\b").test(_0x89371b.toLowerCase())) {
      _0x5e9ccc.groupParticipantsUpdate(_0x9a8608, [_0x215567], "remove");
      _0x4edf32("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
    }
    if (antilink === "TRUE" && _0x89371b.includes("chat.whatsapp.com") && !_0x112338 && _0x11d5f0 && !_0x3038a9 && _0x4be48e.isGroup) {
      kid = _0x4be48e.sender;
      _0x5e9ccc.sendMessage(_0x4be48e.chat, {
        'delete': {
          'remoteJid': _0x4be48e.chat,
          'fromMe': false,
          'id': _0x4be48e.key.id,
          'participant': kid
        }
      }).then(() => _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, [kid], "remove"));
      _0x5e9ccc.sendMessage(_0x4be48e.chat, {
        'text': "𝗛𝗲𝘆 @" + ki.split('@')[0x0] + "👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !",
        'contextInfo': {
          'mentionedJid': [kid]
        }
      }, {
        'quoted': _0x4be48e
      });
    }
    if (antilinkall === 'TRUE' && _0x89371b.includes("https://") && !_0x112338 && _0x11d5f0 && !_0x3038a9 && _0x4be48e.isGroup) {
      ki = _0x4be48e.sender;
      _0x5e9ccc.sendMessage(_0x4be48e.chat, {
        'delete': {
          'remoteJid': _0x4be48e.chat,
          'fromMe': false,
          'id': _0x4be48e.key.id,
          'participant': ki
        }
      }).then(() => _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, [ki], "remove"));
      _0x5e9ccc.sendMessage(_0x4be48e.chat, {
        'text': "𝗛𝗲𝘆 @" + ki.split('@')[0x0] + "👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !",
        'contextInfo': {
          'mentionedJid': [ki]
        }
      }, {
        'quoted': _0x4be48e
      });
    }
    if (_0x1f45f8 && !_0x4be48e.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ MZAZI-XMD ]")), !_0x4f0c(0x469) ? chalk.green(_0x372e98) : chalk.keyword("turquoise")(_0x372e98), chalk.magenta("From"), chalk.green(_0x12ae39), chalk.yellow("[ " + _0x4be48e.sender.replace('@s.whatsapp.net', '') + " ]"));
    } else if (_0x1f45f8 && _0x4be48e.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), chalk.keyword('turquoise')(_0x372e98), chalk.magenta("From"), chalk.green(_0x12ae39), chalk.yellow("[ " + _0x4be48e.sender.replace('@s.whatsapp.net', '') + " ]"), chalk.blueBright('IN'), chalk.green(_0x358311));
    }
    if (_0x1f45f8) {
      switch (_0x312252) {
        case "help":
        case "menu":
          await _0x5cdd14();
          let _0x5668eb = "𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, " + _0x427fe5() + "\n\n╭═════〘 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 〙═════╮\n┃✫╭═─────────────────═╮\n┃✬│ 𝗨𝘀𝗲𝗿 : " + _0x4be48e.pushName + "\n┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : " + prefix + "\n┃✫│ 𝗠𝗼𝗱𝗲 : " + mode + "\n┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   " + _0x1a4a1a.toFixed(0x4) + " 𝗠𝘀\n┃✬│ 𝗧𝗶𝗺𝗲 : " + DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE) + " on " + _0x43e1be.toLocaleString("en-US", {
            'weekday': "long",
            'timeZone': "Africa/Nairobi"
          }) + "\n┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 32𝗚𝗕 𝗼𝗳 64𝗚𝗕\n┃✫│═════════════════════\n┃✬│█▀██████▀█▀██▀███▄█▀█\n┃✫│═════════════════════\n╰══──────────────────══╯\n●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙═──═●\n╭══───────◇───────══╮\n┃✬│ 𝗩𝗶𝗱𝗲𝗼\n┃✫│ 𝗣𝗹𝗮𝘆\n┃✬│ 𝗣𝗹𝗮𝘆2\n┃✫│ 𝗦𝗼𝗻𝗴\n┃✫│ 𝗦𝗼𝗻𝗴2\n┃✬│ 𝗙𝗯𝗱𝗹\n┃✫│ 𝗧𝗶𝗸𝘁𝗼𝗸\n┃✬│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n┃✫│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n┃✫│ 𝗠𝗼𝘃𝗶𝗲\n┃✬│ 𝗟𝘆𝗿𝗶𝗰𝘀\n┃✫│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴\n┃✬│ 𝗬𝘁𝘀\n┃✫│ 𝗬𝘁𝗺𝗽3\n┃✬│ 𝗬𝘁𝗺𝗽4\n╰══───────◇───────══╯\n●═════  〘 𝗘𝗗𝗜𝗧 〙══───═●\n╭══───────◇───────══╮\n┃✫│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿\n┃✬│ 𝗦𝗺𝗲𝗺𝗲\n┃✫│ 𝗣𝗵𝗼𝘁𝗼\n┃✫│ 𝗠𝗽4\n┃✬│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲\n┃✫│ 𝗩𝘃\n┃✫│ 𝗩𝘃2\n┃✬│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁\n┃✫│ 𝗠𝗶𝘅\n┃✬│ 𝗧𝗮𝗸𝗲\n┃✫│ 𝗧𝘄𝗲𝗲𝘁\n┃✫│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆\n╰══───────◇───────══╯\n●═════  〘 𝗚𝗣𝗧 〙═────═●\n╭══───────◇───────══╮\n┃✬│ 𝗔𝗶\n┃✯│ 𝗔𝗶2\n┃✫│ 𝗩𝗶𝘀𝗶𝗼𝗻\n┃✫│ 𝗗𝗲𝗳𝗶𝗻𝗲\n┃✯│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁\n┃✫│ 𝗥𝗮𝘃𝗲𝗻\n┃✬│ 𝗚𝗲𝗺𝗶𝗻𝗶\n┃✯│ 𝗚𝗼𝗼𝗴𝗹𝗲\n┃✫│ 𝗚𝗽𝘁\n┃✬│ 𝗚𝗽𝘁2\n┃✫│ 𝗚𝗽𝘁3\n╰══───────◇───────══╯\n●════  〘 𝗚𝗥𝗢𝗨𝗣 〙═───═●\n╭══───────◇───────══╮\n┃✫│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲\n┃✯│ 𝗥𝗲𝗷𝗲𝗰𝘁\n┃✫│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲\n┃✬│ 𝗗𝗲𝗺𝗼𝘁𝗲\n┃✫│ 𝗗𝗲𝗹𝗲𝘁𝗲\n┃✬│ 𝗥𝗲𝗺𝗼𝘃𝗲\n┃✫│ 𝗙𝗮𝗸𝗲𝗿\n┃✯│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀\n┃✬│ 𝗖𝗹𝗼𝘀𝗲\n┃✫│ 𝗢𝗽𝗲𝗻\n┃✬│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳\n┃✫│ 𝗗𝗶𝘀𝗽-1\n┃✬│ 𝗗𝗶𝘀𝗽-7\n┃✫│ 𝗗𝗶𝘀𝗽-90\n┃✬│ 𝗜𝗰𝗼𝗻\n┃✯│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲\n┃✫│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n┃✬│ 𝗗𝗲𝘀𝗰\n┃✫│ 𝗟𝗲𝗮𝘃𝗲\n┃✯│ 𝗔𝗱𝗱\n┃✫│ 𝗧𝗮𝗴𝗮𝗹𝗹\n┃✬│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴\n┃✫│ 𝗥𝗲𝘃𝗼𝗸𝗲\n┃✬│ 𝗠𝘂𝘁𝗲\n┃✫│ 𝗨𝗻𝗺𝘂𝘁𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 〙 ═───═●\n╭══───────◇───────══╮\n┃✫│ 𝗖𝗮𝗿𝗯𝗼𝗻\n┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰\n┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++\n┃✯│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀\n┃✫│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆\n┃✯│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲\n┃✫│ 𝗘𝘃𝗮𝗹\n╰══───────◇───────══╯\n●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〙 ═───═●\n╭══───────◇───────══╮\n┃✬│ 𝗢𝘄𝗻𝗲𝗿\n┃✬│ 𝗦𝗰𝗿𝗶𝗽𝘁\n┃✫│ 𝗠𝗲𝗻𝘂\n┃✬│ 𝗟𝗶𝘀𝘁\n┃✫│ 𝗣𝗶𝗻𝗴\n┃✯│ 𝗣𝗼𝗹𝗹\n┃✬│ 𝗔𝗹𝗶𝘃𝗲\n┃✫│ 𝗦𝗽𝗲𝗲𝗱\n┃✬│ 𝗥𝗲𝗽𝗼\n┃✫│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲\n┃✯│ 𝗨𝗽𝘁𝗶𝗺𝗲\n┃✫│ 𝗗𝗽\n┃✯│ 𝗗𝗹𝘁\n┃✬│ 𝗠𝗮𝗶𝗹\n┃✫│ 𝗜𝗻𝗯𝗼𝘅\n┃✯│ 𝗡𝗲𝘄𝘀\n┃✫│ 𝗔𝗻𝗶𝗺𝗲\n╰══───────◇───────══╯\n●═══   〘 𝗢𝗪𝗡𝗘𝗥  〙═───═●\n╭══───────◇───────══╮\n┃✬│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁\n┃✫│ 𝗔𝗱𝗺𝗶𝗻\n┃✯│ 𝗖𝗮𝘀𝘁\n┃✬│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁\n┃✫│ 𝗝𝗼𝗶𝗻\n┃✯│ 𝗚𝗲𝘁𝘃𝗮𝗿\n┃✯│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆\n┃✯│ 𝗨𝗽𝗱𝗮𝘁𝗲\n┃✫│ 𝗦𝗲𝘁𝘃𝗮𝗿\n┃✬│ 𝗕𝗼𝘁𝗽𝗽\n┃✫│ 𝗙𝘂𝗹𝗹𝗽𝗽\n┃✬│ 𝗕𝗹𝗼𝗰𝗸\n┃✫│ 𝗨𝗻𝗯𝗼𝗰𝗸\n┃✬│ 𝗞𝗶𝗹𝗹\n┃✫│ 𝗞𝗶𝗹𝗹2\n┃✫│ 𝗦𝗮𝘃𝗲\n┃✬│ >\n╰══───────◇───────══╯\n●═══   〘 𝗣𝗥𝗔𝗡𝗞  〙 ═──═●\n╭══───────◇───────══╮\n┃✯│ 𝗛𝗮𝗰𝗸\n╰══───────◇───────══╯\n●═══   〘 𝗟𝗢𝗚𝗢𝗦  〙 ═──═●\n╭══───────◇───────══╮\n┃✯│ 𝗛𝗮𝗰𝗸𝗲𝗿\n┃✫│ 𝗛𝗮𝗰𝗸𝗲𝗿2\n┃✯│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶\n┃✫│ 𝗖𝗮𝘁\n┃✯│ 𝗦𝗮𝗻𝗱\n┃✫│ 𝗚𝗼𝗹𝗱\n┃✯│ 𝗔𝗿𝗲𝗻𝗮\n┃✫│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹\n┃✯│ 𝗡𝗮𝗿𝘂𝘁𝗼\n┃✫│ 𝗖𝗵𝗶𝗹𝗱\n┃✯│ 𝗟𝗲𝗮𝘃𝗲𝘀\n┃✫│ 1917\n┃✯│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆\n╰══───────◇───────══╯\n●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥  〙═──═●\n╭══───────◇───────══╮\n┃✯│ 𝗣𝘂𝗿𝗽𝗹𝗲\n┃✫│ 𝗡𝗲𝗼𝗻\n┃✯│ 𝗡𝗼𝗲𝗹\n┃✫│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰\n┃✯│ 𝗗𝗲𝘃𝗶𝗹\n┃✫│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲\n┃✯│ 𝗦𝗻𝗼𝘄\n┃✫│ 𝗪𝗮𝘁𝗲𝗿\n┃✯│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿\n┃✫│ 𝗜𝗰𝗲\n┃✯│ 𝗠𝗮𝘁𝗿𝗶𝘅\n┃✫│ 𝗦𝗶𝗹𝘃𝗲𝗿\n┃✯│ 𝗟𝗶𝗴𝗵𝘁\n╰══───────◇───────══╯\n●═══   〘 𝗠𝗜𝗦𝗖  〙 ═──═●\n╭══───────◇───────══╮\n┃✫│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿\n┃✯│ 𝗚𝗶𝘁𝗵𝘂𝗯\n┃✫│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲\n┃✯│ 𝗔𝗱𝘃𝗶𝗰𝗲\n┃✫│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴\n┃✯│ 𝗥𝗲𝗺𝗶𝗻𝗶\n┃✯│ 𝗧𝘁𝘀\n┃✯│ 𝗧𝗿𝘁\n┃✫│ 𝗙𝗮𝗰𝘁\n┃✯│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁\n┃✫│ 𝗤𝘂𝗼𝘁𝗲𝘀\n┃✯│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦  〙 ═──═●\n╭══───────◇───────══╮\n┃✫│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀\n┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱\n┃✫│ 𝗔𝘁𝘁𝗽\n┃✬│ 𝗨𝗿𝗹\n┃✫│ 𝗜𝗺𝗮𝗴𝗲\n┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺\n┃✫╰═───────◇───────═╯\n┃   𝗠𝗮𝗱𝗲 𝗢𝗻 𝗘𝗮𝗿𝘁𝗵 𝗕𝘆 𝗠𝘇𝗮𝘇𝗶 !\n╰══────────────────══╯";
          if (menu === 'VIDEO') {
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'video': fs.readFileSync("./Media/menu.mp4"),
              'caption': _0x5668eb,
              'gifPlayback': true
            }, {
              'quoted': _0x4be48e
            });
          } else {
            if (menu === 'TEXT') {
              _0x5e9ccc.sendMessage(_0x9a8608, {
                'text': _0x5668eb
              }, {
                'quoted': _0x4be48e
              });
            } else {
              if (menu === "IMAGE") {
                _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'image': {
                    'url': "https://telegra.ph/file/eebe191a0520a79979b34.jpg"
                  },
                  'caption': _0x5668eb,
                  'fileLength': "9999999999"
                }, {
                  'quoted': _0x4be48e
                });
              } else if (menu === "LINK") {
                _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'text': _0x5668eb,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': "𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
                      'body': '' + runtime(process.uptime()),
                      'thumbnail': fs.readFileSync("./Media/mzazi.jpg"),
                      'sourceUrl': 'https://wa.me/254114660061?text=Hello👋+Mzazi+Nihostie+Bot+Mkuu+😔',
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x4be48e
                });
              }
            }
          }
          break;
        case "advice":
          _0x4edf32(advice());
          console.log(advice());
          break;
        case "owner":
          _0x5e9ccc.sendContact(_0x9a8608, _0x2f24d1, _0x4be48e);
          break;
        case "play":
          {
            const _0x5b0e33 = require('yt-search');
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("What song do you want to download?");
              }
              const {
                videos: _0x5ec53b
              } = await _0x5b0e33(_0x1d9323);
              if (!_0x5ec53b || _0x5ec53b.length === 0x0) {
                return _0x4be48e.reply("No songs found!");
              }
              const _0x17a48d = _0x5ec53b[0x0].url;
              try {
                let _0x277fd7 = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x17a48d);
                const {
                  title: _0x27d3b,
                  format: _0x5d1c38,
                  url: _0x4c88ab
                } = _0x277fd7.result;
                await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'document': {
                    'url': _0x4c88ab
                  },
                  'mimetype': "audio/mpeg",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
                  'fileName': _0x27d3b + '.mp3'
                }, {
                  'quoted': _0x4be48e
                });
              } catch (_0x3166fa) {
                console.error("API request failed:", _0x3166fa.message);
                _0x4be48e.reply("Download failed: Unable to retrieve audio.");
              }
            } catch (_0x4e48ef) {
              _0x4be48e.reply("Download failed\n" + _0x4e48ef.message);
            }
          }
          ;
          break;
        case "update":
        case "redeploy":
          {
            const _0x4b3c34 = require("axios");
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await _0x4be48e.reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
              return;
            }
            async function _0x54f2e0() {
              try {
                const _0x132586 = await _0x4b3c34.post("https://api.heroku.com/apps/" + appname + "/builds", {
                  'source_blob': {
                    'url': "https://github.com/TeddyDommie/MZAZI-XMD/tarball/main"
                  }
                }, {
                  'headers': {
                    'Authorization': "Bearer " + herokuapi,
                    'Accept': "application/vnd.heroku+json; version=3"
                  }
                });
                await _0x4be48e.reply("Your bot is undergoing a ruthless upgrade, hold tight for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *MZAZI-XMD* unleashed upon you.");
                console.log("Build details:", _0x132586.data);
              } catch (_0x55fd75) {
                const _0xd86c43 = _0x55fd75.response?.["data"] || _0x55fd75.message;
                await _0x4be48e.reply("Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.");
                console.error("Error triggering redeploy:", _0xd86c43);
              }
            }
            _0x54f2e0();
          }
          break;
        case 'credits':
          _0x5e9ccc.sendMessage(_0x4be48e.chat, {
            'image': {
              'url': "https://i.imgur.com/Jp8zoUC.jpeg"
            },
            'caption': "We express sincere gratitude and acknowledgement to the following:\n\n -Dika Ardnt ➪ Indonesia\n - Writing the base code using case method\nhttps://github.com/DikaArdnt\n\n -Adiwajshing ➪ India\n - Writing and Coding the bot's library (baileys)\nhttps://github.com/WhiskeySockets/Baileys\n\n -WAWebSockets Discord Server community\n-Maintaining and reverse engineering the Web Sockets\nhttps://discord.gg/WeJM5FP9GG\n\n - Nick Hunter ➪ Kenya\n - Actively compiling and debugging parts of this bot script\nhttps://github.com/TeddyDommie\n\n - Mzazi (mzazi) ➪ Kenya\n - Compiling and debugging parts of this bot script\nhttps://github.com/Keithkeizzah\n\n - Fortunatus Mokaya ➪ Kenya\n - Founder of the bot Base\nhttps://github.com/Fortunatusmokaya\n\n𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗"
          }, {
            'quoted': _0x4be48e
          });
          break;
        case "poll":
          {
            let [_0x12bc22, _0x1f35bd] = _0x1d9323.split('|');
            if (_0x1d9323.split('|') < 0x2) {
              return _0x4be48e.reply("Wrong format::\nExample:- poll who is the best president|Putin, Ruto");
            }
            let _0x4fd6ac = [];
            for (let _0x218795 of _0x1f35bd.split(',')) {
              _0x4fd6ac.push(_0x218795);
            }
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'poll': {
                'name': _0x12bc22,
                'values': _0x4fd6ac
              }
            });
          }
          break;
        case 'play2':
          {
            const _0x25dd32 = require("axios");
            const _0x5a8127 = require("yt-search");
            const _0x3496df = require("fluent-ffmpeg");
            const _0x456bf1 = require('fs');
            const _0x129166 = require('path');
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("What song do you want to download?");
              }
              let _0x2520db = await _0x5a8127(_0x1d9323);
              let _0x26d287 = _0x2520db.all[0x0].url;
              const _0x10656f = ["https://xploader-api.vercel.app/ytmp3?url=" + _0x26d287, "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + _0x26d287, "https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + _0x26d287, "https://api.dreaded.site/api/ytdl/audio?url=" + _0x26d287];
              for (const _0x5e8b4a of _0x10656f) {
                try {
                  let _0x4cdbcb = await fetchJson(_0x5e8b4a);
                  if (_0x4cdbcb.status === 0xc8 || _0x4cdbcb.success) {
                    let _0x2e52c = _0x4cdbcb.result?.["downloadUrl"] || _0x4cdbcb.url;
                    let _0x3fbee3 = _0x2520db.all[0x0].title.replace(/[^a-zA-Z0-9 ]/g, '') + '.mp3';
                    let _0x7d1c90 = _0x129166.join(__dirname, _0x3fbee3);
                    const _0x36fcfe = await _0x25dd32({
                      'url': _0x2e52c,
                      'method': "GET",
                      'responseType': "stream"
                    });
                    if (_0x36fcfe.status !== 0xc8) {
                      _0x4be48e.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
                      continue;
                    }
                    _0x3496df(_0x36fcfe.data).toFormat("mp3").save(_0x7d1c90).on('end', async () => {
                      await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                        'document': {
                          'url': _0x7d1c90
                        },
                        'mimetype': 'audio/mp3',
                        'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
                        'fileName': _0x3fbee3
                      }, {
                        'quoted': _0x4be48e
                      });
                      _0x456bf1.unlinkSync(_0x7d1c90);
                    }).on("error", _0x58e52e => {
                      _0x4be48e.reply("Download failed\n" + _0x58e52e.message);
                    });
                    return;
                  }
                } catch (_0x466ca4) {
                  continue;
                }
              }
              _0x4be48e.reply("An error occurred. All APIs might be down or unable to process the request.");
            } catch (_0x3944e4) {
              _0x4be48e.reply("Download failed\n" + _0x3944e4.message);
            }
          }
          break;
        case 'inspect':
          {
            const _0x2b659d = require("node-fetch");
            const _0x3dc60b = require("cheerio");
            if (!_0x1d9323) {
              return _0x4be48e.reply("Provide a valid web link to fetch! The bot will crawl the website and fetch its HTML, CSS, JavaScript, and any media embedded in it.");
            }
            if (!/^https?:\/\//i.test(_0x1d9323)) {
              return _0x4be48e.reply("Please provide a URL starting with http:// or https://");
            }
            try {
              const _0x89c858 = await _0x2b659d(_0x1d9323);
              const _0x469611 = await _0x89c858.text();
              const _0x397c79 = _0x3dc60b.load(_0x469611);
              const _0x2e704b = [];
              _0x397c79("img[src], video[src], audio[src]").each((_0x201160, _0x29350b) => {
                let _0x548729 = _0x397c79(_0x29350b).attr("src");
                if (_0x548729) {
                  _0x2e704b.push(_0x548729);
                }
              });
              const _0x55cb53 = [];
              _0x397c79("link[rel=\"stylesheet\"]").each((_0x577c4d, _0x1c717a) => {
                let _0x5b952e = _0x397c79(_0x1c717a).attr("href");
                if (_0x5b952e) {
                  _0x55cb53.push(_0x5b952e);
                }
              });
              const _0x50da49 = [];
              _0x397c79("script[src]").each((_0x3c01f1, _0x590aa5) => {
                let _0x5024d = _0x397c79(_0x590aa5).attr("src");
                if (_0x5024d) {
                  _0x50da49.push(_0x5024d);
                }
              });
              await _0x4be48e.reply("**Full HTML Content**:\n\n" + _0x469611);
              if (_0x55cb53.length > 0x0) {
                for (const _0x1ec702 of _0x55cb53) {
                  const _0x2436f2 = await _0x2b659d(new URL(_0x1ec702, _0x1d9323));
                  const _0x34d81f = await _0x2436f2.text();
                  await _0x4be48e.reply("**CSS File Content**:\n\n" + _0x34d81f);
                }
              } else {
                await _0x4be48e.reply("No external CSS files found.");
              }
              if (_0x50da49.length > 0x0) {
                for (const _0x2fcfe8 of _0x50da49) {
                  const _0x76b223 = await _0x2b659d(new URL(_0x2fcfe8, _0x1d9323));
                  const _0x386f44 = await _0x76b223.text();
                  await _0x4be48e.reply("**JavaScript File Content**:\n\n" + _0x386f44);
                }
              } else {
                await _0x4be48e.reply("No external JavaScript files found.");
              }
              if (_0x2e704b.length > 0x0) {
                await _0x4be48e.reply("**Media Files Found**:\n" + _0x2e704b.join("\n"));
              } else {
                await _0x4be48e.reply("No media files (images, videos, audios) found.");
              }
            } catch (_0x2c9e17) {
              console.error(_0x2c9e17);
              return _0x4be48e.reply("An error occurred while fetching the website content.");
            }
          }
          break;
        case "metallic":
          {
            var _0x10e953 = require('mumaker');
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Metallic Nick");
              return;
            }
            try {
              var _0x4ec5fb = await _0x10e953.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x4ec5fb.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x1631ac) {
              _0x4be48e.reply(_0x1631ac);
            }
          }
          break;
        case "ice":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Ice Nick");
              return;
            }
            try {
              var _0x3ab1fd = await _0x10e953.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x3ab1fd.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x1ba817) {
              _0x4be48e.reply(_0x1ba817);
            }
          }
          break;
        case "snow":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Snow Nick");
              return;
            }
            try {
              var _0x1fedb8 = await _0x10e953.ephoto('https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x1fedb8.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x479d27) {
              _0x4be48e.reply(_0x479d27);
            }
          }
          break;
        case "impressive":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0x43f74a = await _0x10e953.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x43f74a.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x5ccc1a) {
              _0x4be48e.reply(_0x5ccc1a);
            }
          }
          break;
        case "noel":
          {
            var _0x10e953 = require('mumaker');
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var _0x2c06a8 = await _0x10e953.ephoto('https://en.ephoto360.com/noel-text-effect-online-99.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x2c06a8.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x3ef01e) {
              _0x4be48e.reply("💀💀" + _0x3ef01e);
            }
          }
          break;
        case "water":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var _0x3a662e = await _0x10e953.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x3a662e.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x127c30) {
              _0x4be48e.reply("💀💀" + _0x127c30);
            }
          }
          break;
        case 'matrix':
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var _0x10fef5 = await _0x10e953.ephoto('https://en.ephoto360.com/matrix-text-effect-154.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x10fef5.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x212828) {
              _0x4be48e.reply("💀💀" + _0x212828);
            }
          }
          break;
        case "light":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var _0x44c9eb = await _0x10e953.ephoto('https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x44c9eb.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x1539d2) {
              _0x4be48e.reply("💀💀" + _0x1539d2);
            }
          }
          break;
        case "neon":
          {
            var _0x10e953 = require('mumaker');
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Neon Nick");
              return;
            }
            try {
              var _0x2c68e6 = await _0x10e953.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x2c68e6.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x5a9bb0) {
              _0x4be48e.reply(_0x5a9bb0);
            }
          }
          break;
        case "silver":
        case "silva":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == " ") {
              _0x4be48e.reply("Example Usage : " + prefix + "Silva Nick");
              return;
            }
            try {
              var _0x3c566f = await _0x10e953.ephoto('https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x3c566f.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x3a5f07) {
              _0x4be48e.reply(_0x3a5f07);
            }
          }
          break;
        case "devil":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Devil Nick");
              return;
            }
            try {
              var _0xee1920 = await _0x10e953.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0xee1920.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0xea2efc) {
              _0x4be48e.reply(_0xea2efc);
            }
          }
          break;
        case "typography":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Typography Nick");
              return;
            }
            try {
              var _0x31fd16 = await _0x10e953.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x31fd16.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x286ff3) {
              _0x4be48e.reply(_0x286ff3);
            }
          }
          break;
        case 'purple':
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "purple Nick");
              return;
            }
            try {
              var _0x2780b3 = await _0x10e953.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x2780b3.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0xd98945) {
              _0x4be48e.reply(_0xd98945);
            }
          }
          break;
        case "thunder":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Thunder Nick");
              return;
            }
            try {
              var _0x1dd67b = await _0x10e953.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x1dd67b.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              });
            } catch (_0x257a58) {
              _0x4be48e.reply(_0x257a58);
            }
          }
          break;
        case "leaves":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "Leaves MZAZI-XMD");
              return;
            }
            try {
              var _0x9f90c = await _0x10e953.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", _0x1d9323);
              _0x4be48e.reply("Wait a moment...");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x9f90c.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x173d49) {
              _0x4be48e.reply(_0x173d49);
            }
          }
          break;
        case '1917':
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "1917 mzazi");
              return;
            }
            try {
              var _0xe3eba8 = await _0x10e953.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", _0x1d9323);
              _0x4be48e.reply("Wait a moment...");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0xe3eba8.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x249559) {
              _0x4be48e.reply(_0x249559);
            }
          }
          break;
        case 'arena':
          {
            var _0x10e953 = require('mumaker');
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "arena MZAZI-XMD");
              return;
            }
            try {
              var _0x53e650 = await _0x10e953.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x1d9323);
              _0x4be48e.reply("Wait a moment...");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x53e650.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x1d9730) {
              _0x4be48e.reply(_0x1d9730);
            }
          }
          break;
        case 'hacker':
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage :  " + prefix + "hacker mzazi");
              return;
            }
            try {
              let _0x6b7607 = await _0x10e953.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x6b7607.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x2ca8fc) {
              _0x4be48e.reply("🥵🥵 " + _0x2ca8fc);
            }
          }
          break;
        case "sand":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example Usage : " + prefix + "sand Mzazi");
              return;
            }
            try {
              let _0x3f013f = await _0x10e953.ephoto('https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x3f013f.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x12b7f8) {
              _0x4be48e.reply("🚫🚫 " + _0x12b7f8);
            }
          }
          break;
        case "dragonball":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage :  " + prefix + "dragonball mzazi");
              return;
            }
            try {
              const _0x1bfab9 = await _0x10e953.ephoto('https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x1bfab9.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x59c0b0) {
              _0x4be48e.reply("🥵🥵 " + _0x59c0b0);
            }
          }
          break;
        case 'naruto':
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage : " + prefix + "naruto Mzazi");
              return;
            }
            try {
              var _0x12afe2 = await _0x10e953.ephoto('https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x12afe2.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x2d0819) {
              _0x4be48e.reply("🥵🥵 " + _0x2d0819);
            }
          }
          break;
        case "graffiti":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage : " + prefix + "graffiti Mzazi");
              return;
            }
            try {
              let _0x1ac530 = await _0x10e953.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x1ac530.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x27b0b1) {
              _0x4be48e.reply("🥵🥵 " + _0x27b0b1);
            }
          }
          break;
        case "cat":
          {
            var _0x10e953 = require('mumaker');
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage : * " + prefix + "cat Nick");
              return;
            }
            try {
              let _0x10c3a2 = await _0x10e953.ephoto('https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x10c3a2.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x48a381) {
              _0x4be48e.reply("🥵🥵 " + _0x48a381);
            }
          }
          break;
        case "gold":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var _0x1aec9b = await _0x10e953.ephoto('https://en.ephoto360.com/modern-gold-4-213.html', _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x1aec9b.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x2916c1) {
              _0x4be48e.reply("💀💀" + _0x2916c1);
            }
          }
          break;
        case "child":
          {
            var _0x10e953 = require("mumaker");
            if (!_0x1d9323 || _0x1d9323 == '') {
              _0x4be48e.reply("Example usage: " + prefix + "Child Mzazi");
              return;
            }
            try {
              var _0x29fa11 = await _0x10e953.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x1d9323);
              _0x4be48e.reply("*Wait a moment...*");
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x29fa11.image
                },
                'caption': "GENERATED BY MZAZI-XMD"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x262f22) {
              _0x4be48e.reply("💀💀" + _0x262f22);
            }
          }
          break;
        case "mzazi":
          {
            if (!_0x1d9323) {
              return _0x4edf32("Hello I'm MZAZI AI. How can i help u?");
            }
            let _0x2d1f42 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x1d9323);
            if (!_0x2d1f42.BK9) {
              return _0x4edf32("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x4edf32(_0x2d1f42.BK9);
            }
          }
          break;
        case "gpt2":
          {
            if (!_0x1d9323) {
              return _0x4edf32("What's your question ?");
            }
            let _0x8198b9 = await fetchJson('https://bk9.fun/ai/jeeves-chat?q=' + _0x1d9323);
            if (!_0x8198b9.BK9) {
              return _0x4edf32("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x4edf32(_0x8198b9.BK9);
            }
          }
          break;
        case "trt":
        case "translate":
          {
            try {
              const _0x1a9e06 = _0x1d9323.split(" ");
              if (_0x1a9e06.length < 0x2) {
                return _0x4be48e.reply(" Please provide a language code and text to translate !");
              }
              const _0x51677f = _0x1a9e06[0x0];
              const _0x227241 = _0x1a9e06.slice(0x1).join(" ");
              const _0x560000 = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x227241) + "&langpair=en|" + _0x51677f);
              if (!_0x560000.ok) {
                return _0x4be48e.reply("Failed to fetch data. Please try again later.");
              }
              const _0x2b91e2 = await _0x560000.json();
              if (!_0x2b91e2.responseData || !_0x2b91e2.responseData.translatedText) {
                return _0x4be48e.reply("No translation found for the provided text.");
              }
              const _0x50b569 = _0x2b91e2.responseData.translatedText;
              const _0x1b0397 = " " + _0x50b569;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': _0x1b0397
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x41f1dc) {
              console.error("Error occurred:", _0x41f1dc);
              _0x4be48e.reply("An error occurred while fetching the data. Please try again later.\n" + _0x41f1dc);
            }
          }
          break;
        case 'cast':
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x1d9323) {
              return _0x4be48e.reply("provide a text to cast !");
            }
            let _0x121d4e = await _0x5ccf6b.filter(_0x2c93b4 => _0x2c93b4.id.endsWith(".net")).map(_0x5973a6 => _0x5973a6.id);
            _0x4be48e.reply("Success in casting the message to contacts\n\nDo not allways use this Command to avoid WA-bans ! ");
            for (let _0x488d06 of _0x121d4e) {
              _0x5e9ccc.sendMessage(_0x488d06, {
                'text': q
              });
            }
            _0x4be48e.reply("Casting completed successfully😁");
          }
          break;
        case 'img':
        case "ai-img":
        case "image":
        case "images":
          {
            var _0xa15f3f = require("g-i-s");
            if (!_0x1d9323) {
              return _0x4be48e.reply("Provide a text");
            }
            try {
              _0xa15f3f(_0x1d9323, async (_0x1df3c8, _0x30d775) => {
                if (_0x1df3c8) {
                  return _0x4be48e.reply("An error occurred while searching for images.\n" + _0x1df3c8);
                }
                if (_0x30d775.length === 0x0) {
                  return _0x4be48e.reply("No images found.");
                }
                const _0x2de614 = Math.min(_0x30d775.length, 0x5);
                const _0xbb1ccd = _0x30d775.slice(0x0, _0x2de614).map(_0x143ccc => _0x143ccc.url);
                const _0x44bec6 = _0xbb1ccd.map(_0x5b3085 => ({
                  'image': {
                    'url': _0x5b3085
                  },
                  'caption': "Downloaded by " + botname
                }));
                for (const _0x1ebc9a of _0x44bec6) {
                  await _0x5e9ccc.sendMessage(_0x4be48e.chat, _0x1ebc9a, {
                    'quoted': _0x4be48e
                  });
                }
              });
            } catch (_0x130c5e) {
              _0x4be48e.reply("An error occurred.\n" + _0x130c5e);
            }
          }
          break;
        case "foreigners":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            let _0x276480 = _0x5ccf6b.filter(_0xa02e2a => !_0xa02e2a.admin).map(_0x48583e => _0x48583e.id).filter(_0x5e87c3 => !_0x5e87c3.startsWith(mycode) && _0x5e87c3 != _0x5e9ccc.decodeJid(_0x5e9ccc.user.id));
            if (!_0x56b0d7 || !_0x56b0d7[0x0]) {
              if (_0x276480.length == 0x0) {
                return _0x4be48e.reply("No foreigners detected.");
              }
              let _0x11a71d = "𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 𝘄𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗻𝘁𝗿𝘆 𝗰𝗼𝗱𝗲 𝗶𝘀 𝗻𝗼𝘁 " + mycode + ". 𝗧𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴  " + _0x276480.length + " 𝗳𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱:- \n";
              for (let _0x1a5ca1 of _0x276480) {
                _0x11a71d += "𓅂 @" + _0x1a5ca1.split('@')[0x0] + "\n";
              }
              _0x11a71d += "\n𝗧𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 𝘀𝗲𝗻𝗱 foreigners -x";
              _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': _0x11a71d,
                'mentions': _0x276480
              }, {
                'quoted': _0x4be48e
              });
            } else if (_0x56b0d7[0x0] == '-x') {
              setTimeout(() => {
                _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'text': "𝗠𝘇𝗮𝘇𝗶 𝘄𝗶𝗹𝗹 𝗻𝗼𝘄 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗹𝗹 " + _0x276480.length + " 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗰𝗵𝗮𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗲𝘅𝘁 𝘀𝗲𝗰𝗼𝗻𝗱.\n\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀. 𝗧𝗵𝗶𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲𝗱⚠️"
                }, {
                  'quoted': _0x4be48e
                });
                setTimeout(() => {
                  _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, _0x276480, 'remove');
                  setTimeout(() => {
                    _0x4be48e.reply("𝗔𝗻𝘆 𝗿𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿 ?🌚.");
                  }, 0x3e8);
                }, 0x3e8);
              }, 0x3e8);
            }
          }
          break;
        case "dalle":
        case 'createimage':
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("*This command generates images from text prompts*\n\n*𝙴xample usage*\n*" + (prefix + _0x312252) + " Beautiful anime girl*\n*" + (prefix + _0x312252) + " girl in pink dress*");
            }
            try {
              _0x4be48e.reply("Please wait, i am generating your image...");
              const _0x2e8e1f = 'https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=' + encodeURIComponent(_0x1d9323);
              const _0x2ba02d = await fetch(_0x2e8e1f);
              if (_0x2ba02d.ok) {
                const _0x98d340 = await _0x2ba02d.buffer();
                await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'image': _0x98d340
                }, {
                  'quoted': _0x4be48e
                });
              } else {
                throw "*Aarrhhhg Image generation failed*";
              }
            } catch {
              _0x4be48e.reply("Oops! Something went wrong while generating your image. Please try again later.");
            }
          }
          break;
        case 'ai':
          {
            const {
              GoogleGenerativeAI: _0x3cb15c
            } = require("@google/generative-ai");
            const _0x2a63ac = require('axios');
            try {
              if (!_0x4be48e.quoted) {
                return _0x4be48e.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!_0x1d9323) {
                return _0x4be48e.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗠𝗭𝗔𝗭𝗜 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x57d5c5)) {
                return _0x4be48e.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x26dbe5 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x4be48e.quoted);
              let _0x5bb72a = await uploadtoimgur(_0x26dbe5);
              _0x4be48e.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x5d6f43 = new _0x3cb15c("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              async function _0x897af6(_0x88a64d, _0xce9ade) {
                const _0x2e3044 = {
                  'responseType': "arraybuffer"
                };
                const _0x260444 = await _0x2a63ac.get(_0x88a64d, _0x2e3044);
                const _0x309468 = Buffer.from(_0x260444.data).toString('base64');
                const _0x310e26 = {
                  'data': _0x309468,
                  'mimeType': _0xce9ade
                };
                const _0x5acb22 = {
                  'inlineData': _0x310e26
                };
                return _0x5acb22;
              }
              const _0x406aa0 = {
                'model': "gemini-1.5-flash"
              };
              const _0x38a8f7 = _0x5d6f43.getGenerativeModel(_0x406aa0);
              const _0x18d9df = [await _0x897af6(_0x5bb72a, 'image/jpeg')];
              const _0x4c305c = await _0x38a8f7.generateContent([_0x1d9323, ..._0x18d9df]);
              const _0x3656a9 = await _0x4c305c.response;
              const _0x4422d6 = _0x3656a9.text();
              await _0x4be48e.reply(_0x4422d6);
            } catch (_0x117915) {
              _0x4be48e.reply("I am unable to analyze images at the moment\n" + _0x117915);
            }
          }
          break;
        case "ai2":
          {
            try {
              if (!_0x4be48e.quoted) {
                return _0x4be48e.reply("Send the image then tag it with the instruction.");
              }
              if (!_0x1d9323) {
                return _0x4be48e.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Raven AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x57d5c5)) {
                return _0x4be48e.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x4d3567 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x4be48e.quoted);
              let _0x4705a2 = await uploadtoimgur(_0x4d3567);
              _0x4be48e.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻[𝗥𝗔𝗩𝗘𝗡-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const _0x303ad5 = await fetchJson("https://api.dreaded.site/api/gemini-vision?url=" + _0x4705a2 + "&instruction=" + _0x1d9323);
              let _0x18705a = _0x303ad5.result;
              await _0x4be48e.reply(_0x18705a);
            } catch (_0x5a6634) {
              _0x4be48e.reply("I am unable to analyze images at the moment\n" + _0x5a6634);
            }
          }
          break;
        case "vision":
          {
            if (!_0x407fff || !_0x1d9323) {
              _0x4be48e.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗥𝗔𝗩𝗘𝗡 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x134032;
            if (_0x407fff.imageMessage) {
              _0x134032 = _0x407fff.imageMessage;
            } else {
              _0x4be48e.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x46ecbf = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x134032);
              let _0x29d1ca = await uploadtoimgur(_0x46ecbf);
              _0x4be48e.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0x1ad0ff = await (await fetch('https://bk9.fun/ai/geminiimg?url=' + _0x29d1ca + "&q=" + _0x1d9323)).json();
              const _0x4215b9 = {
                'text': _0x1ad0ff.BK9
              };
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, _0x4215b9, {
                'quoted': _0x4be48e
              });
            } catch (_0x30a83d) {
              _0x4be48e.reply("An error occured\n" + _0x30a83d);
            }
          }
          break;
        case 'remini':
          {
            if (!_0x465c5b) {
              return _0x4edf32("𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?");
            }
            if (!/image/.test(_0x57d5c5)) {
              return _0x4edf32("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 " + (prefix + _0x312252));
            }
            const {
              remini: _0x353ce2
            } = require("./lib/remini");
            let _0x1eb90b = await _0x465c5b.download();
            let _0x7f8751 = await _0x353ce2(_0x1eb90b, "enhance");
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'image': _0x7f8751,
              'caption': "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗥𝗮𝘃𝗲𝗻-𝗕𝗼𝘁"
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "kill2":
        case "kickall2":
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x1d9323) {
              return _0x4be48e.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let _0x749d27;
            let _0xb5f5c4;
            try {
              let _0x31e952 = _0x56b0d7[0x0].split("https://chat.whatsapp.com/")[0x1];
              const _0x59cefd = await _0x5e9ccc.groupGetInviteInfo(_0x31e952);
              ({
                id: _0x749d27,
                subject: _0xb5f5c4
              } = _0x59cefd);
            } catch (_0x2f6458) {
              _0x4be48e.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const _0x24e35e = await _0x5e9ccc.groupMetadata(_0x749d27);
              const _0x45c12c = await _0x24e35e.participants;
              let _0x48d5a2 = _0x45c12c.filter(_0x1b3a8b => _0x1b3a8b.id !== _0x5e9ccc.decodeJid(_0x5e9ccc.user.id)).map(_0x2d6cec => _0x2d6cec.id);
              await _0x4be48e.reply("☠️Initializing and Preparing to kill☠️ " + _0xb5f5c4);
              await _0x5e9ccc.groupSettingUpdate(_0x749d27, "announcement");
              await _0x5e9ccc.removeProfilePicture(_0x749d27);
              await _0x5e9ccc.groupUpdateSubject(_0x749d27, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
              await _0x5e9ccc.groupUpdateDescription(_0x749d27, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !");
              await _0x5e9ccc.groupRevokeInvite(_0x749d27);
              await _0x5e9ccc.sendMessage(_0x749d27, {
                'text': "At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all " + _0x48d5a2.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️",
                'mentions': _0x45c12c.map(_0x5931b4 => _0x5931b4.id)
              });
              await _0x5e9ccc.groupParticipantsUpdate(_0x749d27, _0x48d5a2, "remove");
              const _0x4dd30e = {
                'text': "Goodbye Group owner👋\nIt's too cold in Here🥶"
              };
              await _0x5e9ccc.sendMessage(_0x749d27, _0x4dd30e);
              await _0x5e9ccc.groupLeave(_0x749d27);
              await _0x4be48e.reply("```Successfully Killed💀```");
            } catch (_0x4e1ddc) {
              _0x4be48e.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;
        case "carbon":
          {
            const _0x272c7d = require("node-fetch");
            let _0x4913fc = "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 " + botname;
            if (_0x4be48e.quoted && _0x4be48e.quoted.text) {
              const _0x5943a3 = _0x4be48e.quoted.text;
              try {
                let _0x2c5ebc = await _0x272c7d("https://carbonara.solopov.dev/api/cook", {
                  'method': 'POST',
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'code': _0x5943a3,
                    'backgroundColor': "#1F816D"
                  })
                });
                if (!_0x2c5ebc.ok) {
                  return _0x4be48e.reply("API failed to fetch a valid response.");
                }
                let _0x2e7f8c = await _0x2c5ebc.buffer();
                await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'image': _0x2e7f8c,
                  'caption': _0x4913fc
                }, {
                  'quoted': _0x4be48e
                });
              } catch (_0x29d611) {
                _0x4be48e.reply("An error occured\n" + _0x29d611);
              }
            } else {
              _0x4be48e.reply("Quote a code message");
            }
          }
          break;
        case "define":
          {
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("Please provide a word.");
              }
              const _0x2e0dac = encodeURIComponent(_0x1d9323);
              const _0x33642a = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x2e0dac);
              if (!_0x33642a.ok) {
                return _0x4be48e.reply("Failed to fetch data. Please try again later.");
              }
              const _0x3f3ea2 = await _0x33642a.json();
              if (!_0x3f3ea2 || !_0x3f3ea2[0x0] || !_0x3f3ea2[0x0].meanings || _0x3f3ea2[0x0].meanings.length === 0x0) {
                return _0x4be48e.reply("No definitions found for the provided word.");
              }
              const _0x42f8c0 = _0x3f3ea2[0x0];
              const _0x300bc5 = _0x42f8c0.meanings[0x0].definitions[0x0].definition;
              const _0x1abd07 = '' + _0x300bc5;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': _0x1abd07
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x3fe602) {
              console.error("Error occurred:", _0x3fe602);
              _0x4be48e.reply("An error occurred while fetching the data. Please try again later.\n" + _0x3fe602);
            }
          }
          break;
        case "tweet":
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("provide some text for the tweet");
            }
            const _0x4791c6 = _0x4be48e.sender.split('@')[0x0];
            const _0x7d5fb2 = await _0x5e9ccc.profilePictureUrl(_0x4be48e.sender, "image")['catch'](_0x5e171b => "https://i.imgur.com/vuxJCTB.jpeg");
            const _0x39690 = 'https://some-random-api.com/canvas/misc/tweet?displayname=' + encodeURIComponent(_0x12ae39) + "&username=" + encodeURIComponent(_0x4791c6) + "&avatar=" + encodeURIComponent(_0x7d5fb2) + "&comment=" + encodeURIComponent(_0x1d9323) + '&replies=' + encodeURIComponent("246") + '&retweets=' + encodeURIComponent("125") + "&theme=" + encodeURIComponent("dark");
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'image': {
                'url': _0x39690
              },
              'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "pickupline":
          {
            try {
              const _0xf8092 = await fetch("https://api.popcat.xyz/pickuplines");
              if (!_0xf8092.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                pickupline: _0x3a15cc
              } = await _0xf8092.json();
              const _0x46d37e = '' + _0x3a15cc;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': _0x46d37e
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x1792df) {
              console.error("Error fetching data:", _0x1792df);
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x4be48e
              });
            }
          }
          break;
        case "quotes":
          {
            try {
              const _0xd408b = await fetch('https://favqs.com/api/qotd');
              if (!_0xd408b.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                quote: _0x45c318
              } = await _0xd408b.json();
              const _0x30e36d = _0x45c318.body + " \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 " + _0x45c318.author;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': _0x30e36d
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0xbe769c) {
              console.error("Error fetching data:", _0xbe769c);
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x4be48e
              });
            }
          }
          break;
        case "google":
          {
            const _0x3e4a0a = require("axios");
            if (!_0x1d9323) {
              _0x4be48e.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data: _0x224a7d
            } = await _0x3e4a0a.get("https://www.googleapis.com/customsearch/v1?q=" + _0x1d9323 + '&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5');
            if (_0x224a7d.items.length == 0x0) {
              _0x4be48e.reply("❌ Unable to find a result");
              return;
            }
            let _0x5de61a = "SEARCH FROM GOOGLE\n🔍 Term:- " + _0x1d9323 + "\n\n";
            for (let _0x282485 = 0x0; _0x282485 < _0x224a7d.items.length; _0x282485++) {
              _0x5de61a += "🪧 Title:- " + _0x224a7d.items[_0x282485].title + "\n🖥 Description:- " + _0x224a7d.items[_0x282485].snippet + "\n🌐 Link:- " + _0x224a7d.items[_0x282485].link + "\n\n";
            }
            _0x4be48e.reply(_0x5de61a);
          }
          break;
        case "hack":
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            try {
              const _0x2b2c3a = ["⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️", "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", "```██ 10%``` ⏳", "```████ 20%``` ⏳", "```██████ 30%``` ⏳", "```████████ 40%``` ⏳", "```██████████ 50%``` ⏳", "```████████████ 60%``` ⏳", "```██████████████ 70%``` ⏳", "```████████████████ 80%``` ⏳", "```██████████████████ 90%``` ⏳", "```████████████████████ 100%``` ✅", "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const _0x1549ad of _0x2b2c3a) {
                await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'text': _0x1549ad
                }, {
                  'quoted': _0x4be48e
                });
                await new Promise(_0x32bf1c => setTimeout(_0x32bf1c, 0x3e8));
              }
            } catch (_0x29e2fb) {
              console.error("Error during prank:", _0x29e2fb);
              _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'text': "❌ *Error!* Something went wrong. Reason: " + _0x29e2fb.message + ". Please try again later."
              });
            }
          }
          break;
        case 'compile-py':
          if (!_0x1d9323 && !_0x4be48e.quoted) {
            throw "Quote/tag a python code to compile.";
          }
          const _0x11b04b = _0x4be48e.quoted ? _0x4be48e.quoted.text ? _0x4be48e.quoted.text : _0x1d9323 ? _0x1d9323 : _0x4be48e.text : _0x4be48e.text;
          let _0x569d40 = python.runSource(_0x11b04b);
          _0x569d40.then(_0x54929c => {
            console.log(_0x54929c);
            _0x4edf32(_0x54929c.stdout);
            _0x4edf32(_0x54929c.stderr);
          })["catch"](_0x2c2e87 => {
            console.log(resultt.stderr);
            _0x4edf32(resultt.stderr);
          });
          break;
        case "save":
          {
            const _0x33a2c1 = _0x4be48e.text.toLowerCase();
            const _0x2a3c72 = _0x4be48e.msg?.['contextInfo']?.["quotedMessage"];
            if (_0x2a3c72 && _0x33a2c1.startsWith(prefix + 'save') && !_0x4be48e.quoted.chat.includes("status@broadcast")) {
              return _0x4be48e.reply("You did not tag a status media to save.");
            }
            if (_0x112338 && _0x2a3c72 && _0x33a2c1.startsWith(prefix + 'save') && _0x4be48e.quoted.chat.includes('status@broadcast')) {
              if (_0x2a3c72.imageMessage) {
                let _0x485e59 = _0x2a3c72.imageMessage.caption;
                let _0x3c8916 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x2a3c72.imageMessage);
                _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'image': {
                    'url': _0x3c8916
                  },
                  'caption': _0x485e59
                });
              }
              if (_0x2a3c72.videoMessage) {
                let _0xbf83e1 = _0x2a3c72.videoMessage.caption;
                let _0x168b72 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x2a3c72.videoMessage);
                _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'video': {
                    'url': _0x168b72
                  },
                  'caption': _0xbf83e1
                });
              }
            }
          }
          break;
        case "gitclone":
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("Where is the link?");
            }
            if (!_0x1d9323.includes("github.com")) {
              return _0x4be48e.reply("Is that a GitHub repo link ?!");
            }
            let _0xa6975f = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0x3eb4e0, _0x47d5b1] = _0x1d9323.match(_0xa6975f) || [];
            _0x47d5b1 = _0x47d5b1.replace(/.git$/, '');
            let _0x4b60a2 = "https://api.github.com/repos/" + _0x3eb4e0 + '/' + _0x47d5b1 + "/zipball";
            let _0x30c91f = (await fetch(_0x4b60a2, {
              'method': "HEAD"
            })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[0x1];
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'document': {
                'url': _0x4b60a2
              },
              'fileName': _0x30c91f + ".zip",
              'mimetype': "application/zip"
            }, {
              'quoted': _0x4be48e
            })["catch"](_0x52440a => _0x4be48e.reply('error'));
          }
          break;
        case 'darkgpt':
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const _0x62fc3b = await fetchJson("https://api.dreaded.site/api/makgpt?text=" + _0x1d9323);
              if (_0x62fc3b && _0x62fc3b.result) {
                const _0x3bb8ca = _0x62fc3b.result;
                await _0x4be48e.reply(_0x3bb8ca);
              } else {
                _0x4be48e.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (_0xc60687) {
              _0x4edf32("An error occured while communicating with the APIs\n" + _0xc60687);
            }
          }
          break;
        case "github":
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("Provide a github username to stalk");
            }
            try {
              const _0x5e77e5 = await fetch("https://itzpire.com/stalk/github-user?username=" + _0x1d9323);
              const _0x524a29 = await _0x5e77e5.json();
              const _0x1fa737 = _0x524a29.data.username;
              const _0x43ab56 = _0x524a29.data.nickname;
              const _0x3897fa = _0x524a29.data.bio;
              const _0x4f6507 = _0x524a29.data.profile_pic;
              const _0x359c7e = _0x524a29.data.url;
              const _0x58d50a = _0x524a29.data.location;
              const _0x40aab9 = _0x524a29.data.public_repo;
              const _0x42ad73 = _0x524a29.data.followers;
              const _0x3153f2 = _0x524a29.data.following;
              const _0x26fc50 = _0x524a29.data.ceated_at;
              const _0x354849 = "Username:- " + _0x1fa737 + "\n\nNickname:- " + _0x43ab56 + "\n\nBio:- " + _0x3897fa + "\n\nLink:- " + _0x359c7e + "\n\nLocation:- " + _0x58d50a + "\n\nFollowers:- " + _0x42ad73 + "\n\nFollowing:- " + _0x3153f2 + "\n\nRepos:- " + _0x40aab9 + "\n\nCreated:- " + _0x26fc50;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x4f6507
                },
                'caption': _0x354849
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x3a4344) {
              _0x4be48e.reply("Unable to fetch data\n" + _0x3a4344);
            }
          }
          break;
        case "screenshot":
        case 'ss':
          {
            try {
              let _0x5bdb43 = "𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 " + botname;
              if (!_0x1d9323) {
                return _0x4be48e.reply("Provide a website link to screenshot.");
              }
              const _0x25d1d1 = "https://image.thum.io/get/fullpage/" + _0x1d9323;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x25d1d1
                },
                'caption': _0x5bdb43
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x18db5e) {
              _0x4be48e.reply("An error occured.");
            }
          }
          break;
        case "alive":
        case 'test':
          {
            const _0x54d27e = {
              'audio': {
                'url': "./Media/alive.mp3"
              },
              'mimetype': "audio/mp4",
              'ptt': true,
              'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
              'fileName': "𝗥𝗮𝘃𝗲𝗻",
              'contextInfo': {
                'mentionedJid': [_0x4be48e.sender],
                'externalAdReply': {
                  'title': "𝗛𝗶 𝗛𝘂𝗺𝗮𝗻👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗻𝗼𝘄",
                  'body': "𝗥𝗔𝗩𝗘𝗡 𝗕𝗢𝗧",
                  'thumbnailUrl': "https://files.catbox.moe/7f98vp.jpg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            };
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, _0x54d27e, {
              'quoted': _0x4be48e
            });
          }
          break;
        case 'removebg':
          {
            try {
              if (!_0x4be48e.quoted) {
                return _0x4be48e.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(_0x57d5c5)) {
                return _0x4be48e.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x26b82b = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x4be48e.quoted);
              let _0x269fc7 = await uploadtoimgur(_0x26b82b);
              _0x4be48e.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              const _0x37a20f = "https://api.dreaded.site/api/removebg?imageurl=" + _0x269fc7;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x37a20f
                },
                'caption': "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x4e1bbc) {
              _0x4be48e.reply("An error occured...");
            }
          }
          break;
        case "fact":
          {
            try {
              const _0x423ff2 = await fetchJson('https://api.dreaded.site/api/fact');
              const _0x418825 = _0x423ff2.fact;
              await _0x4be48e.reply(_0x418825);
            } catch (_0x15e55c) {
              _0x4be48e.reply("Something is wrong.");
            }
          }
          break;
        case "catfact":
          {
            try {
              const _0x2f3419 = await fetchJson("https://api.dreaded.site/api/catfact");
              const _0x479775 = _0x2f3419.fact;
              await _0x4be48e.reply(_0x479775);
            } catch (_0x43ac7b) {
              _0x4be48e.reply("Something is wrong.");
            }
          }
          break;
        case "tts":
        case "say":
          {
            const _0xf86ac9 = require("google-tts-api");
            if (!_0x1d9323) {
              return _0x4be48e.reply("Povide a text for conversion !");
            }
            const _0x1c5dfb = _0xf86ac9.getAudioUrl(_0x1d9323, {
              'lang': "hi-IN",
              'slow': false,
              'host': 'https://translate.google.com'
            });
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'audio': {
                'url': _0x1c5dfb
              },
              'mimetype': "audio/mp4",
              'ptt': true
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "gpt":
          {
            if (!_0x1d9323) {
              return _0x4edf32("Hello there, what's your question?");
            }
            let _0x807dd2 = await fetchJson("https://bk9.fun/ai/jeeves-chat2?q=" + _0x1d9323);
            if (!_0x807dd2.BK9) {
              return _0x4edf32("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x4edf32(_0x807dd2.BK9);
            }
          }
          break;
        case "weather":
          {
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("provide a city/town name");
              }
              const _0x7b66de = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + _0x1d9323 + "&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785");
              const _0x19499f = await _0x7b66de.json();
              console.log("Weather data:", _0x19499f);
              const _0xfc8c30 = _0x19499f.name;
              const _0x56e546 = _0x19499f.main.temp;
              const _0x540c5e = _0x19499f.weather[0x0].description;
              const _0x3a6795 = _0x19499f.main.humidity;
              const _0x43fe36 = _0x19499f.wind.speed;
              const _0x1cbe06 = _0x19499f.rain ? _0x19499f.rain['1h'] : 0x0;
              const _0x21afce = _0x19499f.clouds.all;
              const _0x593d47 = new Date(_0x19499f.sys.sunrise * 0x3e8);
              const _0x1ee1b6 = new Date(_0x19499f.sys.sunset * 0x3e8);
              await _0x4be48e.reply("❄️ Weather in " + _0xfc8c30 + "\n\n🌡️ Temperature: " + _0x56e546 + "°C\n📝 Description: " + _0x540c5e + "\n❄️ Humidity: " + _0x3a6795 + "%\n🌀 Wind Speed: " + _0x43fe36 + " m/s\n🌧️ Rain Volume (last hour): " + _0x1cbe06 + " mm\n☁️ Cloudiness: " + _0x21afce + "%\n🌄 Sunrise: " + _0x593d47.toLocaleTimeString() + "\n🌅 Sunset: " + _0x1ee1b6.toLocaleTimeString());
            } catch (_0x2b1023) {
              _0x4be48e.reply("Unable to find that location.");
            }
          }
          break;
        case "compile-js":
          if (!_0x1d9323 && !_0x4be48e.quoted) {
            throw "Quote/tag a Js code to compile.";
          }
          const _0x1fc2c5 = _0x4be48e.quoted ? _0x4be48e.quoted.text ? _0x4be48e.quoted.text : _0x1d9323 ? _0x1d9323 : _0x4be48e.text : _0x4be48e.text;
          let _0x3c4b62 = node.runSource(_0x1fc2c5);
          _0x3c4b62.then(_0x1f85ff => {
            console.log(_0x1f85ff);
            _0x4edf32(_0x1f85ff.stdout);
            _0x4edf32(_0x1f85ff.stderr);
          })['catch'](_0x2fd699 => {
            console.log(resultt1.stderr);
            _0x4edf32(resultt1.stderr);
          });
          break;
        case "quotely":
          {
            const _0x418c48 = require("axios");
            if (!_0x1d9323) {
              return _0x4be48e.reply("provide some text for quotely");
            }
            const _0x4eec72 = "https://aemt.me/quotely?avatar=https://i.imgur.com/OqRfngQ.jpeg&name=" + _0x12ae39 + "&text=" + _0x1d9323;
            try {
              const _0x1d596f = await _0x418c48.get(_0x4eec72, {
                'responseType': "arraybuffer"
              });
              const _0xc2a7a6 = Buffer.from(_0x1d596f.data, 'binary');
              await _0x5e9ccc.sendImageAsSticker(_0x4be48e.chat, _0xc2a7a6, _0x4be48e, {
                'packname': _0x12ae39,
                'author': "Raven"
              });
            } catch (_0x2880eb) {
              console.error("Error fetching image:", _0x2880eb);
            }
          }
          break;
        case "fullpp":
          {
            const {
              S_WHATSAPP_NET: _0x52aa09
            } = require('@whiskeysockets/baileys');
            try {
              const _0x156484 = require('fs');
              if (!_0x112338) {
                throw NotOwner;
              }
              if (!_0x407fff) {
                _0x4be48e.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              let _0x415bd3;
              if (_0x407fff.imageMessage) {
                _0x415bd3 = _0x407fff.imageMessage;
              } else {
                _0x4be48e.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              var _0x52cdee = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x415bd3);
              var {
                img: _0x53666a
              } = await generateProfilePicture(_0x52cdee);
              _0x5e9ccc.query({
                'tag': 'iq',
                'attrs': {
                  'target': undefined,
                  'to': _0x52aa09,
                  'type': "set",
                  'xmlns': 'w:profile:picture'
                },
                'content': [{
                  'tag': "picture",
                  'attrs': {
                    'type': "image"
                  },
                  'content': _0x53666a
                }]
              });
              _0x156484.unlinkSync(_0x52cdee);
              _0x4be48e.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (_0x403fcb) {
              _0x4be48e.reply("An error occured while updating profile photo\n" + _0x403fcb);
            }
          }
          break;
        case "upload":
        case 'url':
          {
            let _0x23f90d = _0x4be48e.quoted ? _0x4be48e.quoted : _0x4be48e;
            let _0xd77373 = (_0x23f90d.msg || _0x23f90d).mimetype || '';
            if (!_0xd77373) {
              return _0x4be48e.reply("Quote an image or video");
            }
            let _0x1f6122 = await _0x23f90d.download();
            if (_0x1f6122.length > 10485760) {
              return _0x4be48e.reply("Media is too large.");
            }
            let _0x44509b = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0xd77373);
            if (_0x44509b) {
              let _0x534928 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x23f90d);
              let _0x56540d = await uploadtoimgur(_0x534928);
              _0x4be48e.reply("Media Link:-\n\n" + _0x56540d);
            } else {
              _0x4be48e.reply("Error occured...");
            }
          }
          break;
        case "attp":
          if (!q) {
            return _0x4edf32("I need text;");
          }
          _0x5e9ccc.sendMessage(_0x4be48e.chat, {
            'sticker': {
              'url': 'https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=' + q
            }
          }, {
            'quoted': _0x4be48e
          });
          break;
        case "smeme":
          {
            if (!/image/.test(_0x57d5c5)) {
              return _0x4edf32("Quote an image or sticker with the 2 texts separated with |");
            }
            if (!_0x1d9323) {
              return _0x4edf32("Quote an image or sticker with the 2 texts separated with |");
            }
            atas = _0x1d9323.split('|')[0x0] ? _0x1d9323.split('|')[0x0] : '-';
            bawah = _0x1d9323.split('|')[0x1] ? _0x1d9323.split('|')[0x1] : '-';
            let _0x5cc68e = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x1a8173);
            let _0x584060 = await uploadtoimgur(_0x5cc68e);
            let _0x2732d8 = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x584060;
            let _0x3c3d54 = await _0x5e9ccc.sendImageAsSticker(_0x4be48e.chat, _0x2732d8, _0x4be48e, {
              'packname': packname
            });
            fs.unlinkSync(_0x3c3d54);
          }
          break;
        case "compile-c":
          if (!_0x1d9323 && !_0x4be48e.quoted) {
            throw "Quote/tag a C code to compile";
          }
          const _0x5c4efe = _0x4be48e.quoted ? _0x4be48e.quoted.text ? _0x4be48e.quoted.text : _0x1d9323 ? _0x1d9323 : _0x4be48e.text : _0x4be48e.text;
          let _0x3820e0 = c.runSource(_0x5c4efe);
          _0x3820e0.then(_0x1a7c51 => {
            console.log(_0x1a7c51);
            _0x4edf32(_0x1a7c51.stdout);
            _0x4edf32(_0x1a7c51.stderr);
          })["catch"](_0x4357a2 => {
            console.log(resultt3.stderr);
            _0x4edf32(resultt3.stderr);
          });
          break;
        case "compile-c++":
          if (!_0x1d9323 && !_0x4be48e.quoted) {
            throw "Quote/tag a C++ code to compile";
          }
          const _0x1a4ab4 = _0x4be48e.quoted ? _0x4be48e.quoted.text ? _0x4be48e.quoted.text : _0x1d9323 ? _0x1d9323 : _0x4be48e.text : _0x4be48e.text;
          let _0x11e420 = cpp.runSource(_0x1a4ab4);
          _0x11e420.then(_0x5672b8 => {
            console.log(_0x5672b8);
            _0x4edf32(_0x5672b8.stdout);
            _0x4edf32(_0x5672b8.stderr);
          })["catch"](_0x316346 => {
            console.log(resultt4.stderr);
            _0x4edf32(resultt4.stderr);
          });
          break;
        case "eval":
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x1d9323) {
              throw "Provide a valid Bot Baileys Function to evaluate";
            }
            try {
              let _0x11e623 = await eval(_0xf2d9fe.slice(0x2));
              if (typeof _0x11e623 !== 'string') {
                _0x11e623 = require("util").inspect(_0x11e623);
              }
              await _0x4edf32(_0x11e623);
            } catch (_0x4155e7) {
              await _0x4edf32(String(_0x4155e7));
            }
          }
          break;
        case 'add':
          {
            const {
              getBinaryNodeChild: _0xf9987b,
              getBinaryNodeChildren: _0x735497
            } = require("@whiskeysockets/baileys");
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x1d9323) {
              return _0x4be48e.reply("provide number to be added in this format.\n\nadd 254114660061");
            }
            const _0x3e2dc5 = _0x5ccf6b.map(_0x48b671 => _0x48b671.id);
            const _0x215202 = (await Promise.all(_0x1d9323.split(',').map(_0x40dd42 => _0x40dd42.replace(/[^0-9]/g, '')).filter(_0x2240df => _0x2240df.length > 0x4 && _0x2240df.length < 0x14 && !_0x3e2dc5.includes(_0x2240df + '@s.whatsapp.net')).map(async _0x9f2e41 => [_0x9f2e41, await _0x5e9ccc.onWhatsApp(_0x9f2e41 + "@s.whatsapp.net")]))).filter(_0x43056f => _0x43056f[0x1][0x0]?.["exists"]).map(_0x1ec4cf => _0x1ec4cf[0x0] + '@c.us');
            const _0x204d70 = await _0x5e9ccc.query({
              'tag': 'iq',
              'attrs': {
                'type': "set",
                'xmlns': "w:g2",
                'to': _0x4be48e.chat
              },
              'content': _0x215202.map(_0x2c9cd0 => ({
                'tag': "add",
                'attrs': {},
                'content': [{
                  'tag': 'participant',
                  'attrs': {
                    'jid': _0x2c9cd0
                  }
                }]
              }))
            });
            const _0x1bf6ae = _0xf9987b(_0x204d70, "add");
            const _0x4fe4f0 = _0x735497(_0x1bf6ae, "participant");
            let _0x3d908e = await _0x5e9ccc.groupInviteCode(_0x4be48e.chat);
            for (const _0x3023d0 of _0x4fe4f0.filter(_0x556dd5 => _0x556dd5.attrs.error === 0x191 || _0x556dd5.attrs.error === 0x193 || _0x556dd5.attrs.error === 0x198)) {
              const _0x2af03f = _0x3023d0.attrs.jid;
              let _0x542a53;
              if (_0x3023d0.attrs.error === 0x191) {
                _0x542a53 = '@' + _0x2af03f.split('@')[0x0] + " has blocked the bot.";
              } else {
                if (_0x3023d0.attrs.error === 0x193) {
                  _0x542a53 = '@' + _0x2af03f.split('@')[0x0] + " has set privacy settings for group adding.";
                } else if (_0x3023d0.attrs.error === 0x198) {
                  _0x542a53 = '@' + _0x2af03f.split('@')[0x0] + " recently left the group.";
                }
              }
              await _0x4be48e.reply(_0x542a53);
              let _0x56ac69 = _0x12ae39 + " is trying to add or request you to join the group " + _0x493d67.subject + ":\n\nhttps://chat.whatsapp.com/" + _0x3d908e + "\n\n" + botname + " 💠";
              await _0x5e9ccc.sendMessage(_0x2af03f, {
                'text': _0x56ac69
              }, {
                'quoted': _0x4be48e
              });
            }
          }
          break;
        case "kill":
        case "kickall":
          if (!_0x4be48e.isGroup) {
            throw group;
          }
          if (!_0x11d5f0) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!_0x112338) {
            throw "Only Raven owner can use this command😲!";
          }
          let _0x4a186e = _0x5ccf6b.filter(_0xc5cf20 => _0xc5cf20.id != _0x5e9ccc.decodeJid(_0x5e9ccc.user.id)).map(_0x5c8d1d => _0x5c8d1d.id);
          _0x4be48e.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Raven will remove all " + _0x4a186e.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': _0x4be48e
            });
            setTimeout(() => {
              _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, _0x4a186e, "remove");
              setTimeout(() => {
                _0x4be48e.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;
        case "system":
          _0x5e9ccc.sendMessage(_0x4be48e.chat, {
            'image': {
              'url': "https://i.imgur.com/YpHG3eT.jpeg"
            },
            'caption': "*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧*\n\n*𝐒𝐏𝐄𝐄𝐃: " + _0x1a4a1a.toFixed(0x4) + " 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: " + runtime(process.uptime()) + "*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗥𝗮𝘃𝗲𝗻*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆"
          });
          break;
        case "vcf":
        case "group-vcf":
          {
            if (!_0x4be48e.isGroup) {
              return _0x4be48e.reply("Command meant for groups");
            }
            const _0x17bb52 = require('fs');
            let _0x28b02f = await _0x5e9ccc.groupMetadata(_0x4be48e.chat);
            let _0x1ba6ce = '';
            let _0x4aa567 = 0x0;
            for (let _0x55813e of _0x28b02f.participants) {
              _0x1ba6ce += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x4aa567++ + "] +" + _0x55813e.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x55813e.id.split('@')[0x0] + ':+' + _0x55813e.id.split('@')[0x0] + "\nEND:VCARD\n";
            }
            await _0x4be48e.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 " + _0x28b02f.participants.length + " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...");
            await _0x17bb52.writeFileSync("./contacts.vcf", _0x1ba6ce.trim());
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'document': _0x17bb52.readFileSync("./contacts.vcf"),
              'mimetype': "text/vcard",
              'fileName': "Group contacts.vcf",
              'caption': "VCF for " + _0x28b02f.subject + "\n" + _0x28b02f.participants.length + " contacts"
            }, {
              'ephemeralExpiration': 0x15180,
              'quoted': _0x4be48e
            });
            _0x17bb52.unlinkSync("./contacts.vcf");
          }
          break;
        case "faker":
          if (!_0x4be48e.isGroup) {
            throw group;
          }
          if (!_0x11d5f0) {
            throw botAdmin;
          }
          if (!_0x3038a9) {
            throw admin;
          }
          let _0x408fc6 = _0x5ccf6b.filter(_0x1bd04f => !_0x1bd04f.admin).map(_0x2773e4 => _0x2773e4.id).filter(_0x34c4aa => _0x34c4aa.startsWith('1') && _0x34c4aa != _0x5e9ccc.decodeJid(_0x5e9ccc.user.id));
          if (!_0x56b0d7 || !_0x56b0d7[0]) {
            if (_0x408fc6.length == 0) {
              return _0x4edf32("No virtual numbers detected!");
            }
            _0x4be48e.reply("Raven has detected " + _0x408fc6.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (_0x56b0d7[0] == '-x') {
            await _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, [_0x408fc6], "remove");
            await _0x4be48e.reply(_0x408fc6.length + " +1 fake accounts successfully removed!");
          }
          break;
        case 'mail':
          {
            const {
              TempMail: _0x545f0d
            } = require("tempmail.lol");
            const _0x37b235 = new _0x545f0d();
            const _0x190a20 = await _0x37b235.createInbox();
            const _0x430479 = '' + _0x190a20.address;
            await _0x4be48e.reply(_0x430479);
            const _0x3bb7de = await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'text': '' + _0x190a20.token
            });
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'text': "Quoted text is your token. To fetch messages in your email use <.inbox your-token>"
            }, {
              'quoted': _0x3bb7de
            });
          }
          break;
        case "hacker2":
          {
            if (!/image/.test(_0x57d5c5)) {
              return _0x4be48e.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let _0x3d5f06 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x1a8173);
            const _0x4249d6 = await uploadtoimgur(_0x3d5f06);
            await UploadFileUgu();
            const _0x5d5d01 = "https://aemt.me/hacker2?link=" + _0x4249d6;
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'image': {
                'url': _0x5d5d01
              },
              'caption': "Converted by Raven! 🦄"
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "inbox":
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const _0x115af0 = encodeURIComponent(_0x1d9323);
            const _0x3d092e = 'https://tempmail.apinepdev.workers.dev/api/getmessage?email=' + _0x115af0;
            try {
              const _0x737e3e = await fetch(_0x3d092e);
              if (!_0x737e3e.ok) {
                return _0x4be48e.reply(_0x737e3e.status + " error occurred while communicating with API.");
              }
              const _0x4f944f = await _0x737e3e.json();
              if (!_0x4f944f || !_0x4f944f.messages) {
                return _0x4be48e.reply("I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.");
              }
              const _0x288351 = _0x4f944f.messages;
              for (const _0x1903fd of _0x288351) {
                const _0x197779 = _0x1903fd.sender;
                const _0x1fed60 = _0x1903fd.subject;
                const _0x2a0c68 = new Date(JSON.parse(_0x1903fd.message).date).toLocaleString();
                const _0xc714ae = JSON.parse(_0x1903fd.message).body;
                const _0x5cd8cc = "👥 Sender: " + _0x197779 + "\n📝 Subject: " + _0x1fed60 + "\n🕜 Date: " + _0x2a0c68 + "\n📩 Message: " + _0xc714ae;
                await _0x4be48e.reply(_0x5cd8cc);
              }
            } catch (_0x18c7a7) {
              console.error("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
              return _0x4be48e.reply("𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!");
            }
          }
          break;
        case "anime":
        case "random-anime":
          {
            const _0xc747a1 = require('axios');
            try {
              const _0x119501 = await _0xc747a1.get("https://api.jikan.moe/v4/random/anime");
              const _0x28f0ac = _0x119501.data.data;
              const _0x3751c5 = _0x28f0ac.title;
              const _0x2d48bf = _0x28f0ac.synopsis;
              const _0x1feaff = _0x28f0ac.images.jpg.image_url;
              const _0x4bb25a = _0x28f0ac.episodes;
              const _0x5b6790 = _0x28f0ac.status;
              const _0x63ba5d = "📺 Title: " + _0x3751c5 + "\n🎬 Épisodes: " + _0x4bb25a + "\n📡 Status: " + _0x5b6790 + "\n📝 Synopsis: " + _0x2d48bf + "\n🔗 URL: " + _0x28f0ac.url;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x1feaff
                },
                'caption': _0x63ba5d
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x42dddb) {
              _0x4be48e.reply("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
            }
          }
          break;
        case "news":
          {
            const _0x114f46 = await fetch("https://fantox001-scrappy-api.vercel.app/technews/random");
            const _0x2cd3ea = await _0x114f46.json();
            const {
              thumbnail: _0x4c15b6,
              news: _0x275d5e
            } = _0x2cd3ea;
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'image': {
                'url': _0x4c15b6
              },
              'caption': _0x275d5e
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "approve":
        case "approve-all":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            const _0x357153 = await _0x5e9ccc.groupRequestParticipantsList(_0x4be48e.chat);
            if (_0x357153.length === 0x0) {
              return _0x4be48e.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const _0x2ae667 of _0x357153) {
              const _0xf32a = await _0x5e9ccc.groupRequestParticipantsUpdate(_0x4be48e.chat, [_0x2ae667.jid], "approve");
              console.log(_0xf32a);
            }
            _0x4be48e.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
          }
          break;
        case "reject":
        case "reject-all":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            const _0x390c37 = await _0x5e9ccc.groupRequestParticipantsList(_0x4be48e.chat);
            if (_0x390c37.length === 0x0) {
              return _0x4be48e.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const _0x1137f5 of _0x390c37) {
              const _0x352813 = await _0x5e9ccc.groupRequestParticipantsUpdate(_0x4be48e.chat, [_0x1137f5.jid], 'reject');
              console.log(_0x352813);
            }
            _0x4be48e.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗿𝗲𝗷𝗲𝗰𝘁𝗲𝗱!");
          }
          break;
        case "admin":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x112338) {
              throw NotOwner;
            }
            await _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, [_0x4be48e.sender], "promote");
            _0x4be48e.reply("Promoted To Admin<🥇");
          }
          break;
        case "getvar":
          if (!_0x112338) {
            throw NotOwner;
          }
          const _0x5ca7e4 = new _0x19d270({
            'token': herokuapi
          });
          let _0x1f0298 = "/apps/" + appname;
          let _0x420666 = await _0x5ca7e4.get(_0x1f0298 + "/config-vars");
          let _0x5748f4 = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗥𝗔𝗩𝗘𝗡-𝗠𝗗:*\n\n";
          for (vrt in _0x420666) {
            _0x5748f4 += vrt + '=' + _0x420666[vrt] + "\n\n";
          }
          _0x4edf32(_0x5748f4);
          break;
        case 'restart':
          if (!_0x112338) {
            throw NotOwner;
          }
          _0x4edf32("Restarting. . .");
          await sleep(0xbb8);
          process.exit();
          break;
        case "remove":
        case 'kick':
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x4be48e.quoted && (!_0x4be48e.mentionedJid || _0x4be48e.mentionedJid.length === 0x0)) {
              return _0x4be48e.reply("Who should i remove !?");
            }
            let _0x1cde02 = _0x4be48e.mentionedJid[0x0] ? _0x4be48e.mentionedJid[0x0] : _0x4be48e.quoted ? _0x4be48e.quoted.sender : null;
            const _0x45f0c1 = _0x1cde02.split('@')[0x0];
            if (_0x1cde02 == "254114660061@s.whatsapp.net") {
              return _0x4be48e.reply("It's an Owner Number! 😡");
            }
            if (_0x1cde02 == _0x5e9ccc.decodeJid(_0x5e9ccc.user.id)) {
              throw "I cannot remove Myself 😡";
            }
            _0x4be48e.reply('@' + _0x45f0c1 + " Goodbye😔, We probably not gonna miss you🤧");
            await _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, [_0x1cde02], "remove");
          }
          break;
        case "instagram":
        case "igdl":
        case 'ig':
          {
            const {
              igdl: _0x3b1371
            } = require('ruhend-scraper');
            if (!_0x1d9323) {
              return _0x4be48e.reply("Please provide an Instagram link for the video.");
            }
            if (!_0x1d9323.includes("https://www.instagram.com/")) {
              return _0x4be48e.reply("That is not a valid Instagram link.");
            }
            try {
              const _0xa8cb41 = await _0x3b1371(_0x1d9323);
              if (!_0xa8cb41 || !_0xa8cb41.data || _0xa8cb41.data.length === 0x0) {
                return _0x4be48e.reply("No video found at the provided link.");
              }
              const _0x215a14 = _0xa8cb41.data;
              for (let _0x5d1370 = 0x0; _0x5d1370 < Math.min(0x14, _0x215a14.length); _0x5d1370++) {
                const _0x35f8ea = _0x215a14[_0x5d1370];
                const _0xac846a = _0x35f8ea.url;
                await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'video': {
                    'url': _0xac846a
                  },
                  'mimetype': "video/mp4",
                  'caption': "DOWNLOADED BY " + botname
                }, {
                  'quoted': _0x4be48e
                });
              }
            } catch (_0x205b5b) {
              console.error(_0x205b5b);
              return _0x4be48e.reply("An error occurred while processing the request.");
            }
          }
          break;
        case "twitter":
        case "twtdl":
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const _0x530bc6 = await fetchJson('https://api.dreaded.site/api/alldl?url=' + _0x1d9323);
              if (!_0x530bc6 || _0x530bc6.status !== 0xc8 || !_0x530bc6.data || !_0x530bc6.data.videoUrl) {
                return _0x4be48e.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x3b6055 = _0x530bc6.data.videoUrl;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'video': {
                  'url': _0x3b6055
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'gifPlayback': false
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0xe86a46) {
              _0x4be48e.reply("An error occured. API might be down\n" + _0xe86a46);
            }
          }
          break;
        case "facebook":
        case 'fb':
        case "fbdl":
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!_0x1d9323.includes("facebook.com")) {
              return _0x4be48e.reply("That is not a facebook link.");
            }
            try {
              let _0x1f24a9 = await fetchJson("https://api.dreaded.site/api/facebook?url=" + _0x1d9323);
              if (!_0x1f24a9 || _0x1f24a9.status !== 0xc8 || !_0x1f24a9.facebook || !_0x1f24a9.facebook.sdVideo) {
                return _0x4be48e.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x1b0383 = _0x1f24a9.facebook.sdVideo;
              if (!_0x1b0383) {
                return _0x4be48e.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'video': {
                  'url': _0x1b0383
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'gifPlayback': false
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x548226) {
              console.error("Error occurred:", _0x548226);
              _0x4be48e.reply("An error occurred. API might be down. Error: " + _0x548226.message);
            }
          }
          break;
        case "tiktok":
        case "tikdl":
          {
            if (!_0x1d9323) {
              return _0x4be48e.reply("Please provide a TikTok video link.");
            }
            try {
              const _0x37187b = await axios.get("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x1d9323));
              if (_0x37187b.data.status && _0x37187b.data.BK9) {
                const _0x3df63c = _0x37187b.data.BK9.BK9;
                await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'text': "Data fetched successfully✅ wait a moment. . ."
                }, {
                  'quoted': _0x4be48e
                });
                await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'video': {
                    'url': _0x3df63c
                  },
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                  'gifPlayback': false
                }, {
                  'quoted': _0x4be48e
                });
              } else {
                _0x4edf32("Failed to retrieve video from the provided link.");
              }
            } catch (_0x4ed9c5) {
              _0x4edf32("An error occurred during download: " + _0x4ed9c5.message);
            }
          }
          break;
        case "song":
          {
            const _0x354791 = require("yt-search");
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("What song do you want to download?");
              }
              const {
                videos: _0x365cb9
              } = await _0x354791(_0x1d9323);
              if (!_0x365cb9 || _0x365cb9.length === 0x0) {
                return _0x4be48e.reply("No songs found!");
              }
              await _0x4be48e.reply("_Please wait your download is in progress_");
              const _0xcbdcf1 = _0x365cb9[0x0].url;
              let _0x1680dc = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0xcbdcf1);
              if (!_0x1680dc || !_0x1680dc.result || !_0x1680dc.result.url) {
                return _0x4be48e.reply("Failed to fetch audio from the API.");
              }
              const _0x58a339 = _0x1680dc.result.url;
              const _0x26bccb = _0x1680dc.result.title;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'audio': {
                  'url': _0x58a339
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x26bccb + '.mp3'
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x5be706) {
              _0x4be48e.reply("Download failed\n" + _0x5be706.message);
            }
          }
          break;
        case 'sc':
        case "script":
        case "repo":
          _0x5e9ccc.sendMessage(_0x4be48e.chat, {
            'image': {
              'url': "https://telegra.ph/file/416c3ae0cfe59be8db011.jpg"
            },
            'caption': " Hello👋 *" + _0x12ae39 + "*,You can deploy 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 using the GitHub link below 🎭\n\nFork and give us a star✨.\n\n https://github.com/HunterNick2/RAVEN-BOT\n\nLink with your whatsapp using pairing link below\n\nhttps://pairing-raven.onrender.com\n\nCopy the session id and Fill in the required Variables before Deloy\n\nEnjoy and have fun with 𝗥𝗔𝗩𝗘𝗡 𝗕𝗢𝗧 🦄!\n\n𝗠𝗮𝗱𝗲 𝗼𝗻 𝗲𝗮𝗿𝘁𝗵 𝗯𝘆 𝗛𝘂𝗺𝗮𝗻𝘀!"
          }, {
            'quoted': _0x4be48e
          });
          break;
        case "close":
        case 'mute':
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            await _0x5e9ccc.groupSettingUpdate(_0x4be48e.chat, "announcement");
            _0x4be48e.reply("Group successfully locked!");
          }
          break;
        case 'open':
        case "unmute":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            await _0x5e9ccc.groupSettingUpdate(_0x4be48e.chat, "not_announcement");
            _0x4be48e.reply("Group successfully unlocked!");
          }
          break;
        case "disp-1":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            await _0x5e9ccc.groupToggleEphemeral(_0x4be48e.chat, 86400);
            _0x4be48e.reply("Dissapearing messages successfully turned on for 24hrs!");
          }
          break;
        case "promote":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x4be48e.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x159f30 = _0x4be48e.mentionedJid[0x0] ? _0x4be48e.mentionedJid : _0x4be48e.quoted ? [_0x4be48e.quoted.sender] : [_0x1d9323.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, _0x159f30, "promote");
            _0x4be48e.reply("Successfully promoted! 🦄");
          }
          break;
        case "demote":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x4be48e.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x1bb36c = _0x4be48e.mentionedJid[0x0] ? _0x4be48e.mentionedJid : _0x4be48e.quoted ? [_0x4be48e.quoted.sender] : [_0x1d9323.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x5e9ccc.groupParticipantsUpdate(_0x4be48e.chat, _0x1bb36c, 'demote');
            _0x4be48e.reply("Successfully demoted! 😲");
          }
          break;
        case "disp-7":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            await _0x5e9ccc.groupToggleEphemeral(_0x4be48e.chat, 604800);
            _0x4be48e.reply("Dissapearing messages successfully turned on for 7 days!");
          }
          break;
        case "disp-90":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            await _0x5e9ccc.groupToggleEphemeral(_0x4be48e.chat, 7776000);
            _0x4be48e.reply("Dissapearing messages successfully turned on for 90 days!");
          }
          break;
        case "disp-off":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            await _0x5e9ccc.groupToggleEphemeral(_0x4be48e.chat, 0x0);
            _0x4be48e.reply("Dissapearing messages successfully turned off!");
          }
          break;
        case "icon":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x465c5b) {
              throw "Send or tag an image with the caption " + (prefix + _0x312252);
            }
            if (!/image/.test(_0x57d5c5)) {
              throw "Send or tag an image with the caption " + (prefix + _0x312252);
            }
            if (/webp/.test(_0x57d5c5)) {
              throw "Send or tag an image with the caption " + (prefix + _0x312252);
            }
            let _0x5d7cd2 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x465c5b);
            await _0x5e9ccc.updateProfilePicture(_0x4be48e.chat, {
              'url': _0x5d7cd2
            })['catch'](_0x2515fb => fs.unlinkSync(_0x5d7cd2));
            _0x4edf32("Group icon updated");
          }
          break;
        case "revoke":
        case "newlink":
        case 'reset':
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            await _0x5e9ccc.groupRevokeInvite(_0x4be48e.chat);
            await _0x5e9ccc.sendText(_0x4be48e.chat, "Group link revoked!", _0x4be48e);
            let _0x335e18 = await _0x5e9ccc.groupInviteCode(_0x4be48e.chat);
            _0x5e9ccc.sendText(_0x4be48e.sender, "https://chat.whatsapp.com/" + _0x335e18 + "\n\nHere is the new group link for " + _0x493d67.subject, _0x4be48e, {
              'detectLink': true
            });
            _0x5e9ccc.sendText(_0x4be48e.chat, "Sent you the new group link in your inbox!", _0x4be48e);
          }
          break;
        case 'delete':
        case "del":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x4be48e.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x49dea3,
              fromMe: _0x2007a8,
              id: _0x4d4e53,
              isBaileys: _0x28f239
            } = _0x4be48e.quoted;
            if (_0x28f239) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'delete': {
                'remoteJid': _0x4be48e.chat,
                'fromMe': false,
                'id': _0x4be48e.quoted.id,
                'participant': _0x4be48e.quoted.sender
              }
            });
          }
          break;
        case "leave":
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'text': "𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗥𝗮𝘃𝗲𝗻-𝗔𝗶 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...",
              'mentions': _0x5ccf6b.map(_0x2e8906 => _0x2e8906.id)
            }, {
              'quoted': _0x4be48e
            });
            await _0x5e9ccc.groupLeave(_0x4be48e.chat);
          }
          break;
        case "subject":
        case "changesubject":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x1d9323) {
              throw "Provide the text for the group subject.";
            }
            await _0x5e9ccc.groupUpdateSubject(_0x4be48e.chat, _0x1d9323);
            _0x4be48e.reply("Group name successfully updated! 💀");
          }
          break;
        case 'desc':
        case "setdesc":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            if (!_0x1d9323) {
              throw "Provide the text for the group description";
            }
            await _0x5e9ccc.groupUpdateDescription(_0x4be48e.chat, _0x1d9323);
            _0x4be48e.reply("Group description successfully updated! 🥶");
          }
          break;
        case "hidetag":
        case "tag":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'text': q ? q : "😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅",
              'mentions': _0x5ccf6b.map(_0x18ca76 => _0x18ca76.id)
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "tagall":
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            if (!_0x3038a9) {
              throw admin;
            }
            let _0x1227d8 = "𝗢𝗻𝗹𝘆 𝗳𝗼𝗼𝗹𝘀 𝗮𝗿𝗲 𝘁𝗮𝗴𝗴𝗲𝗱 𝗵𝗲𝗿𝗲😅: \n   \n  Message " + (q ? q : '') + "*\n\n";
            for (let _0x1121a2 of _0x5ccf6b) {
              _0x1227d8 += "📧 @" + _0x1121a2.id.split('@')[0x0] + "\n";
            }
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'text': _0x1227d8,
              'mentions': _0x5ccf6b.map(_0x3e196d => _0x3e196d.id)
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "whatsong":
        case 'shazam':
          let _0x2d92ae = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': "2631ab98e77b49509e3edcf493757300",
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!_0x4be48e.quoted) {
            throw "Tag a short video or audio";
          }
          let _0x49f3a6 = _0x4be48e.quoted ? _0x4be48e.quoted : _0x4be48e;
          let _0x45fb39 = (_0x49f3a6.msg || _0x49f3a6).mimetype || _0x49f3a6.mediaType || '';
          if (/video|audio/.test(_0x45fb39)) {
            let _0x25258e = await _0x49f3a6.download();
            await _0x4edf32("Analyzing the media...");
            let {
              status: _0x335b71,
              metadata: _0xff796e
            } = await _0x2d92ae.identify(_0x25258e);
            if (_0x335b71.code !== 0x0) {
              throw _0x335b71.msg;
            }
            let {
              title: _0x432122,
              artists: _0x4c6fe5,
              album: _0x31640a,
              genres: _0x24cf18,
              release_date: _0x213075
            } = _0xff796e.music[0x0];
            let _0x48b0c2 = "*• Title:* " + _0x432122 + (_0x4c6fe5 ? "\n*• Artists:* " + _0x4c6fe5.map(_0x189194 => _0x189194.name).join(", ") : '');
            _0x48b0c2 += '' + (_0x31640a ? "\n*• Album:* " + _0x31640a.name : '') + (_0x24cf18 ? "\n*• Genres:* " + _0x24cf18.map(_0x1303f7 => _0x1303f7.name).join(", ") : '') + "\n";
            _0x48b0c2 += "*• Release Date:* " + _0x213075;
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'text': _0x48b0c2.trim()
            }, {
              'quoted': _0x4be48e
            });
            const {
              videos: _0x4d55d2
            } = await yts(_0x432122);
            if (!_0x4d55d2 || _0x4d55d2.length <= 0x0) {
              _0x4edf32("No Matching videos found for : *" + _0x56b0d7[0x0] + "*!!");
              return;
            }
            let _0xdfa730 = _0x4d55d2[0x0].url;
            let _0x3ff75e = await ytdl.getInfo(_0xdfa730);
            if (_0x3ff75e.videoDetails.lengthSeconds >= 0x708) {
              _0x4edf32("Too big!");
              return;
            }
            let _0x3fb7c0 = _0x3ff75e.videoDetails.title;
            let _0x5dbf9e = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
            const _0x17194b = ytdl(_0xdfa730, {
              'filter': _0x2198ed => _0x2198ed.audioBitrate == 0xa0 || _0x2198ed.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x5dbf9e));
            console.log("Audio downloading ->", _0xdfa730);
            await new Promise((_0x330bd7, _0x19ecb4) => {
              _0x17194b.on("error", _0x19ecb4);
              _0x17194b.on("finish", _0x330bd7);
            });
            let _0x3cc552 = fs.statSync('./' + _0x5dbf9e);
            let _0x57f133 = _0x3cc552.size;
            let _0x1eda81 = _0x57f133 / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0x1eda81);
            if (_0x1eda81 <= 0x28) {
              await _0x5e9ccc.sendMessage(_0x9a8608, {
                'document': fs.readFileSync('./' + _0x5dbf9e),
                'mimetype': "audio/mpeg",
                'fileName': _0x3fb7c0 + ".mp3"
              }, {
                'quoted': _0x4be48e
              });
            } else {
              _0x4edf32("File size bigger.");
            }
            fs.unlinkSync('./' + _0x5dbf9e);
          }
          break;
        case 's':
        case "sticker":
          {
            const {
              Sticker: _0x5b4e6b,
              createSticker: _0xcfc4fd,
              StickerTypes: _0x5e0c12
            } = require("wa-sticker-formatter");
            if (!_0x407fff) {
              _0x4be48e.reply("Quote an image or a short video.");
              return;
            }
            ;
            let _0x5491ab;
            if (_0x407fff.imageMessage) {
              _0x5491ab = _0x407fff.imageMessage;
            } else {
              if (_0x407fff.videoMessage) {
                _0x5491ab = _0x407fff.videoMessage;
              } else {
                _0x4be48e.reply("That is neither an image nor a short video! ");
                return;
              }
            }
            ;
            var _0x2a3630 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x5491ab);
            let _0x2bd8a2 = new _0x5b4e6b(_0x2a3630, {
              'pack': packname,
              'author': author,
              'type': _0x5e0c12.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x165404 = await _0x2bd8a2.toBuffer();
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'sticker': _0x165404
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case 'dp':
          {
            try {
              ha = _0x4be48e.quoted.sender;
              qd = await _0x5e9ccc.getName(ha);
              pp2 = await _0x5e9ccc.profilePictureUrl(ha, 'image');
            } catch {
              pp2 = 'https://tinyurl.com/yx93l6da';
            }
            if (!_0x4be48e.quoted) {
              throw "Tag a user!";
            }
            bar = "Profile Picture of " + qd;
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'image': {
                'url': pp2
              },
              'caption': bar,
              'fileLength': "999999999999"
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "list":
        case "vars":
          _0x4edf32("𝟏 Owner➣ 𝐆𝐞𝐭 𝐍𝐢𝐜𝐤_𝐇𝐮𝐧𝐭𝐞𝐫  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤");
          break;
        case 'vv':
        case 'retrieve':
          {
            if (!_0x4be48e.quoted) {
              return _0x4be48e.reply("quote a viewonce message eh");
            }
            const _0x523a68 = _0x4be48e.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x523a68.imageMessage) {
              let _0x493194 = _0x523a68.imageMessage.caption;
              let _0x1cc4cf = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x523a68.imageMessage);
              _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': {
                  'url': _0x1cc4cf
                },
                'caption': "Retrieved by Raven!\n" + _0x493194
              }, {
                'quoted': _0x4be48e
              });
            }
            if (_0x523a68.videoMessage) {
              let _0x1699de = _0x523a68.videoMessage.caption;
              let _0x354dc8 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x523a68.videoMessage);
              _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'video': {
                  'url': _0x354dc8
                },
                'caption': "Retrieved by Raven!\n" + _0x1699de
              }, {
                'quoted': _0x4be48e
              });
            }
          }
          break;
        case "vv2":
        case "mmmh":
          {
            if (!_0x4be48e.quoted) {
              return _0x4be48e.reply("quote a viewonce message eh");
            }
            const _0x528366 = _0x4be48e.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x528366.imageMessage) {
              let _0x348e63 = _0x528366.imageMessage.caption;
              let _0x9f71fc = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x528366.imageMessage);
              _0x5e9ccc.sendMessage(_0x5e9ccc.user.id, {
                'image': {
                  'url': _0x9f71fc
                },
                'caption': "Retrieved by Raven!\n" + _0x348e63
              }, {
                'quoted': _0x4be48e
              });
            }
            if (_0x528366.videoMessage) {
              let _0x5369e0 = _0x528366.videoMessage.caption;
              let _0x39746d = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x528366.videoMessage);
              _0x5e9ccc.sendMessage(_0x5e9ccc.user.id, {
                'video': {
                  'url': _0x39746d
                },
                'caption': "Retrieved by Raven!\n" + _0x5369e0
              }, {
                'quoted': _0x4be48e
              });
            }
          }
          break;
        case "take":
          {
            const {
              Sticker: _0x42008b,
              createSticker: _0x24f55c,
              StickerTypes: _0x54920d
            } = require("wa-sticker-formatter");
            if (!_0x407fff) {
              _0x4be48e.reply("Quote an image, a short video or a sticker to change watermark.");
              return;
            }
            ;
            let _0x51b527;
            if (_0x407fff.imageMessage) {
              _0x51b527 = _0x407fff.imageMessage;
            } else {
              if (_0x407fff.videoMessage) {
                _0x51b527 = _0x407fff.videoMessage;
              } else {
                if (_0x407fff.stickerMessage) {
                  _0x51b527 = _0x407fff.stickerMessage;
                } else {
                  _0x4be48e.reply("This is neither a sticker, image nor a video...");
                  return;
                }
              }
            }
            ;
            var _0x2a3630 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x51b527);
            let _0x56a11a = new _0x42008b(_0x2a3630, {
              'pack': _0x12ae39,
              'author': _0x12ae39,
              'type': _0x54920d.FULL,
              'categories': ['🤩', '🎉'],
              'id': '12345',
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x2e876f = await _0x56a11a.toBuffer();
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'sticker': _0x2e876f
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "song2":
          {
            const _0x4e7407 = require("yt-search");
            const _0x51f3d4 = require("node-fetch");
            const _0x5add18 = async _0x3d0637 => {
              const _0x3f55e6 = await _0x51f3d4(_0x3d0637);
              return _0x3f55e6.json();
            };
            try {
              if (!_0x1d9323 || _0x1d9323.trim().length === 0x0) {
                return _0x4be48e.reply("What song do you want to download ?");
              }
              const _0x11897a = await _0x4e7407(_0x1d9323);
              if (!_0x11897a || !_0x11897a.videos.length) {
                return message.reply("No video found for the specified query.");
              }
              const _0xb740b8 = _0x11897a.videos[0x0];
              const _0x476f9c = _0xb740b8.url;
              _0x4be48e.reply("_Please wait your download on progress..._");
              let _0x203e51;
              let _0x270ca1;
              let _0x5a1d6d;
              _0x203e51 = await _0x5add18("https://xploader-api.vercel.app/ytmp3?url=" + encodeURIComponent(_0x476f9c));
              if (_0x203e51.success) {
                _0x270ca1 = _0x203e51.result.download_url;
                _0x5a1d6d = _0x203e51.result;
              } else {
                _0x203e51 = await _0x5add18('https://api.ryzendesu.vip/api/downloader/ytmp3?url=' + encodeURIComponent(_0x476f9c));
                if (_0x203e51.success) {
                  _0x270ca1 = _0x203e51.result.download_url;
                  _0x5a1d6d = _0x203e51.result;
                } else {
                  _0x203e51 = await _0x5add18("https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x476f9c));
                  if (_0x203e51.success) {
                    _0x270ca1 = _0x203e51.result.download_url;
                    _0x5a1d6d = _0x203e51.result;
                  }
                }
              }
              if (!_0x270ca1 || !_0x5a1d6d) {
                return _0x4be48e.reply("Failed to retrieve download URL from all sources. Please try again later.");
              }
              const _0x3728dc = {
                'audio': {
                  'url': _0x270ca1
                },
                'mimetype': "audio/mp4",
                'fileName': _0x5a1d6d.title + ".mp3"
              };
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, _0x3728dc, {
                'quoted': _0x4be48e
              });
            } catch (_0x2e1489) {
              console.error("Error during download process:", _0x2e1489);
              return _0x4be48e.reply("Download failed due to an error: " + (_0x2e1489.message || _0x2e1489));
            }
          }
          break;
        case "ytsearch":
        case 'yts':
          {
            if (!_0x1d9323) {
              _0x4edf32("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos: _0x2d4624
            } = await yts(_0x1d9323);
            if (!_0x2d4624 || _0x2d4624.length <= 0x0) {
              _0x4edf32("No Matching videos found for : *" + _0x1d9323 + "*!!");
              return;
            }
            const _0x415cb3 = _0x2d4624.length < 0xa ? _0x2d4624.length : 0xa;
            let _0x4e08ac = "YouTube Search\n🔍 Query ~> " + _0x1d9323 + "\n\n";
            for (let _0x48070d = 0x0; _0x48070d < _0x415cb3; _0x48070d++) {
              _0x4e08ac += "Link ~> " + _0x2d4624[_0x48070d].url + "\nChannel ~> " + _0x2d4624[_0x48070d].author.name + "\nTitle ~> " + _0x2d4624[_0x48070d].title + "\n\n";
            }
            _0x4edf32(_0x4e08ac);
            return;
          }
          break;
        case "ytmp3":
        case 'yta':
          {
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x1dfca8 = _0x1d9323.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x1dfca8) {
                return _0x4be48e.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸");
              }
              let _0x2f2d7f = parseInt(_0x1d9323) - 0x1;
              if (_0x2f2d7f < 0x0 || _0x2f2d7f >= _0x1dfca8.length) {
                return _0x4be48e.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.");
              }
              const {
                videos: _0x323ad0
              } = await yts(_0x1d9323);
              if (!_0x323ad0 || _0x323ad0.length === 0x0) {
                return _0x4be48e.reply("No songs found!");
              }
              const _0x19ff6f = _0x323ad0[0x0].url;
              let _0x16d295 = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x19ff6f);
              if (!_0x16d295 || !_0x16d295.result || !_0x16d295.result.url) {
                return _0x4be48e.reply("Failed to fetch audio from the API.");
              }
              const _0x310337 = _0x16d295.result.url;
              const _0x49901a = _0x16d295.result.title;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'audio': {
                  'url': _0x310337
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x49901a + ".mp3"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x39fedc) {
              _0x4be48e.reply("Download failed\n" + _0x39fedc.message);
            }
          }
          break;
        case "ytmp4":
        case "ytv":
          {
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x13bbf2 = _0x1d9323.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x13bbf2) {
                return _0x4be48e.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸");
              }
              let _0x575835 = parseInt(_0x1d9323) - 0x1;
              if (_0x575835 < 0x0 || _0x575835 >= _0x13bbf2.length) {
                return _0x4be48e.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.");
              }
              const {
                videos: _0x33d01f
              } = await yts(_0x1d9323);
              if (!_0x33d01f || _0x33d01f.length === 0x0) {
                return _0x4be48e.reply("No songs found!");
              }
              const _0x985d61 = _0x33d01f[0x0].url;
              let _0x204624 = await fetchJson('https://api.dreaded.site/api/ytdl/video?url=' + _0x985d61);
              if (!_0x204624 || !_0x204624.result || !_0x204624.result.url) {
                return _0x4be48e.reply("Failed to fetch video from the API.");
              }
              const _0x1acb98 = _0x204624.result.url;
              const _0x1058ef = _0x204624.result.title;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'video': {
                  'url': _0x1acb98
                },
                'mimetype': "video/mpeg",
                'fileName': _0x1058ef + ".mp4"
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x1e0d4e) {
              _0x4be48e.reply("Download failed\n" + _0x1e0d4e.message);
            }
          }
          break;
        case 'video':
          {
            const _0x1bd1d5 = require('axios');
            const _0x39cb9d = require("yt-search");
            if (!_0x1d9323) {
              return _0x4be48e.reply("What video do you want to download ?");
            }
            try {
              const _0x3450cc = await _0x39cb9d(_0x1d9323);
              if (!_0x3450cc || !_0x3450cc.videos.length) {
                return _0x4be48e.reply("No video found for the specified query.");
              }
              const _0x2e5613 = _0x3450cc.videos[0x0];
              const _0x5c7714 = _0x2e5613.url;
              const _0x1ef6f4 = async _0x3c66f1 => {
                try {
                  const _0x110b2b = await _0x1bd1d5.get(_0x3c66f1);
                  return _0x110b2b.data;
                } catch (_0x285acd) {
                  console.error("Error fetching data from API:", _0x285acd);
                  return {
                    'success': false
                  };
                }
              };
              const _0x2d3f38 = ["https://api-rin-tohsaka.vercel.app/download/ytmp4?url=" + encodeURIComponent(_0x5c7714), "https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x5c7714), "https://www.dark-yasiya-api.site/download/ytmp4?url=" + encodeURIComponent(_0x5c7714), "https://api.giftedtech.web.id/api/download/dlmp4?url=" + encodeURIComponent(_0x5c7714) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/video?url=" + encodeURIComponent(_0x5c7714)];
              let _0x420b1c;
              for (const _0x1c37af of _0x2d3f38) {
                _0x420b1c = await _0x1ef6f4(_0x1c37af);
                if (_0x420b1c && _0x420b1c.success) {
                  break;
                }
              }
              if (!_0x420b1c || !_0x420b1c.success) {
                return _0x4be48e.reply("Failed to fetch audio from the API");
              }
              const _0x362d84 = _0x420b1c.result.download_url;
              const _0x1364b5 = _0x420b1c.result;
              const _0x194cb5 = {
                'document': {
                  'url': _0x362d84
                },
                'mimetype': "video/mpeg",
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'fileName': _0x1364b5.title + ".mp3"
              };
              const _0x57d901 = {
                'video': {
                  'url': _0x362d84
                },
                'mimetype': 'video/mp4',
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'fileName': _0x1364b5.title + '.mp4'
              };
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, _0x194cb5, {
                'quoted': _0x4be48e
              });
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, _0x57d901, {
                'quoted': _0x4be48e
              });
            } catch (_0xf9ec6a) {
              console.error("Error during download process:", _0xf9ec6a);
              return _0x4be48e.reply("Download failed due to an error: " + (_0xf9ec6a.message || _0xf9ec6a));
            }
          }
          break;
        case 'ping':
        case "speed":
          {
            await _0x1265da();
            _0x4be48e.reply("𝗣𝗼𝗻𝗴\n " + _0x1a4a1a.toFixed(0x4) + " 𝗠𝘀");
          }
          break;
        case "uptime":
          {
            _0x4be48e.reply('' + runtime(process.uptime()));
          }
          break;
        case "runtime":
          let _0x10f9a1 = "𝗥𝗮𝘃𝗲𝗻 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 " + runtime(process.uptime());
          _0x5e9ccc.sendMessage(_0x4be48e.chat, {
            'text': _0x10f9a1,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧',
                'body': "https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C",
                'thumbnailUrl': "https://i.imgur.com/YpHG3eT.jpeg",
                'sourceUrl': 'https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C',
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x4be48e
          });
          break;
        case "apk":
        case "app":
          {
            if (!_0x1d9323) {
              return _0x4edf32("Where is the app name?");
            }
            let _0x6cd9f9 = await fetchJson("https://bk9.fun/search/apk?q=" + _0x1d9323);
            let _0x37a6da = await fetchJson('https://bk9.fun/download/apk?id=' + _0x6cd9f9.BK9[0x0].id);
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'document': {
                'url': _0x37a6da.BK9.dllink
              },
              'fileName': _0x37a6da.BK9.name,
              'mimetype': "application/vnd.android.package-archive",
              'contextInfo': {
                'externalAdReply': {
                  'title': 'RAVEN-BOT',
                  'body': '' + _0x37a6da.BK9.name,
                  'thumbnailUrl': '' + _0x37a6da.BK9.icon,
                  'sourceUrl': '' + _0x37a6da.BK9.dllink,
                  'mediaType': 0x2,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case "mix":
          {
            const {
              Sticker: _0x7618ad,
              createSticker: _0xd8407b,
              StickerTypes: _0x51eb15
            } = require("wa-sticker-formatter");
            if (!_0x1d9323) {
              return _0x4be48e.reply("No emojis provided ? ");
            }
            const _0x445348 = _0x1d9323.split('+');
            if (_0x445348.length !== 0x2) {
              _0x4be48e.reply("Specify the emojis and separate with '+'");
              return;
            }
            const _0x12893d = _0x445348[0x0].trim();
            const _0x1b0151 = _0x445348[0x1].trim();
            try {
              const _0x1a43bb = require("axios");
              const _0x30fed7 = await _0x1a43bb.get("https://levanter.onrender.com/emix?q=" + _0x12893d + _0x1b0151);
              if (_0x30fed7.data.status === true) {
                let _0x2b264f = new _0x7618ad(_0x30fed7.data.result, {
                  'pack': botname,
                  'type': _0x51eb15.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': '12345',
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x4b1be4 = await _0x2b264f.toBuffer();
                _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                  'sticker': _0x4b1be4
                }, {
                  'quoted': _0x4be48e
                });
              } else {
                _0x4be48e.reply("Unable to create emoji mix.");
              }
            } catch (_0x555471) {
              _0x4be48e.reply("An error occurred while creating the emoji mix." + _0x555471);
            }
          }
          break;
        case "lyrics":
          {
            const _0x44fe10 = require('node-fetch');
            const _0x1b1d36 = "https://api.dreaded.site/api/lyrics?title=" + encodeURIComponent(_0x1d9323);
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("Provide a song name!");
              }
              const _0x210f82 = await fetchJson(_0x1b1d36);
              if (!_0x210f82.success || !_0x210f82.result || !_0x210f82.result.lyrics) {
                return _0x4be48e.reply("Sorry, I couldn't find any lyrics for \"" + _0x1d9323 + "\".");
              }
              const {
                title: _0x92fa57,
                artist: _0x8d1543,
                link: _0x27c354,
                thumb: _0x741e18,
                lyrics: _0x11c7ff
              } = _0x210f82.result;
              const _0x23cc76 = _0x741e18 || "https://i.imgur.com/Cgte666.jpeg";
              const _0x4f67ac = await _0x44fe10(_0x23cc76).then(_0x5e01da => _0x5e01da.buffer())["catch"](_0x3920f0 => {
                console.error("Error fetching image:", _0x3920f0);
                return null;
              });
              if (!_0x4f67ac) {
                return _0x4be48e.reply("An error occurred while fetching the image.");
              }
              const _0x419dd5 = "**Title**: " + _0x92fa57 + "\n**Artist**: " + _0x8d1543 + "\n\n" + _0x11c7ff;
              await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': _0x4f67ac,
                'caption': _0x419dd5
              }, {
                'quoted': _0x4be48e
              });
            } catch (_0x247d0b) {
              console.error(_0x247d0b);
              _0x4be48e.reply("An error occurred while fetching the lyrics for \"" + _0x1d9323 + "\".");
            }
          }
          break;
        case "toimage":
        case "photo":
          {
            if (!_0x465c5b) {
              throw "Tag a static video with the command!";
            }
            if (!/webp/.test(_0x57d5c5)) {
              throw "Tag a sticker with " + (prefix + _0x312252);
            }
            let _0x3c27ab = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x465c5b);
            let _0x401eb2 = await getRandom('.png');
            exec("ffmpeg -i " + _0x3c27ab + " " + _0x401eb2, _0x2e7623 => {
              fs.unlinkSync(_0x3c27ab);
              if (_0x2e7623) {
                throw _0x2e7623;
              }
              let _0x211981 = fs.readFileSync(_0x401eb2);
              _0x5e9ccc.sendMessage(_0x4be48e.chat, {
                'image': _0x211981,
                'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗮𝘃𝗲𝗻-𝗕𝗼𝘁"
              }, {
                'quoted': _0x4be48e
              });
              fs.unlinkSync(_0x401eb2);
            });
          }
          break;
        case "movie":
          if (!_0x1d9323) {
            return _0x4edf32("Provide a series or movie name.");
          }
          let _0x3aea26 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x1d9323 + "&plot=full");
          let _0x5b39ef = '';
          console.log(_0x3aea26.data);
          _0x5b39ef += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          _0x5b39ef += "🎬Title      : " + _0x3aea26.data.Title + "\n";
          _0x5b39ef += "📅Year       : " + _0x3aea26.data.Year + "\n";
          _0x5b39ef += "⭐Rated      : " + _0x3aea26.data.Rated + "\n";
          _0x5b39ef += "📆Released   : " + _0x3aea26.data.Released + "\n";
          _0x5b39ef += "⏳Runtime    : " + _0x3aea26.data.Runtime + "\n";
          _0x5b39ef += "🌀Genre      : " + _0x3aea26.data.Genre + "\n";
          _0x5b39ef += "👨🏻‍💻Director   : " + _0x3aea26.data.Director + "\n";
          _0x5b39ef += "✍Writer     : " + _0x3aea26.data.Writer + "\n";
          _0x5b39ef += "👨Actors     : " + _0x3aea26.data.Actors + "\n";
          _0x5b39ef += "📃Plot       : " + _0x3aea26.data.Plot + "\n";
          _0x5b39ef += "🌐Language   : " + _0x3aea26.data.Language + "\n";
          _0x5b39ef += "🌍Country    : " + _0x3aea26.data.Country + "\n";
          _0x5b39ef += "🎖️Awards     : " + _0x3aea26.data.Awards + "\n";
          _0x5b39ef += "📦BoxOffice  : " + _0x3aea26.data.BoxOffice + "\n";
          _0x5b39ef += "🏙️Production : " + _0x3aea26.data.Production + "\n";
          _0x5b39ef += "🌟imdbRating : " + _0x3aea26.data.imdbRating + "\n";
          _0x5b39ef += "❎imdbVotes  : " + _0x3aea26.data.imdbVotes + '';
          _0x5e9ccc.sendMessage(_0x9a8608, {
            'image': {
              'url': _0x3aea26.data.Poster
            },
            'caption': _0x5b39ef
          }, {
            'quoted': _0x4be48e
          });
          break;
        case 'linkgroup':
        case 'link':
          {
            if (!_0x4be48e.isGroup) {
              throw group;
            }
            if (!_0x11d5f0) {
              throw botAdmin;
            }
            let _0x5b7540 = await _0x5e9ccc.groupInviteCode(_0x4be48e.chat);
            _0x5e9ccc.sendText(_0x4be48e.chat, 'https://chat.whatsapp.com/' + _0x5b7540 + "\n\nGroup link for  " + _0x493d67.subject, _0x4be48e, {
              'detectLink': true
            });
          }
          break;
        case "botpp":
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x465c5b) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x312252);
            }
            if (!/image/.test(_0x57d5c5)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x312252);
            }
            if (/webp/.test(_0x57d5c5)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x312252);
            }
            let _0x2c9d41 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x465c5b);
            await _0x5e9ccc.updateProfilePicture(_0x4c4853, {
              'url': _0x2c9d41
            })['catch'](_0x1d6c6f => fs.unlinkSync(_0x2c9d41));
            _0x4edf32`Bot's profile picture has been successfully updated!`;
          }
          break;
        case "broadcast":
          {
            if (!_0x112338) {
              throw NotOwner;
              return;
            }
            if (!_0x1d9323) {
              _0x4edf32("❌ No broadcast message provided!");
              return;
            }
            let _0x5239c7 = await _0x5e9ccc.groupFetchAllParticipating();
            let _0x47ee10 = Object.entries(_0x5239c7).slice(0x0).map(_0xdab8df => _0xdab8df[0x1]);
            let _0x5c9de4 = _0x47ee10.map(_0x95a39a => _0x95a39a.id);
            _0x4edf32(" Broadcasting in " + _0x5c9de4.length + " Group Chat, in " + _0x5c9de4.length * 1.5 + " seconds");
            for (let _0x1ee493 of _0x5c9de4) {
              let _0x26536e = "𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: " + _0x1d9323 + "\n\nAuthor: " + _0x12ae39;
              await _0x5e9ccc.sendMessage(_0x1ee493, {
                'image': {
                  'url': 'https://telegra.ph/file/416c3ae0cfe59be8db011.jpg'
                },
                'caption': '' + _0x26536e
              });
            }
            _0x4edf32("Broadcasted to " + _0x5c9de4.length + " Groups.");
          }
          break;
        case "gemini":
          {
            try {
              if (!_0x1d9323) {
                return _0x4be48e.reply("This is Raven, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: _0x22fa64
              } = await import('gemini-ai');
              const _0x524434 = new _0x22fa64("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              const _0x25b6b6 = _0x524434.createChat();
              const _0x3ec27f = await _0x25b6b6.ask(_0x1d9323);
              await _0x4be48e.reply(_0x3ec27f);
            } catch (_0x2e0fe2) {
              _0x4be48e.reply("I am unable to generate responses\n\n" + _0x2e0fe2);
            }
          }
          break;
        case "setvar":
          if (!_0x112338) {
            throw NotOwner;
          }
          if (!_0x1d9323.split('=')[0x1]) {
            return _0x4edf32("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const _0x131053 = new _0x19d270({
            'token': herokuapi
          });
          let _0xa4bd3b = "/apps/" + appname;
          await _0x131053.patch(_0xa4bd3b + "/config-vars", {
            'body': {
              [_0x1d9323.split('=')[0x0]]: _0x1d9323.split('=')[0x1]
            }
          });
          await _0x4edf32("✅ The variable " + _0x1d9323.split('=')[0x0] + " = " + _0x1d9323.split('=')[0x1] + " has been set Successfuly.\nWait 20s for changes to effect!");
          break;
        case "dlt":
        case "dil":
          {
            if (!_0x4be48e.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x60393c,
              fromMe: _0x28ad6c,
              id: _0x1cd14c,
              isBaileys: _0x283aab
            } = _0x4be48e.quoted;
            if (_0x283aab) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'delete': {
                'remoteJid': _0x4be48e.chat,
                'fromMe': true,
                'id': _0x4be48e.quoted.id,
                'participant': _0x4be48e.quoted.sender
              }
            });
          }
          break;
        case "block":
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x4be48e.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x365ef8 = _0x4be48e.mentionedJid[0x0] ? _0x4be48e.mentionedJid[0x0] : _0x4be48e.quoted ? _0x4be48e.quoted.sender : _0x1d9323.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (_0x365ef8 == "254114660061@s.whatsapp.net") {
              return _0x4be48e.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (_0x365ef8 == _0x5e9ccc.decodeJid(_0x5e9ccc.user.id)) {
              throw "𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡";
            }
            await _0x5e9ccc.updateBlockStatus(_0x365ef8, 'block');
            _0x4be48e.reply("𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!");
          }
          break;
        case "unblock":
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x4be48e.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x4015a5 = _0x4be48e.mentionedJid[0x0] ? _0x4be48e.mentionedJid[0x0] : _0x4be48e.quoted ? _0x4be48e.quoted.sender : _0x1d9323.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            await _0x5e9ccc.updateBlockStatus(_0x4015a5, "unblock");
            _0x4be48e.reply("𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!");
          }
          break;
        case 'join':
          {
            if (!_0x112338) {
              throw NotOwner;
            }
            if (!_0x1d9323) {
              return _0x4edf32("provide a valid group link");
            }
            let _0x32b7ab = _0x56b0d7[0x0].split("https://chat.whatsapp.com/")[0x1];
            await _0x5e9ccc.groupAcceptInvite(_0x32b7ab).then(_0x47e51a => _0x4edf32(jsonformat(_0x47e51a)))["catch"](_0xa1f29a => _0x4edf32("Link has problem."));
          }
          break;
        case "enc":
        case "encrypte":
          {
            const _0x164b87 = require('javascript-obfuscator');
            if (_0x4be48e.quoted && _0x4be48e.quoted.text) {
              const _0x333cae = _0x4be48e.quoted.text;
              const _0x4b2b13 = _0x164b87.obfuscate(_0x333cae, {
                'compact': true,
                'controlFlowFlattening': true,
                'controlFlowFlatteningThreshold': 0x1,
                'numbersToExpressions': true,
                'simplify': true,
                'stringArrayShuffle': true,
                'splitStrings': true,
                'stringArrayThreshold': 0x1
              });
              console.log("Successfully encrypted the code");
              _0x4be48e.reply(_0x4b2b13.getObfuscatedCode());
            } else {
              _0x4be48e.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;
        case 'gpt3':
          {
            if (!_0x1d9323) {
              return _0x4edf32("Hello there, How can i help you?");
            }
            let _0x75ef65 = await fetchJson('https://bk9.fun/ai/blackbox?q=' + _0x1d9323);
            if (!_0x75ef65.BK9) {
              return _0x4edf32("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x4edf32(_0x75ef65.BK9);
            }
          }
          break;
        case "gcprofile":
          {
            function _0x2f911e(_0x51728c) {
              const _0x80db34 = new Date(_0x51728c * 0x3e8);
              const _0xb9e528 = ["Sunday", "Monday", 'Tuesday', "Wednesday", "Thursday", 'Friday', "Saturday"];
              return {
                'date': _0x80db34.getDate(),
                'month': new Intl.DateTimeFormat("en-US", {
                  'month': "long"
                }).format(_0x80db34),
                'year': _0x80db34.getFullYear(),
                'day': _0xb9e528[_0x80db34.getUTCDay()],
                'time': _0x80db34.getUTCHours() + ':' + _0x80db34.getUTCMinutes() + ':' + _0x80db34.getUTCSeconds()
              };
            }
            if (!_0x4be48e.isGroup) {
              return _0x4be48e.reply("This command is meant for groups");
            }
            let _0x38f598 = await _0x5e9ccc.groupMetadata(_0x4be48e.chat);
            let _0x5c6727 = await _0x2f911e(_0x38f598.creation);
            try {
              pp = await _0x5e9ccc.profilePictureUrl(chat, "image");
            } catch {
              pp = "https://i.imgur.com/l6rYr1f.jpeg";
            }
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'image': {
                'url': pp
              },
              'caption': "_Name_ : *" + _0x38f598.subject + "*\n\n_ID_ : *" + _0x38f598.id + "*\n\n_Group owner_ : " + ('@' + _0x38f598.owner.split('@')[0x0]) + " || 'No Creator'\n\n_Group created_ : *" + _0x5c6727.day + ", " + _0x5c6727.date + " " + _0x5c6727.month + " " + _0x5c6727.year + ", " + _0x5c6727.time + "*\n\n_Participants_ : *" + _0x38f598.size + "*\n_Members_ : *" + _0x38f598.participants.filter(_0x2d1d39 => _0x2d1d39.admin == null).length + "*\n\n_Admins_ : *" + Number(_0x38f598.participants.length - _0x38f598.participants.filter(_0x1d94bb => _0x1d94bb.admin == null).length) + "*\n\n_Who can send message_ : *" + (_0x38f598.announce == true ? 'Admins' : "Everyone") + "*\n\n_Who can edit group info_ : *" + (_0x38f598.restrict == true ? "Admins" : "Everyone") + "*\n\n_Who can add participants_ : *" + (_0x38f598.memberAddMode == true ? 'Everyone' : 'Admins') + '*'
            }, {
              'quoted': _0x4be48e
            });
          }
          break;
        case 'tovideo':
        case "mp4":
        case "tovid":
          {
            if (!_0x465c5b) {
              return _0x4edf32("Reply to Sticker");
            }
            if (!/webp/.test(_0x57d5c5)) {
              return _0x4edf32("reply sticker with caption *" + (prefix + _0x312252) + '*');
            }
            let _0x2650f8 = await fetch("https://bk9.fun/converter/webpToMp4?url=" + _0x465c5b);
            let _0x2301a0 = await _0x5e9ccc.downloadAndSaveMediaMessage(_0x465c5b);
            let _0x47b563 = await _0x2650f8(_0x2301a0);
            await _0x5e9ccc.sendMessage(_0x4be48e.chat, {
              'video': {
                'url': _0x47b563.result,
                'caption': "Convert Webp To Video"
              }
            }, {
              'quoted': _0x4be48e
            });
            await fs.unlinkSync(_0x2301a0);
          }
          break;
        default:
          {
            if (_0x1f45f8 && _0xf2d9fe.toLowerCase() != undefined) {
              if (_0x4be48e.chat.endsWith("broadcast")) {
                return;
              }
              if (_0x4be48e.isBaileys) {
                return;
              }
              if (!_0xf2d9fe.toLowerCase()) {
                return;
              }
              if (_0x372e98 || _0x1f45f8 && !_0x4be48e.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x4f0c(0x469) ? chalk.green(_0x4f0c(0x3d2)) : chalk.keyword("turquoise")("command"), !_0x4f0c(0x469) ? chalk.green('' + prefix + _0x312252) : chalk.keyword("turquoise")('' + prefix + _0x312252), chalk.keyword('turquoise')('Raven'));
              } else if (_0x372e98 || _0x1f45f8 && _0x4be48e.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x4f0c(0x469) ? chalk.green(_0x4f0c(0x3d2)) : chalk.keyword("turquoise")("command"), !_0x4f0c(0x469) ? chalk.green('' + prefix + _0x312252) : chalk.keyword("turquoise")('' + prefix + _0x312252), !_0x4f0c(0x469) ? chalk.green(_0x4f0c(0x319)) : chalk.keyword("turquoise")("Raven"));
              }
            }
          }
      }
    }
  } catch (_0x224e6d) {
    _0x4be48e.reply(util.format(_0x224e6d));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
