module.exports = (bot) => {
  bot.on("new_chat_members", (ctx) => {
    const title = ctx.chat.title;
    const username = ctx.from.first_name;
    let lastname = isLastName(ctx.from.last_name);

    ctx.reply(`សួស្ដី ${username + " " + lastname}សូមស្វាគមន៍មកកាន់ ${title}`);
    console.log(ctx.from);
    console.log(ctx.chat);
  });

  bot.on("left_chat_member", (ctx) => {
    const username = ctx.from.first_name;
    let lastname = isLastName(ctx.from.last_name);

    ctx.reply(`ជំរាបលា ${username + " " + lastname}.👋`);
  });

  function isLastName(lastName) {
    return lastName ? lastName : "";
  }
};
