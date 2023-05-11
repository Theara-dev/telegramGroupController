module.exports = (bot) => {
  bot.on("new_chat_members", (ctx) => {
    const title = ctx.chat.title;
    const username = ctx.from.first_name;

    ctx.reply(`សួស្ដី ${username} សូមស្វាគមន៍មកកាន់ ${title}`);
  });

  bot.on("left_chat_member", (ctx) => {
    const username = ctx.from.first_name;

    ctx.reply(`ជំរាបលា ${username} ជួបគ្នាឱកាសក្រោយ.👋`);
  });
};
