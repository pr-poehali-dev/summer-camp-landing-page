
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section className="py-16 bg-white" id="contacts">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Остались вопросы? Мы с радостью на них ответим!
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-purple-600 text-white">
              <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Телефон</h4>
                    <p className="mt-1">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Электронная почта</h4>
                    <p className="mt-1">info@letniycamp.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="MapPin" className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Адрес</h4>
                    <p className="mt-1">г. Москва, ул. Примерная, 123</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Социальные сети</h4>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Icon name="Twitter" className="h-5 w-5" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Icon name="Youtube" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Напишите нам</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Ваш вопрос или комментарий"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Отправить <Icon name="Send" className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Городской летний лагерь «Лето». Все права защищены.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
