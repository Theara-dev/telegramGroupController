const Telegraf = require("telegraf");
require("dotenv").config();

// TOKEN from Telegram
const TOKEN = process.env.TOKEN;
const bot = new Telegraf(TOKEN);

//========= REQUIRE COMMANDS ==========\\
const authCommand = require("./src/auth/start"); //auth user join/leave
//const startCommand = require("./src/commands/start"); //start using bot
//const catCommand = require("./src/commands/cat"); //cat command API
//const chatGPTCommand = require("./src/commands/chatGPT"); //chatGPT command
//const dogCommand = require("./src/commands/dog"); //dog command
//const fortuneCommand = require("./src/commands/fortune"); //fortune command API

//Functions
authCommand(bot);
//startCommand(bot);
//catCommand(bot);
//chatGPTCommand(bot);
//dogCommand(bot);
//fortuneCommand(bot);

bot.launch();
