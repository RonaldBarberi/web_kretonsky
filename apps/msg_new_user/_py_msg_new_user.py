import os
import requests
from dotenv import load_dotenv
from django.http import HttpResponse

load_dotenv()

class NewUserMessage:
    def __init__(self, request):
        self.request = request
        self.varToken = os.getenv('TOKEN')
        self.varChatId = os.getenv('CHATID')

    def send_message_telegram(self):
        if self.request.method == 'POST':
            message_text = self.request.POST.get('message')
            varMensaje = f"Tú página ha tenido una visita de {message_text}"

            url_telegram = f"https://api.telegram.org/bot{self.varToken}/sendMessage"
            parametros = {
                "chat_id": self.varChatId,
                "text": varMensaje,
                "parse_mode": "HTML"
            }

            try:
                response = requests.post(url_telegram, data=parametros)
                response.raise_for_status()
                return HttpResponse("Succes")
            except requests.exceptions.RequestException as e:
                print("Failed msj To Telegram:", e)
                return HttpResponse("Failed.", status=500)
        else:
            return HttpResponse("Método no permitido.", status=405)
