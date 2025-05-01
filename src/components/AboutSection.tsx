
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">О нашем лагере</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1564429097439-e400382dc893?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Команда нашего лагеря" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Почему родители выбирают нас?</h3>
            <p className="text-gray-600 mb-6">
              Наш лагерь создан командой профессиональных педагогов с многолетним опытом работы с детьми. 
              Мы знаем, как сделать летние каникулы не только веселыми, но и полезными.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="Shield" className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Безопасность</h4>
                  <p className="text-gray-600">Полный контроль и безопасная среда для детей в течение всего дня</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="Users" className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Опытные педагоги</h4>
                  <p className="text-gray-600">Наша команда — это профессионалы с опытом работы более 10 лет</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="PieChart" className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Разнообразие активностей</h4>
                  <p className="text-gray-600">Сбалансированная программа для развития разных навыков и интересов</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Узнать подробнее <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
