import 'reflect-metadata';

import bodyParser from 'body-parser';
import express from 'express';

import { dataSource } from './data-source.js';
import { handleCommand } from './mattermost/bot.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dataSource.initialize().then(() => {
  app.post('/mattermost-webhook', async(req, res) => {
    const { text, channel_id, team_domain, token, user_name, command, team_id: id } = req.body;
    console.log(text);

    const commandBody = {
      text,
      channelId: channel_id,
      teamDomain: team_domain,
      token,
      command,
      id,
      userName: user_name
    };

    console.log('Received POST request:', JSON.stringify(req.body, null, 2));

    // Отправляем ответ сразу
    res.status(200).send('Команда принята в обработку');

    try {
      await handleCommand(commandBody);
      console.log('Команда успешно обработана');
    } catch (error) {
      console.error('Ошибка при обработке команды:', error);
    }
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${ PORT }`);
  });
}).catch(error => {
  console.error('Ошибка при инициализации dataSource:', error);
});
