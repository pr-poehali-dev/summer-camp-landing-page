
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ActivitiesSection = () => {
  return (
    <section className="py-16 bg-white" id="activities">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Что ждет детей в лагере</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Разнообразная программа мероприятий, которая понравится каждому ребенку
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
              alt="Дети за компьютерами" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Цифровые навыки</h3>
              <p className="text-gray-600">
                Современные образовательные программы, где дети в игровой форме осваивают цифровые технологии, 
                учатся основам программирования и создают собственные проекты.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
              alt="Активные игры на улице" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Спортивные активности</h3>
              <p className="text-gray-600">
                Ежедневные активные игры на свежем воздухе, командные соревнования и 
                спортивные мероприятия для поддержания физической активности и здоровья.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
              alt="Настольные игры" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Настольные игры</h3>
              <p className="text-gray-600">
                Большая коллекция современных настольных игр для развития логики, стратегического 
                мышления и командной работы в увлекательном формате.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
              alt="Питание в кафе" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Здоровое питание</h3>
              <p className="text-gray-600">
                Полноценное трехразовое питание в уютном кафе с разнообразным меню, 
                разработанным профессиональными диетологами специально для детей.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8"
          >
            Оставить заявку <Icon name="Send" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
