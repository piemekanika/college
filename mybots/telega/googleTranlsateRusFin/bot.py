import requests
from googletrans import Translator

token = '538418140:AAHWwzrTfPyeB5MSCumvgKV2EJcfPuADA-Y'

class BotHandler:
    def __init__(self, token):
        self.token = token
        self.api_url = "https://api.telegram.org/bot{}/".format(token)
        print(self.api_url)

    def get_updates(self, offset=None, timeout=30):
        method = 'getUpdates'
        params = {'timeout': timeout, 'offset': offset}
        resp = requests.get(self.api_url + method, params)
        result_json = resp.json()['result']
        return result_json

    def send_message(self, chat_id, text):
        params = {'chat_id': chat_id, 'text': text}
        method = 'sendMessage'
        resp = requests.post(self.api_url + method, params)
        return resp

    def get_last_update(self):
        get_result = self.get_updates()

        try:
            if len(get_result) > 0:
                last_update = get_result[-1]
            else:
                last_update = get_result[len(get_result)-1]
        except:
            return 0

        return last_update

godlike_bot = BotHandler(token)
new_offset = None
translator = Translator()

while True:
    godlike_bot.get_updates(new_offset)
    last_update = godlike_bot.get_last_update()
    if last_update == 0: continue
    last_user_id = last_update['message']['chat']['id']
    last_user_text = last_update['message']['text']

    # godlike_bot.send_message(last_user_id, last_user_text)

    translated_text = translator.translate(last_user_text, dest='ru').text

    godlike_bot.send_message(last_user_id, translated_text)

    new_offset = last_update['update_id'] + 1